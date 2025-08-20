/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Add these for better deployment compatibility
  reactStrictMode: true,
  swcMinify: true,
  // Handle Three.js external dependencies
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Optimize for static export if needed
  output: 'standalone',
  // Ensure proper handling of static assets
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig