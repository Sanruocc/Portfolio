import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Blog Post | Rajesh Shrirao',
    description: 'Blog post from Rajesh Shrirao',
  }
}

export default function BlogPost({ params }: Props) {
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
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 to-yellow-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                📝
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
              Blog Post Coming Soon
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              This blog post is being migrated to Sanity CMS.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Rajesh Shrirao</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                Migration
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              We're currently migrating our blog from Payload CMS to Sanity CMS for better performance and developer experience.
            </p>
            <p>
              This blog post will be available once the migration is complete. Please check back soon or visit our main blog page for other articles.
            </p>
            <h2>What to Expect</h2>
            <ul>
              <li>Faster page loads with Sanity's CDN</li>
              <li>Better content editing experience</li>
              <li>Improved SEO and performance</li>
              <li>Real-time content updates</li>
            </ul>
            <p>
              Thank you for your patience during this migration period.
            </p>
          </div>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Interested in our development services? Get in touch!
              </p>
              <Link 
                href="/contact"
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