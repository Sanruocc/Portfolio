"use client"

import React, { useEffect, useRef } from 'react'
import { useDeviceCapabilities } from '@/lib/hooks/use-device-capabilities'
import { cn } from '@/lib/utils'

interface PremiumBackgroundProps {
  children?: React.ReactNode
  className?: string
  variant?: 'hero' | 'section' | 'card'
  animated?: boolean
  meshPattern?: boolean
  particleEffect?: boolean
}

export const PremiumBackground: React.FC<PremiumBackgroundProps> = ({
  children,
  className,
  variant = 'hero',
  animated = true,
  meshPattern = true,
  particleEffect = true
}) => {
  const { performanceTier, reducedMotion, supportsWebGL } = useDeviceCapabilities()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Multi-layered gradient background
  const getGradientLayers = () => {
    const baseGradients = [
      'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.3) 0%, transparent 50%)',
      'radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)',
      'radial-gradient(circle at 40% 80%, rgba(75, 0, 130, 0.25) 0%, transparent 50%)',
      'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)'
    ]

    if (reducedMotion || performanceTier === 'low') {
      return [baseGradients[3]] // Only base gradient for low performance
    }

    if (performanceTier === 'mid') {
      return baseGradients.slice(0, 2) // Two gradients for mid performance
    }

    return baseGradients // All gradients for high performance
  }

  // Animated mesh pattern effect
  useEffect(() => {
    if (!animated || reducedMotion || !meshPattern || !supportsWebGL) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const time = { value: 0 }
    const animate = () => {
      time.value += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create mesh pattern
      const cols = Math.floor(canvas.width / 50) + 1
      const rows = Math.floor(canvas.height / 50) + 1

      ctx.strokeStyle = 'rgba(138, 43, 226, 0.1)'
      ctx.lineWidth = 1

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * 50
          const y = j * 50

          // Animated offset based on time and position
          const offsetX = Math.sin(time.value + i * 0.1) * 10
          const offsetY = Math.cos(time.value + j * 0.1) * 10

          if (i < cols) {
            ctx.beginPath()
            ctx.moveTo(x + offsetX, y + offsetY)
            ctx.lineTo(x + 50 + offsetX, y + offsetY)
            ctx.stroke()
          }

          if (j < rows) {
            ctx.beginPath()
            ctx.moveTo(x + offsetX, y + offsetY)
            ctx.lineTo(x + offsetX, y + 50 + offsetY)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animated, reducedMotion, meshPattern, supportsWebGL])

  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'min-h-screen relative overflow-hidden'
      case 'section':
        return 'min-h-[60vh] relative overflow-hidden'
      case 'card':
        return 'relative overflow-hidden rounded-2xl'
      default:
        return 'relative overflow-hidden'
    }
  }

  return (
    <div className={cn(getVariantClasses(), className)}>
      {/* Multi-layered gradient backgrounds */}
      <div className="absolute inset-0">
        {getGradientLayers().map((gradient, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0',
              animated && !reducedMotion && 'animate-pulse'
            )}
            style={{
              background: gradient,
              animationDelay: `${index * 2}s`,
              animationDuration: `${8 + index * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated mesh pattern canvas */}
      {meshPattern && supportsWebGL && performanceTier !== 'low' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.3 }}
        />
      )}

      {/* Floating orbs for high-performance devices */}
      {particleEffect && performanceTier === 'elite' && !reducedMotion && (
        <>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-indigo-500/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }} />
        </>
      )}

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
    </div>
  )
}

// Background with time-based color shifts
export const TimeBasedBackground: React.FC<PremiumBackgroundProps> = (props) => {
  const [currentHour, setCurrentHour] = React.useState(new Date().getHours())

  useEffect(() => {
    const updateHour = () => setCurrentHour(new Date().getHours())
    const interval = setInterval(updateHour, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const getTimeBasedColors = () => {
    // Morning (6-12): Warm golden tones
    if (currentHour >= 6 && currentHour < 12) {
      return {
        primary: 'rgba(255, 215, 0, 0.3)',
        secondary: 'rgba(255, 165, 0, 0.2)',
        accent: 'rgba(255, 140, 0, 0.15)'
      }
    }
    // Afternoon (12-18): Purple and blue tones
    else if (currentHour >= 12 && currentHour < 18) {
      return {
        primary: 'rgba(138, 43, 226, 0.3)',
        secondary: 'rgba(75, 0, 130, 0.2)',
        accent: 'rgba(25, 25, 112, 0.15)'
      }
    }
    // Evening/Night (18-6): Deep purple and indigo
    else {
      return {
        primary: 'rgba(75, 0, 130, 0.4)',
        secondary: 'rgba(25, 25, 112, 0.3)',
        accent: 'rgba(0, 0, 139, 0.2)'
      }
    }
  }

  const colors = getTimeBasedColors()

  return (
    <PremiumBackground {...props}>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${colors.accent} 0%, transparent 50%)
          `
        }}
      />
      {props.children}
    </PremiumBackground>
  )
}

// Particle system background
export const ParticleBackground: React.FC<PremiumBackgroundProps> = ({
  children,
  className,
  ...props
}) => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()
  const [particles, setParticles] = React.useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
  }>>([])

  useEffect(() => {
    if (reducedMotion || performanceTier === 'low') return

    const particleCount = performanceTier === 'elite' ? 50 : performanceTier === 'high' ? 30 : 15

    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2
    }))

    setParticles(initialParticles)

    const animate = () => {
      setParticles(prev =>
        prev.map(particle => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy

          // Wrap around screen edges
          if (newX > window.innerWidth) newX = 0
          else if (newX < 0) newX = window.innerWidth

          if (newY > window.innerHeight) newY = 0
          else if (newY < 0) newY = window.innerHeight

          return {
            ...particle,
            x: newX,
            y: newY
          }
        })
      )
      requestAnimationFrame(animate)
    }

    animate()
  }, [performanceTier, reducedMotion])

  return (
    <PremiumBackground {...props} className={className}>
      {/* Render particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-purple-400 pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: '0 0 10px rgba(138, 43, 226, 0.5)'
          }}
        />
      ))}
      {children}
    </PremiumBackground>
  )
}