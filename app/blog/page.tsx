/**
 * Blog Index Page
 *
 * Displays all blog posts with tag-based filtering.
 *
 * ARCHITECTURE:
 * This is a Server Component. It reads blog posts from the file system
 * at build time using our `getAllPosts()` utility, then passes the data
 * down to the <BlogIndex> Client Component which handles the interactive
 * tag filtering.
 *
 * WHY SPLIT SERVER/CLIENT?
 * - Server Component: Can read files (fs module), runs at build time, no JS sent to browser
 * - Client Component: Can use useState for interactivity, runs in the browser
 * By splitting them, we get the best of both worlds: file-system access
 * AND interactivity, with minimal client-side JavaScript.
 */

import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  // These run at build time on the server — reading .mdx files from disk
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-gray-400">
        Technical notes, mathematical explorations, and personal reflections.
      </p>

      {/* Interactive blog listing — this is a Client Component */}
      <BlogIndex posts={posts} tags={tags} />
    </div>
  );
}
