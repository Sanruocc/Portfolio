import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Rajesh Shrirao Blog',
    default: 'Blog | Rajesh Shrirao - Web Development & Tech Insights',
  },
  description: 'Read the latest articles on web development, AI, mobile development, and technology insights by Rajesh Shrirao.',
  keywords: ['web development', 'Next.js', 'React', 'Flutter', 'AI', 'machine learning', 'mobile development', 'programming', 'technology'],
  authors: [{ name: 'Rajesh Shrirao' }],
  creator: 'Rajesh Shrirao',
  publisher: 'Rajesh Shrirao',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rajesh Shrirao Blog',
    title: 'Blog | Rajesh Shrirao - Web Development & Tech Insights',
    description: 'Read the latest articles on web development, AI, mobile development, and technology insights by Rajesh Shrirao.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Rajesh Shrirao - Web Development & Tech Insights',
    description: 'Read the latest articles on web development, AI, mobile development, and technology insights by Rajesh Shrirao.',
    creator: '@rajeshshrirao', // Update with actual Twitter handle
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}