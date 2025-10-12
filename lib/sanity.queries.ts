import { groq } from 'next-sanity'

// Blog post queries
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    "categories": categories[]->title,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->title,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    seo
  }
`

// Project queries
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    techStack,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    featured
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    subtitle,
    description,
    techStack,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    subtitle,
    description,
    overview,
    features,
    challenges,
    development,
    techStack,
    liveUrl,
    githubUrl,
    duration,
    team,
    role,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`

// Author queries
export const authorsQuery = groq`
  *[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio
  }
`

// Category queries
export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug,
    description
  }
`
