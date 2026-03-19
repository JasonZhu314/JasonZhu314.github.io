/**
 * Site Header / Navigation Bar
 *
 * Displayed at the top of every page via the root layout.
 * Contains the site title (links home) and navigation links.
 *
 * ARCHITECTURE NOTE:
 * This is a Server Component (no "use client" directive). It renders
 * static HTML on the server. The ThemeToggle inside it IS a Client
 * Component — Next.js handles this boundary automatically.
 *
 * TAILWIND CLASSES EXPLAINED:
 * - sticky top-0 z-50        → Sticks to the top of the viewport on scroll,
 *                                z-50 ensures it stays above other content
 * - backdrop-blur-sm          → Subtle frosted-glass blur effect on scroll
 * - bg-white/80               → White background at 80% opacity (allows blur)
 * - dark:bg-gray-950/80       → Dark mode equivalent
 * - border-b border-gray-200  → Thin bottom border for visual separation
 * - max-w-3xl mx-auto         → Centers content with a max width of 48rem
 * - px-6 py-4                 → Horizontal and vertical padding
 * - flex items-center justify-between → Flexbox: items on one line, spaced apart
 * - gap-6                     → 1.5rem gap between nav links
 */

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

/** Navigation links — edit this array to add/remove pages from the nav */
const navLinks = [
  { href: "/publications", label: "Publications" },
  { href: "/talks", label: "Talks" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ── Site title / home link ─────────────────────────────────── */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          Jason Zhu
        </Link>

        {/* ── Nav links + dark mode toggle ───────────────────────────── */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors hidden sm:inline"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {/* ── Mobile navigation (visible on small screens) ────────────── */}
      <nav className="sm:hidden border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-2 flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
