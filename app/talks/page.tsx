/**
 * Talks & Presentations Page
 *
 * Displays seminars, talks, posters, and slide decks.
 * Data comes from `data/talks.ts` — edit that file to add entries.
 *
 * DESIGN:
 * - Each talk type gets a small colored badge
 * - Talks are listed chronologically (newest first, already sorted in data)
 * - Slide links open in a new tab
 *
 * TAILWIND CLASSES EXPLAINED:
 * - divide-y       → Adds a border BETWEEN child elements (not above first or below last)
 * - py-6           → Vertical padding on each talk entry (top and bottom)
 * - first:pt-0     → Remove top padding from the first item
 */

import type { Metadata } from "next";
import { talks } from "@/data/talks";

export const metadata: Metadata = {
  title: "Talks",
};

/** Maps talk type to a human-readable label */
const typeLabels: Record<string, string> = {
  talk: "Talk",
  seminar: "Seminar",
  poster: "Poster",
  slides: "Slides",
};

export default function TalksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Talks</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Presentations, seminars, posters, and slide decks.
      </p>

      {/* ── Talks list ────────────────────────────────────────────────── */}
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-800">
        {talks.map((talk, index) => (
          <article key={index} className="py-6 first:pt-0">
            {/* Type badge + date */}
            <div className="flex items-center gap-3 text-sm">
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {typeLabels[talk.type] ?? talk.type}
              </span>
              <time
                dateTime={talk.date}
                className="text-gray-500 dark:text-gray-400"
              >
                {new Date(talk.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {/* Title */}
            <h2 className="mt-2 text-lg font-semibold tracking-tight">
              {talk.title}
            </h2>

            {/* Event */}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {talk.event}
            </p>

            {/* Description */}
            {talk.description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {talk.description}
              </p>
            )}

            {/* Slides link */}
            {talk.slidesUrl && (
              <a
                href={talk.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-gray-700 dark:text-gray-300 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-700 dark:hover:decoration-gray-300 transition-colors"
              >
                View slides &rarr;
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
