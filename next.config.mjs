/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['videos.openai.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'videos.openai.com',
        port: '',
        pathname: '/vg-assets/**',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
