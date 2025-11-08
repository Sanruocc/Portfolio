"use client"

import { motion } from "framer-motion"
import { ButtonHTMLAttributes } from "react"

interface HolographicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function HolographicButton({ 
  children, 
  className = "", 
  variant = "primary",
  ...props 
}: HolographicButtonProps) {
  return (
    <motion.button
      className={`
        relative group px-8 py-4 rounded-xl font-semibold text-white
        overflow-hidden transition-all duration-300
        ${variant === "primary" 
          ? "bg-gradient-to-r from-purple-600 to-pink-600" 
          : "bg-white/5 backdrop-blur-sm border border-white/20"
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Animated holographic border */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
