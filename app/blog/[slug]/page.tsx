/**
 * Individual Blog Post Page (Dynamic Route)
 *
 * This page renders a single blog post at the URL `/blog/[slug]`.
 * For example, `/blog/hello-world` renders `content/blog/hello-world.mdx`.
 *
 * HOW DYNAMIC ROUTES WORK IN NEXT.JS:
 * The folder name `[slug]` is a "dynamic segment". Next.js extracts the
 * slug from the URL and passes it as `params.slug` to this component.
 *
 * HOW STATIC EXPORT WORKS:
 * Since we use `output: 'export'`, Next.js must know ALL possible slugs
 * at build time. `generateStaticParams()` tells it: "here are all the
 * slugs — generate an HTML file for each one."
 *
 * THE MDX PIPELINE:
 * 1. `getPostBySlug()` reads the .mdx file and extracts frontmatter + content
 * 2. `compileMDX()` converts the raw MDX string into React elements
 *    - `remarkMath` finds LaTeX syntax ($...$, $$...$$) in the markdown
 *    - `rehypeKatex` renders that LaTeX into beautiful math HTML
 *    - `rehypePrettyCode` syntax-highlights code blocks using Shiki
 * 3. The returned `content` is a React element we render directly in JSX
 *
 * TAILWIND PROSE:
 * The `prose` class from @tailwindcss/typography automatically styles
 * rendered HTML: headings get proper sizes, paragraphs get spacing,
 * links get underlines, lists get bullets, etc. `prose-lg` makes the
 * body text slightly larger for comfortable reading.
 */

import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Generate static params for all blog posts.
 * This tells Next.js: "At build time, create a page for each slug."
 * Without this, static export would fail for dynamic routes.
 */
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Dynamic metadata — sets the page title to the blog post's title.
 * e.g., "Hello World | Jason Zhu" in the browser tab.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

/**
 * The page component — an async Server Component.
 *
 * In Next.js 15, `params` is a Promise that must be awaited.
 * This is a breaking change from Next.js 14.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params (Next.js 15 change — params is now async)
  const { slug } = await params;

  // Look up the post; show 404 if it doesn't exist
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Compile the raw MDX content into React elements.
  // This is where the magic happens — math gets rendered, code gets highlighted.
  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkMath, // Step 1: Find $...$ and $$...$$ in markdown
        ],
        rehypePlugins: [
          rehypeKatex, // Step 2: Convert math AST nodes into KaTeX HTML
          [
            rehypePrettyCode, // Step 3: Highlight code blocks with Shiki
            {
              theme: "github-dark", // Color theme for syntax highlighting
              keepBackground: false, // Let our CSS handle the background
            },
          ],
        ],
      },
    },
  });

  return (
    <article>
      {/* ── Post header ──────────────────────────────────────────────── */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        {/* Date and tags */}
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Post body ────────────────────────────────────────────────── */}
      {/*
        `prose` = auto typography styling from @tailwindcss/typography
        `prose-lg` = larger body text for comfortable reading
        `dark:prose-invert` = inverts colors for dark mode
        `max-w-none` = allows prose to fill the container width
      */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
}
