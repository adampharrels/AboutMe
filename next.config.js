/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';

/**
 * Make static export conditional so local development (next start) still works.
 * Set the env var NEXT_EXPORT=true in CI when you want a static export.
 */
const useExport = process.env.NEXT_EXPORT === 'true';


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;