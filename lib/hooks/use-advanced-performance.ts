"use client"

import { useState, useEffect } from "react"

type PerformanceTier = 'low' | 'medium' | 'high' | 'luxury'

interface PerformanceCapabilities {
  performanceTier: PerformanceTier
  supportsAdvancedAnimations: boolean
  supportsParticleEffects: boolean
  supportsMultiLayerGlass: boolean
  supportsHeavyBlur: boolean
  deviceMemory: number
  hardwareConcurrency: number
  connectionType: string
}

export const useAdvancedPerformance = (): PerformanceCapabilities => {
  const [capabilities, setCapabilities] = useState<PerformanceCapabilities>({
    performanceTier: 'medium',
    supportsAdvancedAnimations: true,
    supportsParticleEffects: true,
    supportsMultiLayerGlass: true,
    supportsHeavyBlur: true,
    deviceMemory: 4,
    hardwareConcurrency: 4,
    connectionType: '4g'
  })

  useEffect(() => {
    const detectPerformance = () => {
      // Get device capabilities
      const connection = (navigator as any).connection
      const deviceMemory = (navigator as any).deviceMemory || 4
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const connectionType = connection?.effectiveType || '4g'

      // Detect performance tier
      let performanceTier: PerformanceTier = 'medium'
      
      if (deviceMemory >= 8 && hardwareConcurrency >= 8 && connectionType === '4g') {
        performanceTier = 'luxury'
      } else if (deviceMemory >= 4 && hardwareConcurrency >= 4) {
        performanceTier = 'high'
      } else if (deviceMemory >= 2) {
        performanceTier = 'medium'
      } else {
        performanceTier = 'low'
      }

      // Determine capabilities based on performance tier
      const supportsAdvancedAnimations = performanceTier !== 'low'
      const supportsParticleEffects = performanceTier === 'high' || performanceTier === 'luxury'
      const supportsMultiLayerGlass = performanceTier !== 'low'
      const supportsHeavyBlur = performanceTier === 'high' || performanceTier === 'luxury'

      setCapabilities({
        performanceTier,
        supportsAdvancedAnimations,
        supportsParticleEffects,
        supportsMultiLayerGlass,
        supportsHeavyBlur,
        deviceMemory,
        hardwareConcurrency,
        connectionType
      })
    }

    detectPerformance()

    // Re-detect on network change
    const connection = (navigator as any).connection
    if (connection) {
      connection.addEventListener('change', detectPerformance)
      return () => connection.removeEventListener('change', detectPerformance)
    }
  }, [])

  return capabilities
}

// Hook for intersection observer with performance optimization
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [elementRef, hasIntersected, options])

  return { isIntersecting, hasIntersected }
}

// Preload critical assets
export const useAssetPreloader = (assets: string[]) => {
  const [loadedAssets, setLoadedAssets] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadAssets = async () => {
      const promises = assets.map(asset => {
        return new Promise<string>((resolve, reject) => {
          if (asset.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            const img = new Image()
            img.onload = () => resolve(asset)
            img.onerror = reject
            img.src = asset
          } else if (asset.match(/\.(woff|woff2|ttf|otf)$/i)) {
            const font = new FontFace('preload-font', `url(${asset})`)
            font.load().then(() => resolve(asset)).catch(reject)
          } else {
            // For other assets, just resolve immediately
            resolve(asset)
          }
        })
      })

      try {
        const loaded = await Promise.allSettled(promises)
        const successful = loaded
          .filter(result => result.status === 'fulfilled')
          .map(result => (result as PromiseFulfilledResult<string>).value)
        
        setLoadedAssets(new Set(successful))
        setIsLoading(false)
      } catch (error) {
        console.warn('Some assets failed to preload:', error)
        setIsLoading(false)
      }
    }

    if (assets.length > 0) {
      preloadAssets()
    } else {
      setIsLoading(false)
    }
  }, [assets])

  return { loadedAssets, isLoading }
}