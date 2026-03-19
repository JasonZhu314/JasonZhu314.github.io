/**
 * Research Page
 *
 * High-level summaries of active and ongoing research areas.
 * Data comes from `data/research.ts` — edit that file to add topics.
 *
 * DESIGN:
 * - Each research area is a full-width card with a subtle border
 * - Status badges indicate whether work is active, ongoing, or completed
 * - Tags help visitors quickly identify relevant topics
 *
 * TAILWIND CLASSES EXPLAINED:
 * - rounded-lg     → Large border radius (0.5rem) for card corners
 * - p-6            → 1.5rem padding inside each card
 * - leading-relaxed → Generous line-height for long descriptions
 */

import type { Metadata } from "next";
import { researchAreas } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
};

/** Maps status to a display style */
const statusStyles: Record<string, string> = {
  active:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  ongoing:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  completed:
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
};

export default function ResearchPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Research</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Current and past research areas spanning neural operators,
        generative models, and the mathematical foundations of deep learning.
      </p>

      {/* ── Research areas ────────────────────────────────────────────── */}
      <div className="mt-8 space-y-6">
        {researchAreas.map((area, index) => (
          <article
            key={index}
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-6"
          >
            {/* Title + status badge */}
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {area.title}
              </h2>
              <span
                className={`shrink-0 px-2 py-0.5 rounded text-xs font-medium capitalize ${
                  statusStyles[area.status] ?? statusStyles.ongoing
                }`}
              >
                {area.status}
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              {area.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
