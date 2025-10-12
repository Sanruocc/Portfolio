"use client"

import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-morphism"
import { LuxuryGlassCard } from "@/components/ui/luxury-glass-morphism"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { LuxuryHeading, LuxurySubheading } from "@/components/ui/luxury-typography"
import { HireMeButton } from "@/components/ui/premium-button"
import { PremiumBackground } from "@/components/ui/premium-background"
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"
import { useAdvancedPerformance } from "@/lib/hooks/use-advanced-performance"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
            glow={true}
          >
            I Build Digital Products That
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Drive Business Growth
            </span>
          </LuxuryHeading>

          <LuxurySubheading className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-12 text-shadow-soft max-w-4xl mx-auto leading-relaxed">
            Full-stack architect specializing in Next.js, Flutter, and AI automation.
            I transform complex challenges into scalable solutions that deliver measurable results.
          </LuxurySubheading>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          variants={luxuryItemVariants}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            <div className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-medium text-xs sm:text-sm">Next.js</span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-medium text-xs sm:text-sm">Flutter</span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <span className="text-yellow-300 font-medium text-xs sm:text-sm">AI Automation</span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <span className="text-green-300 font-medium text-xs sm:text-sm">TypeScript</span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-500/30">
              <span className="text-red-300 font-medium text-xs sm:text-sm">Python</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="relative min-h-[1.5em] min-w-[280px] sm:min-w-[350px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`text-${currentTextIndex}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-purple-pulse"
                >
                  {rotatingTexts[currentTextIndex]} Solutions
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Typing cursor effect */}
            <motion.span
              className="text-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl purple-neon-text"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div variants={luxuryItemVariants} className="mb-12 sm:mb-16">
          <LuxuryGlassCard
            className="max-w-4xl mx-auto"
            intensity="luxury"
            layers={supportsMultiLayerGlass ? 4 : 2}
            hover={true}
            animated={supportsAdvancedAnimations}
          >
            <div className="text-center">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-8 luxury-body">
              My approach combines technical excellence with business acumen to deliver solutions that
                <span className="text-yellow-400 font-semibold"> scale efficiently</span>,
                <span className="text-purple-400 font-semibold"> convert visitors</span>, and
                <span className="text-pink-400 font-semibold"> retain customers</span>
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2 luxury-heading">5+ Years</div>
                  <div className="text-sm text-white/80 luxury-body">Production Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-sapphire-400 mb-2 luxury-heading">$10M+</div>
                  <div className="text-sm text-white/80 luxury-body">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-ruby-400 mb-2 luxury-heading">50K+</div>
                  <div className="text-sm text-white/80 luxury-body">Happy Users</div>
                </div>
              </div>
            </div>
          </LuxuryGlassCard>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={luxuryItemVariants} className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <LuxuryButton
              onClick={scrollToProjects}
              variant="primary"
              size="md"
              animated={supportsAdvancedAnimations}
              shimmer={true}
              className="group w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>

            <LuxuryButton
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              variant="glass"
              size="md"
              animated={supportsAdvancedAnimations}
              className="group w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
            >
              View Portfolio
              <motion.span
                className="ml-2 inline-block"
                animate={!reducedMotion ? { y: [0, -2, 0] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: [0.34, 1.56, 0.64, 1] }}
              >
                ↓
              </motion.span>
            </LuxuryButton>
          </div>
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
