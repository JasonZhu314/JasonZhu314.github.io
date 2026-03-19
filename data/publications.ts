/**
 * Publications Data
 *
 * This file stores your academic publication data as a typed array.
 * To add a new paper, copy one of the objects below and edit the fields.
 * The list is rendered chronologically on the /publications page.
 */

import type { Publication } from "@/lib/types";

export const publications: Publication[] = [
  // ── Example entry — replace with your actual publications ──────────────
  {
    title:
      "Fractal-White-FNO: A Fractal-Informed Architecture for Fourier Neural Operators",
    authors: ["Jason Zhu", "Collaborator A", "Advisor B"],
    venue: "Preprint / arXiv",
    year: 2025,
    pdfUrl: "#",
    codeUrl: "https://github.com/JasonZhu314",
    abstract:
      "We propose a fractal-informed modification to the Fourier Neural Operator architecture that improves convergence on multi-scale PDE systems.",
  },
  {
    title:
      "Diffusion Models for Parametric PDE Solution Operators",
    authors: ["Jason Zhu", "Collaborator C"],
    venue: "Workshop on Scientific Machine Learning, NeurIPS",
    year: 2024,
    pdfUrl: "#",
    abstract:
      "Exploring score-based diffusion as a generative prior for learning solution operators of parametric partial differential equations.",
  },
];
