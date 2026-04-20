import { useEffect, useRef } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import type { Lesson } from '../../types';

interface LessonContentProps {
  lesson: Lesson;
  moduleId: string;
}

/**
 * LessonContent component
 * Renders lesson text with markdown-style formatting
 * Marks lesson as viewed on component mount
 * 
 * Validates: Requirements 5.1, 5.2
 */
export function LessonContent({ lesson, moduleId }: LessonContentProps) {
  const { markLessonComplete } = useProgress();
  const { user } = useAuth();
  // Guard against double-firing in React StrictMode and rapid remounts.
  // Tracks the lesson ID that has already been submitted so we never send
  // the same upsert twice within the same component lifetime.
  const markedRef = useRef<string | null>(null);

  // Mark lesson as viewed on mount — only once the user is authenticated.
  // AuthContext resolves asynchronously, so user may be null on first render
  // even inside a ProtectedRoute. We wait for user to be available.
  useEffect(() => {
    if (!user) return;
    // Already fired for this lesson — skip.
    if (markedRef.current === lesson.id) return;
    markedRef.current = lesson.id;

    const markAsViewed = async () => {
      try {
        await markLessonComplete(moduleId, lesson.id);
      } catch (error) {
        console.error('Failed to mark lesson as complete:', error);
      }
    };

    markAsViewed();
  }, [lesson.id, moduleId, markLessonComplete, user]);

  /**
   * Parse and format lesson content with markdown-style formatting
   */
  const formatContent = (content: string): React.ReactElement[] => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-3xl font-bold mb-4 mt-6">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold mb-3 mt-5">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-bold mb-2 mt-4">
            {line.substring(4)}
          </h3>
        );
      }
      // Unordered lists
      else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listItems: React.ReactElement[] = [];
        let j = i;
        
        while (j < lines.length && (lines[j].trim().startsWith('- ') || lines[j].trim().startsWith('* '))) {
          const itemText = lines[j].trim().substring(2);
          listItems.push(
            <li key={key++} className="mb-1">
              {formatInlineText(itemText)}
            </li>
          );
          j++;
        }
        
        elements.push(
          <ul key={key++} className="list-disc list-inside mb-4 ml-4">
            {listItems}
          </ul>
        );
        i = j - 1;
      }
      // Ordered lists
      else if (/^\d+\.\s/.test(line.trim())) {
        const listItems: React.ReactElement[] = [];
        let j = i;
        
        while (j < lines.length && /^\d+\.\s/.test(lines[j].trim())) {
          const itemText = lines[j].trim().replace(/^\d+\.\s/, '');
          listItems.push(
            <li key={key++} className="mb-1">
              {formatInlineText(itemText)}
            </li>
          );
          j++;
        }
        
        elements.push(
          <ol key={key++} className="list-decimal list-inside mb-4 ml-4">
            {listItems}
          </ol>
        );
        i = j - 1;
      }
      // Code blocks
      else if (line.trim().startsWith('```')) {
        const codeLines: string[] = [];
        let j = i + 1;
        
        while (j < lines.length && !lines[j].trim().startsWith('```')) {
          codeLines.push(lines[j]);
          j++;
        }
        
        elements.push(
          <pre key={key++} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm font-mono">{codeLines.join('\n')}</code>
          </pre>
        );
        i = j;
      }
      // Images
      else if (line.trim().startsWith('![')) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, alt, src] = match;
          elements.push(
            <img
              key={key++}
              src={src}
              alt={alt}
              className="max-w-full h-auto rounded-lg mb-4"
              loading="lazy"
            />
          );
        }
      }
      // Empty lines
      else if (line.trim() === '') {
        // Skip empty lines, spacing is handled by margins
        continue;
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={key++} className="mb-4 leading-relaxed">
            {formatInlineText(line)}
          </p>
        );
      }
    }

    return elements;
  };

  /**
   * Format inline text with bold, italic, and code
   */
  const formatInlineText = (text: string): (string | React.ReactElement)[] => {
    const parts: (string | React.ReactElement)[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold text **text**
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.substring(0, boldMatch.index));
        }
        parts.push(
          <strong key={`bold-${key++}`} className="font-bold">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
        continue;
      }

      // Italic text *text*
      const italicMatch = remaining.match(/\*(.*?)\*/);
      if (italicMatch && italicMatch.index !== undefined) {
        if (italicMatch.index > 0) {
          parts.push(remaining.substring(0, italicMatch.index));
        }
        parts.push(
          <em key={`italic-${key++}`} className="italic">
            {italicMatch[1]}
          </em>
        );
        remaining = remaining.substring(italicMatch.index + italicMatch[0].length);
        continue;
      }

      // Inline code `code`
      const codeMatch = remaining.match(/`(.*?)`/);
      if (codeMatch && codeMatch.index !== undefined) {
        if (codeMatch.index > 0) {
          parts.push(remaining.substring(0, codeMatch.index));
        }
        parts.push(
          <code
            key={`code-${key++}`}
            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono"
          >
            {codeMatch[1]}
          </code>
        );
        remaining = remaining.substring(codeMatch.index + codeMatch[0].length);
        continue;
      }

      // No more formatting, add remaining text
      parts.push(remaining);
      break;
    }

    return parts;
  };

  return (
    <div className="lesson-content prose prose-lg max-w-none">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Estimated time: {lesson.estimatedMinutes} minutes
        </p>
      </div>
      <div className="text-gray-800 dark:text-gray-200">
        {formatContent(lesson.content)}
      </div>
    </div>
  );
}
