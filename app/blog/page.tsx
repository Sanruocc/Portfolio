import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Rajesh Shrirao - Web Development, AI & Tech Insights',
  description: 'Read the latest articles on web development, AI, mobile development, and technology insights by Rajesh Shrirao.',
}

export default function BlogPage() {
  // Placeholder blog posts - will be replaced with Sanity CMS data
  const placeholderPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14 and Sanity CMS',
      excerpt: 'Learn how to integrate Sanity CMS with Next.js 14 for powerful content management.',
      category: 'Web Development',
      publishedDate: '2024-01-15',
      author: 'Rajesh Shrirao',
      slug: 'getting-started-nextjs-sanity'
    },
    {
      id: 2,
      title: 'Building Responsive Design Systems with Tailwind CSS',
      excerpt: 'Create scalable and maintainable design systems using Tailwind CSS utility classes.',
      category: 'Tutorial',
      publishedDate: '2024-01-10',
      author: 'Rajesh Shrirao',
      slug: 'responsive-design-systems-tailwind'
    }
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative bg-gradient-to-r from-purple-600 to-yellow-500">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {post.category.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.publishedDate).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    By {post.author}
                  </span>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground mb-4">
            Blog is being migrated to Sanity CMS - coming soon!
          </p>
          <p className="text-muted-foreground">
            More articles will be available once the CMS migration is complete.
          </p>
        </div>
      </div>
    </div>
  )
}