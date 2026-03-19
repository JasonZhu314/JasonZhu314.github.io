/**
 * Landing Page (Home)
 *
 * This is the root page shown at `/`. It displays a minimalist hero
 * section with your name, position, and a brief introduction.
 *
 * DESIGN PHILOSOPHY:
 * - Maximum whitespace, minimal elements
 * - Typography does all the heavy lifting — no images or decorations
 * - The page should feel like a well-typeset academic document
 *
 * TAILWIND CLASSES EXPLAINED:
 * - pt-16 pb-12       → Large top/bottom padding for breathing room
 * - text-4xl          → Font size 2.25rem (36px) — the hero headline
 * - font-bold         → Bold weight for the name
 * - tracking-tight    → Tighter letter-spacing for large text (looks cleaner)
 * - leading-relaxed   → 1.625 line height for comfortable paragraph reading
 * - max-w-2xl         → Constrains paragraph width for optimal reading (~65 chars)
 * - mt-6, mt-8        → Margin-top spacing between sections
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-16 pb-12">
      {/* ── Hero section ───────────────────────────────────────────────── */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Jason Zhu
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Peking University
        </p>

        {/* ── Introduction ─────────────────────────────────────────────── */}
        <div className="mt-6 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>
            I am an undergraduate at Peking University working at the
            intersection of <strong>Artificial Intelligence</strong>,{" "}
            <strong>Mathematics</strong>, and{" "}
            <strong>Scientific Machine Learning</strong>. My research focuses
            on neural operators for partial differential equations, with
            current work on fractal-informed Fourier Neural Operator
            architectures and diffusion-based solution operators.
          </p>
          <p>
            Beyond formal research, I build agentic workflows and explore
            how modern AI systems can accelerate scientific discovery. This
            site serves as both an academic portfolio and a digital garden
            for technical and personal writing.
          </p>
        </div>
      </section>

      {/* ── Quick links ────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Explore
        </h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: "/research", label: "Research", desc: "Ongoing investigations" },
            { href: "/publications", label: "Publications", desc: "Papers & preprints" },
            { href: "/projects", label: "Projects", desc: "Code & tools" },
            { href: "/talks", label: "Talks", desc: "Presentations & slides" },
            { href: "/blog", label: "Blog", desc: "Notes & reflections" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <span className="font-medium group-hover:underline decoration-1 underline-offset-4">
                {item.label}
              </span>
              <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
