/**
 * Publications Page
 *
 * Displays a chronologically ordered list of academic papers.
 * Data comes from `data/publications.ts` — edit that file to add papers.
 *
 * NEXT.JS METADATA:
 * `export const metadata` sets the page <title> to "Publications | Jason Zhu"
 * using the template defined in the root layout.
 *
 * TAILWIND CLASSES EXPLAINED:
 * - space-y-8     → Adds 2rem vertical gap between each publication entry
 * - text-xs       → Extra-small text for metadata (venue, year)
 * - uppercase     → ALL CAPS for venue names (academic convention)
 * - tracking-wide → Slightly wider letter-spacing (pairs well with uppercase)
 * - inline-flex   → Makes links sit inline with an icon-like layout
 * - underline underline-offset-4 → Underlined links with spacing from text
 */

import type { Metadata } from "next";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Publications</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Selected papers, preprints, and workshop contributions.
      </p>

      {/* ── Publication list ──────────────────────────────────────────── */}
      <div className="mt-8 space-y-8">
        {publications.map((pub, index) => (
          <article
            key={index}
            className="border-l-2 border-gray-200 dark:border-gray-800 pl-4"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold tracking-tight">
              {pub.title}
            </h2>

            {/* Authors */}
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {pub.authors.join(", ")}
            </p>

            {/* Venue + year */}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
              {pub.venue} &middot; {pub.year}
            </p>

            {/* Abstract (if provided) */}
            {pub.abstract && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {pub.abstract}
              </p>
            )}

            {/* Links row */}
            <div className="mt-2 flex gap-4 text-sm">
              {pub.pdfUrl && (
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-700 dark:hover:decoration-gray-300 transition-colors"
                >
                  PDF
                </a>
              )}
              {pub.codeUrl && (
                <a
                  href={pub.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-700 dark:hover:decoration-gray-300 transition-colors"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
