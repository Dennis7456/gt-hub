/**
 * Property-Based Tests for Content Service
 * 
 * Tests the content service to ensure it correctly loads content,
 * implements caching, and handles errors appropriately.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fc from 'fast-check';
import * as ContentService from '../../services/content.service';
import { getModuleIds } from '../../utils/contentParser';

describe('Content Service Properties', () => {
  beforeEach(() => {
    // Clear cache before each test
    ContentService.clearCache();
  });

  /**
   * Property 15: Lesson selection loads content
   * **Validates: Requirements 5.1**
   * 
   * For any lesson in any module, when a user selects that lesson,
   * the Content Service should load and return the lesson content.
   */
  it('Property 15: Lesson selection loads content', async () => {
    // Feature: learning-management-system-react, Property 15: Lesson selection loads content
    
    fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...getModuleIds()),
        async (moduleId) => {
          // Get lessons for the module
          const lessons = await ContentService.getLessons(moduleId);
          
          // Verify lessons array is returned (may be empty for now)
          expect(lessons).toBeDefined();
          expect(Array.isArray(lessons)).toBe(true);
          
          // Each lesson should have required properties
          lessons.forEach(lesson => {
            expect(lesson.id).toBeDefined();
            expect(lesson.moduleId).toBe(moduleId);
            expect(lesson.title).toBeDefined();
            expect(lesson.content).toBeDefined();
            expect(lesson.order).toBeGreaterThanOrEqual(0);
            expect(lesson.estimatedMinutes).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 5 } // Reduced runs for async operations
    );
  });

  /**
   * Property 27: Flashcard set loads all cards
   * **Validates: Requirements 7.1**
   * 
   * For any flashcard set in a module, when a user selects that set,
   * the Content Service should load all flashcards belonging to that set.
   */
  it('Property 27: Flashcard set loads all cards', async () => {
    // Feature: learning-management-system-react, Property 27: Flashcard set loads all cards
    
    fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...getModuleIds()),
        async (moduleId) => {
          // Get flashcards for the module
          const flashcardSet = await ContentService.getFlashcards(moduleId);
          
          // Verify flashcard set structure
          expect(flashcardSet).toBeDefined();
          expect(flashcardSet.moduleId).toBe(moduleId);
          expect(Array.isArray(flashcardSet.cards)).toBe(true);
          
          // Each card should have required properties
          flashcardSet.cards.forEach(card => {
            expect(card.id).toBeDefined();
            expect(card.front).toBeDefined();
            expect(card.back).toBeDefined();
          });
          
          // Topics should be an array if present
          if (flashcardSet.topics) {
            expect(Array.isArray(flashcardSet.topics)).toBe(true);
            flashcardSet.topics.forEach(topic => {
              expect(topic.id).toBeDefined();
              expect(topic.label).toBeDefined();
              expect(Array.isArray(topic.range)).toBe(true);
              expect(topic.range).toHaveLength(2);
            });
          }
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 58: Data caching for repeated requests
   * **Validates: Requirements 15.3**
   * 
   * For any data that has been fetched once, when the same data is
   * requested again within the cache validity period, the service
   * should return the cached data without making a new request.
   */
  it('Property 58: Data caching for repeated requests', async () => {
    // Feature: learning-management-system-react, Property 58: Data caching for repeated requests
    
    fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...getModuleIds()),
        async (moduleId) => {
          // First request - loads from source
          const firstLessons = await ContentService.getLessons(moduleId);
          const firstTests = await ContentService.getTests(moduleId);
          const firstFlashcards = await ContentService.getFlashcards(moduleId);
          
          // Second request - should use cache
          const secondLessons = await ContentService.getLessons(moduleId);
          const secondTests = await ContentService.getTests(moduleId);
          const secondFlashcards = await ContentService.getFlashcards(moduleId);
          
          // Cached data should be identical (same reference)
          expect(secondLessons).toBe(firstLessons);
          expect(secondTests).toBe(firstTests);
          expect(secondFlashcards).toBe(firstFlashcards);
          
          // Content should be equal
          expect(secondLessons).toEqual(firstLessons);
          expect(secondTests).toEqual(firstTests);
          expect(secondFlashcards).toEqual(firstFlashcards);
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Module loading
   */
  it('loads all modules successfully', async () => {
    const modules = await ContentService.getModules();
    
    expect(modules).toBeDefined();
    expect(Array.isArray(modules)).toBe(true);
    expect(modules.length).toBeGreaterThan(0);
    
    // Each module should have required properties
    modules.forEach(module => {
      expect(module.id).toBeDefined();
      expect(module.name).toBeDefined();
      expect(module.displayName).toBeDefined();
      expect(module.description).toBeDefined();
      expect(module.icon).toBeDefined();
      expect(module.color).toBeDefined();
      expect(module.lessonCount).toBeGreaterThanOrEqual(0);
      expect(module.testCount).toBeGreaterThanOrEqual(0);
      expect(module.flashcardCount).toBeGreaterThanOrEqual(0);
    });
  });

  /**
   * Additional test: Module caching
   */
  it('caches module data', async () => {
    const firstModules = await ContentService.getModules();
    const secondModules = await ContentService.getModules();
    
    // Should return same reference (cached)
    expect(secondModules).toBe(firstModules);
  });

  /**
   * Additional test: Get specific module
   */
  it('retrieves specific module by ID', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...getModuleIds()),
        async (moduleId) => {
          const module = await ContentService.getModule(moduleId);
          
          expect(module).toBeDefined();
          expect(module.id).toBe(moduleId);
          expect(module.name).toBeDefined();
          expect(module.displayName).toBeDefined();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Invalid module ID handling
   */
  it('throws error for invalid module ID', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.string().filter(s => !getModuleIds().includes(s)),
        async (invalidModuleId) => {
          await expect(ContentService.getModule(invalidModuleId)).rejects.toThrow();
          await expect(ContentService.getLessons(invalidModuleId)).rejects.toThrow();
          await expect(ContentService.getTests(invalidModuleId)).rejects.toThrow();
          await expect(ContentService.getFlashcards(invalidModuleId)).rejects.toThrow();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Search functionality
   */
  it('searches content across modules', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 50 }),
        async (query) => {
          const results = await ContentService.searchContent(query);
          
          expect(results).toBeDefined();
          expect(Array.isArray(results)).toBe(true);
          
          // Each result should have required properties
          results.forEach(result => {
            expect(result.type).toMatch(/^(module|lesson|test|flashcard)$/);
            expect(result.moduleId).toBeDefined();
            expect(result.moduleName).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.title).toBeDefined();
            expect(result.snippet).toBeDefined();
            expect(result.relevance).toBeGreaterThanOrEqual(0);
          });
          
          // Results should be sorted by relevance (descending)
          for (let i = 1; i < results.length; i++) {
            expect(results[i].relevance).toBeLessThanOrEqual(results[i - 1].relevance);
          }
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Empty search query
   */
  it('returns empty results for empty search query', async () => {
    const emptyResults = await ContentService.searchContent('');
    expect(emptyResults).toEqual([]);
    
    const whitespaceResults = await ContentService.searchContent('   ');
    expect(whitespaceResults).toEqual([]);
  });

  /**
   * Additional test: Cache clearing
   */
  it('clears cache when requested', async () => {
    // Load some data
    const firstModules = await ContentService.getModules();
    const moduleId = getModuleIds()[0];
    const firstLessons = await ContentService.getLessons(moduleId);
    
    // Clear cache
    ContentService.clearCache();
    
    // Load again
    const secondModules = await ContentService.getModules();
    const secondLessons = await ContentService.getLessons(moduleId);
    
    // Should be different references (not cached)
    expect(secondModules).not.toBe(firstModules);
    expect(secondLessons).not.toBe(firstLessons);
    
    // But content should be equal
    expect(secondModules).toEqual(firstModules);
    expect(secondLessons).toEqual(firstLessons);
  });

  /**
   * Additional test: Get specific lesson
   */
  it('retrieves specific lesson by ID', async () => {
    const moduleId = getModuleIds()[0];
    const lessons = await ContentService.getLessons(moduleId);
    
    if (lessons.length > 0) {
      const lessonId = lessons[0].id;
      const lesson = await ContentService.getLesson(moduleId, lessonId);
      
      expect(lesson).toBeDefined();
      expect(lesson.id).toBe(lessonId);
      expect(lesson.moduleId).toBe(moduleId);
    }
  });

  /**
   * Additional test: Get specific test
   */
  it('retrieves specific test by ID', async () => {
    const moduleId = getModuleIds()[0];
    const tests = await ContentService.getTests(moduleId);
    
    if (tests.length > 0) {
      const testId = tests[0].id;
      const test = await ContentService.getTest(moduleId, testId);
      
      expect(test).toBeDefined();
      expect(test.id).toBe(testId);
      expect(test.moduleId).toBe(moduleId);
    }
  });

  /**
   * Additional test: Non-existent lesson/test handling
   */
  it('throws error for non-existent lesson or test', async () => {
    const moduleId = getModuleIds()[0];
    
    await expect(
      ContentService.getLesson(moduleId, 'non-existent-lesson')
    ).rejects.toThrow();
    
    await expect(
      ContentService.getTest(moduleId, 'non-existent-test')
    ).rejects.toThrow();
  });
});
