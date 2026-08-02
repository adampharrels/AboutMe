/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
