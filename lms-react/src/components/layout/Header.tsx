/**
 * Header component
 * App-level header with title and navigation bar.
 * Validates: Requirements 14.2
 */

import { Navigation } from './Navigation';

interface HeaderProps {
  /** Whether to render the Navigation bar inside the header */
  showNavigation?: boolean;
}

/**
 * Header wraps the Navigation bar and provides a semantic <header> landmark.
 * In most layouts the Navigation is rendered directly via AppLayout in App.tsx,
 * so this component is available for pages that need a standalone header.
 */
export function Header({ showNavigation = true }: HeaderProps) {
  return (
    <header role="banner">
      {showNavigation && <Navigation />}
    </header>
  );
}
