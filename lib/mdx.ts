/**
 * MDX Content Processing Utilities
 *
 * This file is the backbone of the blog. It reads .mdx files from the file
 * system, parses their frontmatter (metadata like title, date, tags), and
 * provides helper functions used by the blog pages.
 *
 * HOW IT WORKS:
 * 1. Blog posts live as .mdx files in `content/blog/`.
 * 2. Each file has "frontmatter" at the top (YAML between --- markers).
 * 3. `gray-matter` parses the frontmatter into a JS object.
 * 4. The remaining content is raw MDX, rendered later by `next-mdx-remote`.
 *
 * IMPORTANT: These functions run on the server at BUILD TIME only.
 * They use Node.js `fs` to read files, which doesn't exist in the browser.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./types";

/**
 * Absolute path to the blog content directory.
 * `process.cwd()` returns the project root directory.
 */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Get all blog posts, sorted by date (newest first).
 *
 * Used by the blog index page to list all posts.
 */
export function getAllPosts(): BlogPost[] {
  // Read the directory and filter for .mdx files only
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      // Derive the URL slug from the filename: "hello-world.mdx" → "hello-world"
      const slug = file.replace(/\.mdx$/, "");

      // Read the file contents
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      // `matter()` splits the file into:
      //   - data: the frontmatter object (title, date, tags, etc.)
      //   - content: everything after the frontmatter
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "1970-01-01",
        tags: data.tags ?? [],
        description: data.description ?? "",
        content,
      } satisfies BlogPost;
    })
    // Sort by date, newest first. We convert to timestamps for comparison.
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return posts;
}

/**
 * Get a single blog post by its slug.
 *
 * Used by the individual post page (app/blog/[slug]/page.tsx).
 * Returns null if no post with that slug exists.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  // Check if the file exists before trying to read it
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "1970-01-01",
    tags: data.tags ?? [],
    description: data.description ?? "",
    content,
  };
}

/**
 * Get all unique tags across every blog post.
 *
 * Used by the blog index page to render filter buttons.
 * Returns a sorted array of unique tag strings.
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
