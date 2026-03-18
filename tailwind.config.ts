/**
 * Tailwind CSS Configuration
 *
 * Key concepts:
 * - `content`: Tells Tailwind which files to scan for class names so it can
 *   remove unused CSS in production (tree-shaking).
 *
 * - `darkMode: 'class'`: Enables dark mode by toggling a `dark` class on <html>.
 *   This works with next-themes to let users switch between light/dark.
 *
 * - `theme.extend`: Adds custom values ON TOP of Tailwind's defaults.
 *   We're adding the Inter font family here so `font-sans` uses Inter.
 *
 * - `plugins`: @tailwindcss/typography adds the `prose` class, which automatically
 *   styles rendered HTML (like our blog posts) with good typography defaults.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
