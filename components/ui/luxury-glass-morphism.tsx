"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface LuxuryGlassProps {
  children: ReactNode
  className?: string
  intensity?: "subtle" | "medium" | "premium" | "luxury"
  layers?: number
  hover?: boolean
  animated?: boolean
}

export const LuxuryGlassCard = ({ 
  children, 
  className, 
  intensity = "premium",
  layers = 3,
  hover = false,
  animated = true
}: LuxuryGlassProps) => {
  const glassLayers = Array.from({ length: layers }, (_, i) => (
    <div
      key={i}
      className={cn(
        "absolute inset-0 rounded-xl transition-all duration-700",
        {
          "backdrop-blur-sm bg-white/5 border border-white/10": intensity === "subtle",
          "backdrop-blur-md bg-white/8 border border-purple-400/20": intensity === "medium",
          "backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-purple-300/30": intensity === "premium",
          "backdrop-blur-2xl bg-gradient-to-br from-white/15 via-purple-500/5 to-yellow-500/5 border border-purple-200/40": intensity === "luxury",
        }
      )}
      style={{
        transform: `translateZ(${i * 2}px)`,
        opacity: 1 - (i * 0.1),
      }}
    />
  ))

  const Component = animated ? motion.div : "div"
  const motionProps = animated ? {
    whileHover: hover ? { 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(138,43,226,0.4)"
    } : undefined,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  } : {}

  return (
    <Component 
      className={cn("relative", className)}
      {...motionProps}
    >
      {glassLayers}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </Component>
  )
}

export const LuxuryGlassPanel = ({ 
  children, 
  className,
  intensity = "luxury"
}: Omit<LuxuryGlassProps, 'layers'>) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl transition-all duration-500",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      {
        "backdrop-blur-sm bg-white/5 border border-white/10": intensity === "subtle",
        "backdrop-blur-md bg-white/8 border border-purple-400/20": intensity === "medium", 
        "backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-purple-300/30": intensity === "premium",
        "backdrop-blur-2xl bg-gradient-to-br from-white/15 via-purple-500/5 to-yellow-500/5 border border-purple-200/40": intensity === "luxury",
      },
      className
    )}>
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}