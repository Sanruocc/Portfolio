"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface LuxuryTextProps {
  children: ReactNode
  className?: string
  glow?: boolean
  gradient?: boolean
}

export const LuxuryHeading = ({ children, className, glow = false, gradient = false }: LuxuryTextProps) => (
  <h1 className={cn(
    "luxury-heading text-luxury-4xl font-normal tracking-wide",
    glow && "text-premium-glow",
    gradient && "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",
    className
  )}>
    {children}
  </h1>
)

export const LuxurySubheading = ({ children, className, glow = false, gradient = false }: LuxuryTextProps) => (
  <h2 className={cn(
    "luxury-body text-luxury-3xl font-normal leading-relaxed",
    glow && "text-premium-glow",
    gradient && "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",
    className
  )}>
    {children}
  </h2>
)

export const LuxuryTitle = ({ children, className, glow = false, gradient = false }: LuxuryTextProps) => (
  <h3 className={cn(
    "luxury-heading text-luxury-2xl font-normal tracking-wide",
    glow && "text-premium-glow",
    gradient && "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",
    className
  )}>
    {children}
  </h3>
)

export const LuxuryBody = ({ children, className }: Omit<LuxuryTextProps, 'glow' | 'gradient'>) => (
  <p className={cn("luxury-body text-base leading-relaxed", className)}>
    {children}
  </p>
)

export const LuxuryCaption = ({ children, className }: Omit<LuxuryTextProps, 'glow' | 'gradient'>) => (
  <span className={cn("luxury-body text-sm opacity-80", className)}>
    {children}
  </span>
)