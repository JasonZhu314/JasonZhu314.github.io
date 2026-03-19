/**
 * Site Footer
 *
 * A minimal footer shown at the bottom of every page.
 * Displays copyright and optional social links.
 *
 * TAILWIND CLASSES EXPLAINED:
 * - mt-auto         → Pushes the footer to the bottom in a flex column layout
 * - border-t        → Top border line for visual separation from content
 * - text-sm         → Smaller font size (0.875rem)
 * - text-gray-500   → Medium-gray text, subtle and unobtrusive
 * - text-center     → Center-align the text
 */

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Jason Zhu. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/JasonZhu314"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          {/* Add more social links here as needed */}
        </div>
      </div>
    </footer>
  );
}
