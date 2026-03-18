/**
 * PostCSS Configuration
 *
 * PostCSS is a tool that transforms CSS with JavaScript plugins.
 * Tailwind CSS runs as a PostCSS plugin — it reads your source files,
 * finds which Tailwind classes you used, and generates the final CSS.
 *
 * Autoprefixer automatically adds vendor prefixes (like -webkit-, -moz-)
 * so your CSS works across all browsers.
 */

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
