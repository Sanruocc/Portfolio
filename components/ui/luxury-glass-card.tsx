'use client';

import React, { forwardRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  generateGlassMorphism,
  generateMultiLayerGlass,
  adaptQualityForPerformance,
  getLuxuryColorWithOpacity,
} from '@/lib/utils/luxury-design-utils';

// Types
export type GlassMorphismVariant = 'subtle' | 'soft' | 'medium' | 'strong' | 'intense' | 'luxury';
export type GlassMorphismLayers = 1 | 2 | 3 | 4 | 5;

export interface LuxuryGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Glass morphism configuration
  variant?: GlassMorphismVariant;
  layers?: GlassMorphismLayers;

  // Visual customization
  opacity?: number;
  borderOpacity?: number;
  glowEffect?: boolean;
  gradientBorder?: boolean;

  // Interactive behavior
  hoverable?: boolean;
  clickable?: boolean;

  // Animation
  animate?: boolean;
  animationDelay?: number;

  // Accessibility
  ariaLabel?: string;
}

// Glass morphism configurations
const GLASS_CONFIGS = {
  subtle: { blur: 'subtle' as const, opacity: 0.05, borderOpacity: 0.05 },
  soft: { blur: 'soft' as const, opacity: 0.1, borderOpacity: 0.1 },
  medium: { blur: 'medium' as const, opacity: 0.15, borderOpacity: 0.15 },
  strong: { blur: 'strong' as const, opacity: 0.2, borderOpacity: 0.2 },
  intense: { blur: 'intense' as const, opacity: 0.25, borderOpacity: 0.25 },
  luxury: { blur: 'luxury' as const, opacity: 0.3, borderOpacity: 0.3 },
} as const;

// Animation variants for Framer Motion
const glassVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const LuxuryGlassCard = forwardRef<HTMLDivElement, LuxuryGlassCardProps>(
  (
    {
      children,
      variant = 'medium',
      layers = 1,
      opacity,
      borderOpacity,
      glowEffect = false,
      gradientBorder = false,
      hoverable = true,
      clickable = false,
      animate = true,
      animationDelay = 0,
      ariaLabel,
      className,
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    // Performance optimization - memoize glass effects
    const glassEffects = useMemo(() => {
      const config = GLASS_CONFIGS[variant];
      const baseOpacity = opacity ?? config.opacity;
      const baseBorderOpacity = borderOpacity ?? config.borderOpacity;

      if (layers === 1) {
        return [generateGlassMorphism(config.blur, baseOpacity, baseBorderOpacity)];
      } else {
        return generateMultiLayerGlass(layers, baseOpacity);
      }
    }, [variant, layers, opacity, borderOpacity]);

    // Performance adaptation
    const performanceTier = useMemo(() =>
      adaptQualityForPerformance(
        { blur: true, glow: true, multiLayer: true },
        { blur: true, glow: false, multiLayer: true },
        { blur: false, glow: false, multiLayer: false },
        { blur: false, glow: false, multiLayer: false }
      ), []
    );

    // Animation delay for staggered animations
    const animationVariants = useMemo(() => ({
      ...glassVariants,
      animate: {
        ...glassVariants.animate,
        transition: {
          ...glassVariants.animate.transition,
          delay: animationDelay,
        },
      },
    }), [animationDelay]);

    // Generate dynamic styles based on configuration
    const cardStyles = useMemo(() => {
      const styles: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
      };

      // Apply glass morphism effects
      if (performanceTier.blur) {
        styles.backdropFilter = glassEffects[0].backdropFilter;
      }
      styles.backgroundColor = glassEffects[0].backgroundColor;
      styles.border = glassEffects[0].border;

      // Add gradient border if enabled
      if (gradientBorder && performanceTier.blur) {
        styles.border = `1px solid transparent`;
        styles.background = `
          ${glassEffects[0].backgroundColor}
          linear-gradient(135deg, ${getLuxuryColorWithOpacity('luxury', 500, 0.1)}, ${getLuxuryColorWithOpacity('luxury-gold', 500, 0.1)})
          border-box
        `;
        styles.backgroundClip = 'padding-box, border-box';
      }

      // Add glow effect if enabled
      if (glowEffect && performanceTier.glow) {
        styles.boxShadow = `
          0 8px 32px rgba(138, 43, 226, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
      }

      return styles;
    }, [glassEffects, performanceTier, glowEffect, gradientBorder]);

    // Multi-layer glass effect rendering
    const renderLayers = () => {
      if (layers === 1 || !performanceTier.multiLayer) {
        return null;
      }

      return glassEffects.slice(1).map((layerEffect, index) => (
        <div
          key={`glass-layer-${index}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: layerEffect.backdropFilter,
            backgroundColor: layerEffect.backgroundColor,
            border: layerEffect.border,
            transform: layerEffect.transform,
            zIndex: -index,
          }}
        />
      ));
    };

    // Determine interactive props
    const interactiveProps = useMemo(() => {
      if (clickable) {
        return {
          role: 'button',
          tabIndex: 0,
          onClick,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick?.(e as any);
            }
          },
        };
      }
      return {};
    }, [clickable, onClick]);

    // Combine className with luxury-specific classes
    const combinedClassName = cn(
      'luxury-glass-card',
      `luxury-glass-card--${variant}`,
      `luxury-glass-card--layers-${layers}`,
      {
        'luxury-glass-card--hoverable': hoverable,
        'luxury-glass-card--clickable': clickable,
        'luxury-glass-card--glow': glowEffect,
        'luxury-glass-card--gradient-border': gradientBorder,
        'luxury-glass-card--animated': animate,
      },
      className
    );

    // Render component
    const CardComponent = animate ? motion.div : 'div';

    return (
      <CardComponent
        ref={ref}
        className={combinedClassName}
        style={{ ...cardStyles, ...style }}
        variants={animate ? animationVariants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        whileHover={hoverable && animate ? "hover" : undefined}
        whileTap={clickable && animate ? "tap" : undefined}
        aria-label={ariaLabel}
        {...interactiveProps}
        {...props}
      >
        {/* Multi-layer glass effects */}
        {renderLayers()}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </CardComponent>
    );
  }
);

LuxuryGlassCard.displayName = 'LuxuryGlassCard';

// Convenience components for specific variants
export const LuxuryGlassCardSubtle = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="subtle" {...props} />
);
LuxuryGlassCardSubtle.displayName = 'LuxuryGlassCardSubtle';

export const LuxuryGlassCardSoft = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="soft" {...props} />
);
LuxuryGlassCardSoft.displayName = 'LuxuryGlassCardSoft';

export const LuxuryGlassCardMedium = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="medium" {...props} />
);
LuxuryGlassCardMedium.displayName = 'LuxuryGlassCardMedium';

export const LuxuryGlassCardStrong = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="strong" {...props} />
);
LuxuryGlassCardStrong.displayName = 'LuxuryGlassCardStrong';

export const LuxuryGlassCardIntense = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="intense" {...props} />
);
LuxuryGlassCardIntense.displayName = 'LuxuryGlassCardIntense';

export const LuxuryGlassCardLuxury = forwardRef<HTMLDivElement, Omit<LuxuryGlassCardProps, 'variant'>>(
  (props, ref) => <LuxuryGlassCard ref={ref} variant="luxury" {...props} />
);
LuxuryGlassCardLuxury.displayName = 'LuxuryGlassCardLuxury';

export default LuxuryGlassCard;
