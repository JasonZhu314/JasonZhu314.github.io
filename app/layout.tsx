/**
 * Root Layout — the outermost shell of every page.
 *
 * In Next.js App Router, `layout.tsx` wraps ALL pages. It defines:
 * 1. The <html> and <body> tags (only place you can do this).
 * 2. Shared UI that appears on every page (header, footer).
 * 3. Global providers (theme, fonts, CSS).
 *
 * HOW FONTS WORK:
 * `next/font/google` downloads Inter at build time and self-hosts it,
 * so there's no external request to Google Fonts at runtime.
 * The `variable` option creates a CSS custom property `--font-inter`
 * that we reference in tailwind.config.ts → `fontFamily.sans`.
 *
 * THE `children` PROP:
 * React's composition model — `{children}` is whatever page component
 * matches the current URL route. Think of it as a "slot" that changes
 * as the user navigates between pages.
 *
 * LAYOUT STRUCTURE:
 * We use a flex column layout with `min-h-screen` so the footer always
 * sits at the bottom, even on pages with little content.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

/* Load the Inter font with Latin subset */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creates CSS variable: var(--font-inter)
});

/* Metadata used for <title> and <meta> tags in the <head> */
export const metadata: Metadata = {
  title: {
    default: "Jason Zhu",
    template: "%s | Jason Zhu", // Child pages can set their own title
  },
  description:
    "Personal homepage and blog — AI, Mathematics, and Scientific Machine Learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning // Required by next-themes to avoid hydration warning
    >
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Sticky header with navigation */}
          <Header />

          {/* Main content area — max width 48rem, centered, with padding */}
          <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
            {children}
          </main>

          {/* Footer pushed to bottom by flex-1 on <main> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
