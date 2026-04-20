/**
 * Dashboard page - Module selection dashboard
 * Displays all available learning modules with progress indicators
 * Validates: Requirements 4.2, 4.3, 4.4, 20.1
 */

import { useState, useMemo, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { useProgress } from '../context/ProgressContext';
import type { Module } from '../types';

// ---------------------------------------------------------------------------
// ModuleCard — memoized so it only re-renders when its own props change.
// The Dashboard renders up to 8 of these; without memo every progress update
// would re-render all 8 cards even if only one module's data changed.
// ---------------------------------------------------------------------------
interface ModuleCardProps {
  module: Module;
  lessonPercentage: number;
  testPercentage: number;
  flashcardPercentage: number;
  onClick: (moduleId: string) => void;
}

const ModuleCard = memo(function ModuleCard({
  module,
  lessonPercentage,
  testPercentage,
  flashcardPercentage,
  onClick,
}: ModuleCardProps) {
  const overallPct = Math.round((lessonPercentage + testPercentage + flashcardPercentage) / 3);

  return (
    <button
      onClick={() => onClick(module.id)}
      className="gt-card gt-card-interactive w-full text-left p-5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label={`Open ${module.displayName} module`}
    >
      {/* Module icon */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ backgroundColor: module.color }}
        >
          <span className="text-2xl">{module.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
            {module.displayName}
          </h2>
          {overallPct > 0 && (
            <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: overallPct >= 80 ? '#dcfce7' : overallPct >= 40 ? '#fef9c3' : '#f1f5f9',
                color: overallPct >= 80 ? '#166534' : overallPct >= 40 ? '#854d0e' : '#475569',
              }}>
              {overallPct}% complete
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
        {module.description}
      </p>

      {/* Content counts */}
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {module.lessonCount} lessons
        </span>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {module.testCount} tests
        </span>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          {module.flashcardCount} cards
        </span>
      </div>

      {/* Progress bars */}
      <div className="space-y-2">
        {[
          { label: 'Lessons', pct: lessonPercentage, color: '#006633' },
          { label: 'Tests', pct: testPercentage, color: '#FFB800' },
          { label: 'Flashcards', pct: flashcardPercentage, color: '#7c3aed' },
        ].map(({ label, pct, color }) => (
          <div key={label}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-500 dark:text-gray-400">{label}</span>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{pct}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </button>
  );
});

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

export function Dashboard() {
  const navigate = useNavigate();
  const { modules, loading: modulesLoading, error: modulesError } = useContent();
  const { overallProgress, loading: progressLoading } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');

  // Stable callback — avoids re-creating ModuleCard onClick on every render
  const handleModuleClick = useCallback((moduleId: string) => {
    navigate(`/module/${moduleId}`);
  }, [navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Memoize filtered modules so the filter only re-runs when modules or the
  // search query actually change, not on every render.
  const filteredModules = useMemo(
    () =>
      modules.filter(
        (module) =>
          module.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          module.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [modules, searchQuery]
  );

  if (modulesLoading || progressLoading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
        <main id="main-content" aria-label="Dashboard" aria-live="polite" aria-busy="true" className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center" role="status" aria-label="Loading modules">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-200 border-t-green-600 mx-auto mb-4" aria-hidden="true"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading modules...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (modulesError) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
        <main id="main-content" aria-label="Dashboard" className="container mx-auto px-4 py-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4" role="alert" aria-live="assertive">
            <p className="text-red-800 dark:text-red-200">Error loading modules: {modulesError}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
      <main id="main-content" aria-label="Learning Modules Dashboard" className="container mx-auto px-4 py-6 sm:py-8">

        {/* Hero header */}
        <div className="rounded-2xl p-6 sm:p-8 mb-8 text-white"
          style={{ background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-white">Learning Modules</h1>
              <p className="text-green-200 text-sm">Select a module to start or continue your training</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-200">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
              </svg>
              <span className="font-medium text-white">GT Hub</span>
            </div>
          </div>

          {/* Search bar inside hero */}
          <form onSubmit={handleSearch} className="mt-5 max-w-2xl" role="search" aria-label="Search content">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules, lessons, tests, and flashcards..."
                className="w-full px-4 py-3 pl-12 rounded-xl border-0 bg-white/15 backdrop-blur text-white placeholder-green-200 focus:ring-2 focus:ring-yellow-400 focus:bg-white/20 min-h-[44px] text-sm"
                aria-label="Search content"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-200 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>
        </div>

        {/* Module grid */}
        <section aria-label="Available modules">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredModules.map((module) => {
            const moduleProgress = overallProgress?.modules[module.id];
            const lessonsCompleted = moduleProgress?.lessonsCompleted ?? 0;
            const totalLessons = module.lessonCount;
            const testsCompleted = moduleProgress?.testsCompleted ?? 0;
            const totalTests = module.testCount;
            const flashcardsReviewed = moduleProgress?.flashcardsReviewed ?? 0;
            const totalFlashcards = moduleProgress?.totalFlashcards || module.flashcardCount;

            const lessonPercentage = totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0;
            const testPercentage = totalTests > 0 ? Math.round((testsCompleted / totalTests) * 100) : 0;
            const flashcardPercentage = totalFlashcards > 0 ? Math.round((flashcardsReviewed / totalFlashcards) * 100) : 0;

            return (
              <ModuleCard
                key={module.id}
                module={module}
                lessonPercentage={lessonPercentage}
                testPercentage={testPercentage}
                flashcardPercentage={flashcardPercentage}
                onClick={handleModuleClick}
              />
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-16" aria-live="polite">
            <svg className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300 font-medium">No modules found matching your search.</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Try different keywords.</p>
          </div>
        )}
        </section>
      </main>
    </div>
  );
}
