"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  variant?: 'wave' | 'angle'
  flip?: boolean
  className?: string
  colorClass?: string
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  flip = false,
  className,
  colorClass = 'fill-background'
}) => {
  if (variant === 'angle') {
    return (
      <div className={cn('relative w-full overflow-hidden', className)} aria-hidden>
        <svg
          className={cn('block w-full h-12 sm:h-16 lg:h-20', flip && 'rotate-180')}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          role="img"
          aria-label="Section divider"
        >
          <polygon points="1200 0 0 0 0 120" className={colorClass} />
        </svg>
      </div>
    )
  }

  // Wave
  return (
    <div className={cn('relative w-full overflow-hidden', className)} aria-hidden>
      <svg
        className={cn('block w-full h-12 sm:h-16 lg:h-20', flip && 'rotate-180')}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        role="img"
        aria-label="Section divider"
      >
        <path d="M321.39,56.44C199.36,85.8,132,75.22,0,49.35V120H1200V0C1072.91,53.92,962.63,86.33,843.61,98.93,716.75,112.52,603.53,102.88,477,74.26,405.08,58.1,359.24,43.17,321.39,56.44Z" className={colorClass} />
      </svg>
    </div>
  )
}
