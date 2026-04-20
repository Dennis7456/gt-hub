import { useEffect, useState } from 'react';
import { CheckCircle2, Circle, Trophy } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import type { Lesson } from '../../types';

interface LessonProgressProps {
  moduleId: string;
  lessons: Lesson[];
}

/**
 * LessonProgress component
 * Validates: Requirements 5.4, 8.3, 8.4
 */
export function LessonProgress({ moduleId, lessons }: LessonProgressProps) {
  const { getLessonProgress } = useProgress();
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const progress = await getLessonProgress(moduleId);
        setCompletedLessonIds(new Set(progress.filter((p) => p.completed).map((p) => p.lesson_id)));
      } catch {
        // silently fail — progress is non-critical
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [moduleId, getLessonProgress]);

  const completedCount = completedLessonIds.size;
  const totalCount = lessons.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  if (loading) {
    return (
      <div className="gt-card p-5 animate-pulse">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 bg-gray-100 dark:bg-gray-800 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="gt-card p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
        Learning Path
      </h3>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Completion</span>
          <span className="font-bold text-gray-900 dark:text-white">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage === 100 ? '#16a34a' : '#006633',
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: '#dcfce7' }}>
          <div className="text-xl font-bold" style={{ color: '#166534' }}>{completedCount}</div>
          <div className="text-xs font-medium" style={{ color: '#166534' }}>Done</div>
        </div>
        <div className="rounded-lg p-3 text-center bg-gray-50 dark:bg-gray-800">
          <div className="text-xl font-bold text-gray-700 dark:text-gray-200">{totalCount - completedCount}</div>
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Left</div>
        </div>
      </div>

      {/* Lesson list */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
          Lessons ({completedCount}/{totalCount})
        </p>
        <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
          {lessons.map((lesson) => {
            const done = completedLessonIds.has(lesson.id);
            return (
              <div
                key={lesson.id}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                  done
                    ? 'bg-green-50 dark:bg-green-900/20'
                    : 'bg-gray-50 dark:bg-gray-800/50'
                }`}
              >
                {done ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-green-600 dark:text-green-400" aria-hidden="true" />
                ) : (
                  <Circle className="w-4 h-4 flex-shrink-0 text-gray-300 dark:text-gray-600" aria-hidden="true" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${
                    done ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {lesson.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{lesson.estimatedMinutes} min</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion banner */}
      {percentage === 100 && (
        <div className="mt-4 p-3 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: '#dcfce7', border: '1px solid #bbf7d0' }}>
          <Trophy className="w-5 h-5 flex-shrink-0" style={{ color: '#166534' }} aria-hidden="true" />
          <p className="text-sm font-semibold" style={{ color: '#166534' }}>
            All lessons complete!
          </p>
        </div>
      )}
    </div>
  );
}
