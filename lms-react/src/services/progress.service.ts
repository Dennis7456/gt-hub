import { supabase } from './supabase.client';
import type { LessonProgress, TestResult, FlashcardProgress, OverallProgress } from '../types';

/**
 * Offline queue item for failed operations
 */
interface QueuedOperation {
  id: string;
  type: 'lesson' | 'test' | 'flashcard';
  operation: () => Promise<void>;
  timestamp: Date;
  retryCount: number;
}

/**
 * Errors that indicate a permanent failure (schema/config issues).
 * These should NOT be retried — retrying will never succeed.
 */
const PERMANENT_ERROR_PATTERNS = [
  'schema cache',       // table not found in schema cache
  'does not exist',     // relation/column does not exist
  '42P01',              // PostgreSQL: undefined_table
  '42703',              // PostgreSQL: undefined_column
  'permission denied',  // RLS / auth misconfiguration
];

function isPermanentError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return PERMANENT_ERROR_PATTERNS.some(pattern =>
    message.toLowerCase().includes(pattern.toLowerCase())
  );
}

/**
 * Offline queue for failed database operations
 */
class OfflineQueue {
  private queue: QueuedOperation[] = [];
  private isProcessing = false;
  private readonly MAX_RETRIES = 5;
  private readonly BASE_DELAY = 1000; // 1 second

  /**
   * Add an operation to the queue
   */
  add(type: 'lesson' | 'test' | 'flashcard', operation: () => Promise<void>): void {
    const queueItem: QueuedOperation = {
      id: `${type}-${Date.now()}-${Math.random()}`,
      type,
      operation,
      timestamp: new Date(),
      retryCount: 0,
    };
    this.queue.push(queueItem);
    console.log(`[OfflineQueue] Added ${type} operation to queue. Queue size: ${this.queue.length}`);
  }

  /**
   * Process the queue with exponential backoff retry logic
   */
  async process(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) {
      return;
    }

    this.isProcessing = true;
    console.log(`[OfflineQueue] Processing queue with ${this.queue.length} items`);

    while (this.queue.length > 0) {
      const item = this.queue[0];

      try {
        await item.operation();
        console.log(`[OfflineQueue] Successfully processed ${item.type} operation`);
        this.queue.shift(); // Remove from queue on success
      } catch (error) {
        item.retryCount++;
        console.error(`[OfflineQueue] Failed to process ${item.type} operation (attempt ${item.retryCount}):`, error);

        if (item.retryCount >= this.MAX_RETRIES) {
          console.error(`[OfflineQueue] Max retries reached for ${item.type} operation. Removing from queue.`);
          this.queue.shift(); // Remove after max retries
        } else {
          // Exponential backoff: 1s, 2s, 4s, 8s, 16s
          const delay = this.BASE_DELAY * Math.pow(2, item.retryCount - 1);
          console.log(`[OfflineQueue] Retrying ${item.type} operation in ${delay}ms`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    this.isProcessing = false;
    console.log('[OfflineQueue] Queue processing complete');
  }

  /**
   * Get the current queue size
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * Clear the queue
   */
  clear(): void {
    this.queue = [];
    console.log('[OfflineQueue] Queue cleared');
  }
}

// Global offline queue instance
const offlineQueue = new OfflineQueue();

/**
 * Progress Service
 * Handles all progress tracking operations with Supabase
 */
export const progressService = {
  /**
   * Mark a lesson as complete
   */
  async markLessonComplete(
    userId: string,
    moduleId: string,
    lessonId: string
  ): Promise<void> {
    const operation = async () => {
      const { error } = await supabase
        .from('lesson_progress')
        .upsert({
          user_id: userId,
          module_id: moduleId,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,module_id,lesson_id'
        });

      if (error) {
        throw new Error(`Failed to mark lesson complete: ${error.message}`);
      }
    };

    try {
      await operation();
    } catch (error) {
      console.error('Error marking lesson complete:', error);
      if (!isPermanentError(error)) {
        offlineQueue.add('lesson', operation);
      }
      throw error;
    }
  },

  /**
   * Save test result
   */
  async saveTestResult(
    userId: string,
    moduleId: string,
    testId: string,
    score: number,
    totalQuestions: number
  ): Promise<void> {
    const percentage = (score / totalQuestions) * 100;

    const operation = async () => {
      const { error } = await supabase
        .from('test_results')
        .insert({
          user_id: userId,
          module_id: moduleId,
          test_id: testId,
          score,
          total_questions: totalQuestions,
          percentage,
          completed_at: new Date().toISOString(),
        });

      if (error) {
        throw new Error(`Failed to save test result: ${error.message}`);
      }
    };

    try {
      await operation();
    } catch (error) {
      console.error('Error saving test result:', error);
      if (!isPermanentError(error)) {
        offlineQueue.add('test', operation);
      }
      throw error;
    }
  },

  /**
   * Record flashcard review
   */
  async recordFlashcardReview(
    userId: string,
    moduleId: string,
    flashcardSetId: string,
    cardsReviewed: number,
    totalCards: number
  ): Promise<void> {
    const operation = async () => {
      const { error } = await supabase
        .from('flashcard_progress')
        .upsert({
          user_id: userId,
          module_id: moduleId,
          flashcard_set_id: flashcardSetId,
          cards_reviewed: cardsReviewed,
          total_cards: totalCards,
          last_reviewed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,module_id,flashcard_set_id'
        });

      if (error) {
        throw new Error(`Failed to record flashcard review: ${error.message}`);
      }
    };

    try {
      await operation();
    } catch (error) {
      console.error('Error recording flashcard review:', error);
      if (!isPermanentError(error)) {
        offlineQueue.add('flashcard', operation);
      }
      throw error;
    }
  },

  /**
   * Get lesson progress for a module
   */
  async getLessonProgress(userId: string, moduleId: string): Promise<LessonProgress[]> {
    try {
      const { data, error } = await supabase
        .from('lesson_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('module_id', moduleId);

      if (error) {
        throw new Error(`Failed to get lesson progress: ${error.message}`);
      }

      return (data || []).map(item => ({
        ...item,
        completed_at: item.completed_at ? new Date(item.completed_at) : null,
      }));
    } catch (error) {
      console.error('Error getting lesson progress:', error);
      throw error;
    }
  },

  /**
   * Get test results for a module
   */
  async getTestResults(userId: string, moduleId: string): Promise<TestResult[]> {
    try {
      const { data, error } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', userId)
        .eq('module_id', moduleId)
        .order('completed_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to get test results: ${error.message}`);
      }

      return (data || []).map(item => ({
        ...item,
        completed_at: new Date(item.completed_at),
      }));
    } catch (error) {
      console.error('Error getting test results:', error);
      throw error;
    }
  },

  /**
   * Get flashcard progress for a module
   */
  async getFlashcardProgress(userId: string, moduleId: string): Promise<FlashcardProgress | null> {
    try {
      const { data, error } = await supabase
        .from('flashcard_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('module_id', moduleId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No data found
          return null;
        }
        throw new Error(`Failed to get flashcard progress: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return {
        ...data,
        last_reviewed_at: new Date(data.last_reviewed_at),
      };
    } catch (error) {
      console.error('Error getting flashcard progress:', error);
      throw error;
    }
  },

  /**
   * Get overall progress across all modules
   */
  async getOverallProgress(userId: string): Promise<OverallProgress> {
    try {
      // Fetch all progress data in parallel
      const [lessonProgressData, testResultsData, flashcardProgressData] = await Promise.all([
        supabase.from('lesson_progress').select('*').eq('user_id', userId),
        supabase.from('test_results').select('*').eq('user_id', userId),
        supabase.from('flashcard_progress').select('*').eq('user_id', userId),
      ]);

      if (lessonProgressData.error) {
        throw new Error(`Failed to get lesson progress: ${lessonProgressData.error.message}`);
      }
      if (testResultsData.error) {
        throw new Error(`Failed to get test results: ${testResultsData.error.message}`);
      }
      if (flashcardProgressData.error) {
        throw new Error(`Failed to get flashcard progress: ${flashcardProgressData.error.message}`);
      }

      // Organize data by module
      const modules: OverallProgress['modules'] = {};

      // Process lesson progress — only track completed count.
      // totalLessons is NOT derived from DB rows (that would only count visited
      // lessons, not the full module size). The UI uses module.lessonCount instead.
      const lessonProgress = lessonProgressData.data || [];
      lessonProgress.forEach(item => {
        if (!modules[item.module_id]) {
          modules[item.module_id] = {
            lessonsCompleted: 0,
            totalLessons: 0,
            testsCompleted: 0,
            totalTests: 0,
            highestScores: {},
            flashcardsReviewed: 0,
            totalFlashcards: 0,
          };
        }
        if (item.completed) {
          modules[item.module_id].lessonsCompleted++;
        }
        // Do NOT increment totalLessons here — it would only count visited lessons.
        // The dashboard uses module.lessonCount as the authoritative total.
      });

      // Process test results
      const testResults = testResultsData.data || [];
      const testsByModule: { [moduleId: string]: { [testId: string]: number[] } } = {};
      
      testResults.forEach(item => {
        if (!testsByModule[item.module_id]) {
          testsByModule[item.module_id] = {};
        }
        if (!testsByModule[item.module_id][item.test_id]) {
          testsByModule[item.module_id][item.test_id] = [];
        }
        testsByModule[item.module_id][item.test_id].push(item.score);
      });

      Object.entries(testsByModule).forEach(([moduleId, tests]) => {
        if (!modules[moduleId]) {
          modules[moduleId] = {
            lessonsCompleted: 0,
            totalLessons: 0,
            testsCompleted: 0,
            totalTests: 0,
            highestScores: {},
            flashcardsReviewed: 0,
            totalFlashcards: 0,
          };
        }
        modules[moduleId].testsCompleted = Object.keys(tests).length;
        // Do NOT set totalTests here — it would equal testsCompleted, making
        // the percentage always 100%. The UI uses module.testCount instead.
        modules[moduleId].highestScores = Object.entries(tests).reduce(
          (acc, [testId, scores]) => {
            acc[testId] = Math.max(...scores);
            return acc;
          },
          {} as { [testId: string]: number }
        );
      });

      // Process flashcard progress
      const flashcardProgress = flashcardProgressData.data || [];
      flashcardProgress.forEach(item => {
        if (!modules[item.module_id]) {
          modules[item.module_id] = {
            lessonsCompleted: 0,
            totalLessons: 0,
            testsCompleted: 0,
            totalTests: 0,
            highestScores: {},
            flashcardsReviewed: 0,
            totalFlashcards: 0,
          };
        }
        modules[item.module_id].flashcardsReviewed = item.cards_reviewed;
        modules[item.module_id].totalFlashcards = item.total_cards;
      });

      return {
        userId,
        modules,
      };
    } catch (error) {
      console.error('Error getting overall progress:', error);
      throw error;
    }
  },

  /**
   * Process the offline queue
   * Should be called when connectivity is restored
   */
  async processOfflineQueue(): Promise<void> {
    await offlineQueue.process();
  },

  /**
   * Get the offline queue size
   */
  getOfflineQueueSize(): number {
    return offlineQueue.size();
  },

  /**
   * Clear the offline queue
   */
  clearOfflineQueue(): void {
    offlineQueue.clear();
  },
};
