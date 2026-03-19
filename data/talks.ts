/**
 * Talks & Presentations Data
 *
 * Add talks, seminars, posters, or slide decks here.
 * Each entry appears on the /talks page, grouped by type.
 */

import type { Talk } from "@/lib/types";

export const talks: Talk[] = [
  {
    title: "Fourier Neural Operators: Theory and Practice",
    event: "Peking University ML Seminar",
    date: "2025-01-20",
    type: "seminar",
    slidesUrl: "#",
    description:
      "An introductory talk on spectral methods in neural operator learning, covering the mathematical foundations and recent advances.",
  },
  {
    title: "Score-Based Diffusion for Scientific Computing",
    event: "Student Research Symposium",
    date: "2024-11-10",
    type: "poster",
    description:
      "Poster presentation on applying diffusion models to PDE solution operators.",
  },
  {
    title: "From Fractals to Neural Networks",
    event: "Mathematics Colloquium, Peking University",
    date: "2024-09-05",
    type: "talk",
    slidesUrl: "#",
    description:
      "Exploring how fractal geometry informs the design of multi-scale neural architectures.",
  },
];
