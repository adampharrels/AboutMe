/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // only include basePath when provided to avoid serving 404 at '/'
  ...(basePath ? { basePath } : {}),
};

module.exports = nextConfig;