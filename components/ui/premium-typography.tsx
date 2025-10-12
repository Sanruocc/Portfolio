"use client"

import React, { useRef, useEffect, useMemo } from 'react'
import { useDeviceCapabilities } from '@/lib/hooks/use-device-capabilities'
import { cn } from '@/lib/utils'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

// Utility functions
const getVariantClasses = (variant: string) => {
  switch (variant) {
    case 'hero':
      return 'text-6xl md:text-8xl lg:text-9xl font-bold leading-tight'
    case 'title':
      return 'text-4xl md:text-6xl lg:text-7xl font-bold'
    case 'subtitle':
      return 'text-2xl md:text-4xl lg:text-5xl font-semibold'
    case 'accent':
      return 'text-xl md:text-3xl lg:text-4xl font-medium'
    default:
      return 'text-4xl font-bold'
  }
}

const getFontSize = (variant: string) => {
  switch (variant) {
    case 'hero': return 'clamp(3rem, 8vw, 8rem)'
    case 'title': return 'clamp(2rem, 6vw, 6rem)'
    case 'subtitle': return 'clamp(1.5rem, 4vw, 4rem)'
    case 'accent': return 'clamp(1.25rem, 3vw, 3rem)'
    default: return 'clamp(2rem, 5vw, 5rem)'
  }
}

interface PremiumTypographyProps {
  text: string
  className?: string
  variant?: 'hero' | 'title' | 'subtitle' | 'accent'
  animated?: boolean
  glow?: boolean
  shadow?: boolean
  depth?: number
  color?: string
  fontSize?: number
  fontWeight?: 'normal' | 'bold'
}

export const PremiumTypography: React.FC<PremiumTypographyProps> = ({
  text,
  className,
  variant = 'hero',
  animated = true,
  glow = true,
  shadow = true,
  depth = 0.5,
  color = '#8a2be2',
  fontSize = 4,
  fontWeight = 'bold'
}) => {
  const { performanceTier, reducedMotion, supportsWebGL } = useDeviceCapabilities()
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const textMeshRef = useRef<THREE.Mesh>()
  const animationRef = useRef<number>()

  // Font loader for 3D text
  const fontLoader = useMemo(() => new FontLoader(), [])

  // Create 3D text geometry
  const createTextGeometry = (font: any) => {
    try {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: fontSize,
        depth: depth,
        curveSegments: performanceTier === 'elite' ? 32 : performanceTier === 'high' ? 16 : 8,
        bevelEnabled: performanceTier !== 'low',
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: performanceTier === 'elite' ? 16 : 8
      })

      textGeometry.computeBoundingBox()
      textGeometry.computeVertexNormals()

      return textGeometry
    } catch (error) {
      console.warn('Failed to create 3D text geometry:', error)
      return null
    }
  }

  // Initialize Three.js scene
  useEffect(() => {
    if (!supportsWebGL || reducedMotion || performanceTier === 'low') return

    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 10

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer

    mount.appendChild(renderer.domElement)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(color, 1, 100)
    pointLight.position.set(-5, 5, 5)
    scene.add(pointLight)

    // Load font and create text
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
      (font: any) => {
        const textGeometry = createTextGeometry(font)

        if (!textGeometry) return

        // Material setup
        const textMaterial = new THREE.MeshPhongMaterial({
          color: new THREE.Color(color),
          shininess: 100,
          transparent: true,
          opacity: 0.9
        })

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.castShadow = true
        textMesh.receiveShadow = true
        textMeshRef.current = textMesh

        // Center the text
        if (textGeometry.boundingBox) {
          const centerOffsetX = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x)
          const centerOffsetY = -0.5 * (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y)
          textMesh.position.set(centerOffsetX, centerOffsetY, 0)
        }

        scene.add(textMesh)

        // Animation loop
        const animate = () => {
          if (!animated || reducedMotion) return

          const time = Date.now() * 0.001

          if (textMesh) {
            // Subtle floating animation
            textMesh.position.y = Math.sin(time) * 0.1
            textMesh.rotation.y = Math.sin(time * 0.5) * 0.1

            // Performance-based rotation speed
            if (performanceTier === 'elite') {
              textMesh.rotation.x = Math.cos(time * 0.3) * 0.05
            }
          }

          renderer.render(scene, camera)
          animationRef.current = requestAnimationFrame(animate)
        }

        animate()
      }
    )

    // Handle resize
    const handleResize = () => {
      if (!mount || !renderer || !camera) return

      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [supportsWebGL, reducedMotion, performanceTier, animated, text, fontSize, depth, color, fontLoader])

  // Fallback for devices without WebGL support or low performance
  if (!supportsWebGL || reducedMotion || performanceTier === 'low') {
    return (
      <div className={cn('premium-text-fallback', className)}>
        <span
          className={cn(
            'inline-block',
            getVariantClasses(variant),
            glow && 'text-shadow-glow',
            shadow && 'drop-shadow-lg',
            animated && 'animate-pulse'
          )}
          style={{
            color,
            fontSize: getFontSize(variant),
            fontWeight: fontWeight === 'bold' ? 700 : 400,
            textShadow: shadow ? '0 4px 8px rgba(0, 0, 0, 0.3)' : undefined
          }}
        >
          {text}
        </span>
      </div>
    )
  }

  return (
    <div
      ref={mountRef}
      className={cn(
        'premium-typography-container w-full h-64 flex items-center justify-center',
        className
      )}
      style={{
        minHeight: variant === 'hero' ? '400px' : variant === 'title' ? '200px' : '150px'
      }}
    />
  )
}

// Enhanced CSS-based 3D text effect for better performance
export const CSS3DText: React.FC<PremiumTypographyProps> = ({
  text,
  className,
  variant = 'hero',
  animated = true,
  glow = true,
  shadow = true,
  color = '#8a2be2'
}) => {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  return (
    <div className={cn('css-3d-text-container', className)}>
      <span
        className={cn(
          'css-3d-text',
          getVariantClasses(variant),
          animated && !reducedMotion && 'animate-float',
          glow && 'text-glow',
          shadow && 'text-shadow-3d'
        )}
        style={{
          color,
          '--text-color': color,
          '--glow-color': `${color}40`,
          '--shadow-color': `${color}20`
        } as React.CSSProperties}
      >
        {text}
      </span>

      <style jsx>{`
        .css-3d-text {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .text-shadow-3d {
          text-shadow:
            1px 1px 0 var(--shadow-color),
            2px 2px 0 var(--shadow-color),
            3px 3px 0 var(--shadow-color),
            4px 4px 0 var(--shadow-color),
            5px 5px 0 var(--shadow-color),
            6px 6px 0 var(--shadow-color),
            7px 7px 0 var(--shadow-color),
            8px 8px 0 var(--shadow-color),
            9px 9px 0 var(--shadow-color),
            10px 10px 0 var(--shadow-color),
            11px 11px 0 var(--shadow-color),
            12px 12px 0 var(--shadow-color);
        }

        .text-glow {
          filter: drop-shadow(0 0 10px var(--glow-color));
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(5deg); }
        }

        /* Performance optimizations */
        .css-3d-text {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

// Gradient text with animated background
export const GradientText: React.FC<PremiumTypographyProps> = ({
  text,
  className,
  variant = 'hero',
  animated = true
}) => {
  const { reducedMotion } = useDeviceCapabilities()

  return (
    <div className={cn('gradient-text-container', className)}>
      <span
        className={cn(
          'gradient-text',
          getVariantClasses(variant),
          animated && !reducedMotion && 'animate-gradient-shift'
        )}
      >
        {text}
      </span>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(45deg, #8a2be2, #ffd700, #8a2be2, #4169e1);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

// Typing animation text
export const TypingText: React.FC<PremiumTypographyProps> = ({
  text,
  className,
  variant = 'hero'
}) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { reducedMotion } = useDeviceCapabilities()

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(text)
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, reducedMotion])

  return (
    <div className={cn('typing-text-container', className)}>
      <span className={cn('typing-text', getVariantClasses(variant))}>
        {displayText}
        {!reducedMotion && currentIndex < text.length && (
          <span className="typing-cursor">|</span>
        )}
      </span>

      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #8a2be2;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}