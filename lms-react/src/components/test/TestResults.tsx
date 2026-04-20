import { CheckCircle2, XCircle, Trophy, RotateCcw, Calendar } from 'lucide-react';
import { type Question } from '../../types';

interface TestResultsProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: (number | undefined)[];
  onRetake: () => void;
  completedAt: Date;
}

/**
 * TestResults Component
 * Requirements: 6.5, 6.6, 9.6
 */
export function TestResults({ score, totalQuestions, questions, userAnswers, onRetake, completedAt }: TestResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70;

  const scoreColor = percentage >= 90 ? '#16a34a' : percentage >= 70 ? '#006633' : percentage >= 50 ? '#d97706' : '#dc2626';

  const formatDateTime = (d: Date) =>
    new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(d);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Score card */}
      <div className="gt-card p-8 text-center">
        {passed ? (
          <Trophy className="w-14 h-14 mx-auto mb-4 text-yellow-500" aria-hidden="true" />
        ) : (
          <XCircle className="w-14 h-14 mx-auto mb-4 text-red-400" aria-hidden="true" />
        )}

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Test Complete!</h2>

        <div className="text-7xl font-extrabold my-4 tabular-nums" style={{ color: scoreColor }}>
          {percentage}%
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">
          {score} out of {totalQuestions} correct
        </p>

        <div className="mb-5">
          {passed ? (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Passed
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200">
              <XCircle className="w-4 h-4" aria-hidden="true" /> Not Passed
            </span>
          )}
        </div>

        <p className="flex items-center justify-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          {formatDateTime(completedAt)}
        </p>

        <button
          onClick={onRetake}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          style={{ backgroundColor: '#006633' }}
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          Retake Test
        </button>
      </div>

      {/* Detailed review */}
      <div className="gt-card p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Review Your Answers</h3>
        <div className="space-y-5">
          {questions.map((q, i) => {
            const ua = userAnswers[i];
            const correct = ua === q.correct;
            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border-2 ${
                  correct
                    ? 'bg-green-50 dark:bg-green-900/15 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/15 border-red-200 dark:border-red-800'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Question {i + 1}
                    </span>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mt-1 leading-snug">
                      {q.question}
                    </h4>
                  </div>
                  {correct ? (
                    <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400 flex-shrink-0" aria-label="Correct" />
                  ) : (
                    <XCircle className="w-7 h-7 text-red-600 dark:text-red-400 flex-shrink-0" aria-label="Incorrect" />
                  )}
                </div>

                {ua !== undefined && (
                  <p className="text-sm mb-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Your answer: </span>
                    <span className={correct ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}>
                      {String.fromCharCode(65 + ua)}. {q.options[ua]}
                    </span>
                  </p>
                )}

                {!correct && (
                  <p className="text-sm mb-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Correct answer: </span>
                    <span className="text-green-700 dark:text-green-300">
                      {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}
                    </span>
                  </p>
                )}

                {q.explanation && (
                  <div className="mt-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Explanation</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
