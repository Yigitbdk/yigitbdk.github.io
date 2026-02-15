/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '', 
  assetPrefix: '', 
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'svgl.app' },
    ],
  },
}

module.exports = nextConfig