/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir - it's not needed in Next.js 14
  reactStrictMode: true,
  swcMinify: true,
  // Handle Three.js external dependencies
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Optimize for deployment
  output: 'standalone',
  // Ensure proper handling of static assets
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig