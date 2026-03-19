/**
 * Research Areas Data
 *
 * Each entry represents a high-level research topic.
 * These are displayed on the /research page as detailed summaries.
 * Think of this as your "research statement" broken into topics.
 */

import type { ResearchArea } from "@/lib/types";

export const researchAreas: ResearchArea[] = [
  {
    title: "Fourier Neural Operators & Spectral Methods",
    description:
      "Investigating how spectral decompositions can be leveraged within neural architectures to learn solution operators for partial differential equations. Current work focuses on improving the Fourier Neural Operator (FNO) framework through fractal-informed multi-scale representations (Fractal-White-FNO), enabling better generalization across resolutions and PDE families.",
    tags: ["Neural Operators", "Spectral Methods", "PDEs"],
    status: "active",
  },
  {
    title: "Diffusion Models for Scientific Machine Learning",
    description:
      "Exploring the use of score-based generative models as priors for learning PDE solution operators. By treating the solution manifold as a data distribution, diffusion models can capture complex, multi-modal solution spaces that traditional deterministic approaches struggle with. This line of work bridges modern generative AI with classical numerical analysis.",
    tags: ["Diffusion Models", "Generative AI", "Scientific Computing"],
    status: "active",
  },
  {
    title: "Mathematics of Deep Learning",
    description:
      "Studying the theoretical foundations underlying why deep networks generalize: approximation theory, implicit regularization, loss landscape geometry, and the interplay between overparameterization and generalization. Particular interest in connecting these ideas to the function spaces relevant to scientific computing.",
    tags: ["Approximation Theory", "Optimization", "Generalization"],
    status: "ongoing",
  },
];
