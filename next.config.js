/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';

/**
 * When exporting a static Next site for a GitHub Pages repo (served from
 * https://<user>.github.io/<repo>), we must ensure static assets and page
 * paths are prefixed with the repo path (basePath). Setting `assetPrefix`
 * and `trailingSlash` makes the exported `out/` layout work well with GitHub
 * Pages (each page gets its own folder with an index.html).
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // only include basePath/assetPrefix when provided to avoid serving 404 at '/'
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // ensure exported pages are written into folders (e.g. /work/index.html)
  trailingSlash: true,
};

module.exports = nextConfig;