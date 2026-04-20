import { CheckCircle2, XCircle } from 'lucide-react';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation?: string;
}

/**
 * AnswerFeedback Component
 * Requirements: 6.6
 */
export function AnswerFeedback({ isCorrect, explanation }: AnswerFeedbackProps) {
  return (
    <div
      className={`p-4 rounded-xl border-2 ${
        isCorrect
          ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
          : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 mb-1">
        {isCorrect ? (
          <>
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" aria-hidden="true" />
            <span className="font-semibold text-green-800 dark:text-green-200">Correct!</span>
          </>
        ) : (
          <>
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" aria-hidden="true" />
            <span className="font-semibold text-red-800 dark:text-red-200">Incorrect</span>
          </>
        )}
      </div>
      {explanation && (
        <p className={`text-sm mt-1 ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
          {explanation}
        </p>
      )}
    </div>
  );
}
