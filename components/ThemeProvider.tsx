/**
 * Theme Provider (Client Component)
 *
 * Wraps the entire app with next-themes so every component can read
 * and change the current theme (light / dark / system).
 *
 * WHY "use client"?
 * Next.js App Router renders components on the SERVER by default.
 * `next-themes` needs access to browser APIs (localStorage, matchMedia)
 * to detect and persist the user's theme preference, so it must run
 * in the browser → we mark this file as a Client Component.
 *
 * PROPS EXPLAINED:
 * - attribute="class"  → Toggles a `class="dark"` on <html>, which
 *   Tailwind's `dark:` variants use to switch colors.
 * - defaultTheme="system" → On first visit, match the OS preference.
 * - enableSystem → Allow "system" as a theme option.
 * - disableTransitionOnChange → Prevents a flash of animation when
 *   switching themes (keeps the toggle feeling instant).
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
