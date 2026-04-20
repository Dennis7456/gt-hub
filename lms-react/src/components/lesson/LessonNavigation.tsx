import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutDashboard, Loader2 } from 'lucide-react';
import type { Lesson } from '../../types';

interface LessonNavigationProps {
  currentLessonId: string;
  lessons: Lesson[];
  moduleId: string;
  loading?: boolean;
}

/**
 * LessonNavigation component
 * Validates: Requirements 5.3, 5.4
 */
export function LessonNavigation({
  currentLessonId,
  lessons,
  moduleId,
  loading = false,
}: LessonNavigationProps) {
  const navigate = useNavigate();

  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId);
  const currentLesson = lessons[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < lessons.length - 1;
  const previousLesson = hasPrevious ? lessons[currentIndex - 1] : null;
  const nextLesson = hasNext ? lessons[currentIndex + 1] : null;
  const progress = Math.round(((currentIndex + 1) / lessons.length) * 100);

  return (
    <div
      className="rounded-xl border p-4"
      style={{
        backgroundColor: 'var(--surface-card)',
        borderColor: 'var(--surface-border)',
      }}
    >
      {/* Title + position */}
      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">
          Lesson {currentIndex + 1} of {lessons.length}
        </p>
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          {currentLesson?.title || 'Lesson'}
        </h2>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
          <span>Progress</span>
          <span className="font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: '#006633' }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => previousLesson && !loading && navigate(`/module/${moduleId}/lesson/${previousLesson.id}`)}
          disabled={!hasPrevious || loading}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
            hasPrevious && !loading
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
          aria-label="Previous lesson"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <button
          onClick={() => navigate(`/module/${moduleId}`)}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg"
          aria-label="Back to module overview"
        >
          <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Module</span>
        </button>

        <button
          onClick={() => nextLesson && !loading && navigate(`/module/${moduleId}/lesson/${nextLesson.id}`)}
          disabled={!hasNext || loading}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
            hasNext && !loading
              ? 'text-white'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
          style={hasNext && !loading ? { backgroundColor: '#006633' } : {}}
          aria-label="Next lesson"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {loading && (
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          Loading…
        </div>
      )}
    </div>
  );
}
