/**
 * Dark Mode Toggle Button (Client Component)
 *
 * A small button in the header that switches between light and dark themes.
 *
 * WHY the `mounted` state?
 * During server-side rendering, we don't know the user's theme yet.
 * If we rendered the sun/moon icon on the server, it might not match
 * what the client shows → a "hydration mismatch" error.
 * So we render nothing until the component mounts in the browser.
 *
 * TAILWIND CLASSES EXPLAINED:
 * - p-2           → padding of 0.5rem (8px) on all sides
 * - rounded-md    → medium border radius (slightly rounded corners)
 * - hover:bg-gray-200 → light gray background when hovered (light mode)
 * - dark:hover:bg-gray-800 → darker background when hovered (dark mode)
 * - transition-colors → animate the color change smoothly
 */

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After the component mounts in the browser, we can safely show the icon
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing during SSR to prevent hydration mismatch
  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  // `resolvedTheme` gives us "light" or "dark" even when theme is "system"
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Simple text icons — no icon library needed */}
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
