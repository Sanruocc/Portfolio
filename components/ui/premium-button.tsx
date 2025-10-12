"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useDeviceCapabilities } from '@/lib/hooks/use-device-capabilities'

interface PremiumButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  className?: string
  glow?: boolean
  animated?: boolean
  fullWidth?: boolean
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  glow = false,
  animated = true,
  fullWidth = false
}) => {
  const { reducedMotion } = useDeviceCapabilities()

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return cn(
          'bg-gradient-purple-gold',
          'hover:bg-gradient-gold-metallic',
          'text-black font-semibold',
          'glow-border gold-neon',
          glow && 'purple-neon-glow'
        )
      case 'secondary':
        return cn(
          'bg-gradient-to-r from-white/10 to-white/5',
          'hover:from-white/20 hover:to-white/10',
          'text-white font-medium',
          'border border-white/20 hover:border-purple-500/40',
          glow && 'purple-neon-subtle hover:purple-neon-glow'
        )
      case 'outline':
        return cn(
          'bg-transparent',
          'hover:bg-purple-500/10',
          'text-purple-400 hover:text-white font-medium',
          'border-2 border-purple-500/50 hover:border-purple-400',
          glow && 'purple-neon-subtle hover:purple-neon-glow'
        )
      case 'ghost':
        return cn(
          'bg-transparent hover:bg-white/10',
          'text-white/80 hover:text-white font-medium',
          'border border-transparent hover:border-white/20'
        )
      default:
        return ''
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm min-h-[36px]'
      case 'md':
        return 'px-6 py-3 text-base min-h-[44px]'
      case 'lg':
        return 'px-8 py-4 text-lg min-h-[52px]'
      case 'xl':
        return 'px-10 py-5 text-xl min-h-[60px]'
      default:
        return 'px-6 py-3 text-base min-h-[44px]'
    }
  }

  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'rounded-xl',
    'transition-all duration-300 ease-out',
    'backdrop-blur-md',
    'shadow-lg hover:shadow-xl',
    'cursor-pointer select-none',
    'focus:outline-none focus:ring-2 focus:ring-purple-500/50',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    'btn-typography text-shadow-soft',
    fullWidth && 'w-full',
    getSizeClasses(),
    getVariantClasses()
  )

  const MotionButton = animated && !reducedMotion ? motion.button : 'button'

  const motionProps = animated && !reducedMotion ? {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  } : {}

  return (
    <MotionButton
      className={cn(baseClasses, className)}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </MotionButton>
  )
}

// Specialized button variants
export const HireMeButton: React.FC<Omit<PremiumButtonProps, 'variant'>> = (props) => (
  <PremiumButton variant="primary" glow={true} {...props}>
    {props.children}
  </PremiumButton>
)

export const ViewProjectsButton: React.FC<Omit<PremiumButtonProps, 'variant'>> = (props) => (
  <PremiumButton variant="secondary" glow={true} {...props}>
    {props.children}
  </PremiumButton>
)

export const ContactButton: React.FC<Omit<PremiumButtonProps, 'variant'>> = (props) => (
  <PremiumButton variant="outline" glow={true} {...props}>
    {props.children}
  </PremiumButton>
)