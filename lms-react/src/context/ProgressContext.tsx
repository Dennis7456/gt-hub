import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { LessonProgress, TestResult, FlashcardProgress, OverallProgress } from '../types';
import { progressService } from '../services/progress.service';
import { useAuth } from './AuthContext';

type SyncStatus = 'syncing' | 'synced' | 'error' | 'idle';

interface ProgressContextType {
  overallProgress: OverallProgress | null;
  syncStatus: SyncStatus;
  loading: boolean;
  error: string | null;
  queueSize: number;
  markLessonComplete: (moduleId: string, lessonId: string) => Promise<void>;
  saveTestResult: (moduleId: string, testId: string, score: number, totalQuestions: number) => Promise<void>;
  recordFlashcardReview: (moduleId: string, flashcardSetId: string, cardsReviewed: number, totalCards: number) => Promise<void>;
  getLessonProgress: (moduleId: string) => Promise<LessonProgress[]>;
  getTestResults: (moduleId: string) => Promise<TestResult[]>;
  getFlashcardProgress: (moduleId: string) => Promise<FlashcardProgress | null>;
  refreshProgress: () => Promise<void>;
  syncOfflineData: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export { ProgressContext };

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const { user } = useAuth();
  const [overallProgress, setOverallProgress] = useState<OverallProgress | null>(null);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [queueSize, setQueueSize] = useState(0);
  // Track whether the DB is permanently unavailable (schema not set up, etc.)
  // so we don't hammer it with retries on every render.
  const [dbUnavailable, setDbUnavailable] = useState(false);

  // Load user progress when user is authenticated
  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setOverallProgress(null);
      setLoading(false);
      setDbUnavailable(false);
      // Clear the offline queue when the user logs out — stale operations from
      // a previous session are no longer valid.
      progressService.clearOfflineQueue();
    }
  }, [user]);

  // Clear the offline queue on mount if it's absurdly large (indicates a bug
  // that caused runaway queueing). 1000+ is abnormal — normal usage would
  // queue at most a few dozen operations during a brief offline period.
  useEffect(() => {
    const size = progressService.getOfflineQueueSize();
    if (size > 1000) {
      console.warn(`[ProgressContext] Clearing ${size} stale operations from offline queue (likely from a previous bug)`);
      progressService.clearOfflineQueue();
      setQueueSize(0);
    }
  }, []);

  // Monitor online/offline status and sync when connectivity is restored
  useEffect(() => {
    const handleOnline = async () => {
      console.log('[ProgressContext] Connectivity restored, syncing offline data...');
      await syncOfflineData();
    };

    const handleOffline = () => {
      console.log('[ProgressContext] Connectivity lost');
      setSyncStatus('error');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Periodically check queue size
  useEffect(() => {
    const interval = setInterval(() => {
      const size = progressService.getOfflineQueueSize();
      setQueueSize(size);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadProgress = async () => {
    if (!user || dbUnavailable) return;
    // Don't attempt to load from DB when offline — it will just fail
    if (!navigator.onLine) return;

    setLoading(true);
    setError(null);

    try {
      const progress = await progressService.getOverallProgress(user.id);
      setOverallProgress(progress);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load progress';
      setError(errorMessage);
      console.error('[ProgressContext] Error loading progress:', err);

      // If the DB schema isn't set up, stop retrying — it will never succeed
      // until the tables are created.
      const isPermanent = errorMessage.includes('schema cache') ||
        errorMessage.includes('does not exist') ||
        errorMessage.includes('42P01');
      if (isPermanent) {
        setDbUnavailable(true);
        console.warn('[ProgressContext] Database tables not found. Progress tracking disabled until schema is applied.');
      }
    } finally {
      setLoading(false);
    }
  };

  const markLessonComplete = async (moduleId: string, lessonId: string) => {
    if (!user) {
      throw new Error('User must be authenticated to mark lesson complete');
    }
    if (dbUnavailable) return; // DB schema not set up yet — skip silently

    setSyncStatus('syncing');
    setError(null);

    try {
      await progressService.markLessonComplete(user.id, moduleId, lessonId);
      setSyncStatus('synced');
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to mark lesson complete';
      // Only surface the error in state if it's not a plain network failure —
      // network failures are expected offline and are already queued.
      const isNetworkError = err instanceof TypeError && err.message === 'Failed to fetch';
      if (!isNetworkError) {
        setError(errorMessage);
        console.error('[ProgressContext] Error marking lesson complete:', err);
      }
      setSyncStatus('error');
      
      // Update queue size
      setQueueSize(progressService.getOfflineQueueSize());
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 3000);
    }
  };

  const saveTestResult = async (
    moduleId: string,
    testId: string,
    score: number,
    totalQuestions: number
  ) => {
    if (!user) {
      throw new Error('User must be authenticated to save test result');
    }
    if (dbUnavailable) return;

    setSyncStatus('syncing');
    setError(null);

    try {
      await progressService.saveTestResult(user.id, moduleId, testId, score, totalQuestions);
      setSyncStatus('synced');
      
      // Only refresh progress if online
      if (navigator.onLine) {
        await loadProgress();
      }
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save test result';
      const isNetworkError = err instanceof TypeError && err.message === 'Failed to fetch';
      if (!isNetworkError) {
        setError(errorMessage);
        console.error('[ProgressContext] Error saving test result:', err);
      }
      setSyncStatus('error');
      
      // Update queue size
      setQueueSize(progressService.getOfflineQueueSize());
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 3000);
    }
  };

  const recordFlashcardReview = async (
    moduleId: string,
    flashcardSetId: string,
    cardsReviewed: number,
    totalCards: number
  ) => {
    if (!user) {
      throw new Error('User must be authenticated to record flashcard review');
    }
    if (dbUnavailable) return;

    setSyncStatus('syncing');
    setError(null);

    try {
      await progressService.recordFlashcardReview(
        user.id,
        moduleId,
        flashcardSetId,
        cardsReviewed,
        totalCards
      );
      setSyncStatus('synced');
      
      // Only refresh progress if online
      if (navigator.onLine) {
        await loadProgress();
      }
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (err) {
      const isNetworkError = err instanceof TypeError && err.message === 'Failed to fetch';
      if (!isNetworkError) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to record flashcard review';
        setError(errorMessage);
        console.error('[ProgressContext] Error recording flashcard review:', err);
      }
      setSyncStatus('error');
      
      // Update queue size
      setQueueSize(progressService.getOfflineQueueSize());
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 3000);
      // Don't re-throw — callers don't need to handle this; it's already queued
    }
  };

  const getLessonProgress = async (moduleId: string): Promise<LessonProgress[]> => {
    if (!user) {
      throw new Error('User must be authenticated to get lesson progress');
    }

    try {
      return await progressService.getLessonProgress(user.id, moduleId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get lesson progress';
      setError(errorMessage);
      console.error('[ProgressContext] Error getting lesson progress:', err);
      throw err;
    }
  };

  const getTestResults = async (moduleId: string): Promise<TestResult[]> => {
    if (!user) {
      throw new Error('User must be authenticated to get test results');
    }

    try {
      return await progressService.getTestResults(user.id, moduleId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get test results';
      setError(errorMessage);
      console.error('[ProgressContext] Error getting test results:', err);
      throw err;
    }
  };

  const getFlashcardProgress = async (moduleId: string): Promise<FlashcardProgress | null> => {
    if (!user) {
      throw new Error('User must be authenticated to get flashcard progress');
    }

    try {
      return await progressService.getFlashcardProgress(user.id, moduleId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get flashcard progress';
      setError(errorMessage);
      console.error('[ProgressContext] Error getting flashcard progress:', err);
      throw err;
    }
  };

  const refreshProgress = async () => {
    await loadProgress();
  };

  const syncOfflineData = async () => {
    setSyncStatus('syncing');
    setError(null);

    try {
      await progressService.processOfflineQueue();
      setSyncStatus('synced');
      
      // Refresh progress after successful sync
      await loadProgress();
      
      // Update queue size
      setQueueSize(progressService.getOfflineQueueSize());
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sync offline data';
      setError(errorMessage);
      setSyncStatus('error');
      console.error('[ProgressContext] Error syncing offline data:', err);
      
      // Reset to idle after a short delay
      setTimeout(() => setSyncStatus('idle'), 3000);
    }
  };

  const value: ProgressContextType = {
    overallProgress,
    syncStatus,
    loading,
    error,
    queueSize,
    markLessonComplete,
    saveTestResult,
    recordFlashcardReview,
    getLessonProgress,
    getTestResults,
    getFlashcardProgress,
    refreshProgress,
    syncOfflineData,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextType {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
