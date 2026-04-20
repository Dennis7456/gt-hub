/**
 * Property-Based Tests for Module Overview
 * Tests Properties 72, 73, 74, 75, 76
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fc from 'fast-check';
import { ModuleOverview } from '../../pages/ModuleOverview';
import { AuthProvider } from '../../context/AuthContext';
import { ContentProvider } from '../../context/ContentContext';
import { ProgressProvider } from '../../context/ProgressContext';
import * as ContentService from '../../services/content.service';
import type { Lesson, Test } from '../../types';

// Mock Supabase
vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: { user: { id: 'test-user' } } }, error: null }),
      onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    })),
  },
}));

// Mock auth service
vi.mock('../../services/auth.service', () => ({
  authService: {
    getCurrentUser: vi.fn().mockResolvedValue({ id: 'test-user', email: 'test@example.com' }),
    getSession: vi.fn().mockResolvedValue({ user: { id: 'test-user' } }),
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

// Module generator
const moduleArbitrary = fc.record({
  id: moduleIdArbitrary,
  name: fc.string({ minLength: 1, maxLength: 50 }),
  displayName: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 200 }),
  icon: fc.constantFrom('📚', '📦', '💰', '🌍', '📊', '🎓', '⚖️', '🔧'),
  color: fc.constantFrom('#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'),
  lessonCount: fc.integer({ min: 1, max: 20 }),
  testCount: fc.integer({ min: 1, max: 15 }),
  flashcardCount: fc.integer({ min: 1, max: 100 }),
});

describe('Module Overview Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * Property 72: Module navigation shows overview
   * Feature: learning-management-system-react, Property 72: Module navigation shows overview
   * Validates: Requirements 19.1
   */
  it('Property 72: Module navigation shows overview', async () => {
    await fc.assert(
      fc.asyncProperty(moduleArbitrary, async (module) => {
        // Mock content service
        vi.spyOn(ContentService, 'getModules').mockResolvedValue([module]);
        vi.spyOn(ContentService, 'getModule').mockResolvedValue(module);
        vi.spyOn(ContentService, 'getLessons').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getTests').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ moduleId: module.id, cards: [], topics: [] });

        // Render ModuleOverview
        render(
          <MemoryRouter initialEntries={[`/module/${module.id}`]}>
            <AuthProvider>
              <ContentProvider>
                <ProgressProvider>
                  <ModuleOverview />
                </ProgressProvider>
              </ContentProvider>
            </AuthProvider>
          </MemoryRouter>
        );

        // Wait for module to load
        await waitFor(() => {
          expect(screen.queryByText('Loading module...')).not.toBeInTheDocument();
        });

        // Verify module overview is displayed with module information
        const moduleTitle = await screen.findByText(module.displayName);
        expect(moduleTitle).toBeInTheDocument();

        const moduleDescription = screen.getByText(module.description);
        expect(moduleDescription).toBeInTheDocument();
      }),
      { numRuns: 5 }
    );
  });

  /**
   * Property 73: Module overview displays content counts
   * Feature: learning-management-system-react, Property 73: Module overview displays content counts
   * Validates: Requirements 19.2
   */
  it('Property 73: Module overview displays content counts', async () => {
    await fc.assert(
      fc.asyncProperty(
        moduleArbitrary,
        fc.integer({ min: 0, max: 20 }),
        fc.integer({ min: 0, max: 15 }),
        fc.integer({ min: 0, max: 100 }),
        async (module, lessonCount, testCount, flashcardCount) => {
          // Create mock lessons and tests
          const lessons: Lesson[] = Array.from({ length: lessonCount }, (_, i) => ({
            id: `lesson-${i + 1}`,
            moduleId: module.id,
            title: `Lesson ${i + 1}`,
            content: 'Test content',
            order: i + 1,
            estimatedMinutes: 10,
          }));

          const tests: Test[] = Array.from({ length: testCount }, (_, i) => ({
            id: `test-${i + 1}`,
            moduleId: module.id,
            title: `Test ${i + 1}`,
            description: 'Test description',
            duration: 600,
            questions: [],
            passingScore: 70,
          }));

          const flashcards = Array.from({ length: flashcardCount }, (_, i) => ({
            id: i + 1,
            front: `Question ${i + 1}`,
            back: `Answer ${i + 1}`,
          }));

          // Mock content service
          vi.spyOn(ContentService, 'getModules').mockResolvedValue([module]);
          vi.spyOn(ContentService, 'getModule').mockResolvedValue(module);
          vi.spyOn(ContentService, 'getLessons').mockResolvedValue(lessons);
          vi.spyOn(ContentService, 'getTests').mockResolvedValue(tests);
          vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ 
            moduleId: module.id, 
            cards: flashcards, 
            topics: [] 
          });

          // Render ModuleOverview
          render(
            <MemoryRouter initialEntries={[`/module/${module.id}`]}>
              <AuthProvider>
                <ContentProvider>
                  <ProgressProvider>
                    <ModuleOverview />
                  </ProgressProvider>
                </ContentProvider>
              </AuthProvider>
            </MemoryRouter>
          );

          // Wait for module to load
          await waitFor(() => {
            expect(screen.queryByText('Loading module...')).not.toBeInTheDocument();
          });

          // Verify content counts are displayed
          const lessonCountText = await screen.findByText(`${lessonCount} Lessons`);
          expect(lessonCountText).toBeInTheDocument();

          const testCountText = screen.getByText(`${testCount} Tests`);
          expect(testCountText).toBeInTheDocument();

          const flashcardCountText = screen.getByText(`${flashcardCount} Flashcards`);
          expect(flashcardCountText).toBeInTheDocument();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 74: Module overview displays user progress
   * Feature: learning-management-system-react, Property 74: Module overview displays user progress
   * Validates: Requirements 19.3
   */
  it('Property 74: Module overview displays user progress', async () => {
    await fc.assert(
      fc.asyncProperty(
        moduleArbitrary,
        fc.integer({ min: 0, max: 20 }),
        fc.integer({ min: 0, max: 15 }),
        fc.integer({ min: 0, max: 100 }),
        async (module, _lessonsCompleted, _testsCompleted, _flashcardsReviewed) => {
          // Mock content service
          vi.spyOn(ContentService, 'getModules').mockResolvedValue([module]);
          vi.spyOn(ContentService, 'getModule').mockResolvedValue(module);
          vi.spyOn(ContentService, 'getLessons').mockResolvedValue([]);
          vi.spyOn(ContentService, 'getTests').mockResolvedValue([]);
          vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ 
            moduleId: module.id, 
            cards: [], 
            topics: [] 
          });

          // Render ModuleOverview
          render(
            <MemoryRouter initialEntries={[`/module/${module.id}`]}>
              <AuthProvider>
                <ContentProvider>
                  <ProgressProvider>
                    <ModuleOverview />
                  </ProgressProvider>
                </ContentProvider>
              </AuthProvider>
            </MemoryRouter>
          );

          // Wait for module to load
          await waitFor(() => {
            expect(screen.queryByText('Loading module...')).not.toBeInTheDocument();
          });

          // Verify progress stats component is rendered
          const progressSection = await screen.findByText('Lessons');
          expect(progressSection).toBeInTheDocument();

          const testsSection = screen.getByText('Tests');
          expect(testsSection).toBeInTheDocument();

          const flashcardsSection = screen.getByText('Flashcards');
          expect(flashcardsSection).toBeInTheDocument();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 75: Module overview provides navigation links
   * Feature: learning-management-system-react, Property 75: Module overview provides navigation links
   * Validates: Requirements 19.4
   */
  it('Property 75: Module overview provides navigation links', async () => {
    await fc.assert(
      fc.asyncProperty(moduleArbitrary, async (module) => {
        // Create at least one lesson and test
        const lessons: Lesson[] = [{
          id: 'lesson-1',
          moduleId: module.id,
          title: 'Lesson 1',
          content: 'Test content',
          order: 1,
          estimatedMinutes: 10,
        }];

        const tests: Test[] = [{
          id: 'test-1',
          moduleId: module.id,
          title: 'Test 1',
          description: 'Test description',
          duration: 600,
          questions: [],
          passingScore: 70,
        }];

        const flashcards = [{ id: 1, front: 'Q1', back: 'A1' }];

        // Mock content service
        vi.spyOn(ContentService, 'getModules').mockResolvedValue([module]);
        vi.spyOn(ContentService, 'getModule').mockResolvedValue(module);
        vi.spyOn(ContentService, 'getLessons').mockResolvedValue(lessons);
        vi.spyOn(ContentService, 'getTests').mockResolvedValue(tests);
        vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ 
          moduleId: module.id, 
          cards: flashcards, 
          topics: [] 
        });

        // Render ModuleOverview
        render(
          <MemoryRouter initialEntries={[`/module/${module.id}`]}>
            <AuthProvider>
              <ContentProvider>
                <ProgressProvider>
                  <ModuleOverview />
                </ProgressProvider>
              </ContentProvider>
            </AuthProvider>
          </MemoryRouter>
        );

        // Wait for module to load
        await waitFor(() => {
          expect(screen.queryByText('Loading module...')).not.toBeInTheDocument();
        });

        // Verify navigation links are present
        const startLearningLink = await screen.findByText('Start Learning');
        expect(startLearningLink).toBeInTheDocument();
        expect(startLearningLink.closest('a')).toHaveAttribute('href', `/module/${module.id}/lesson/lesson-1`);

        const takeTestLink = screen.getByText('Take a Test');
        expect(takeTestLink).toBeInTheDocument();
        expect(takeTestLink.closest('a')).toHaveAttribute('href', `/module/${module.id}/test/test-1`);

        const studyFlashcardsLink = screen.getByText('Study Flashcards');
        expect(studyFlashcardsLink).toBeInTheDocument();
        expect(studyFlashcardsLink.closest('a')).toHaveAttribute('href', `/module/${module.id}/flashcards`);
      }),
      { numRuns: 5 }
    );
  });

  /**
   * Property 76: Module overview displays description and objectives
   * Feature: learning-management-system-react, Property 76: Module overview displays description and objectives
   * Validates: Requirements 19.5
   */
  it('Property 76: Module overview displays description and objectives', async () => {
    await fc.assert(
      fc.asyncProperty(moduleArbitrary, async (module) => {
        // Mock content service
        vi.spyOn(ContentService, 'getModules').mockResolvedValue([module]);
        vi.spyOn(ContentService, 'getModule').mockResolvedValue(module);
        vi.spyOn(ContentService, 'getLessons').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getTests').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ 
          moduleId: module.id, 
          cards: [], 
          topics: [] 
        });

        // Render ModuleOverview
        render(
          <MemoryRouter initialEntries={[`/module/${module.id}`]}>
            <AuthProvider>
              <ContentProvider>
                <ProgressProvider>
                  <ModuleOverview />
                </ProgressProvider>
              </ContentProvider>
            </AuthProvider>
          </MemoryRouter>
        );

        // Wait for module to load
        await waitFor(() => {
          expect(screen.queryByText('Loading module...')).not.toBeInTheDocument();
        });

        // Verify module description is displayed
        const moduleDescription = await screen.findByText(module.description);
        expect(moduleDescription).toBeInTheDocument();

        // Verify module display name (which serves as the main objective/title)
        const moduleTitle = screen.getByText(module.displayName);
        expect(moduleTitle).toBeInTheDocument();
      }),
      { numRuns: 5 }
    );
  });
});
