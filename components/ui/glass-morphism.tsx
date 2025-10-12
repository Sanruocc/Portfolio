"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { useDeviceCapabilities } from '@/lib/hooks/use-device-capabilities'

interface GlassMorphismProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'card' | 'nav' | 'button' | 'modal'
  intensity?: 'low' | 'medium' | 'high' | 'ultra'
  animated?: boolean
  hover?: boolean
  glow?: boolean
  border?: boolean
  onClick?: () => void
}

export const GlassMorphism: React.FC<GlassMorphismProps> = ({
  children,
  className,
  variant = 'default',
  intensity = 'medium',
  animated = false,
  hover = false,
  glow = false,
  border = true,
  onClick
}) => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  // Performance-based intensity adjustments
  const getIntensityClass = () => {
    if (reducedMotion) return 'backdrop-blur-sm'

    switch (intensity) {
      case 'low':
        return performanceTier === 'elite' ? 'backdrop-blur-md' : 'backdrop-blur-sm'
      case 'medium':
        return performanceTier === 'elite' ? 'backdrop-blur-lg' : 'backdrop-blur-md'
      case 'high':
        return performanceTier === 'elite' ? 'backdrop-blur-xl' : 'backdrop-blur-lg'
      case 'ultra':
        return 'backdrop-blur-2xl'
      default:
        return 'backdrop-blur-md'
    }
  }

  const getBackgroundOpacity = () => {
    switch (intensity) {
      case 'low': return 'bg-gradient-to-br from-white/5 via-purple-500/5 to-white/3'
      case 'medium': return 'bg-gradient-to-br from-white/8 via-purple-500/8 to-white/5'
      case 'high': return 'bg-gradient-to-br from-white/12 via-purple-500/12 to-white/8'
      case 'ultra': return 'bg-gradient-to-br from-white/15 via-purple-500/15 to-white/10'
      default: return 'bg-gradient-to-br from-white/8 via-purple-500/8 to-white/5'
    }
  }

  const getBorderClass = () => {
    if (!border) return ''
    return 'border border-white/20 border-purple-500/30'
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'card':
        return 'rounded-2xl p-6 shadow-2xl'
      case 'nav':
        return 'rounded-xl p-4 shadow-lg'
      case 'button':
        return 'rounded-xl px-6 py-3 shadow-lg cursor-pointer transition-all duration-300'
      case 'modal':
        return 'rounded-3xl p-8 shadow-2xl max-w-md mx-auto'
      default:
        return 'rounded-xl p-4 shadow-lg'
    }
  }

  const getGlowClass = () => {
    if (!glow) return ''
    return 'shadow-2xl shadow-purple-500/30 purple-neon-glow'
  }

  const getHoverClass = () => {
    if (!hover || reducedMotion) return ''
    return 'hover:scale-102 hover:shadow-3xl hover:shadow-purple-500/40 hover:purple-neon-glow-intense transition-all duration-300'
  }

  const getAnimationClass = () => {
    if (!animated || reducedMotion) return ''
    return 'animate-pulse'
  }

  const handleClick = () => {
    if (onClick && !reducedMotion) {
      onClick()
    }
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        getBackgroundOpacity(),
        getIntensityClass(),
        getBorderClass(),
        getVariantClasses(),
        getGlowClass(),
        getHoverClass(),
        getAnimationClass(),
        onClick && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      {/* Enhanced tinted glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-purple-500/8 to-yellow-500/5 rounded-inherit" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-white/8 rounded-inherit" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated border effect for elite devices */}
      {performanceTier === 'elite' && !reducedMotion && (
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 animate-pulse" />
      )}
    </div>
  )
}

// Glass morphism button component
interface GlassButtonProps extends Omit<GlassMorphismProps, 'variant'> {
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'md',
  className,
  ...props
}) => {
  const { reducedMotion } = useDeviceCapabilities()

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2.5 text-sm font-medium'
      case 'md': return 'px-6 py-3 text-base font-medium'
      case 'lg': return 'px-8 py-4 text-lg font-semibold'
      default: return 'px-6 py-3 text-base font-medium'
    }
  }

  return (
    <GlassMorphism
      variant="button"
      className={cn(
        getSizeClass(),
        'inline-flex items-center justify-center',
        'hover:bg-white/20 active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-all duration-300 ease-out',
        'rounded-xl border border-white/20',
        'text-white hover:text-white',
        'shadow-lg hover:shadow-xl',
        !reducedMotion && 'hover:shadow-purple-500/30 hover:border-purple-500/40',
        className
      )}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </GlassMorphism>
  )
}

// Glass morphism card component
interface GlassCardProps extends Omit<GlassMorphismProps, 'variant'> {
  title?: string
  subtitle?: string
  footer?: React.ReactNode
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  title,
  subtitle,
  footer,
  className,
  ...props
}) => {
  return (
    <GlassMorphism
      variant="card"
      className={className}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          )}
          {subtitle && (
            <p className="text-white/80 text-sm">{subtitle}</p>
          )}
        </div>
      )}

      <div className="mb-4">
        {children}
      </div>

      {footer && (
        <div className="mt-auto pt-4 border-t border-white/10">
          {footer}
        </div>
      )}
    </GlassMorphism>
  )
}

// Glass morphism navigation component
interface GlassNavProps extends Omit<GlassMorphismProps, 'variant'> {
  children: React.ReactNode
  sticky?: boolean
}

export const GlassNav: React.FC<GlassNavProps> = ({
  children,
  sticky = true,
  className,
  ...props
}) => {
  return (
    <GlassMorphism
      variant="nav"
      className={cn(
        sticky && 'fixed top-0 left-0 right-0 z-50',
        className
      )}
      {...props}
    >
      {children}
    </GlassMorphism>
  )
}

// Glass morphism modal component
interface GlassModalProps extends Omit<GlassMorphismProps, 'variant'> {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  ...props
}) => {
  const { reducedMotion } = useDeviceCapabilities()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity duration-300',
          !reducedMotion && 'backdrop-blur-sm'
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <GlassMorphism
        variant="modal"
        className={cn(
          'relative w-full max-w-lg',
          !reducedMotion && 'animate-in fade-in-0 zoom-in-95 duration-300',
          className
        )}
        {...props}
      >
        {title && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        )}

        {children}
      </GlassMorphism>
    </div>
  )
}

// Utility hook for glass morphism effects
export const useGlassMorphism = () => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  const getGlassClasses = (variant: GlassMorphismProps['variant'] = 'default') => {
    const baseClasses = [
      'bg-white/10',
      'backdrop-blur-md',
      'border border-white/20',
      'rounded-xl'
    ]

    if (reducedMotion) {
      return baseClasses
    }

    // Performance tier adjustments
    switch (performanceTier) {
      case 'elite':
        return [
          ...baseClasses,
          'backdrop-blur-lg',
          'bg-white/15',
          'border-white/30',
          'shadow-2xl',
          'shadow-purple-500/20'
        ]
      case 'high':
        return [
          ...baseClasses,
          'backdrop-blur-lg',
          'bg-white/12',
          'shadow-xl'
        ]
      case 'mid':
        return [
          ...baseClasses,
          'backdrop-blur-md',
          'bg-white/10'
        ]
      default:
        return [
          ...baseClasses,
          'backdrop-blur-sm',
          'bg-white/8'
        ]
    }
  }

  return { getGlassClasses, performanceTier, reducedMotion }
}