/**
 * ProgressStats Component
 * Displays summary statistics for module progress.
 * Memoized with React.memo to avoid re-renders when parent context updates
 * but these specific props haven't changed.
 * Validates: Requirements 9.4, 9.5, 10.3, 10.4, 15.1
 */

import { memo, useMemo } from 'react';

interface ProgressStatsProps {
  lessonsCompleted: number;
  totalLessons: number;
  testsCompleted: number;
  totalTests: number;
  highestScores?: { [testId: string]: number };
  mostRecentScore?: number;
  flashcardsReviewed: number;
  totalFlashcards: number;
}

export const ProgressStats = memo(function ProgressStats({
  lessonsCompleted,
  totalLessons,
  testsCompleted,
  totalTests,
  highestScores,
  mostRecentScore,
  flashcardsReviewed,
  totalFlashcards,
}: ProgressStatsProps) {
  const lessonPercentage = useMemo(
    () => (totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0),
    [lessonsCompleted, totalLessons]
  );

  const flashcardPercentage = useMemo(
    () => (totalFlashcards > 0 ? Math.round((flashcardsReviewed / totalFlashcards) * 100) : 0),
    [flashcardsReviewed, totalFlashcards]
  );

  // Calculate highest score across all tests
  const highestScore = useMemo(
    () => (highestScores ? Math.max(...Object.values(highestScores), 0) : 0),
    [highestScores]
  );

  const testPercentage = useMemo(
    () => (totalTests > 0 ? Math.round((testsCompleted / totalTests) * 100) : 0),
    [testsCompleted, totalTests]
  );

  const overallPercentage = useMemo(() => {
    const parts = [lessonPercentage, flashcardPercentage];
    if (totalTests > 0) parts.push(testPercentage);
    return Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);
  }, [lessonPercentage, testPercentage, flashcardPercentage, totalTests]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Lessons */}
      <div className="gt-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Lessons</h3>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
            <svg className="w-4 h-4" style={{ color: '#006633' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {lessonsCompleted} / {totalLessons}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {lessonPercentage}% complete
        </div>
        <div className="mt-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
          <div className="h-1.5 rounded-full transition-all" style={{ width: `${lessonPercentage}%`, backgroundColor: '#006633' }} />
        </div>
      </div>

      {/* Tests */}
      <div className="gt-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Tests</h3>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fef9c3' }}>
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {testsCompleted} / {totalTests}
        </div>
        {highestScore > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Best: <span className="font-semibold text-gray-700 dark:text-gray-200">{highestScore}%</span>
          </div>
        )}
        {mostRecentScore !== undefined && mostRecentScore > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Recent: <span className="font-semibold text-gray-700 dark:text-gray-200">{mostRecentScore}%</span>
          </div>
        )}
      </div>

      {/* Flashcards */}
      <div className="gt-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Flashcards</h3>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-900/30">
            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {flashcardsReviewed} / {totalFlashcards}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {flashcardPercentage}% reviewed
        </div>
        <div className="mt-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
          <div className="h-1.5 rounded-full bg-purple-500 transition-all" style={{ width: `${flashcardPercentage}%` }} />
        </div>
      </div>

      {/* Overall Progress */}
      <div className="gt-card p-4" style={{ background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)' }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-green-100">Overall</h3>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255,184,0,0.2)' }}>
            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="text-2xl font-bold text-white">
          {overallPercentage}%
        </div>
        <div className="text-sm text-green-200 mt-1">
          Average progress
        </div>
        <div className="mt-3 w-full rounded-full h-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
          <div className="h-1.5 rounded-full transition-all" style={{ width: `${overallPercentage}%`, backgroundColor: '#FFB800' }} />
        </div>
      </div>
    </div>
  );
});
