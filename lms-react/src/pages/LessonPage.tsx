import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { LessonContent } from '../components/lesson/LessonContent';
import { LessonNavigation } from '../components/lesson/LessonNavigation';
import { LessonProgress } from '../components/lesson/LessonProgress';
import type { Lesson } from '../types';

/**
 * LessonPage - Lesson display page
 * Integrates LessonContent, LessonNavigation, and LessonProgress
 * Loads lesson content from ContentService
 * Handles loading and error states
 * 
 * Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5
 */
export function LessonPage() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const { modules } = useContent();
  
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLesson = async () => {
      if (!moduleId || !lessonId) {
        setError('Invalid module or lesson ID');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Dynamically import content service to avoid circular dependencies
        const { getLesson, getLessons } = await import('../services/content.service');
        
        // Load current lesson and all lessons in the module
        const [currentLesson, allLessons] = await Promise.all([
          getLesson(moduleId, lessonId),
          getLessons(moduleId)
        ]);

        setLesson(currentLesson);
        setLessons(allLessons);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load lesson';
        setError(errorMessage);
        console.error('Error loading lesson:', err);
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [moduleId, lessonId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main id="main-content" aria-label="Lesson" aria-live="polite" aria-busy="true" className="container mx-auto px-4 py-8">
          <div className="animate-pulse" role="status" aria-label="Loading lesson">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (error || !lesson || !moduleId) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
        <main id="main-content" aria-label="Lesson" className="container mx-auto px-4 py-8">
          <div className="gt-card p-6" role="alert" aria-live="assertive">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" aria-hidden="true" />
              <h2 className="text-lg font-bold text-red-700 dark:text-red-300">Error Loading Lesson</h2>
            </div>
            <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Lesson not found'}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" /> Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  const module = modules.find(m => m.id === moduleId);
  const moduleName = module?.displayName || moduleId;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
      <main id="main-content" aria-label={`Lesson: ${lesson.title}`} className="container mx-auto px-4 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-5 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 flex-wrap">
            <li><Link to="/" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Dashboard</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
            <li><Link to={`/module/${moduleId}`} className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{moduleName}</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-gray-800 dark:text-gray-200 font-medium" aria-current="page">{lesson.title}</li>
          </ol>
        </nav>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <article className="lg:col-span-2">
            <div className="gt-card p-5 sm:p-7 mb-5">
              <LessonContent lesson={lesson} moduleId={moduleId} />
            </div>
            <LessonNavigation currentLessonId={lesson.id} lessons={lessons} moduleId={moduleId} loading={loading} />
          </article>
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <LessonProgress moduleId={moduleId} lessons={lessons} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
