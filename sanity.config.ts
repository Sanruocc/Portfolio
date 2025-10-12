import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import schema types
import { blogPost } from './sanity/schemas/blogPost'
import { project } from './sanity/schemas/project'
import { author } from './sanity/schemas/author'
import { category } from './sanity/schemas/category'

const schemaTypes = [blogPost, project, author, category]

export default defineConfig({
  name: 'default',
  title: 'Rajesh Portfolio',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
