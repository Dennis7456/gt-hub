/**
 * Property-Based Tests for Content Parsing
 * 
 * Tests the content parser utilities to ensure they correctly handle
 * various input formats and edge cases.
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import {
  parseLessonContent,
  parseTestQuestions,
  parseFlashcards,
  parseJSONContent,
  isValidModuleId,
  getModuleIds
} from '../../utils/contentParser';

describe('Content Parsing Properties', () => {
  /**
   * Property 48: Content parser handles lesson files
   * **Validates: Requirements 12.1**
   * 
   * For any valid lesson content (text or structured data), the parser
   * should successfully extract lesson information without errors.
   */
  it('Property 48: Content parser handles lesson files', () => {
    // Feature: learning-management-system-react, Property 48: Content parser handles lesson files
    
    fc.assert(
      fc.property(
        fc.string({ minLength: 10, maxLength: 5000 }), // lesson content
        fc.constantFrom(...getModuleIds()), // valid module ID
        fc.string({ minLength: 1, maxLength: 20 }), // lesson ID
        fc.integer({ min: 1, max: 50 }), // lesson order
        (content, moduleId, lessonId, order) => {
          const lesson = parseLessonContent(content, moduleId, lessonId, order);
          
          // Verify lesson structure
          expect(lesson).toBeDefined();
          expect(lesson.id).toBe(lessonId);
          expect(lesson.moduleId).toBe(moduleId);
          expect(lesson.title).toBeDefined();
          expect(lesson.content).toBeDefined();
          expect(lesson.order).toBe(order);
          expect(lesson.estimatedMinutes).toBeGreaterThan(0);
          
          // Content should be preserved (trimmed)
          expect(lesson.content.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 49: Content parser handles test files
   * **Validates: Requirements 12.2**
   * 
   * For any valid questions.js file format, the parser should successfully
   * extract test questions with their options and correct answers.
   */
  it('Property 49: Content parser handles test files', () => {
    // Feature: learning-management-system-react, Property 49: Content parser handles test files
    
    // Generator for valid question objects — correct index is derived from options length
    // to avoid filter() which can loop indefinitely
    const questionArbitrary = fc.record({
      id: fc.integer({ min: 1, max: 100 }),
      question: fc.string({ minLength: 10, maxLength: 100 }),
      options: fc.array(fc.string({ minLength: 5, maxLength: 50 }), { minLength: 2, maxLength: 4 }),
      explanation: fc.option(fc.string({ minLength: 10, maxLength: 100 }))
    }).map(q => ({ ...q, correct: q.id % q.options.length }));

    fc.assert(
      fc.property(
        fc.array(questionArbitrary, { minLength: 1, maxLength: 5 }),
        fc.constantFrom(...getModuleIds()),
        fc.string({ minLength: 1, maxLength: 20 }),
        (questions, moduleId, testId) => {
          // Create valid JavaScript file content
          const content = `const QUESTIONS = ${JSON.stringify(questions, null, 2)};`;
          
          const test = parseTestQuestions(content, moduleId, testId);
          
          // Verify test structure
          expect(test).toBeDefined();
          expect(test.id).toBe(testId);
          expect(test.moduleId).toBe(moduleId);
          expect(test.title).toBeDefined();
          expect(test.description).toBeDefined();
          expect(test.duration).toBeGreaterThan(0);
          expect(test.questions).toHaveLength(questions.length);
          expect(test.passingScore).toBeGreaterThanOrEqual(0);
          expect(test.passingScore).toBeLessThanOrEqual(100);
          
          // Verify questions are preserved
          test.questions.forEach((q, index) => {
            expect(q.id).toBe(questions[index].id);
            expect(q.question).toBe(questions[index].question);
            expect(q.options).toEqual(questions[index].options);
            expect(q.correct).toBe(questions[index].correct);
            expect(q.correct).toBeGreaterThanOrEqual(0);
            expect(q.correct).toBeLessThan(q.options.length);
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 50: Content parser handles flashcard files
   * **Validates: Requirements 12.3**
   * 
   * For any valid cards.js file format, the parser should successfully
   * extract flashcard data with front and back content.
   */
  it('Property 50: Content parser handles flashcard files', () => {
    // Feature: learning-management-system-react, Property 50: Content parser handles flashcard files
    
    // Generator for valid flashcard objects
    const flashcardArbitrary = fc.record({
      id: fc.integer({ min: 1, max: 500 }),
      front: fc.string({ minLength: 5, maxLength: 200 }),
      back: fc.string({ minLength: 5, maxLength: 500 }),
      topic: fc.option(fc.string({ minLength: 3, maxLength: 50 }))
    });

    // Generator for topic objects
    const topicArbitrary = fc.record({
      id: fc.integer({ min: 1, max: 50 }),
      label: fc.string({ minLength: 3, maxLength: 50 }),
      range: fc.tuple(fc.nat(), fc.nat()).map(([a, b]) => [Math.min(a, b), Math.max(a, b)] as [number, number])
    });

    fc.assert(
      fc.property(
        fc.array(flashcardArbitrary, { minLength: 1, maxLength: 10 }),
        fc.option(fc.array(topicArbitrary, { minLength: 0, maxLength: 5 })),
        fc.constantFrom(...getModuleIds()),
        (cards, topics, moduleId) => {
          // Create valid JavaScript file content
          let content = `const CARDS = ${JSON.stringify(cards, null, 2)};`;
          if (topics) {
            content = `const TOPICS = ${JSON.stringify(topics, null, 2)};\n\n${content}`;
          }
          
          const flashcardSet = parseFlashcards(content, moduleId);
          
          // Verify flashcard set structure
          expect(flashcardSet).toBeDefined();
          expect(flashcardSet.moduleId).toBe(moduleId);
          expect(flashcardSet.cards).toHaveLength(cards.length);
          
          // Verify cards are preserved
          flashcardSet.cards.forEach((card, index) => {
            expect(card.id).toBe(cards[index].id);
            expect(card.front).toBe(cards[index].front);
            expect(card.back).toBe(cards[index].back);
          });
          
          // Verify topics if present
          if (topics && topics.length > 0) {
            expect(flashcardSet.topics).toBeDefined();
            expect(flashcardSet.topics).toHaveLength(topics.length);
          }
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 51: Content parser handles JSON files
   * **Validates: Requirements 12.4**
   * 
   * For any valid JSON content file, the parser should successfully
   * parse and return the structured data.
   */
  it('Property 51: Content parser handles JSON files', () => {
    // Feature: learning-management-system-react, Property 51: Content parser handles JSON files
    
    // Use a simple flat object to avoid recursive generation hanging
    const jsonValueArbitrary = fc.oneof(
      fc.string({ maxLength: 20 }),
      fc.integer({ min: -1000, max: 1000 }),
      fc.boolean(),
      fc.constant(null),
      fc.array(fc.string({ maxLength: 10 }), { maxLength: 5 }),
      fc.record({ key: fc.string({ maxLength: 10 }), value: fc.integer() })
    );

    fc.assert(
      fc.property(
        jsonValueArbitrary,
        (data) => {
          // Serialize to JSON
          const jsonString = JSON.stringify(data);
          
          // Parse using our parser
          const parsed = parseJSONContent(jsonString);
          
          // Verify parsed data matches original
          expect(parsed).toEqual(data);
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 52: Migrated content preserves structure
   * **Validates: Requirements 12.5**
   * 
   * For any content parsed from legacy files, the essential structure
   * and information should be preserved in the new format.
   */
  it('Property 52: Migrated content preserves structure', () => {
    // Feature: learning-management-system-react, Property 52: Migrated content preserves structure
    
    fc.assert(
      fc.property(
        fc.record({
          lessonContent: fc.string({ minLength: 50, maxLength: 1000 }),
          testQuestions: fc.array(
            fc.record({
              id: fc.integer({ min: 1, max: 100 }),
              question: fc.string({ minLength: 10, maxLength: 100 }),
              options: fc.array(fc.string({ minLength: 5, maxLength: 50 }), { minLength: 2, maxLength: 4 }),
              explanation: fc.option(fc.string({ minLength: 10, maxLength: 100 }))
            }).map(q => ({ ...q, correct: q.id % q.options.length })),
            { minLength: 2, maxLength: 5 }
          ),
          flashcards: fc.array(
            fc.record({
              id: fc.integer({ min: 1, max: 100 }),
              front: fc.string({ minLength: 10, maxLength: 100 }),
              back: fc.string({ minLength: 10, maxLength: 200 })
            }),
            { minLength: 2, maxLength: 5 }
          )
        }),
        fc.constantFrom(...getModuleIds()),
        (content, moduleId) => {
          // Parse lesson
          const lesson = parseLessonContent(
            content.lessonContent,
            moduleId,
            'lesson-1',
            1
          );
          
          // Verify lesson preserves content
          expect(lesson.content).toContain(content.lessonContent.trim().substring(0, 50));
          expect(lesson.moduleId).toBe(moduleId);
          
          // Parse test
          const testContent = `const QUESTIONS = ${JSON.stringify(content.testQuestions)};`;
          const test = parseTestQuestions(testContent, moduleId, 'test-1');
          
          // Verify test preserves questions
          expect(test.questions).toHaveLength(content.testQuestions.length);
          test.questions.forEach((q, i) => {
            expect(q.question).toBe(content.testQuestions[i].question);
            expect(q.options).toEqual(content.testQuestions[i].options);
            expect(q.correct).toBe(content.testQuestions[i].correct);
          });
          
          // Parse flashcards
          const flashcardContent = `const CARDS = ${JSON.stringify(content.flashcards)};`;
          const flashcardSet = parseFlashcards(flashcardContent, moduleId);
          
          // Verify flashcards preserve data
          expect(flashcardSet.cards).toHaveLength(content.flashcards.length);
          flashcardSet.cards.forEach((card, i) => {
            expect(card.front).toBe(content.flashcards[i].front);
            expect(card.back).toBe(content.flashcards[i].back);
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Module ID validation
   */
  it('validates module IDs correctly', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...getModuleIds()),
        (moduleId) => {
          expect(isValidModuleId(moduleId)).toBe(true);
        }
      ),
      { numRuns: 5 }
    );

    fc.assert(
      fc.property(
        fc.string().filter(s => !getModuleIds().includes(s)),
        (invalidModuleId) => {
          expect(isValidModuleId(invalidModuleId)).toBe(false);
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Empty content handling
   */
  it('handles empty or minimal content gracefully', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('', '   ', '\n\n', 'x'),
        fc.constantFrom(...getModuleIds()),
        (content, moduleId) => {
          const lesson = parseLessonContent(content, moduleId, 'test-lesson', 1);
          
          // Should not throw and should return valid lesson
          expect(lesson).toBeDefined();
          expect(lesson.id).toBe('test-lesson');
          expect(lesson.moduleId).toBe(moduleId);
          expect(lesson.content).toBeDefined();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Additional test: Malformed JavaScript handling
   */
  it('handles malformed JavaScript gracefully', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'const QUESTIONS = [invalid',
          'const CARDS = {not an array}',
          'random text',
          '{ broken: json'
        ),
        fc.constantFrom(...getModuleIds()),
        (content, moduleId) => {
          // Should not throw, but return empty/minimal data
          const test = parseTestQuestions(content, moduleId, 'test-1');
          expect(test).toBeDefined();
          expect(test.questions).toEqual([]);
          
          const flashcards = parseFlashcards(content, moduleId);
          expect(flashcards).toBeDefined();
          expect(flashcards.cards).toEqual([]);
        }
      ),
      { numRuns: 5 }
    );
  });
});
