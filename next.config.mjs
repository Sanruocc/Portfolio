/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for Security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // SEO Headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Environment Variables
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshshrirao.com',
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    gzipSize: true,
  },

  // Performance Optimizations
  swcMinify: true,
  
  // Analytics
  analyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
};

export default nextConfig;
