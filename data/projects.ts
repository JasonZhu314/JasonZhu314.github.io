/**
 * Projects Data
 *
 * Engineering and open-source projects — distinct from formal research.
 * These are shown as cards on the /projects page.
 * Add new projects by copying an object and filling in your details.
 */

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Personal Homepage & Blog",
    description:
      "This website! A statically-exported Next.js site with MDX blog support, LaTeX math rendering, and syntax highlighting. Deployed on GitHub Pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    codeUrl: "https://github.com/JasonZhu314/JasonZhu314.github.io",
  },
  {
    title: "Agentic Research Workflow",
    description:
      "An autonomous research pipeline using LLM agents to survey literature, extract key results, and generate structured summaries for rapid paper comprehension.",
    tags: ["LLM Agents", "Python", "RAG"],
    codeUrl: "#",
  },
  {
    title: "PDE Solver Benchmarks",
    description:
      "A benchmarking suite comparing classical numerical PDE solvers with neural operator approaches across standard test problems (Burgers, Navier-Stokes, Darcy flow).",
    tags: ["Python", "JAX", "Scientific Computing"],
    codeUrl: "#",
  },
];
