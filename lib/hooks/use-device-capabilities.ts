"use client"

import { useState, useEffect } from 'react'

export interface DeviceCapabilities {
  isHighEnd: boolean
  supportsWebGL: boolean
  reducedMotion: boolean
  touchDevice: boolean
  screenSize: 'mobile' | 'tablet' | 'desktop'
  connectionSpeed: 'slow' | 'fast' | '4g'
  batteryLevel: number
  prefersDarkMode: boolean
  devicePixelRatio: number
  hardwareConcurrency: number
  maxTouchPoints: number
  performanceTier: 'low' | 'mid' | 'high' | 'elite'
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isHighEnd: false,
    supportsWebGL: false,
    reducedMotion: false,
    touchDevice: false,
    screenSize: 'mobile',
    connectionSpeed: 'slow',
    batteryLevel: 1,
    prefersDarkMode: false,
    devicePixelRatio: 1,
    hardwareConcurrency: 1,
    maxTouchPoints: 0,
    performanceTier: 'low'
  })

  useEffect(() => {
    const checkCapabilities = () => {
      // Device pixel ratio and hardware concurrency
      const devicePixelRatio = window.devicePixelRatio || 1
      const hardwareConcurrency = navigator.hardwareConcurrency || 1

      // WebGL support detection
      const supportsWebGL = (() => {
        try {
          const canvas = document.createElement('canvas')
          return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        } catch (e) {
          return false
        }
      })()

      // Reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Touch device detection
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const maxTouchPoints = navigator.maxTouchPoints || 0

      // Screen size detection
      const screenWidth = window.innerWidth
      const screenSize: 'mobile' | 'tablet' | 'desktop' =
        screenWidth < 768 ? 'mobile' :
        screenWidth < 1024 ? 'tablet' : 'desktop'

      // Connection speed
      const connection = (navigator as any).connection ||
                        (navigator as any).mozConnection ||
                        (navigator as any).webkitConnection
      const connectionSpeed: 'slow' | 'fast' | '4g' = connection?.effectiveType === '4g' ? '4g' :
                                                      connection?.effectiveType === 'fast-3g' ||
                                                      connection?.effectiveType === 'slow-2g' ? 'slow' : 'fast'

      // Battery level (if available)
      let batteryLevel = 1
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          batteryLevel = battery.level
          updateBatteryLevel(batteryLevel)
        })
      }

      // Dark mode preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      // Performance tier calculation
      const isHighEnd = devicePixelRatio > 1.5 && hardwareConcurrency > 4
      const performanceTier: 'low' | 'mid' | 'high' | 'elite' =
        !isHighEnd ? 'low' :
        hardwareConcurrency > 8 && devicePixelRatio >= 2 ? 'elite' :
        hardwareConcurrency > 4 && devicePixelRatio >= 1.5 ? 'high' : 'mid'

      setCapabilities({
        isHighEnd,
        supportsWebGL,
        reducedMotion,
        touchDevice,
        screenSize,
        connectionSpeed,
        batteryLevel,
        prefersDarkMode,
        devicePixelRatio,
        hardwareConcurrency,
        maxTouchPoints,
        performanceTier
      })
    }

    const updateBatteryLevel = (level: number) => {
      setCapabilities(prev => ({ ...prev, batteryLevel: level }))
    }

    // Initial check
    checkCapabilities()

    // Event listeners
    window.addEventListener('resize', checkCapabilities)
    const connection = (navigator as any).connection
    if (connection) {
      connection.addEventListener('change', checkCapabilities)
    }

    // Battery monitoring
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        battery.addEventListener('levelchange', () => {
          updateBatteryLevel(battery.level)
        })
      })
    }

    return () => {
      window.removeEventListener('resize', checkCapabilities)
      if (connection) {
        connection.removeEventListener('change', checkCapabilities)
      }
    }
  }, [])

  return capabilities
}