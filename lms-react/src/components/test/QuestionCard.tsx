import { memo } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { type Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer?: number;
  showFeedback: boolean;
  onAnswer: (answerId: number) => void;
}

/**
 * QuestionCard Component
 * Requirements: 6.1, 6.4, 6.6, 15.1
 */
export const QuestionCard = memo(function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  showFeedback,
  onAnswer,
}: QuestionCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if ((e.key === 'Enter' || e.key === ' ') && !showFeedback) {
      e.preventDefault();
      onAnswer(idx);
    }
  };

  const getOptionStyle = (idx: number): string => {
    const base = 'p-4 border-2 rounded-xl cursor-pointer transition-all min-h-[44px]';
    if (showFeedback) {
      if (idx === question.correct) return `${base} bg-green-50 dark:bg-green-900/20 border-green-500`;
      if (idx === selectedAnswer) return `${base} bg-red-50 dark:bg-red-900/20 border-red-500`;
      return `${base} bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60`;
    }
    if (idx === selectedAnswer) return `${base} border-green-600 bg-green-50 dark:bg-green-900/20`;
    return `${base} border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800`;
  };

  return (
    <div className="gt-card p-5 sm:p-6 mb-5">
      {/* Header */}
      <div className="mb-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
          style={{ backgroundColor: '#dcfce7', color: '#166534' }}>
          Question {questionNumber}
        </span>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-2.5" role="radiogroup" aria-label={`Options for question ${questionNumber}`}>
        {question.options.map((option, idx) => (
          <div
            key={idx}
            className={getOptionStyle(idx)}
            onClick={() => !showFeedback && onAnswer(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            role="radio"
            aria-checked={selectedAnswer === idx}
            aria-label={`Option ${idx + 1}: ${option}`}
            tabIndex={showFeedback ? -1 : 0}
          >
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: selectedAnswer === idx && !showFeedback ? '#006633' : '#f1f5f9',
                  color: selectedAnswer === idx && !showFeedback ? '#fff' : '#475569',
                }}>
                {String.fromCharCode(65 + idx)}
              </span>
              <span className={`flex-1 text-sm sm:text-base ${
                showFeedback && idx === question.correct
                  ? 'text-green-800 dark:text-green-200 font-medium'
                  : showFeedback && idx === selectedAnswer
                  ? 'text-red-800 dark:text-red-200'
                  : 'text-gray-800 dark:text-gray-200'
              }`}>
                {option}
              </span>
              {showFeedback && (
                <span className="ml-2 flex-shrink-0">
                  {idx === question.correct && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" aria-label="Correct answer" />
                  )}
                  {idx === selectedAnswer && idx !== question.correct && (
                    <XCircle className="w-5 h-5 text-red-600" aria-label="Incorrect answer" />
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Explanation */}
      {showFeedback && question.explanation && (
        <div className="mt-4 p-4 rounded-xl border" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }} aria-live="polite">
          <p className="text-sm font-semibold mb-1" style={{ color: '#166534' }}>Explanation</p>
          <p className="text-sm" style={{ color: '#15803d' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  );
});
