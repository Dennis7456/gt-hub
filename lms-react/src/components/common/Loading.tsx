/**
 * Loading component
 * Validates: Requirements 14.3
 */

interface LoadingProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
}

const sizeMap = {
  sm: 'h-6 w-6 border-2',
  md: 'h-10 w-10 border-[3px]',
  lg: 'h-16 w-16 border-4',
};

export function Loading({ label = 'Loading…', size = 'md', fullPage = false }: LoadingProps) {
  const spinner = (
    <div role="status" aria-label={label} className="flex flex-col items-center gap-3">
      <div
        className={`animate-spin rounded-full border-t-transparent ${sizeMap[size]}`}
        style={{ borderColor: '#006633', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--surface-bg)' }}>
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-12">{spinner}</div>;
}
