"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface PremiumBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'purple' | 'gold' | 'tech'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  glow?: boolean
}

export const PremiumBadge: React.FC<PremiumBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  glow = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'featured':
        return cn(
          'bg-gradient-purple-gold',
          'text-black font-semibold',
          'glow-border gold-neon'
        )
      case 'purple':
        return cn(
          'bg-purple-500/15 text-purple-300',
          'border border-purple-500/30',
          'font-medium',
          glow && 'purple-neon-subtle'
        )
      case 'gold':
        return cn(
          'bg-gradient-gold-metallic',
          'text-black',
          'glow-border gold-neon',
          'font-medium'
        )
      case 'tech':
        return cn(
          'bg-gradient-to-r from-white/10 to-white/5',
          'text-white/90 font-medium',
          'border border-white/20',
          'backdrop-blur-sm',
          glow && 'purple-neon-subtle'
        )
      default:
        return cn(
          'bg-white/10 text-white/90',
          'border border-white/20',
          'font-medium'
        )
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs'
      case 'md':
        return 'px-3 py-1.5 text-sm'
      case 'lg':
        return 'px-4 py-2 text-base'
      default:
        return 'px-3 py-1.5 text-sm'
    }
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        'rounded-full',
        'transition-all duration-300',
        'backdrop-blur-sm',
        getSizeClasses(),
        getVariantClasses(),
        className
      )}
    >
      {children}
    </span>
  )
}

// Specialized badge variants
export const FeaturedBadge: React.FC<Omit<PremiumBadgeProps, 'variant'>> = (props) => (
  <PremiumBadge variant="featured" glow={true} {...props}>
    Featured
  </PremiumBadge>
)

export const TechBadge: React.FC<Omit<PremiumBadgeProps, 'variant'>> = (props) => (
  <PremiumBadge variant="tech" glow={true} {...props} />
)

export const StatusBadge: React.FC<Omit<PremiumBadgeProps, 'variant'> & { status: 'available' | 'busy' | 'offline' }> = ({ status, ...props }) => {
  const statusConfig = {
    available: { text: 'Available for new opportunities', variant: 'purple' as const },
    busy: { text: 'Currently busy', variant: 'gold' as const },
    offline: { text: 'Offline', variant: 'default' as const }
  }

  return (
    <PremiumBadge variant={statusConfig[status].variant} glow={status === 'available'} {...props}>
      <div className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
      {statusConfig[status].text}
    </PremiumBadge>
  )
}