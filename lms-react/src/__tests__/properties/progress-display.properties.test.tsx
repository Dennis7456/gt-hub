/**
 * Property-Based Tests for Progress Display
 * Tests Properties 34, 35, 36, 40, 41, 45, 46
 */

import { describe, it, expect } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import fc from 'fast-check';
import { ProgressBar } from '../../components/progress/ProgressBar';
import { ProgressStats } from '../../components/progress/ProgressStats';
import { ModuleProgress } from '../../components/progress/ModuleProgress';

describe('Progress Display Properties', () => {
  /**
   * Property 34: Lesson completion percentage calculation
   * Feature: learning-management-system-react, Property 34: Lesson completion percentage calculation
   * Validates: Requirements 8.2
   */
  it('Property 34: Lesson completion percentage calculation', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        (completed, total) => {
          // Ensure completed doesn't exceed total
          const actualCompleted = Math.min(completed, total);
          const expectedPercentage = Math.round((actualCompleted / total) * 100);

          const { container } = render(
            <ProgressBar
              current={actualCompleted}
              total={total}
              label="Lessons Completed"
            />
          );

          // Verify percentage is displayed correctly
          const percentageText = container.querySelector(`[aria-valuenow="${expectedPercentage}"]`);
          expect(percentageText).not.toBeNull();

          // Verify the progress bar has correct aria attributes
          const progressBar = container.querySelector('[role="progressbar"]');
          expect(progressBar).not.toBeNull();
          expect(progressBar!.getAttribute('aria-valuenow')).toBe(expectedPercentage.toString());
          expect(progressBar!.getAttribute('aria-valuemin')).toBe('0');
          expect(progressBar!.getAttribute('aria-valuemax')).toBe('100');

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 35: Completed lessons show visual indicator
   * Feature: learning-management-system-react, Property 35: Completed lessons show visual indicator
   * Validates: Requirements 8.3
   */
  it('Property 35: Completed lessons show visual indicator', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        (completed, total) => {
          const actualCompleted = Math.min(completed, total);

          const { container } = render(
            <ProgressBar
              current={actualCompleted}
              total={total}
              label="Lessons"
            />
          );

          // Verify visual indicator exists (colored progress bar)
          const progressBar = container.querySelector('[role="progressbar"]');
          expect(progressBar).toBeInTheDocument();

          // Verify the progress bar has a color class based on completion level
          const hasColorClass = 
            progressBar?.classList.contains('bg-green-500') ||
            progressBar?.classList.contains('bg-blue-500') ||
            progressBar?.classList.contains('bg-yellow-500') ||
            progressBar?.classList.contains('bg-orange-500') ||
            progressBar?.classList.contains('bg-red-500');
          
          expect(hasColorClass).toBe(true);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 36: Module progress displays
   * Feature: learning-management-system-react, Property 36: Module progress displays
   * Validates: Requirements 8.4
   */
  it('Property 36: Module progress displays', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 20 }),
        fc.integer({ min: 1, max: 20 }),
        fc.integer({ min: 0, max: 15 }),
        fc.integer({ min: 1, max: 15 }),
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        (moduleId, lessonsCompleted, totalLessons, testsCompleted, totalTests, flashcardsReviewed, totalFlashcards) => {
          const actualLessonsCompleted = Math.min(lessonsCompleted, totalLessons);
          const actualTestsCompleted = Math.min(testsCompleted, totalTests);
          const actualFlashcardsReviewed = Math.min(flashcardsReviewed, totalFlashcards);

          const { container } = render(
            <ModuleProgress
              moduleId={moduleId}
              lessonsCompleted={actualLessonsCompleted}
              totalLessons={totalLessons}
              testsCompleted={actualTestsCompleted}
              totalTests={totalTests}
              highestScores={{}}
              flashcardsReviewed={actualFlashcardsReviewed}
              totalFlashcards={totalFlashcards}
            />
          );

          // Verify module progress section is displayed
          const progressTitle = container.querySelector('h3');
          expect(progressTitle).not.toBeNull();
          expect(progressTitle!.textContent).toContain('Learning Progress');

          // Verify all three progress bars are present (by aria-label)
          const progressBars = container.querySelectorAll('[role="progressbar"]');
          expect(progressBars.length).toBeGreaterThanOrEqual(3);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 40: Highest test score displays
   * Feature: learning-management-system-react, Property 40: Highest test score displays
   * Validates: Requirements 9.4
   */
  it('Property 40: Highest test score displays', () => {
    fc.assert(
      fc.property(
        fc.dictionary(
          fc.string({ minLength: 1, maxLength: 20 }),
          fc.integer({ min: 1, max: 100 }),
          { minKeys: 1, maxKeys: 10 }
        ),
        (highestScores) => {
          const maxScore = Math.max(...Object.values(highestScores));

          const { container } = render(
            <ProgressStats
              lessonsCompleted={5}
              totalLessons={10}
              testsCompleted={Object.keys(highestScores).length}
              totalTests={10}
              highestScores={highestScores}
              flashcardsReviewed={20}
              totalFlashcards={50}
            />
          );

          // Verify highest score is displayed
          const allTextContent = container.textContent || '';
          expect(allTextContent).toContain(`Highest: ${maxScore}%`);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 41: Most recent test score displays
   * Feature: learning-management-system-react, Property 41: Most recent test score displays
   * Validates: Requirements 9.5
   */
  it('Property 41: Most recent test score displays', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        (mostRecentScore) => {
          const { container } = render(
            <ProgressStats
              lessonsCompleted={5}
              totalLessons={10}
              testsCompleted={3}
              totalTests={10}
              highestScores={{ 'test-1': 85 }}
              mostRecentScore={mostRecentScore}
              flashcardsReviewed={20}
              totalFlashcards={50}
            />
          );

          // Verify most recent score is displayed
          const allTextContent = container.textContent || '';
          expect(allTextContent).toContain(`Recent: ${mostRecentScore}%`);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 45: Total flashcards reviewed displays
   * Feature: learning-management-system-react, Property 45: Total flashcards reviewed displays
   * Validates: Requirements 10.3
   */
  it('Property 45: Total flashcards reviewed displays', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        (flashcardsReviewed, totalFlashcards) => {
          const actualReviewed = Math.min(flashcardsReviewed, totalFlashcards);

          const { container } = render(
            <ProgressStats
              lessonsCompleted={5}
              totalLessons={10}
              testsCompleted={3}
              totalTests={10}
              flashcardsReviewed={actualReviewed}
              totalFlashcards={totalFlashcards}
            />
          );

          // Verify flashcards reviewed count is displayed
          const allTextContent = container.textContent || '';
          expect(allTextContent).toContain(`${actualReviewed} / ${totalFlashcards}`);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 46: Flashcard review percentage displays
   * Feature: learning-management-system-react, Property 46: Flashcard review percentage displays
   * Validates: Requirements 10.4
   */
  it('Property 46: Flashcard review percentage displays', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        fc.integer({ min: 1, max: 100 }),
        (flashcardsReviewed, totalFlashcards) => {
          const actualReviewed = Math.min(flashcardsReviewed, totalFlashcards);
          const expectedPercentage = Math.round((actualReviewed / totalFlashcards) * 100);

          const { container } = render(
            <ProgressStats
              lessonsCompleted={5}
              totalLessons={10}
              testsCompleted={3}
              totalTests={10}
              flashcardsReviewed={actualReviewed}
              totalFlashcards={totalFlashcards}
            />
          );

          // Verify flashcard percentage is displayed
          const allTextContent = container.textContent || '';
          expect(allTextContent).toContain(`${expectedPercentage}% reviewed`);

          cleanup();
        }
      ),
      { numRuns: 5 }
    );
  });
});
