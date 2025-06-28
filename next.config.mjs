/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: 'standalone',
}

export default nextConfig
