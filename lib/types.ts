/**
 * Shared TypeScript Type Definitions
 *
 * TypeScript "types" (or "interfaces") define the SHAPE of data objects.
 * They provide autocomplete in your editor and catch errors at compile time.
 * If you try to access `post.titl` (typo), TypeScript will warn you.
 *
 * These types are shared across the project — components, pages, and utilities
 * all import from here so there's a single source of truth.
 */

/* -------------------------------------------------------------------------- */
/*  Blog Post (loaded from .mdx files in content/blog/)                       */
/* -------------------------------------------------------------------------- */

export interface BlogPost {
  /** URL-friendly identifier derived from the filename (e.g. "hello-world") */
  slug: string;
  /** The display title from frontmatter */
  title: string;
  /** ISO date string, e.g. "2025-03-15" */
  date: string;
  /** Category tags for filtering, e.g. ["AI", "Math"] */
  tags: string[];
  /** A short summary shown in the blog index */
  description: string;
  /** The raw MDX/markdown content (without frontmatter) */
  content: string;
}

/* -------------------------------------------------------------------------- */
/*  Publication (academic papers)                                             */
/* -------------------------------------------------------------------------- */

export interface Publication {
  /** Paper title */
  title: string;
  /** List of author names */
  authors: string[];
  /** Journal, conference, or preprint venue */
  venue: string;
  /** Publication year */
  year: number;
  /** Optional URL to the PDF */
  pdfUrl?: string;
  /** Optional URL to a code repository */
  codeUrl?: string;
  /** Optional abstract or one-line summary */
  abstract?: string;
}

/* -------------------------------------------------------------------------- */
/*  Talk (presentations, seminars, posters)                                   */
/* -------------------------------------------------------------------------- */

export interface Talk {
  /** Title of the presentation */
  title: string;
  /** Event or venue name */
  event: string;
  /** ISO date string */
  date: string;
  /** Type of presentation */
  type: "talk" | "seminar" | "poster" | "slides";
  /** Optional URL to slides or recording */
  slidesUrl?: string;
  /** Optional brief description */
  description?: string;
}

/* -------------------------------------------------------------------------- */
/*  Research Area (high-level research summaries)                              */
/* -------------------------------------------------------------------------- */

export interface ResearchArea {
  /** Research topic title */
  title: string;
  /** Detailed description (supports multiple paragraphs) */
  description: string;
  /** Related tags/keywords */
  tags: string[];
  /** Whether this is an active area of investigation */
  status: "active" | "completed" | "ongoing";
}

/* -------------------------------------------------------------------------- */
/*  Project (engineering/open-source projects)                                */
/* -------------------------------------------------------------------------- */

export interface Project {
  /** Project name */
  title: string;
  /** What the project does */
  description: string;
  /** Tech stack used */
  tags: string[];
  /** Optional link to the live demo or deployed version */
  demoUrl?: string;
  /** Optional link to the source code */
  codeUrl?: string;
}
