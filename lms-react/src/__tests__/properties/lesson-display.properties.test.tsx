/**
 * Property-Based Tests for Lesson Display
 * Tests Properties 16, 17
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import { LessonNavigation } from '../../components/lesson/LessonNavigation';
import { LessonProgress } from '../../components/lesson/LessonProgress';
import { AuthProvider } from '../../context/AuthContext';
import { ProgressProvider } from '../../context/ProgressContext';

vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock Supabase
vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ 
        data: { session: { user: { id: 'test-user' } } }, 
        error: null 
      }),
      onAuthStateChange: vi.fn().mockReturnValue({ 
        data: { subscription: { unsubscribe: vi.fn() } } 
      }),
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      upsert: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    })),
  },
}));

// Mock auth service
vi.mock('../../services/auth.service', () => ({
  authService: {
    getCurrentUser: vi.fn().mockResolvedValue({ 
      id: 'test-user', 
      email: 'test@example.com' 
    }),
    getSession: vi.fn().mockResolvedValue({ 
      user: { id: 'test-user' } 
    }),
  },
}));

// Mock progress service
vi.mock('../../services/progress.service', () => ({
  progressService: {
    getLessonProgress: vi.fn().mockResolvedValue([]),
    getTestResults: vi.fn().mockResolvedValue([]),
    getFlashcardProgress: vi.fn().mockResolvedValue(null),
    getOverallProgress: vi.fn().mockResolvedValue({
      userId: 'test-user',
      modules: {},
    }),
    markLessonComplete: vi.fn().mockResolvedValue(undefined),
    saveTestResult: vi.fn().mockResolvedValue(undefined),
    recordFlashcardReview: vi.fn().mockResolvedValue(undefined),
    getOfflineQueueSize: vi.fn().mockReturnValue(0),
    processOfflineQueue: vi.fn().mockResolvedValue(undefined),
  },
}));

// Module ID generator
const moduleIdArbitrary = fc.constantFrom(
  'clearance-one',
  'customs-in-international-context',
  'customs-valuation-i',
  'wto-customs-valuation',
  'history-of-taxation',
  'theory-of-taxation',
  'tax-and-customs-theory',
  'eaccma'
);

// Lesson generator
const lessonArbitrary = fc.record({
  id: fc.string({ minLength: 5, maxLength: 20 }).map(s => `lesson-${s}`),
  moduleId: moduleIdArbitrary,
  title: fc.string({ minLength: 5, maxLength: 100 }),
  content: fc.string({ minLength: 50, maxLength: 500 }),
  order: fc.integer({ min: 1, max: 20 }),
  estimatedMinutes: fc.integer({ min: 5, max: 60 }),
});

// Generate a list of lessons for a learning path
const lessonListArbitrary = fc.array(lessonArbitrary, { minLength: 3, maxLength: 15 })
  .map(lessons => lessons.map((lesson, index) => ({
    ...lesson,
    order: index + 1,
  })));

describe('Lesson Display Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * Property 16: Lesson navigation controls function
   * Feature: learning-management-system-react, Property 16: Lesson navigation controls function
   * **Validates: Requirements 5.3**
   */
  it('Property 16: Lesson navigation controls function', async () => {
    await fc.assert(
      fc.asyncProperty(
        moduleIdArbitrary,
        lessonListArbitrary,
        fc.integer({ min: 0, max: 10 }),
        async (moduleId, lessons, currentIndexRaw) => {
          // Ensure lessons have the same moduleId
          const normalizedLessons = lessons.map(l => ({ ...l, moduleId }));
          const currentIndex = currentIndexRaw % normalizedLessons.length;
          const currentLesson = normalizedLessons[currentIndex];

          // Render LessonNavigation component directly
          const { unmount } = render(
            <BrowserRouter>
              <LessonNavigation
                currentLessonId={currentLesson.id}
                lessons={normalizedLessons}
                moduleId={moduleId}
              />
            </BrowserRouter>
          );

          // Verify navigation controls exist
          const previousButton = screen.getByLabelText('Previous lesson');
          const nextButton = screen.getByLabelText('Next lesson');
          
          expect(previousButton).toBeInTheDocument();
          expect(nextButton).toBeInTheDocument();

          // Verify previous button state
          if (currentIndex === 0) {
            // First lesson - previous should be disabled
            expect(previousButton).toBeDisabled();
          } else {
            // Not first lesson - previous should be enabled
            expect(previousButton).not.toBeDisabled();
          }

          // Verify next button state
          if (currentIndex === normalizedLessons.length - 1) {
            // Last lesson - next should be disabled
            expect(nextButton).toBeDisabled();
          } else {
            // Not last lesson - next should be enabled
            expect(nextButton).not.toBeDisabled();
          }

          // Verify lesson position is displayed
          const positionText = screen.getByText(`Lesson ${currentIndex + 1} of ${normalizedLessons.length}`);
          expect(positionText).toBeInTheDocument();

          // Verify progress percentage is displayed
          const expectedPercentage = Math.round(((currentIndex + 1) / normalizedLessons.length) * 100);
          const percentageText = screen.getByText(`${expectedPercentage}%`);
          expect(percentageText).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 17: Lesson progress displays
   * Feature: learning-management-system-react, Property 17: Lesson progress displays
   * **Validates: Requirements 5.4**
   */
  it('Property 17: Lesson progress displays', async () => {
    await fc.assert(
      fc.asyncProperty(
        moduleIdArbitrary,
        lessonListArbitrary,
        async (moduleId, lessons) => {
          // Ensure lessons have the same moduleId
          const normalizedLessons = lessons.map(l => ({ ...l, moduleId }));

          // Render LessonProgress component directly
          const { container, unmount } = render(
            <BrowserRouter>
              <AuthProvider>
                <ProgressProvider>
                  <LessonProgress moduleId={moduleId} lessons={normalizedLessons} />
                </ProgressProvider>
              </AuthProvider>
            </BrowserRouter>
          );

          // Wait for component to load
          await waitFor(() => {
            const title = screen.queryByText('Learning Path Progress');
            expect(title).toBeInTheDocument();
          }, { timeout: 3000 });

          // Verify progress bar exists
          const progressBars = container.querySelectorAll('.bg-blue-600, .bg-green-600, .bg-yellow-500');
          expect(progressBars.length).toBeGreaterThan(0);

          // Verify lesson list is displayed
          const learningPathProgress = screen.getByText('Learning Path Progress');
          expect(learningPathProgress).toBeInTheDocument();

          // Verify statistics are displayed
          expect(screen.getByText('Completed')).toBeInTheDocument();
          expect(screen.getByText('Remaining')).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });
});
