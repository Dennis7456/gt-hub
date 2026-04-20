/**
 * Footer component
 * App-level footer with copyright notice and useful links.
 * Validates: Requirements 14.2
 */

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t mt-auto"
      style={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #006633, #004d26)' }}>
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {CURRENT_YEAR} GT Hub — KRA Graduate Trainee Hub
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 list-none m-0 p-0">
              <li>
                <a href="/" className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  Home
                </a>
              </li>
              <li>
                <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">|</span>
              </li>
              <li>
                <a href="/search" className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                  Search
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
