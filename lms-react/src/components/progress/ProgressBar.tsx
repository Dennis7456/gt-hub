/**
 * ProgressBar Component
 * Visual progress indicator with percentage display.
 * Memoized with React.memo to prevent re-renders when parent re-renders
 * but props haven't changed.
 * Validates: Requirements 8.2, 8.3, 8.4, 15.1
 */

import { memo, useMemo } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

function getColorClass(percentage: number): string {
  if (percentage >= 100) return 'bg-green-500';
  if (percentage >= 75) return 'bg-blue-500';
  if (percentage >= 50) return 'bg-yellow-500';
  if (percentage >= 25) return 'bg-orange-500';
  return 'bg-red-500';
}

export const ProgressBar = memo(function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = useMemo(
    () => (total > 0 ? Math.round((current / total) * 100) : 0),
    [current, total]
  );

  const colorClass = useMemo(() => getColorClass(percentage), [percentage]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1 text-sm">
          <span className="text-gray-700 dark:text-gray-300">{label}</span>
          <span className="text-gray-600 dark:text-gray-400">
            {current} / {total} ({percentage}%)
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${colorClass}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label || `Progress: ${percentage}%`}
        />
      </div>
    </div>
  );
});
