/**
 * ModuleOverview page - Module detail page
 * Displays module details, content counts, progress, and navigation links
 * Validates: Requirements 19.1, 19.2, 19.3, 19.4, 19.5
 */

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { useProgress } from '../context/ProgressContext';
import type { Module, Lesson, Test } from '../types';
import * as ContentService from '../services/content.service';
import { ModuleProgress } from '../components/progress/ModuleProgress';
import { ProgressStats } from '../components/progress/ProgressStats';

export function ModuleOverview() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { modules } = useContent();
  const { overallProgress } = useProgress();

  const [module, setModule] = useState<Module | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [tests, setTests] = useState<Test[]>([]);
  const [flashcardCount, setFlashcardCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!moduleId) {
      navigate('/');
      return;
    }

    loadModuleData();
  }, [moduleId]);

  const loadModuleData = async () => {
    if (!moduleId) return;

    setLoading(true);
    setError(null);

    try {
      // Load module metadata - try context first for performance, fall back to service
      let foundModule = modules.find(m => m.id === moduleId);
      if (!foundModule) {
        try {
          foundModule = await ContentService.getModule(moduleId);
        } catch {
          throw new Error('Module not found');
        }
      }
      if (!foundModule) {
        throw new Error('Module not found');
      }
      setModule(foundModule);

      // Load lessons, tests, and flashcards
      const [loadedLessons, loadedTests, flashcardSet] = await Promise.all([
        ContentService.getLessons(moduleId),
        ContentService.getTests(moduleId),
        ContentService.getFlashcards(moduleId)
      ]);

      setLessons(loadedLessons);
      setTests(loadedTests);
      setFlashcardCount(flashcardSet.cards.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load module';
      setError(errorMessage);
      console.error('Error loading module:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main id="main-content" aria-label="Module Overview" aria-live="polite" aria-busy="true" className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center" role="status" aria-label="Loading module">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" aria-hidden="true"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading module...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !module) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main id="main-content" aria-label="Module Overview" className="container mx-auto px-4 py-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4" role="alert" aria-live="assertive">
            <p className="text-red-800 dark:text-red-200">
              {error || 'Module not found'}
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-red-600 dark:text-red-400 hover:underline focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            >
              Return to dashboard
            </button>
          </div>
        </main>
      </div>
    );
  }

  const moduleProgress = overallProgress?.modules[moduleId!];
  const lessonsCompleted = moduleProgress?.lessonsCompleted ?? 0;
  const testsCompleted = moduleProgress?.testsCompleted ?? 0;
  const highestScores = moduleProgress?.highestScores || {};
  const flashcardsReviewed = moduleProgress?.flashcardsReviewed ?? 0;

  // Use the loaded content counts as the authoritative totals — the DB only
  // stores rows for visited/attempted items, so deriving totals from it would
  // make percentages wrong (e.g. 3 visited out of 12 would show 100%).

  // The most recent test score — highestScores keys are ordered by first
  // attempt date (test_results is fetched DESC by completed_at, so the first
  // key encountered is the most recently attempted test).
  const mostRecentScore = Object.keys(highestScores).length > 0
    ? highestScores[Object.keys(highestScores)[0]]
    : undefined;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
      <main id="main-content" aria-label={`${module.displayName} Module Overview`} className="container mx-auto px-4 py-6 sm:py-8">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 mb-6 focus-visible:ring-2 focus-visible:ring-green-500 rounded min-h-[44px] transition-colors font-medium"
          aria-label="Back to Dashboard"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>

        {/* Module header */}
        <header className="gt-card p-5 sm:p-7 mb-6 sm:mb-8">
          <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ backgroundColor: module.color }}
              aria-hidden="true"
            >
              <span className="text-2xl sm:text-3xl">{module.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {module.displayName}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {module.description}
              </p>
              <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{lessons.length} Lessons</span>
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tests.length} Tests</span>
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span>{flashcardCount} Flashcards</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Progress stats */}
        <section aria-label="Progress statistics" className="mb-6 sm:mb-8">
          <ProgressStats
            lessonsCompleted={lessonsCompleted}
            totalLessons={lessons.length}
            testsCompleted={testsCompleted}
            totalTests={tests.length}
            highestScores={highestScores}
            mostRecentScore={mostRecentScore}
            flashcardsReviewed={flashcardsReviewed}
            totalFlashcards={flashcardCount}
          />
        </section>

        {/* Content sections */}
        <section aria-label="Module content" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Lessons */}
          <div className="gt-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                <svg className="w-5 h-5" style={{ color: '#006633' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Lessons</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Learn the fundamentals through structured lessons
            </p>
            {lessons.length > 0 ? (
              <Link
                to={`/module/${moduleId}/lesson/${lessons[0].id}`}
                className="block w-full text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#006633' }}
              >
                Start Learning
              </Link>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">No lessons available</p>
            )}
          </div>

          {/* Tests */}
          <div className="gt-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fef9c3' }}>
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Tests</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Test your knowledge with timed assessments
            </p>
            {tests.length > 0 ? (
              <Link
                to={`/module/${moduleId}/test/${tests[0].id}`}
                className="block w-full font-semibold py-2.5 px-4 rounded-lg text-center transition-colors focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#FFB800', color: '#1a1a1a' }}
              >
                Take a Test
              </Link>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">No tests available</p>
            )}
          </div>

          {/* Flashcards */}
          <div className="gt-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-900/30">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Flashcards</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Review key concepts with interactive flashcards
            </p>
            {flashcardCount > 0 ? (
              <Link
                to={`/module/${moduleId}/flashcards`}
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 min-h-[44px] flex items-center justify-center"
              >
                Study Flashcards
              </Link>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">No flashcards available</p>
            )}
          </div>
        </section>

        {/* Detailed progress */}
        <section aria-label="Detailed progress" className="gt-card p-5 sm:p-6">
          <ModuleProgress
            moduleId={moduleId!}
            lessonsCompleted={lessonsCompleted}
            totalLessons={lessons.length}
            testsCompleted={testsCompleted}
            totalTests={tests.length}
            highestScores={highestScores}
            flashcardsReviewed={flashcardsReviewed}
            totalFlashcards={flashcardCount}
          />
        </section>
      </main>
    </div>
  );
}
