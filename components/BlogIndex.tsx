/**
 * Blog Index — Tag Filter + Post List (Client Component)
 *
 * This component handles the interactive blog listing with tag filtering.
 * It's a Client Component because filtering requires React state (useState)
 * which only works in the browser.
 *
 * HOW IT WORKS:
 * 1. The blog page (server) reads all posts and passes them as props.
 * 2. This component renders filter buttons and the post list.
 * 3. When a tag button is clicked, `selectedTag` updates, and React
 *    re-renders only the matching posts.
 *
 * TAILWIND CLASSES EXPLAINED:
 * - flex flex-wrap gap-2  → Buttons wrap to the next line on small screens
 * - px-3 py-1             → Small horizontal/vertical padding for pill buttons
 * - rounded-full          → Fully rounded corners (pill shape)
 * - bg-gray-900 text-white → Active tag: dark background, white text
 * - bg-gray-100            → Inactive tag: light gray background
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

interface BlogIndexProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogIndex({ posts, tags }: BlogIndexProps) {
  // Track which tag is currently selected (null = show all)
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts by the selected tag, or show all if no tag selected
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div>
      {/* ── Tag filter buttons ───────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {/* "All" button — clears the filter */}
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTag === null
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          All
        </button>

        {/* One button per tag */}
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Post list ────────────────────────────────────────────────── */}
      <div className="space-y-8">
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No posts found for this tag.
          </p>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Post title — underlines on hover */}
                <h2 className="text-xl font-semibold tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h2>

                {/* Date + tags row */}
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-gray-300 dark:text-gray-600">|</span>
                  <span>{post.tags.join(", ")}</span>
                </div>

                {/* Description */}
                {post.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
