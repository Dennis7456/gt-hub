/**
 * ModuleProgress Component
 * Comprehensive progress view for a module.
 * Memoized with React.memo — this component is rendered inside ModuleOverview
 * which re-renders on every progress context update.
 * Validates: Requirements 8.2, 8.3, 8.4, 9.4, 9.5, 10.3, 10.4, 15.1
 */

import { memo, useMemo } from 'react';
import { ProgressBar } from './ProgressBar';

interface ModuleProgressProps {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  testsCompleted: number;
  totalTests: number;
  highestScores?: { [testId: string]: number };
  flashcardsReviewed: number;
  totalFlashcards: number;
}

export const ModuleProgress = memo(function ModuleProgress({
  lessonsCompleted,
  totalLessons,
  testsCompleted,
  totalTests,
  highestScores,
  flashcardsReviewed,
  totalFlashcards,
}: ModuleProgressProps) {
  // Memoize the sorted score entries so the list doesn't re-sort on every render
  const scoreEntries = useMemo(
    () => (highestScores ? Object.entries(highestScores) : []),
    [highestScores]
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Learning Progress
        </h3>
        <div className="space-y-4">
          <ProgressBar
            current={lessonsCompleted}
            total={totalLessons}
            label="Lessons Completed"
          />
          <ProgressBar
            current={testsCompleted}
            total={totalTests}
            label="Tests Completed"
          />
          <ProgressBar
            current={flashcardsReviewed}
            total={totalFlashcards}
            label="Flashcards Reviewed"
          />
        </div>
      </div>

      {scoreEntries.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Test Scores
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="space-y-2">
              {scoreEntries.map(([testId, score]) => (
                <div key={testId} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {testId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {score}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
