/**
 * Card component
 * Generic content container with optional header, body, and footer sections.
 * Validates: Requirements 14.1, 14.5
 */

import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Optional padding override — defaults to true (p-6) */
  padded?: boolean;
  /** Render as a clickable element (adds hover/focus styles) */
  interactive?: boolean;
  /** Accessible label when the card is interactive */
  'aria-label'?: string;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Root card container.
 */
export function Card({
  children,
  padded = true,
  interactive = false,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'bg-white dark:bg-gray-800 rounded-lg shadow-md',
        padded ? 'p-6' : '',
        interactive
          ? 'hover:shadow-lg transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
          : '',
        className,
      ].join(' ')}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Optional card header — renders a bottom border separator.
 */
export function CardHeader({ children, className = '', ...rest }: CardHeaderProps) {
  return (
    <div
      className={[
        'px-6 py-4 border-b border-gray-200 dark:border-gray-700',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Card body — adds consistent padding.
 */
export function CardBody({ children, className = '', ...rest }: CardBodyProps) {
  return (
    <div className={['px-6 py-4', className].join(' ')} {...rest}>
      {children}
    </div>
  );
}

/**
 * Optional card footer — renders a top border separator.
 */
export function CardFooter({ children, className = '', ...rest }: CardFooterProps) {
  return (
    <div
      className={[
        'px-6 py-4 border-t border-gray-200 dark:border-gray-700',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
