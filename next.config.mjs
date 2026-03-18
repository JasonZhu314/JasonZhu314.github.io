/**
 * Next.js Configuration
 *
 * - output: 'export'  → Generates a fully static site (HTML/CSS/JS only).
 *   This is required for GitHub Pages, which can't run a Node server.
 *
 * - images.unoptimized: true → Disables Next.js's server-side image optimization.
 *   Necessary because static exports have no server to optimize images at runtime.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
