/**
 * Luxury Animation System Hook
 *
 * Provides sophisticated animation utilities with luxury cubic-bezier easing curves,
 * performance optimization, and accessibility support for reduced motion preferences.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAnimation, useInView, AnimationControls } from 'framer-motion';
import { adaptQualityForPerformance, getLuxuryEasing } from '@/lib/utils/luxury-design-utils';

// Types
export type LuxuryAnimationType =
  | 'fadeIn'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleIn'
  | 'scaleOut'
  | 'bounceIn'
  | 'glow'
  | 'float'
  | 'pulse'
  | 'shimmer'
  | 'gradientShift'
  | 'morph'
  | 'parallax';

export type LuxuryEasingType =
  | 'luxury-cubic-bezier'
  | 'luxury-easing'
  | 'luxury-bounce'
  | 'luxury-elastic';

export interface LuxuryAnimationConfig {
  type: LuxuryAnimationType;
  duration?: number;
  delay?: number;
  easing?: LuxuryEasingType;
  repeat?: number | 'infinite';
  repeatDelay?: number;
  direction?: 'normal' | 'reverse' | 'alternate';
  trigger?: 'hover' | 'click' | 'inView' | 'scroll' | 'load';
  threshold?: number;
  once?: boolean;
}

export interface LuxuryAnimationState {
  isAnimating: boolean;
  isVisible: boolean;
  hasTriggered: boolean;
  progress: number;
}

// Luxury animation configurations
const LUXURY_ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },

  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },

  slideDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },

  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },

  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },

  scaleOut: {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 0, scale: 0.9 },
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },

  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },

  glow: {
    initial: { boxShadow: '0 0 20px hsl(262 83% 58% / 0.3)' },
    animate: { boxShadow: '0 0 40px hsl(262 83% 58% / 0.6)' },
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },

  float: {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10] },
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },

  pulse: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },

  shimmer: {
    initial: {
      backgroundPosition: '-200% 0',
    },
    animate: {
      backgroundPosition: '200% 0',
    },
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 1,
    },
  },

  gradientShift: {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: '100% 50%',
    },
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },

  morph: {
    initial: { borderRadius: '0%' },
    animate: [
      { borderRadius: '0%' },
      { borderRadius: '25%' },
      { borderRadius: '50%' },
      { borderRadius: '25%' },
      { borderRadius: '0%' },
    ],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },

  parallax: {
    initial: { y: 0 },
    animate: { y: [0, -50, 0] },
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
} as const;

// Performance-optimized animation presets
const PERFORMANCE_PRESETS = {
  luxury: {
    enableComplexAnimations: true,
    enableMultiLayerEffects: true,
    enableAdvancedEasing: true,
    durationMultiplier: 1,
  },
  high: {
    enableComplexAnimations: true,
    enableMultiLayerEffects: false,
    enableAdvancedEasing: true,
    durationMultiplier: 0.8,
  },
  medium: {
    enableComplexAnimations: false,
    enableMultiLayerEffects: false,
    enableAdvancedEasing: false,
    durationMultiplier: 0.6,
  },
  low: {
    enableComplexAnimations: false,
    enableMultiLayerEffects: false,
    enableAdvancedEasing: false,
    durationMultiplier: 0.4,
  },
} as const;

export interface UseLuxuryAnimationsReturn {
  // Animation controls
  controls: AnimationControls;
  ref: React.RefObject<Element>;

  // State
  state: LuxuryAnimationState;

  // Animation methods
  startAnimation: (config?: Partial<LuxuryAnimationConfig>) => void;
  stopAnimation: () => void;
  resetAnimation: () => void;

  // Utility methods
  getAnimationProps: (config: LuxuryAnimationConfig) => any;
  createStaggeredAnimation: (items: any[], staggerDelay?: number) => any[];
  createScrollTriggeredAnimation: (config: LuxuryAnimationConfig) => any;

  // Performance methods
  adaptForPerformance: (animationType: LuxuryAnimationType) => any;
}

/**
 * Main luxury animation hook
 */
export function useLuxuryAnimations(
  config: LuxuryAnimationConfig
): UseLuxuryAnimationsReturn {
  const {
    type,
    duration = 0.8,
    delay = 0,
    easing = 'luxury-cubic-bezier',
    repeat = 0,
    repeatDelay = 0,
    direction = 'normal',
    trigger = 'inView',
    threshold = 0.1,
    once = true,
  } = config;

  // Refs and state
  const ref = useRef<Element>(null);
  const controls = useAnimation();
  const [state, setState] = useState<LuxuryAnimationState>({
    isAnimating: false,
    isVisible: false,
    hasTriggered: false,
    progress: 0,
  });

  // Performance tier detection
  const performanceTier = useMemo(() =>
    adaptQualityForPerformance('luxury', 'high', 'medium', 'low'), []
  );

  const performancePreset = useMemo(() =>
    PERFORMANCE_PRESETS[performanceTier], [performanceTier]
  );

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection observer for in-view animations
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  // Animation configuration with performance adaptation
  const animationConfig = useMemo(() => {
    const baseConfig = LUXURY_ANIMATIONS[type];

    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, x: 0, y: 0, scale: 1 },
        animate: { opacity: 1, x: 0, y: 0, scale: 1 },
        transition: {
          duration: 0.1,
          ease: 'linear',
        },
      };
    }

    const adaptedConfig = {
      ...baseConfig,
      transition: {
        ...baseConfig.transition,
        duration: baseConfig.transition.duration * performancePreset.durationMultiplier,
        delay: delay,
        ease: getLuxuryEasing(easing),
        repeat,
        repeatDelay,
        repeatType: direction === 'alternate' ? 'reverse' : 'loop',
      },
    };

    // Simplify complex animations for lower performance tiers
    if (!performancePreset.enableComplexAnimations) {
      if (type === 'morph' || type === 'bounceIn') {
        return LUXURY_ANIMATIONS.scaleIn;
      }
    }

    return adaptedConfig;
  }, [type, duration, delay, easing, repeat, repeatDelay, direction, performancePreset, prefersReducedMotion]);

  // Trigger animation based on trigger type
  useEffect(() => {
    let shouldAnimate = false;

    switch (trigger) {
      case 'inView':
        shouldAnimate = isInView && !state.hasTriggered;
        break;
      case 'load':
        shouldAnimate = !state.hasTriggered;
        break;
      case 'hover':
      case 'click':
        shouldAnimate = false; // Handled by event handlers
        break;
      default:
        shouldAnimate = false;
    }

    if (shouldAnimate) {
      startAnimation();
      if (once) {
        setState(prev => ({ ...prev, hasTriggered: true }));
      }
    }
  }, [isInView, trigger, state.hasTriggered, once]);

  // Animation control methods
  const startAnimation = useCallback(async (overrideConfig?: Partial<LuxuryAnimationConfig>) => {
    setState(prev => ({ ...prev, isAnimating: true }));

    try {
      const finalConfig = overrideConfig ? { ...animationConfig, ...overrideConfig } : animationConfig;
      await controls.start(finalConfig.animate);
      setState(prev => ({ ...prev, isAnimating: false, progress: 1 }));
    } catch (error) {
      console.warn('Animation failed:', error);
      setState(prev => ({ ...prev, isAnimating: false }));
    }
  }, [controls, animationConfig]);

  const stopAnimation = useCallback(async () => {
    setState(prev => ({ ...prev, isAnimating: false }));
    await controls.stop();
  }, [controls]);

  const resetAnimation = useCallback(async () => {
    setState({
      isAnimating: false,
      isVisible: false,
      hasTriggered: false,
      progress: 0,
    });
    await controls.set(animationConfig.initial);
  }, [controls, animationConfig]);

  // Utility methods
  const getAnimationProps = useCallback((config: LuxuryAnimationConfig) => {
    const animationType = LUXURY_ANIMATIONS[config.type];
    return {
      initial: animationType.initial,
      animate: animationType.animate,
      transition: {
        ...animationType.transition,
        duration: config.duration || animationType.transition.duration,
        delay: config.delay || 0,
        ease: getLuxuryEasing(config.easing || 'luxury-cubic-bezier'),
        repeat: config.repeat || 0,
        repeatDelay: config.repeatDelay || 0,
      },
    };
  }, []);

  const createStaggeredAnimation = useCallback((items: any[], staggerDelay: number = 0.1) => {
    return items.map((item, index) => ({
      ...item,
      transition: {
        ...item.transition,
        delay: index * staggerDelay,
      },
    }));
  }, []);

  const createScrollTriggeredAnimation = useCallback((config: LuxuryAnimationConfig) => {
    return {
      ...getAnimationProps(config),
      whileInView: config.type === 'parallax' ? { y: -50 } : undefined,
    };
  }, [getAnimationProps]);

  const adaptForPerformance = useCallback((animationType: LuxuryAnimationType) => {
    const baseAnimation = LUXURY_ANIMATIONS[animationType];

    if (performanceTier === 'low' || performanceTier === 'medium') {
      // Simplify animation for lower performance tiers
      return {
        ...baseAnimation,
        transition: {
          ...baseAnimation.transition,
          duration: baseAnimation.transition.duration * 0.5,
          ease: 'linear',
        },
      };
    }

    return baseAnimation;
  }, [performanceTier]);

  return {
    controls,
    ref,
    state,
    startAnimation,
    stopAnimation,
    resetAnimation,
    getAnimationProps,
    createStaggeredAnimation,
    createScrollTriggeredAnimation,
    adaptForPerformance,
  };
}

/**
 * Specialized animation hooks
 */

// Hook for staggered animations
export function useStaggeredAnimations(
  items: any[],
  staggerDelay: number = 0.1,
  config: LuxuryAnimationConfig
) {
  const { createStaggeredAnimation, getAnimationProps } = useLuxuryAnimations(config);

  return useMemo(() => {
    const baseProps = getAnimationProps(config);
    return createStaggeredAnimation(
      items.map((_, index) => ({
        ...baseProps,
        key: `staggered-${index}`,
      })),
      staggerDelay
    );
  }, [items, staggerDelay, config, getAnimationProps, createStaggeredAnimation]);
}

// Hook for scroll-triggered animations
export function useScrollAnimations(
  config: LuxuryAnimationConfig,
  threshold: number = 0.1
) {
  const { ref, createScrollTriggeredAnimation } = useLuxuryAnimations({
    ...config,
    trigger: 'inView',
    threshold,
  });

  return {
    ref,
    animationProps: createScrollTriggeredAnimation(config),
  };
}

// Hook for hover animations
export function useHoverAnimations(
  config: LuxuryAnimationConfig,
  scale: number = 1.05
) {
  const { controls } = useLuxuryAnimations(config);

  const handleHoverStart = useCallback(() => {
    controls.start({
      scale,
      transition: { duration: 0.2, ease: 'easeOut' },
    });
  }, [controls, scale]);

  const handleHoverEnd = useCallback(() => {
    controls.start({
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' },
    });
  }, [controls]);

  return {
    handleHoverStart,
    handleHoverEnd,
    animateProps: {
      whileHover: { scale },
      whileTap: { scale: 0.95 },
    },
  };
}

// Hook for loading animations
export function useLoadingAnimations(
  config: LuxuryAnimationConfig,
  delay: number = 0
) {
  const { controls, startAnimation } = useLuxuryAnimations({
    ...config,
    trigger: 'load',
    delay,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(timer);
  }, [startAnimation, delay]);

  return { controls };
}
