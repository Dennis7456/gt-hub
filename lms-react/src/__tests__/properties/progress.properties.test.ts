import { describe, it, expect, vi, beforeEach } from 'vitest';
import fc from 'fast-check';
import { progressService } from '../../services/progress.service';
import { supabase } from '../../services/supabase.client';

// Mock the Supabase client
vi.mock('../../services/supabase.client', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

// Module IDs for testing
const MODULE_IDS = [
  'clearance-one',
  'customs-in-international-context',
  'customs-valuation-i',
  'wto-customs-valuation',
  'history-of-taxation',
  'theory-of-taxation',
  'tax-and-customs-theory',
  'eaccma',
];

describe('Progress Tracking Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Property 18: Lesson completion records progress', async () => {
    // Feature: learning-management-system-react, Property 18: Lesson completion records progress
    // **Validates: Requirements 5.5**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        async (userId, moduleId, lessonId) => {
          // Mock successful upsert
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.markLessonComplete(userId, moduleId, lessonId);
          
          expect(supabase.from).toHaveBeenCalledWith('lesson_progress');
          const upsertCall = mockFrom().upsert;
          expect(upsertCall).toHaveBeenCalled();
          
          const upsertData = upsertCall.mock.calls[0][0];
          expect(upsertData.user_id).toBe(userId);
          expect(upsertData.module_id).toBe(moduleId);
          expect(upsertData.lesson_id).toBe(lessonId);
          expect(upsertData.completed).toBe(true);
          expect(upsertData.completed_at).toBeDefined();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 25: Test completion records progress', async () => {
    // Feature: learning-management-system-react, Property 25: Test completion records progress
    // **Validates: Requirements 6.7**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        async (userId, moduleId, testId, score, totalQuestions) => {
          // Ensure score doesn't exceed total questions
          const validScore = Math.min(score, totalQuestions);
          
          // Mock successful insert
          const mockFrom = vi.fn().mockReturnValue({
            insert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.saveTestResult(userId, moduleId, testId, validScore, totalQuestions);
          
          expect(supabase.from).toHaveBeenCalledWith('test_results');
          const insertCall = mockFrom().insert;
          expect(insertCall).toHaveBeenCalled();
          
          const insertData = insertCall.mock.calls[0][0];
          expect(insertData.user_id).toBe(userId);
          expect(insertData.module_id).toBe(moduleId);
          expect(insertData.test_id).toBe(testId);
          expect(insertData.score).toBe(validScore);
          expect(insertData.total_questions).toBe(totalQuestions);
          expect(insertData.completed_at).toBeDefined();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 32: Flashcard review records progress', async () => {
    // Feature: learning-management-system-react, Property 32: Flashcard review records progress
    // **Validates: Requirements 7.6**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 500 }),
        fc.integer({ min: 1, max: 500 }),
        async (userId, moduleId, flashcardSetId, cardsReviewed, totalCards) => {
          // Ensure cards reviewed doesn't exceed total cards
          const validCardsReviewed = Math.min(cardsReviewed, totalCards);
          
          // Mock successful upsert
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.recordFlashcardReview(
            userId,
            moduleId,
            flashcardSetId,
            validCardsReviewed,
            totalCards
          );
          
          expect(supabase.from).toHaveBeenCalledWith('flashcard_progress');
          const upsertCall = mockFrom().upsert;
          expect(upsertCall).toHaveBeenCalled();
          
          const upsertData = upsertCall.mock.calls[0][0];
          expect(upsertData.user_id).toBe(userId);
          expect(upsertData.module_id).toBe(moduleId);
          expect(upsertData.flashcard_set_id).toBe(flashcardSetId);
          expect(upsertData.cards_reviewed).toBe(validCardsReviewed);
          expect(upsertData.total_cards).toBe(totalCards);
          expect(upsertData.last_reviewed_at).toBeDefined();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 33: Lesson completion marks in database', async () => {
    // Feature: learning-management-system-react, Property 33: Lesson completion marks in database
    // **Validates: Requirements 8.1**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        async (userId, moduleId, lessonId) => {
          // Mock successful upsert
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.markLessonComplete(userId, moduleId, lessonId);
          
          const upsertCall = mockFrom().upsert;
          const upsertData = upsertCall.mock.calls[0][0];
          
          // Verify lesson is marked as complete with timestamp
          expect(upsertData.completed).toBe(true);
          expect(upsertData.completed_at).toBeDefined();
          expect(typeof upsertData.completed_at).toBe('string');
          
          // Verify timestamp is valid ISO string
          const timestamp = new Date(upsertData.completed_at);
          expect(timestamp.toString()).not.toBe('Invalid Date');
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 37: Test completion saves score', async () => {
    // Feature: learning-management-system-react, Property 37: Test completion saves score
    // **Validates: Requirements 9.1**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        async (userId, moduleId, testId, score, totalQuestions) => {
          const validScore = Math.min(score, totalQuestions);
          
          // Mock successful insert
          const mockFrom = vi.fn().mockReturnValue({
            insert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.saveTestResult(userId, moduleId, testId, validScore, totalQuestions);
          
          const insertCall = mockFrom().insert;
          const insertData = insertCall.mock.calls[0][0];
          
          // Verify score is saved
          expect(insertData.score).toBe(validScore);
          expect(insertData.total_questions).toBe(totalQuestions);
          
          // Verify percentage is calculated correctly
          const expectedPercentage = (validScore / totalQuestions) * 100;
          expect(insertData.percentage).toBe(expectedPercentage);
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 38: Test completion saves timestamp', async () => {
    // Feature: learning-management-system-react, Property 38: Test completion saves timestamp
    // **Validates: Requirements 9.2**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        async (userId, moduleId, testId, score, totalQuestions) => {
          const validScore = Math.min(score, totalQuestions);
          
          // Mock successful insert
          const mockFrom = vi.fn().mockReturnValue({
            insert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.saveTestResult(userId, moduleId, testId, validScore, totalQuestions);
          
          const insertCall = mockFrom().insert;
          const insertData = insertCall.mock.calls[0][0];
          
          // Verify timestamp is saved
          expect(insertData.completed_at).toBeDefined();
          expect(typeof insertData.completed_at).toBe('string');
          
          // Verify timestamp is valid ISO string
          const timestamp = new Date(insertData.completed_at);
          expect(timestamp.toString()).not.toBe('Invalid Date');
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 43: Flashcard review records in database', async () => {
    // Feature: learning-management-system-react, Property 43: Flashcard review records in database
    // **Validates: Requirements 10.1**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 1, max: 500 }),
        fc.integer({ min: 1, max: 500 }),
        async (userId, moduleId, flashcardSetId, cardsReviewed, totalCards) => {
          const validCardsReviewed = Math.min(cardsReviewed, totalCards);
          
          // Mock successful upsert
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({
              data: null,
              error: null,
            }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          await progressService.recordFlashcardReview(
            userId,
            moduleId,
            flashcardSetId,
            validCardsReviewed,
            totalCards
          );
          
          expect(supabase.from).toHaveBeenCalledWith('flashcard_progress');
          const upsertCall = mockFrom().upsert;
          const upsertData = upsertCall.mock.calls[0][0];
          
          // Verify flashcard review is recorded in database
          expect(upsertData.user_id).toBe(userId);
          expect(upsertData.module_id).toBe(moduleId);
          expect(upsertData.flashcard_set_id).toBe(flashcardSetId);
          expect(upsertData.cards_reviewed).toBe(validCardsReviewed);
          expect(upsertData.total_cards).toBe(totalCards);
          expect(upsertData.last_reviewed_at).toBeDefined();
          
          // Verify timestamp is valid
          const timestamp = new Date(upsertData.last_reviewed_at);
          expect(timestamp.toString()).not.toBe('Invalid Date');
        }
      ),
      { numRuns: 5 }
    );
  });
});
