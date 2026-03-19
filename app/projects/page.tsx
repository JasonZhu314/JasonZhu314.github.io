/**
 * Projects Page
 *
 * Showcases engineering projects, open-source tools, and autonomous
 * research workflows — distinct from formal academic research.
 * Data comes from `data/projects.ts`.
 *
 * DESIGN:
 * - Simple card layout, similar to the research page but more compact
 * - Each card has a title, description, tech tags, and optional links
 *
 * TAILWIND CLASSES EXPLAINED:
 * - grid grid-cols-1 sm:grid-cols-2 → Single column on mobile, 2 columns on wider screens
 *   ("sm:" = screens ≥ 640px)
 * - gap-4            → 1rem gap between grid items
 * - hover:border-gray-400 → Border becomes more visible on hover
 */

import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Engineering projects, open-source tools, and experiments.
      </p>

      {/* ── Project cards ─────────────────────────────────────────────── */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            {/* Project title */}
            <h2 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-3 flex gap-4 text-sm">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-700 dark:hover:decoration-gray-300 transition-colors"
                >
                  Demo
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
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
