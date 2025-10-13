'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Disable static generation for this route
export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
