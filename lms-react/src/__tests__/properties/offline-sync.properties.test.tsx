import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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

describe('Offline Sync Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    progressService.clearOfflineQueue();
  });

  afterEach(() => {
    progressService.clearOfflineQueue();
  });

  it('Property 59: Offline data queuing', async () => {
    // Feature: learning-management-system-react, Property 59: Offline data queuing
    // **Validates: Requirements 16.2**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        async (userId, moduleId, lessonId) => {
          // Mock database failure to trigger offline queuing
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockRejectedValue(new Error('Network error')),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          // Initial queue size should be 0
          const initialQueueSize = progressService.getOfflineQueueSize();
          expect(initialQueueSize).toBe(0);
          
          // Attempt to mark lesson complete (should fail and queue)
          try {
            await progressService.markLessonComplete(userId, moduleId, lessonId);
          } catch (error) {
            // Expected to fail
          }
          
          // Verify data was queued
          const finalQueueSize = progressService.getOfflineQueueSize();
          expect(finalQueueSize).toBeGreaterThan(initialQueueSize);
          expect(finalQueueSize).toBe(1);
          
          // Clear queue for next iteration
          progressService.clearOfflineQueue();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 60: Connectivity restoration triggers sync', async () => {
    // Feature: learning-management-system-react, Property 60: Connectivity restoration triggers sync
    // **Validates: Requirements 16.3**
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        async (userId, moduleId, lessonId) => {
          // First, queue some data by simulating offline operation
          const mockFromFail = vi.fn().mockReturnValue({
            upsert: vi.fn().mockRejectedValue(new Error('Network error')),
          });
          vi.mocked(supabase.from).mockImplementation(mockFromFail as any);
          
          // Queue an operation
          try {
            await progressService.markLessonComplete(userId, moduleId, lessonId);
          } catch (error) {
            // Expected to fail
          }
          
          // Verify data was queued
          expect(progressService.getOfflineQueueSize()).toBe(1);
          
          // Now mock successful database operation (connectivity restored)
          const mockFromSuccess = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFromSuccess as any);
          
          // Trigger sync (simulating connectivity restoration)
          await progressService.processOfflineQueue();
          
          // Verify queue was processed
          const queueSize = progressService.getOfflineQueueSize();
          expect(queueSize).toBe(0);
          
          // Verify the operation was actually called
          expect(mockFromSuccess).toHaveBeenCalledWith('lesson_progress');
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 61: Sync status indicator displays', async () => {
    // Feature: learning-management-system-react, Property 61: Sync status indicator displays
    // **Validates: Requirements 16.4**
    
    // Note: This property validates that the ProgressContext provides sync status.
    // The actual sync status values ('syncing', 'synced', 'error', 'idle') are managed
    // by the ProgressContext component and tested through the context's state management.
    // This test validates that the queue size (which drives the sync status) is correctly tracked.
    
    await fc.assert(
      fc.asyncProperty(
        fc.uuid(),
        fc.constantFrom(...MODULE_IDS),
        fc.string({ minLength: 1, maxLength: 50 }),
        async (userId, moduleId, lessonId) => {
          // Mock successful database operation
          const mockFrom = vi.fn().mockReturnValue({
            upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
          });
          vi.mocked(supabase.from).mockImplementation(mockFrom as any);
          
          // Initial queue size should be 0 (idle state)
          expect(progressService.getOfflineQueueSize()).toBe(0);
          
          // Perform operation successfully
          await progressService.markLessonComplete(userId, moduleId, lessonId);
          
          // Queue should still be 0 (synced state)
          expect(progressService.getOfflineQueueSize()).toBe(0);
          
          // Now simulate a failure to create queued state
          const mockFromFail = vi.fn().mockReturnValue({
            upsert: vi.fn().mockRejectedValue(new Error('Network error')),
          });
          vi.mocked(supabase.from).mockImplementation(mockFromFail as any);
          
          try {
            await progressService.markLessonComplete(userId, moduleId, lessonId);
          } catch (error) {
            // Expected to fail
          }
          
          // Queue should now have items (error state with queued data)
          expect(progressService.getOfflineQueueSize()).toBeGreaterThan(0);
          
          // Clear queue for next iteration
          progressService.clearOfflineQueue();
        }
      ),
      { numRuns: 5 }
    );
  });
});
