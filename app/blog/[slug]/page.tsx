import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { sanityFetch, urlFor } from '@/lib/sanity.client'
import { blogPostBySlugQuery } from '@/lib/sanity.queries'
import type { BlogPost } from '@/lib/sanity.types'
import { PortableText } from '@portabletext/react'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<BlogPost>({
    query: blogPostBySlugQuery,
    params: { slug: params.slug },
    tags: [`blogPost:${params.slug}`],
  })

  if (!post) {
    return {
      title: 'Blog Post Not Found | Rajesh Shrirao',
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | Rajesh Shrirao`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <pre className="my-4 p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-100">{value.code}</code>
        </pre>
      )
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
  },
}

export default async function BlogPost({ params }: Props) {
  const post = await sanityFetch<BlogPost>({
    query: blogPostBySlugQuery,
    params: { slug: params.slug },
    tags: [`blogPost:${params.slug}`],
  })

  if (!post) {
    notFound()
  }

  const author = typeof post.author === 'object' ? post.author : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-8">
            {post.mainImage && (
              <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {author && <span>By {author.name}</span>}
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2">
                  {post.categories.map((category, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {post.body && <PortableText value={post.body} components={portableTextComponents} />}
          </div>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Interested in our development services? Get in touch!
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}