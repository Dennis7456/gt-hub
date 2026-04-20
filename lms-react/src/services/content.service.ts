/**
 * Content Service
 * 
 * Loads and manages educational content from legacy files.
 * Implements caching strategy for performance.
 * 
 * Content is loaded from:
 * - Lesson files: MODULE/learning-path/lesson-*.txt
 * - Test files: MODULE/tests/test-TESTID/questions.js
 * - Flashcard files: flashcards/MODULE/cards.js
 * - JSON files: assets/*.json
 */

import type { Module, Lesson, Test, FlashcardSet } from '../types';
import {
  parseLessonContent,
  parseTestQuestions,
  parseFlashcards,
  MODULE_METADATA,
  getModuleIds,
  isValidModuleId
} from '../utils/contentParser';

/**
 * Cache for loaded content
 */
interface ContentCache {
  modules?: Module[];
  lessons: Map<string, Lesson[]>; // key: moduleId
  tests: Map<string, Test[]>; // key: moduleId
  flashcards: Map<string, FlashcardSet>; // key: moduleId
  lastUpdated: Map<string, number>; // key: cacheKey, value: timestamp
}

const cache: ContentCache = {
  lessons: new Map(),
  tests: new Map(),
  flashcards: new Map(),
  lastUpdated: new Map()
};

// Cache validity period (5 minutes)
const CACHE_VALIDITY_MS = 5 * 60 * 1000;

/**
 * Check if cached data is still valid
 */
function isCacheValid(cacheKey: string): boolean {
  const lastUpdated = cache.lastUpdated.get(cacheKey);
  if (!lastUpdated) return false;
  return Date.now() - lastUpdated < CACHE_VALIDITY_MS;
}

/**
 * Update cache timestamp
 */
function updateCacheTimestamp(cacheKey: string): void {
  cache.lastUpdated.set(cacheKey, Date.now());
}

/**
 * Get all available modules
 */
export async function getModules(): Promise<Module[]> {
  // Check cache
  if (cache.modules && isCacheValid('modules')) {
    return cache.modules;
  }

  // Build modules from metadata
  const modules: Module[] = [];

  for (const moduleId of getModuleIds()) {
    const metadata = MODULE_METADATA[moduleId as keyof typeof MODULE_METADATA];
    
    // Count content (this could be optimized by caching counts)
    const lessons = await getLessons(moduleId);
    const tests = await getTests(moduleId);
    const flashcardSet = await getFlashcards(moduleId);

    modules.push({
      id: moduleId,
      name: metadata.name,
      displayName: metadata.displayName,
      description: metadata.description,
      icon: metadata.icon,
      color: metadata.color,
      lessonCount: lessons.length,
      testCount: tests.length,
      flashcardCount: flashcardSet.cards.length
    });
  }

  // Update cache
  cache.modules = modules;
  updateCacheTimestamp('modules');

  return modules;
}

/**
 * Get a specific module by ID
 */
export async function getModule(moduleId: string): Promise<Module> {
  if (!isValidModuleId(moduleId)) {
    throw new Error(`Invalid module ID: ${moduleId}`);
  }

  const modules = await getModules();
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    throw new Error(`Module not found: ${moduleId}`);
  }

  return module;
}

/**
 * Get all lessons for a module
 */
export async function getLessons(moduleId: string): Promise<Lesson[]> {
  if (!isValidModuleId(moduleId)) {
    throw new Error(`Invalid module ID: ${moduleId}`);
  }

  // Check cache
  const cacheKey = `lessons-${moduleId}`;
  if (cache.lessons.has(moduleId) && isCacheValid(cacheKey)) {
    return cache.lessons.get(moduleId)!;
  }

  // Load lessons from files
  const lessons: Lesson[] = [];

  try {
    // Try to load from JSON first (newer format).
    // Different modules store their JSON in different locations:
    // - Most: /assets/{module}_learning_path.json
    // - Some: /{module}/{module}_duolingo_path.json or /{module}_learning_path.json
    const moduleUnderscore = moduleId.replace(/-/g, '_');
    const jsonCandidates = [
      `/assets/${moduleUnderscore}_learning_path.json`,
      `/${moduleId}/${moduleUnderscore}_duolingo_path.json`,
      `/${moduleId}/${moduleUnderscore}_learning_path.json`,
    ];

    let jsonLoaded = false;
    for (const jsonPath of jsonCandidates) {
      try {
        const jsonResponse = await fetch(jsonPath);
        const lpContentType = jsonResponse.headers.get('content-type');
        if (jsonResponse.ok && lpContentType && lpContentType.includes('json')) {
          const jsonData = await jsonResponse.json();
          
          // Extract lessons from JSON structure
          if (jsonData.units && Array.isArray(jsonData.units)) {
            let order = 1;
            for (const unit of jsonData.units) {
              if (unit.lessons && Array.isArray(unit.lessons)) {
                for (const lessonData of unit.lessons) {
                  const lessonContent = `# ${lessonData.title}\n\n${lessonData.goal || ''}\n\n${lessonData.micro_steps ? lessonData.micro_steps.join('\n') : ''}`;
                  const lesson = parseLessonContent(
                    lessonContent,
                    moduleId,
                    lessonData.lesson_id || `lesson-${order}`,
                    order
                  );
                  lessons.push(lesson);
                  order++;
                }
              }
            }
          }
          
          // If we got lessons from JSON, return them
          if (lessons.length > 0) {
            jsonLoaded = true;
            break;
          }
        }
      } catch {
        // try next candidate
      }
    }

    if (jsonLoaded) {
      cache.lessons.set(moduleId, lessons);
      updateCacheTimestamp(cacheKey);
      return lessons;
    }

    // Try legacy .txt files
    const lessonFiles = [
      'lesson-one.txt', 'lesson-two.txt', 'lesson-three.txt', 'lesson-four.txt',
      'lesson-five.txt', 'lesson-six.txt', 'lesson-seven.txt', 'lesson-eight.txt',
      'lesson-nine.txt', 'lesson-ten.txt', 'lesson-eleven.txt', 'lesson-twelve.txt',
      'lesson-thirteen.txt'
    ];

    let order = 1;
    for (const filename of lessonFiles) {
      try {
        const response = await fetch(`/${moduleId}/learning-path/${filename}`);
        if (response.ok) {
          // Reject the HTML SPA fallback that Vite returns for missing files
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('text/html')) {
            console.debug(`Skipping ${filename}: got HTML fallback instead of text`);
            continue;
          }
          const content = await response.text();
          if (content && content.trim().length > 0) {
            const lessonId = filename.replace('.txt', '');
            const lesson = parseLessonContent(content, moduleId, lessonId, order);
            lessons.push(lesson);
            order++;
          }
        }
      } catch (fileError) {
        // File doesn't exist, continue to next
        continue;
      }
    }

    // Last resort: if no lessons were found from any file source, generate
    // lessons from the module's flashcard topics. This ensures modules like
    // eaccma that have flashcards but no learning-path files still show content.
    if (lessons.length === 0) {
      const flashcardSet = await getFlashcards(moduleId);
      if (flashcardSet.cards.length > 0) {
        // Group cards by topic
        const topicMap = new Map<string, typeof flashcardSet.cards>();
        for (const card of flashcardSet.cards) {
          const topic = card.topic || 'General';
          if (!topicMap.has(topic)) topicMap.set(topic, []);
          topicMap.get(topic)!.push(card);
        }

        let order = 1;
        for (const [topic, cards] of topicMap) {
          // Build lesson content from the Q&A pairs
          const lines = [
            `# ${topic}`,
            '',
            `This lesson covers key concepts from the **${topic}** section.`,
            '',
            '## Key Terms and Concepts',
            '',
            ...cards.map(c => `**Q: ${c.front}**\n${c.back}`),
          ];
          const content = lines.join('\n\n');
          const lessonId = `topic-${order}`;
          lessons.push(parseLessonContent(content, moduleId, lessonId, order));
          order++;
        }
      }
    }
  } catch (error) {
    console.error(`Error loading lessons for ${moduleId}:`, error);
  }

  // Update cache
  cache.lessons.set(moduleId, lessons);
  updateCacheTimestamp(cacheKey);

  return lessons;
}

/**
 * Get a specific lesson
 */
export async function getLesson(
  moduleId: string,
  lessonId: string
): Promise<Lesson> {
  const lessons = await getLessons(moduleId);
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    throw new Error(`Lesson not found: ${lessonId} in module ${moduleId}`);
  }

  return lesson;
}

/**
 * Get all tests for a module
 */
export async function getTests(moduleId: string): Promise<Test[]> {
  if (!isValidModuleId(moduleId)) {
    throw new Error(`Invalid module ID: ${moduleId}`);
  }

  // Check cache
  const cacheKey = `tests-${moduleId}`;
  if (cache.tests.has(moduleId) && isCacheValid(cacheKey)) {
    return cache.tests.get(moduleId)!;
  }

  // Load tests from files
  const tests: Test[] = [];

  try {
    // Try to load from JSON first (newer format).
    // Some modules store their JSON in /assets/, others store it alongside
    // their content (e.g. eaccma stores it in /eaccma/).
    const jsonFilename = `${moduleId.replace(/-/g, '_')}_12_main_tests.json`;
    const jsonCandidates = [
      `/assets/${jsonFilename}`,
      `/${moduleId}/${jsonFilename}`,
    ];

    let jsonLoaded = false;
    for (const jsonPath of jsonCandidates) {
      try {
        const jsonResponse = await fetch(jsonPath);
        const jsonContentType = jsonResponse.headers.get('content-type');
        if (jsonResponse.ok && jsonContentType && jsonContentType.includes('json')) {
          const jsonData = await jsonResponse.json();
          
          if (jsonData.tests && Array.isArray(jsonData.tests)) {
            for (const testData of jsonData.tests) {
              // Normalize questions — different JSON files use different formats:
              // - Standard format: options is string[], correct is 0-based index
              // - EACCMA format: options is {A:..., B:..., C:..., D:...}, correct_answer is "B"
              const normalizedQuestions = (testData.questions || []).map((q: any) => {
                let options: string[];
                let correct: number;

                if (Array.isArray(q.options)) {
                  // Standard array format
                  options = q.options;
                  correct = typeof q.correct === 'number' ? q.correct : 0;
                } else if (q.options && typeof q.options === 'object') {
                  // Object format {A: "...", B: "...", ...}
                  const keys = Object.keys(q.options).sort(); // A, B, C, D
                  options = keys.map((k) => q.options[k]);
                  const correctLetter = (q.correct_answer || q.correct || 'A').toString().toUpperCase();
                  correct = Math.max(0, keys.indexOf(correctLetter));
                } else {
                  options = [];
                  correct = 0;
                }

                return {
                  id: q.id || q.question_number || 0,
                  question: q.question || '',
                  options,
                  correct,
                  explanation: q.explanation || '',
                };
              });

              const test: Test = {
                id: testData.test_id || `test-${testData.test_number}`,
                moduleId,
                title: testData.title || `Test ${testData.test_number}`,
                description: testData.description || `Assessment with ${normalizedQuestions.length} questions`,
                duration: testData.time_limit_minutes
                  ? testData.time_limit_minutes * 60
                  : testData.duration || (normalizedQuestions.length || 10) * 90,
                questions: normalizedQuestions,
                passingScore: testData.passing_score || 70
              };
              tests.push(test);
            }
          }
          
          if (tests.length > 0) {
            jsonLoaded = true;
            break;
          }
        }
      } catch {
        // try next candidate
      }
    }

    if (jsonLoaded) {
      cache.tests.set(moduleId, tests);
      updateCacheTimestamp(cacheKey);
      return tests;
    }

    // Try legacy questions.js files — support both word-form (test-one) and
    // numeric (test-1) directory naming conventions.
    const testDirsWordForm = [
      'test-one', 'test-two', 'test-three', 'test-four', 'test-five',
      'test-six', 'test-seven', 'test-eight', 'test-nine', 'test-ten',
      'test-eleven', 'test-twelve'
    ];
    const testDirsNumeric = Array.from({ length: 12 }, (_, i) => `test-${i + 1}`);

    // Try numeric first (more common in newer modules), then word-form
    const testDirCandidates = [...testDirsNumeric, ...testDirsWordForm];
    const seenTestNumbers = new Set<number>();

    for (const testDir of testDirCandidates) {
      // Avoid loading the same test twice (e.g. test-1 and test-one both map to test 1)
      const testNum = parseInt(testDir.replace(/\D/g, ''), 10);
      if (seenTestNumbers.has(testNum)) continue;

      try {
        const response = await fetch(`/${moduleId}/tests/${testDir}/questions.js`);
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('javascript')) {
            console.debug(`Skipping ${testDir}: got ${contentType} instead of JavaScript`);
            continue;
          }
          const content = await response.text();
          const test = parseTestQuestions(content, moduleId, testDir);
          tests.push(test);
          seenTestNumbers.add(testNum);
        }
      } catch {
        continue;
      }
    }
  } catch (error) {
    console.error(`Error loading tests for ${moduleId}:`, error);
  }

  // Update cache
  cache.tests.set(moduleId, tests);
  updateCacheTimestamp(cacheKey);

  return tests;
}

/**
 * Get a specific test
 */
export async function getTest(
  moduleId: string,
  testId: string
): Promise<Test> {
  const tests = await getTests(moduleId);
  const test = tests.find(t => t.id === testId);

  if (!test) {
    throw new Error(`Test not found: ${testId} in module ${moduleId}`);
  }

  return test;
}

/**
 * Get flashcards for a module
 */
export async function getFlashcards(moduleId: string): Promise<FlashcardSet> {
  if (!isValidModuleId(moduleId)) {
    throw new Error(`Invalid module ID: ${moduleId}`);
  }

  // Check cache
  const cacheKey = `flashcards-${moduleId}`;
  if (cache.flashcards.has(moduleId) && isCacheValid(cacheKey)) {
    return cache.flashcards.get(moduleId)!;
  }

  // Load flashcards from files
  let flashcardSet: FlashcardSet = {
    moduleId,
    cards: [],
    topics: []
  };

  try {
    // Try to load from JSON first (newer format)
    try {
      const jsonResponse = await fetch(`/assets/${moduleId.replace(/-/g, '_')}_flashcards.json`);
      const fcContentType = jsonResponse.headers.get('content-type');
      if (jsonResponse.ok && fcContentType && fcContentType.includes('json')) {
        const jsonData = await jsonResponse.json();
        
        // Extract flashcards from JSON structure
        if (jsonData.flashcards && Array.isArray(jsonData.flashcards)) {
          flashcardSet.cards = jsonData.flashcards.map((card: any, index: number) => ({
            id: card.id || index + 1,
            front: card.front || card.question || '',
            back: card.back || card.answer || '',
            topic: card.topic
          }));
        }
        
        // Extract topics if present
        if (jsonData.topics && Array.isArray(jsonData.topics)) {
          flashcardSet.topics = jsonData.topics;
        }
        
        // If we got flashcards from JSON, return them
        if (flashcardSet.cards.length > 0) {
          cache.flashcards.set(moduleId, flashcardSet);
          updateCacheTimestamp(cacheKey);
          return flashcardSet;
        }
      }
    } catch (jsonError) {
      // JSON loading failed, try legacy format
      console.debug(`JSON loading failed for ${moduleId}, trying legacy format`);
    }

    // Try legacy cards.js file
    try {
      const response = await fetch(`/flashcards/${moduleId}/cards.js`);
      if (response.ok) {
        // Verify we got JavaScript, not HTML fallback
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('javascript')) {
          const content = await response.text();
          flashcardSet = parseFlashcards(content, moduleId);
        } else {
          console.debug(`Skipping flashcards for ${moduleId}: got ${contentType} instead of JavaScript`);
        }
      }
    } catch (fileError) {
      console.debug(`Legacy flashcard file not found for ${moduleId}`);
    }
  } catch (error) {
    console.error(`Error loading flashcards for ${moduleId}:`, error);
  }

  // Update cache
  cache.flashcards.set(moduleId, flashcardSet);
  updateCacheTimestamp(cacheKey);

  return flashcardSet;
}

/**
 * Search content across all modules
 * 
 * Searches in:
 * - Module names and descriptions
 * - Lesson titles and content
 * - Test titles and questions
 * - Flashcard front and back text
 */
export interface SearchResult {
  type: 'module' | 'lesson' | 'test' | 'flashcard';
  moduleId: string;
  moduleName: string;
  id: string;
  title: string;
  snippet: string;
  relevance: number;
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const results: SearchResult[] = [];
  const searchTerm = query.toLowerCase().trim();

  // Search modules
  const modules = await getModules();
  for (const module of modules) {
    if (
      module.displayName.toLowerCase().includes(searchTerm) ||
      module.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        type: 'module',
        moduleId: module.id,
        moduleName: module.displayName,
        id: module.id,
        title: module.displayName,
        snippet: module.description,
        relevance: calculateRelevance(searchTerm, module.displayName + ' ' + module.description)
      });
    }

    // Search lessons in this module
    const lessons = await getLessons(module.id);
    for (const lesson of lessons) {
      if (
        lesson.title.toLowerCase().includes(searchTerm) ||
        lesson.content.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: 'lesson',
          moduleId: module.id,
          moduleName: module.displayName,
          id: lesson.id,
          title: lesson.title,
          snippet: extractSnippet(lesson.content, searchTerm),
          relevance: calculateRelevance(searchTerm, lesson.title + ' ' + lesson.content)
        });
      }
    }

    // Search tests in this module
    const tests = await getTests(module.id);
    for (const test of tests) {
      const testText = test.title + ' ' + test.questions.map(q => q.question).join(' ');
      if (testText.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'test',
          moduleId: module.id,
          moduleName: module.displayName,
          id: test.id,
          title: test.title,
          snippet: test.description,
          relevance: calculateRelevance(searchTerm, testText)
        });
      }
    }

    // Search flashcards in this module
    const flashcardSet = await getFlashcards(module.id);
    for (const card of flashcardSet.cards) {
      const cardText = card.front + ' ' + card.back;
      if (cardText.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'flashcard',
          moduleId: module.id,
          moduleName: module.displayName,
          id: card.id.toString(),
          title: card.front,
          snippet: card.back.substring(0, 100) + (card.back.length > 100 ? '...' : ''),
          relevance: calculateRelevance(searchTerm, cardText)
        });
      }
    }
  }

  // Sort by relevance
  results.sort((a, b) => b.relevance - a.relevance);

  return results;
}

/**
 * Calculate relevance score for search results
 */
function calculateRelevance(searchTerm: string, text: string): number {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();

  // Count occurrences
  const occurrences = (lowerText.match(new RegExp(lowerTerm, 'g')) || []).length;

  // Boost if term appears in the beginning
  const startsWithBoost = lowerText.startsWith(lowerTerm) ? 2 : 1;

  // Boost for exact word match
  const wordBoundaryRegex = new RegExp(`\\b${lowerTerm}\\b`, 'g');
  const exactMatches = (lowerText.match(wordBoundaryRegex) || []).length;

  return (occurrences + exactMatches * 2) * startsWithBoost;
}

/**
 * Extract a snippet of text around the search term
 */
function extractSnippet(text: string, searchTerm: string, maxLength: number = 150): string {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerTerm);

  if (index === -1) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  }

  // Extract text around the match
  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + searchTerm.length + 100);

  let snippet = text.substring(start, end);

  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';

  return snippet;
}

/**
 * Clear all caches
 */
export function clearCache(): void {
  cache.modules = undefined;
  cache.lessons.clear();
  cache.tests.clear();
  cache.flashcards.clear();
  cache.lastUpdated.clear();
}
