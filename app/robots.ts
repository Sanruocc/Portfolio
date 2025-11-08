import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Use environment variable or construct from Vercel environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://rajeshshrirao.vercel.app')
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/', '/temp-output.json'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}