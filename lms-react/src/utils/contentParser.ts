/**
 * Content Parser Utilities
 * 
 * Parses legacy content files (.txt, .js, .json) from the existing
 * static HTML/JavaScript implementation into typed data models.
 * 
 * Supports all eight modules:
 * - clearance-one
 * - customs-in-international-context
 * - customs-valuation-i
 * - wto-customs-valuation
 * - history-of-taxation
 * - theory-of-taxation
 * - tax-and-customs-theory
 * - eaccma
 */

import type { Lesson, Test, Question, Flashcard, FlashcardSet, FlashcardTopic } from '../types';

/**
 * Parse lesson content from .txt files or .js lesson data
 * 
 * Handles two formats:
 * 1. Plain text files (lesson-one.txt, lesson-two.txt, etc.)
 * 2. JavaScript lesson objects from lessons.js files
 * 
 * @param content - Raw file content (text or JavaScript code)
 * @param moduleId - Module identifier
 * @param lessonId - Lesson identifier
 * @param order - Lesson order in the learning path
 * @returns Parsed Lesson object
 */
export function parseLessonContent(
  content: string,
  moduleId: string,
  lessonId: string,
  order: number
): Lesson {
  // If content is empty or very short, return a minimal lesson
  if (!content || content.trim().length < 10) {
    return {
      id: lessonId,
      moduleId,
      title: `Lesson ${order}`,
      content: content.trim() || 'Content not available',
      order,
      estimatedMinutes: 5
    };
  }

  // Try to extract title from content
  let title = `Lesson ${order}`;
  let actualContent = content;

  // Check if content starts with a title pattern (e.g., "# Title" or "Title\n===")
  const titleMatch = content.match(/^#\s+(.+)$/m) || content.match(/^(.+)\n[=]{3,}/);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  // Estimate reading time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const estimatedMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: lessonId,
    moduleId,
    title,
    content: actualContent.trim(),
    order,
    estimatedMinutes
  };
}

/**
 * Parse test questions from questions.js files
 * 
 * Expected format:
 * ```javascript
 * const QUESTIONS = [
 *   {
 *     id: 1,
 *     question: "Question text?",
 *     options: ["Option 1", "Option 2", "Option 3", "Option 4"],
 *     correct: 0,
 *     explanation: "Optional explanation"
 *   },
 *   ...
 * ];
 * ```
 * 
 * @param content - Raw JavaScript file content
 * @param moduleId - Module identifier
 * @param testId - Test identifier
 * @returns Parsed Test object
 */
export function parseTestQuestions(
  content: string,
  moduleId: string,
  testId: string
): Test {
  try {
    // Extract the QUESTIONS array from the JavaScript file
    // Use greedy match to capture the full outer array (not stopping at first `];`)
    const questionsMatch = content.match(/const\s+QUESTIONS\s*=\s*(\[[\s\S]*\]);/);
    
    if (!questionsMatch) {
      throw new Error('Could not find QUESTIONS array in file');
    }

    // Parse the JavaScript array
    // Try to parse as JSON first (safer), fall back to eval if needed
    const questionsArrayStr = questionsMatch[1];
    let questions: Question[];
    
    try {
      // Try JSON.parse first (safest)
      questions = JSON.parse(questionsArrayStr);
    } catch {
      // Fall back to Function constructor for JavaScript literals
      try {
        questions = new Function(`'use strict'; return ${questionsArrayStr}`)();
      } catch {
        throw new Error('Could not parse questions array');
      }
    }

    // Validate questions
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid questions array');
    }

    // Calculate test duration (1.5 minutes per question, minimum 5 minutes)
    const duration = Math.max(300, questions.length * 90);

    // Generate test title from testId
    const testNumber = testId.replace(/\D/g, '');
    const title = `Test ${testNumber}`;

    return {
      id: testId,
      moduleId,
      title,
      description: `Assessment with ${questions.length} questions`,
      duration,
      questions,
      passingScore: 70 // Default passing score
    };
  } catch (error) {
    console.error('Error parsing test questions:', error);
    // Return a minimal test on error
    return {
      id: testId,
      moduleId,
      title: 'Test',
      description: 'Test content unavailable',
      duration: 300,
      questions: [],
      passingScore: 70
    };
  }
}

/**
 * Parse flashcards from cards.js files
 * 
 * Expected format:
 * ```javascript
 * const TOPICS = [
 *   { id: 1, label: "Topic Name", range: [1, 10] },
 *   ...
 * ];
 * 
 * const CARDS = [
 *   { id: 1, front: "Question", back: "Answer" },
 *   ...
 * ];
 * ```
 * 
 * @param content - Raw JavaScript file content
 * @param moduleId - Module identifier
 * @returns Parsed FlashcardSet object
 */
export function parseFlashcards(
  content: string,
  moduleId: string
): FlashcardSet {
  try {
    // Extract CARDS array — supports both `const CARDS = [...]` and `const flashcards = [...]`
    const cardsMatch =
      content.match(/const\s+CARDS\s*=\s*(\[[\s\S]*\]);/) ||
      content.match(/const\s+flashcards\s*=\s*(\[[\s\S]*\]);/);
    
    if (!cardsMatch) {
      throw new Error('Could not find CARDS array in file');
    }

    const cardsArrayStr = cardsMatch[1];
    let cards: Flashcard[];
    
    try {
      // Try JSON.parse first (safest)
      cards = JSON.parse(cardsArrayStr);
    } catch {
      // Fall back to Function constructor for JavaScript literals
      try {
        cards = new Function(`'use strict'; return ${cardsArrayStr}`)();
      } catch {
        throw new Error('Could not parse cards array');
      }
    }

    // Extract TOPICS array (optional)
    let topics: FlashcardTopic[] | undefined;
    const topicsMatch = content.match(/const\s+TOPICS\s*=\s*(\[[\s\S]*\]);/);
    
    if (topicsMatch) {
      const topicsArrayStr = topicsMatch[1];
      try {
        topics = JSON.parse(topicsArrayStr);
      } catch {
        try {
          topics = new Function(`'use strict'; return ${topicsArrayStr}`)();
        } catch {
          // Ignore topics parsing errors
          topics = undefined;
        }
      }
    }

    // Validate cards
    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error('Invalid cards array');
    }

    return {
      moduleId,
      cards,
      topics
    };
  } catch (error) {
    console.error('Error parsing flashcards:', error);
    // Return empty flashcard set on error
    return {
      moduleId,
      cards: [],
      topics: []
    };
  }
}

/**
 * Parse JSON content from assets/*.json files
 * 
 * These files contain structured learning path data, test questions,
 * or flashcard data in JSON format.
 * 
 * @param content - Raw JSON string
 * @returns Parsed JSON object
 */
export function parseJSONContent<T = any>(content: string): T {
  try {
    return JSON.parse(content);
  } catch (error) {
    console.error('Error parsing JSON content:', error);
    throw new Error('Invalid JSON content');
  }
}

/**
 * Module metadata for all modules
 */
export const MODULE_METADATA = {
  'clearance-one': {
    name: 'clearance-one',
    displayName: 'Customs Clearance I',
    description: 'Introduction to customs clearance procedures and prohibited/restricted goods',
    icon: '📦',
    color: '#3B82F6'
  },
  'customs-in-international-context': {
    name: 'customs-in-international-context',
    displayName: 'Customs in International Context',
    description: 'Understanding customs within the framework of international trade',
    icon: '🌍',
    color: '#10B981'
  },
  'customs-valuation-i': {
    name: 'customs-valuation-i',
    displayName: 'Customs Valuation I',
    description: 'Fundamentals of customs valuation methods and principles',
    icon: '💰',
    color: '#F59E0B'
  },
  'article-vii-valuation': {
    name: 'article-vii-valuation',
    displayName: 'Article VII Valuation',
    description: 'Agreement on Implementation of Article VII of GATT 1994',
    icon: '📜',
    color: '#8B5CF6'
  },
  'wto-customs-valuation': {
    name: 'wto-customs-valuation',
    displayName: 'WTO Customs Valuation',
    description: 'WTO Agreement on Customs Valuation and Article VII',
    icon: '⚖️',
    color: '#7C3AED'
  },
  'history-of-taxation': {
    name: 'history-of-taxation',
    displayName: 'History of Taxation',
    description: 'Evolution and development of taxation systems',
    icon: '📜',
    color: '#EF4444'
  },
  'theory-of-taxation': {
    name: 'theory-of-taxation',
    displayName: 'Theory of Taxation',
    description: 'Theoretical foundations and principles of taxation',
    icon: '📚',
    color: '#06B6D4'
  },
  'tax-and-customs-theory': {
    name: 'tax-and-customs-theory',
    displayName: 'Tax and Customs Theory',
    description: 'Integrated theory of tax and customs administration',
    icon: '🎓',
    color: '#EC4899'
  },
  'eaccma': {
    name: 'eaccma',
    displayName: 'EACCMA',
    description: 'East African Community Customs Management Act',
    icon: '📋',
    color: '#14B8A6'
  }
} as const;

/**
 * Get module IDs
 */
export function getModuleIds(): string[] {
  return Object.keys(MODULE_METADATA);
}

/**
 * Check if a module ID is valid
 */
export function isValidModuleId(moduleId: string): boolean {
  return moduleId in MODULE_METADATA;
}
