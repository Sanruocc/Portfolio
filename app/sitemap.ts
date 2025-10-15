import { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity.client'
import { blogPostsQuery, projectsQuery } from '@/lib/sanity.queries'

interface BlogPost {
  slug: { current: string }
  publishedAt: string
}

interface Project {
  slug: { current: string }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://invoiceflowme.vercel.app'

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

  try {
    const [blogPosts, projects] = await Promise.all([
      sanityFetch<BlogPost[]>({ query: blogPostsQuery }),
      sanityFetch<Project[]>({ query: projectsQuery }),
    ])

    const blogPages: MetadataRoute.Sitemap = (blogPosts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    const projectPages: MetadataRoute.Sitemap = (projects || []).map((project) => ({
      url: `${baseUrl}/projects/${project.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

    return [...staticPages, ...blogPages, ...projectPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}