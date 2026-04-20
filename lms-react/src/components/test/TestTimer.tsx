import { useState, useEffect, useRef } from 'react';
import { Clock, Pause, AlertTriangle, TimerOff } from 'lucide-react';

interface TestTimerProps {
  duration: number;
  onTimeUp: () => void;
  isPaused: boolean;
}

/**
 * TestTimer Component
 * Requirements: 6.2, 6.3
 */
export function TestTimer({ duration, onTimeUp, isPaused }: TestTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const intervalRef = useRef<number | null>(null);
  const hasCalledTimeUp = useRef(false);

  useEffect(() => {
    setTimeRemaining(duration);
    hasCalledTimeUp.current = false;
  }, [duration]);

  useEffect(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setTimeRemaining((prev) => {
        const next = prev - 1;
        if (next <= 0 && !hasCalledTimeUp.current) {
          hasCalledTimeUp.current = true;
          onTimeUp();
          return 0;
        }
        return Math.max(0, next);
      });
    }, 1000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [isPaused, onTimeUp]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const isTimeLow = timeRemaining < 120 && timeRemaining > 0;
  const isUp = timeRemaining === 0;

  const containerStyle = isUp
    ? { backgroundColor: '#fef2f2', borderColor: '#fca5a5', color: '#991b1b' }
    : isTimeLow
    ? { backgroundColor: '#fff7ed', borderColor: '#fdba74', color: '#9a3412' }
    : { backgroundColor: '#f0fdf4', borderColor: '#86efac', color: '#166534' };

  return (
    <div
      className="p-4 rounded-xl border-2 transition-colors"
      style={containerStyle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Time Remaining</div>
            <div className="text-3xl font-bold font-mono tabular-nums" aria-live="polite">
              {formatTime(timeRemaining)}
            </div>
          </div>
        </div>

        {isPaused && (
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <Pause className="w-4 h-4" aria-hidden="true" />
            Paused
          </div>
        )}
      </div>

      {isTimeLow && !isPaused && (
        <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold" role="alert" aria-live="assertive">
          <AlertTriangle className="w-4 h-4" aria-hidden="true" />
          Less than 2 minutes remaining!
        </div>
      )}

      {isUp && (
        <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold" role="alert" aria-live="assertive">
          <TimerOff className="w-4 h-4" aria-hidden="true" />
          Time's up! Submitting automatically…
        </div>
      )}
    </div>
  );
}
