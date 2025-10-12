export interface SanityImage {
  asset: {
    _id: string
    url: string
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: SanityImage
  bio?: any[]
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt: string
  body?: any[]
  author?: string | Author
  categories?: string[]
  mainImage?: SanityImage
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  subtitle?: string
  description: string
  overview?: string
  features?: string[]
  challenges?: Array<{
    problem: string
    solution: string
  }>
  development?: {
    planning?: string
    design?: string
    backend?: string
    frontend?: string
    testing?: string
  }
  techStack: string[]
  mainImage?: SanityImage
  liveUrl?: string
  githubUrl?: string
  duration?: string
  team?: string
  role?: string
  featured?: boolean
  order?: number
}
