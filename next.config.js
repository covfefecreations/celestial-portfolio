/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is important for Three.js to work correctly with Next.js App Router
  transpilePackages: ['three'],
};

export default nextConfig;
