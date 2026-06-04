/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';

/**
 * Make static export conditional so local development (next start) still works.
 * Set the env var NEXT_EXPORT=true in CI when you want a static export.
 */
const useExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  // enable static export only when NEXT_EXPORT=true
  ...(useExport ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  // only include basePath/assetPrefix when provided to avoid serving 404 at '/'
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // ensure exported pages are written into folders (e.g. /work/index.html)
  ...(useExport ? { trailingSlash: true } : {}),
};

module.exports = nextConfig;