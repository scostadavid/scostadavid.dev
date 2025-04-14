/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/en',
      permanent: false,
    },
    {
      source: '/blog',
      destination: '/en/blog',
      permanent: true
    }
  ],
}

export default nextConfig;
