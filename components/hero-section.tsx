"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LuxuryHeading, LuxurySubheading } from "@/components/ui/luxury-typography"
import { PremiumBackground } from "@/components/ui/premium-background"
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"
import { useAdvancedPerformance } from "@/lib/hooks/use-advanced-performance"
import { HeroBentoGrid } from "@/components/custom/hero-bento-grid"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const { performanceTier, reducedMotion } = useDeviceCapabilities()
  const { supportsAdvancedAnimations, supportsMultiLayerGlass } = useAdvancedPerformance()
  const rotatingTexts = ["Enterprise", "Revenue-Driving", "AI-Powered"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        const nextIndex = (prev + 1) % rotatingTexts.length
        console.log('Rotating to:', rotatingTexts[nextIndex]) // Debug log
        return nextIndex
      })
    }, 2500) // Change text every 2.5 seconds

    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  // Luxury animation variants with sophisticated easing
  const luxuryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Luxury cubic-bezier
        staggerChildren: 0.1,
      }
    }
  }

  const luxuryItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Bouncy luxury easing
      }
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <PremiumBackground
      variant="hero"
      animated={!reducedMotion}
      meshPattern={performanceTier === 'elite'}
      particleEffect={false}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center luxury-container"
        variants={luxuryVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div
          variants={luxuryItemVariants}
          className="mb-12 sm:mb-16"
        >
          <LuxuryHeading
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
            glow={true}
          >
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              Experiences
            </span>
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mt-2">
              That Drive Results
            </span>
          </LuxuryHeading>

          <LuxurySubheading className="text-xl sm:text-2xl text-white/80 mb-8 text-shadow-soft max-w-4xl mx-auto leading-relaxed">
            Full-stack developer specializing in building{" "}
            <span className="text-white font-semibold">scalable web applications</span>,{" "}
            <span className="text-white font-semibold">modern UX design</span>, and{" "}
            <span className="text-white font-semibold">cloud architecture</span>
          </LuxurySubheading>
        </motion.div>

        {/* 3D Bento Grid */}
        <motion.div
          variants={luxuryItemVariants}
          className="mb-12 sm:mb-16"
        >
          <HeroBentoGrid />
        </motion.div>


      </motion.div>

      {/* Floating Tech Icons Background */}
      {performanceTier === 'elite' && !reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <FloatingTechIcons count={6} size="md" animated={true} className="opacity-20" />
        </div>
      )}

      {/* Enhanced Background Elements */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.18, 0.08],
              x: [0, 50, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      </PremiumBackground>
  )
}
