"use client"

import React, { useEffect, useState, useMemo } from 'react'
import { useDeviceCapabilities } from '@/lib/hooks/use-device-capabilities'
import { cn } from '@/lib/utils'
import { useSpring, animated } from 'react-spring'
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
  Cpu,
  Cloud,
  GitBranch,
  Layers,
  Terminal,
  Monitor,
  Server,
  Shield,
  Rocket,
  Palette,
  type LucideIcon
} from 'lucide-react'

interface FloatingTechIcon {
  id: string
  icon: LucideIcon
  name: string
  color: string
  size: number
  initialX: number
  initialY: number
  velocityX: number
  velocityY: number
  rotation: number
  rotationSpeed: number
  scale: number
  opacity: number
}

interface FloatingTechIconsProps {
  className?: string
  count?: number
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  interactive?: boolean
  physics?: boolean
}

const techIcons: Array<{ icon: LucideIcon; name: string; color: string }> = [
  { icon: Code, name: 'Code', color: '#8a2be2' },
  { icon: Database, name: 'Database', color: '#ffd700' },
  { icon: Globe, name: 'Web', color: '#4169e1' },
  { icon: Smartphone, name: 'Mobile', color: '#00ced1' },
  { icon: Zap, name: 'Performance', color: '#ff6347' },
  { icon: Cpu, name: 'AI', color: '#32cd32' },
  { icon: Cloud, name: 'Cloud', color: '#87ceeb' },
  { icon: GitBranch, name: 'Git', color: '#f05032' },
  { icon: Layers, name: 'Stack', color: '#9370db' },
  { icon: Terminal, name: 'Terminal', color: '#00ff00' },
  { icon: Monitor, name: 'Frontend', color: '#ff69b4' },
  { icon: Server, name: 'Backend', color: '#dda0dd' },
  { icon: Shield, name: 'Security', color: '#ff4500' },
  { icon: Rocket, name: 'DevOps', color: '#00bfff' },
  { icon: Palette, name: 'Design', color: '#ff1493' }
]

export const FloatingTechIcons: React.FC<FloatingTechIconsProps> = ({
  className,
  count = 8,
  size = 'md',
  animated = true,
  interactive = true,
  physics = true
}) => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [icons, setIcons] = useState<FloatingTechIcon[]>([])

  // Generate initial icons
  useEffect(() => {
    const container = document.querySelector('.floating-icons-container')
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const iconCount = performanceTier === 'low' ? Math.min(count, 4) :
                      performanceTier === 'mid' ? Math.min(count, 6) : count

    const generatedIcons: FloatingTechIcon[] = []

    for (let i = 0; i < iconCount; i++) {
      const techIcon = techIcons[i % techIcons.length]
      generatedIcons.push({
        id: `icon-${i}`,
        icon: techIcon.icon,
        name: techIcon.name,
        color: techIcon.color,
        size: getIconSize(size),
        initialX: Math.random() * containerRect.width,
        initialY: Math.random() * containerRect.height,
        velocityX: (Math.random() - 0.5) * 2,
        velocityY: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.6 + Math.random() * 0.4
      })
    }

    setIcons(generatedIcons)
  }, [count, size, performanceTier])

  // Mouse tracking for interactive effects
  useEffect(() => {
    if (!interactive || reducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [interactive, reducedMotion])

  // Physics animation loop
  useEffect(() => {
    if (!physics || reducedMotion || performanceTier === 'low') return

    const animate = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          const container = document.querySelector('.floating-icons-container')
          if (!container) return icon

          const containerRect = container.getBoundingClientRect()
          let newX = icon.initialX
          let newY = icon.initialY

          // Mouse interaction force
          if (interactive) {
            const mouseForce = 0.0001
            const dx = mousePosition.x - (icon.initialX + containerRect.left)
            const dy = mousePosition.y - (icon.initialY + containerRect.top)
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              const force = (200 - distance) * mouseForce
              newX -= (dx / distance) * force
              newY -= (dy / distance) * force
            }
          }

          // Boundary collision
          if (newX <= 0 || newX >= containerRect.width) {
            newX = Math.max(0, Math.min(containerRect.width, newX))
          }
          if (newY <= 0 || newY >= containerRect.height) {
            newY = Math.max(0, Math.min(containerRect.height, newY))
          }

          return {
            ...icon,
            initialX: newX,
            initialY: newY,
            rotation: icon.rotation + icon.rotationSpeed
          }
        })
      )

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [physics, reducedMotion, performanceTier, interactive, mousePosition])

  const getIconSize = (size: string) => {
    switch (size) {
      case 'sm': return 24
      case 'md': return 32
      case 'lg': return 48
      default: return 32
    }
  }

  if (reducedMotion || !animated) {
    return (
      <div className={cn('floating-icons-container relative', className)}>
        {icons.slice(0, 4).map((iconData) => {
          const IconComponent = iconData.icon
          return (
            <div
              key={iconData.id}
              className="absolute opacity-50"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                color: iconData.color
              }}
            >
              <IconComponent size={iconData.size} />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('floating-icons-container relative w-full h-full overflow-hidden', className)}>
      {icons.map((iconData) => {
        const IconComponent = iconData.icon

        // Spring animation for smooth floating
        const springProps = useSpring({
          to: {
            transform: `translate(${iconData.initialX}px, ${iconData.initialY}px) rotate(${iconData.rotation}deg) scale(${iconData.scale})`,
            opacity: iconData.opacity
          },
          config: {
            tension: 100,
            friction: 50,
            mass: 1
          }
        })

        return (
          <animated.div
            key={iconData.id}
            style={{
              ...springProps,
              position: 'absolute',
              color: iconData.color,
              cursor: interactive ? 'pointer' : 'default',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            className="floating-tech-icon"
            title={iconData.name}
          >
            <IconComponent size={iconData.size} className="drop-shadow-lg" />

            {/* Glow effect for high-performance devices */}
            {performanceTier === 'elite' && (
              <div
                className="absolute inset-0 rounded-full blur-md opacity-50"
                style={{
                  background: `radial-gradient(circle, ${iconData.color}40 0%, transparent 70%)`,
                  transform: 'scale(1.5)'
                }}
              />
            )}
          </animated.div>
        )
      })}

      {/* Performance indicator */}
      {performanceTier === 'elite' && (
        <div className="absolute top-2 right-2 text-xs text-white/50 bg-black/20 px-2 py-1 rounded">
          {icons.length} icons • Physics enabled
        </div>
      )}
    </div>
  )
}

// Preset configurations
export const FloatingTechIconsHero: React.FC<Omit<FloatingTechIconsProps, 'size' | 'count'>> = (props) => (
  <FloatingTechIcons {...props} size="lg" count={12} />
)

export const FloatingTechIconsSection: React.FC<Omit<FloatingTechIconsProps, 'size' | 'count'>> = (props) => (
  <FloatingTechIcons {...props} size="md" count={8} />
)

export const FloatingTechIconsCard: React.FC<Omit<FloatingTechIconsProps, 'size' | 'count'>> = (props) => (
  <FloatingTechIcons {...props} size="sm" count={4} />
)

// Interactive floating icons with mouse attraction
export const InteractiveFloatingIcons: React.FC<FloatingTechIconsProps> = (props) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="relative">
      <FloatingTechIcons
        {...props}
        interactive={true}
        physics={true}
        className={cn(props.className, 'cursor-none')}
      />

      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-200"
        style={{
          left: props.interactive ? 'var(--mouse-x, 0)' : 0,
          top: props.interactive ? 'var(--mouse-y, 0)' : 0,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-8 h-8 bg-purple-500/20 rounded-full blur-sm" />
        <div className="absolute inset-2 bg-purple-400 rounded-full" />
      </div>

      <style jsx>{`
        .floating-icons-container:hover {
          --mouse-x: ${props.interactive ? 'calc(var(--mouse-x, 0) + 10px)' : 0};
          --mouse-y: ${props.interactive ? 'calc(var(--mouse-y, 0) + 10px)' : 0};
        }
      `}</style>
    </div>
  )
}

// Tech icon with magnetic attraction
export const MagneticTechIcon: React.FC<{
  icon: LucideIcon
  name: string
  color: string
  size?: number
  className?: string
}> = ({ icon: IconComponent, name, color, size = 32, className }) => {
  const { reducedMotion } = useDeviceCapabilities()
  const [isHovered, setIsHovered] = useState(false)

  const springProps = useSpring({
    scale: isHovered ? 1.2 : 1,
    rotateZ: isHovered ? 360 : 0,
    config: {
      tension: 300,
      friction: 20
    }
  })

  if (reducedMotion) {
    return (
      <div className={cn('inline-flex items-center justify-center', className)}>
        <IconComponent size={size} style={{ color }} />
      </div>
    )
  }

  return (
    <animated.div
      style={springProps}
      className={cn('inline-flex items-center justify-center cursor-pointer', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={name}
    >
      <IconComponent size={size} style={{ color }} className="drop-shadow-lg" />

      {/* Magnetic glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-md transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
    </animated.div>
  )
}

// Tech icon constellation
export const TechIconConstellation: React.FC<{
  icons: Array<{ icon: LucideIcon; name: string; color: string }>
  className?: string
}> = ({ icons, className }) => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  const constellationProps = useSpring({
    opacity: 1,
    scale: 1,
    config: { tension: 100, friction: 50 }
  })

  if (reducedMotion) {
    return (
      <div className={cn('flex flex-wrap gap-4 justify-center', className)}>
        {icons.map((iconData, index) => {
          const IconComponent = iconData.icon
          return (
            <div key={index} className="opacity-60">
              <IconComponent size={24} />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <animated.div
      style={constellationProps}
      className={cn('relative', className)}
    >
      {/* Connection lines */}
      {performanceTier === 'elite' && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {icons.map((_, index) => {
            if (index === icons.length - 1) return null
            const nextIndex = index + 1
            return (
              <line
                key={`line-${index}`}
                x1={`${(index * 100) / (icons.length - 1)}%`}
                y1="50%"
                x2={`${(nextIndex * 100) / (icons.length - 1)}%`}
                y2="50%"
                stroke="rgba(138, 43, 226, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            )
          })}
        </svg>
      )}

      {/* Icons */}
      <div className="flex flex-wrap gap-6 justify-center items-center relative z-10">
        {icons.map((iconData, index) => {
          const IconComponent = iconData.icon
          return (
            <animated.div
              key={index}
              className="relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <IconComponent size={32} style={{ color: iconData.color }} className="drop-shadow-lg" />

              {/* Pulsing dot */}
              <div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: iconData.color }}
              />
            </animated.div>
          )
        })}
      </div>
    </animated.div>
  )
}