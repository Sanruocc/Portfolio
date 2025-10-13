import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'

// Import schema types
import { blogPost } from './sanity/schemas/blogPost'
import { project } from './sanity/schemas/project'
import { author } from './sanity/schemas/author'
import { category } from './sanity/schemas/category'

const schemaTypes = [blogPost, project, author, category]

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Rajesh Portfolio',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  // Allow studio to work on both local and production URLs
  studio: {
    studioHost: 'rajeshshrirao',
  },
})
