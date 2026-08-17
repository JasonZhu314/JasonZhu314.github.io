# AGENT.md

## Commands

- **Dev server:** `npm run dev` (starts at localhost:3000)
- **Build:** `npm run build` (static export to `out/`)
- **Lint:** `npm run lint` (eslint-config-next defaults, no custom config)
- No test framework is configured.

## Architecture

This is a **Next.js 15 App Router** site (React 19, TypeScript, Tailwind CSS 3) statically exported for GitHub Pages. Every page is pre-rendered at build time — there is no server at runtime.

### Content Pipeline

**Blog posts** are `.mdx` files in `content/blog/` (top-level only, not recursive). `lib/mdx.ts` reads them with Node `fs` at build time, parses YAML frontmatter via `gray-matter`, and provides `getAllPosts()` / `getPostBySlug()` / `getAllTags()`.

**MDX compilation** happens in `app/blog/[slug]/page.tsx` using `compileMDX` from `next-mdx-remote/rsc` with this plugin chain:
- `remark-math` → finds `$...$` and `$$...$$` LaTeX
- `rehype-katex` → renders math to KaTeX HTML
- `rehype-pretty-code` (Shiki, `github-dark` theme) → syntax highlights code blocks

KaTeX CSS is imported in `app/layout.tsx`. Custom prose/code/KaTeX overrides live in `app/globals.css`.

**Academic data** (publications, talks, research, projects) are typed arrays in `data/*.ts`, imported directly by their corresponding page. Types are in `lib/types.ts`.

### Server vs Client Component Boundary

Only three files are client components (`"use client"`):
- `components/ThemeProvider.tsx` — wraps `next-themes`
- `components/ThemeToggle.tsx` — dark mode button (uses `mounted` guard against hydration mismatch)
- `components/BlogIndex.tsx` — client-side tag filtering with `useState`

Everything else is a server component. The blog index page is a server component that reads files, then passes serializable data to `BlogIndex`.

### Static Export Constraints

- `output: "export"` in `next.config.mjs` — no API routes, no middleware, no ISR
- `images: { unoptimized: true }` — no server-side image optimization
- Dynamic routes (`[slug]`) require `generateStaticParams()` to enumerate all pages at build time
- `public/.nojekyll` disables Jekyll on GitHub Pages

### Dark Mode

`next-themes` with `attribute="class"` toggles a `dark` class on `<html>`. Tailwind's `darkMode: "class"` reads it. The `<html>` element has `suppressHydrationWarning`.

### Key Conventions

- **Path alias:** `@/*` maps to project root (e.g., `@/lib/mdx`, `@/components/Header`)
- **Font:** Inter via `next/font/google`, self-hosted, exposed as CSS variable `--font-inter`
- **Blog slug:** derived from filename — `hello-world.mdx` → `/blog/hello-world`
- **Next.js 15:** `params` in dynamic route pages is a `Promise` that must be awaited
- **Deployment:** Push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages via `actions/deploy-pages@v4`
