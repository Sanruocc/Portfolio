import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Check if Sanity is configured
export const isSanityConfigured = Boolean(projectId && dataset)

export const client = createClient({
  projectId: projectId || 'placeholder',  // Use placeholder to prevent errors during build
  dataset: dataset,
  apiVersion: '2025-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  if (!isSanityConfigured) {
    throw new Error('Sanity is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.')
  }
  return builder.image(source)
}

export async function sanityFetch<T = any>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<T> {
  if (!isSanityConfigured) {
    console.warn('Sanity is not configured. Returning empty array.')
    return [] as T
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    })
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return [] as T
  }
}
