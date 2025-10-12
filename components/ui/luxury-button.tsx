"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode, ButtonHTMLAttributes } from "react"

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "glass" | "sapphire" | "emerald" | "ruby"
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  shimmer?: boolean
}

export const LuxuryButton = ({ 
  children, 
  variant = "primary", 
  size = "md",
  animated = true,
  shimmer = false,
  className,
  ...props 
}: LuxuryButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-luxury hover:from-purple-500 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-sapphire-600 to-sapphire-800 text-white shadow-luxury hover:from-sapphire-500 hover:to-sapphire-700",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-luxury hover:bg-white/15",
    sapphire: "bg-gradient-to-r from-sapphire-600 to-sapphire-800 text-white shadow-luxury hover:from-sapphire-500 hover:to-sapphire-700",
    emerald: "bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-luxury hover:from-emerald-500 hover:to-emerald-700",
    ruby: "bg-gradient-to-r from-ruby-600 to-ruby-800 text-white shadow-luxury hover:from-ruby-500 hover:to-ruby-700"
  }

  const Component = animated ? motion.button : "button"
  const motionProps = animated ? {
    whileHover: { 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(138,43,226,0.4)"
    },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  } : {}

  return (
    <Component
      className={cn(
        "relative overflow-hidden font-medium rounded-xl transition-all duration-500 luxury-body",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        shimmer && "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...motionProps}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  )
}

export const LuxuryIconButton = ({ 
  children, 
  variant = "glass",
  size = "md",
  animated = true,
  className,
  ...props 
}: LuxuryButtonProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg", 
    xl: "w-14 h-14 text-xl"
  }

  const Component = animated ? motion.button : "button"
  const motionProps = animated ? {
    whileHover: { 
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 0 20px rgba(138,43,226,0.3)"
    },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  } : {}

  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-full transition-all duration-300 flex items-center justify-center",
        "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15",
        sizeClasses[size],
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}