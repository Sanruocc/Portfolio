import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import type { BlogPost } from '@/lib/sanity.types'

export const metadata: Metadata = {
  title: 'Blog | Rajesh Shrirao - Web Development, AI & Tech Insights',
  description: 'Read the latest articles on web development, AI, mobile development, and technology insights by Rajesh Shrirao.',
}

export default async function BlogPage() {
  const posts = await sanityFetch<BlogPost[]>({
    query: blogPostsQuery,
    tags: ['blogPost'],
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on web development, AI, mobile development, and the latest in tech
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              No blog posts yet. Create your first post in the Sanity Studio!
            </p>
            <Link 
              href="/studio"
              className="text-primary hover:underline text-lg font-medium"
            >
              Go to Studio →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {post.mainImage ? (
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="aspect-video relative">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="aspect-video relative bg-gradient-to-r from-purple-600 to-yellow-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      {post.categories && post.categories[0] ? post.categories[0].charAt(0) : 'B'}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.categories && post.categories.length > 0 && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {post.categories[0]}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug.current}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    {post.author && (
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                    )}
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}