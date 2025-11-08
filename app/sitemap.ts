import { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'

interface BlogPost {
  slug: { current: string }
  publishedAt: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshshrirao.vercel.app'

  // 3 Flagship Web Development Projects
  const flagshipProjects = [
    'invoiceflowme-invoicing-payments',
    'shoply-ecommerce-store',
    'ai-guru-support-bot'
  ]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Flagship project pages
  const projectPages: MetadataRoute.Sitemap = flagshipProjects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  try {
    const blogPosts = await sanityFetch<BlogPost[]>({ query: blogPostsQuery })

    const blogPages: MetadataRoute.Sitemap = (blogPosts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    return [...staticPages, ...projectPages, ...blogPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return [...staticPages, ...projectPages]
  }
}