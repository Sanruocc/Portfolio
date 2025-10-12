'use client';

import React, { forwardRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  calculateGoldenGrid,
  generateGoldenGridTemplate,
  ensureContrastRatio,
  adaptQualityForPerformance,
  getLuxuryColorWithOpacity,
} from '@/lib/utils/luxury-design-utils';

// Types
export type LuxuryLayoutVariant = 'hero' | 'section' | 'card' | 'sidebar' | 'footer' | 'navigation';
export type LuxuryLayoutSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type LuxuryLayoutAlignment = 'start' | 'center' | 'end' | 'stretch';
export type LuxuryLayoutJustification = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface LuxuryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  // Layout configuration
  variant?: LuxuryLayoutVariant;
  size?: LuxuryLayoutSize;
  columns?: number;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

  // Flexbox properties
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: LuxuryLayoutAlignment;
  justify?: LuxuryLayoutJustification;
  wrap?: boolean;

  // Visual customization
  glassEffect?: boolean;
  gradientBackground?: boolean;
  glowEffect?: boolean;

  // Responsive behavior
  responsive?: boolean;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';

  // Animation
  animate?: boolean;
  animationDelay?: number;

  // Accessibility
  ariaLabel?: string;
  role?: string;
  skipLink?: boolean;
  focusTrap?: boolean;

  // Performance
  lazyLoad?: boolean;
}

// Layout configurations for different variants
const LAYOUT_CONFIGS = {
  hero: {
    minHeight: '100vh',
    padding: 'luxury-spacing-4xl',
    align: 'center' as LuxuryLayoutAlignment,
    justify: 'center' as LuxuryLayoutJustification,
  },
  section: {
    minHeight: '50vh',
    padding: 'luxury-spacing-3xl',
    align: 'start' as LuxuryLayoutAlignment,
    justify: 'start' as LuxuryLayoutJustification,
  },
  card: {
    minHeight: 'auto',
    padding: 'luxury-spacing-xl',
    align: 'stretch' as LuxuryLayoutAlignment,
    justify: 'start' as LuxuryLayoutJustification,
  },
  sidebar: {
    minHeight: '100vh',
    padding: 'luxury-spacing-lg',
    align: 'start' as LuxuryLayoutAlignment,
    justify: 'start' as LuxuryLayoutJustification,
  },
  footer: {
    minHeight: 'auto',
    padding: 'luxury-spacing-xl',
    align: 'center' as LuxuryLayoutAlignment,
    justify: 'center' as LuxuryLayoutJustification,
  },
  navigation: {
    minHeight: 'auto',
    padding: 'luxury-spacing-lg',
    align: 'center' as LuxuryLayoutAlignment,
    justify: 'between' as LuxuryLayoutJustification,
  },
} as const;

// Responsive configurations
const RESPONSIVE_CONFIGS = {
  xs: { maxWidth: '320px', padding: 'luxury-spacing-sm' },
  sm: { maxWidth: '518px', padding: 'luxury-spacing-md' },
  md: { maxWidth: '838px', padding: 'luxury-spacing-lg' },
  lg: { maxWidth: '1356px', padding: 'luxury-spacing-xl' },
  xl: { maxWidth: '2194px', padding: 'luxury-spacing-2xl' },
  '2xl': { maxWidth: '3550px', padding: 'luxury-spacing-3xl' },
  full: { maxWidth: 'none', padding: 'luxury-spacing-4xl' },
} as const;

// Animation variants
const layoutVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const LuxuryLayout = forwardRef<HTMLDivElement, LuxuryLayoutProps>(
  (
    {
      children,
      variant = 'section',
      size = 'full',
      columns = 1,
      gap = 'xl',
      direction = 'column',
      align = 'start',
      justify = 'start',
      wrap = true,
      glassEffect = false,
      gradientBackground = false,
      glowEffect = false,
      responsive = true,
      breakpoint = 'md',
      animate = true,
      animationDelay = 0,
      ariaLabel,
      role,
      skipLink = false,
      focusTrap = false,
      lazyLoad = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Performance optimization - memoize configurations
    const layoutConfig = useMemo(() => {
      const config = LAYOUT_CONFIGS[variant];
      const responsiveConfig = RESPONSIVE_CONFIGS[size];

      return {
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        minHeight: config.minHeight,
        padding: responsive ? responsiveConfig.padding : config.padding,
        maxWidth: responsive ? responsiveConfig.maxWidth : 'none',
        margin: '0 auto',
        gap: `var(--luxury-spacing-${gap})`,
      };
    }, [variant, size, direction, align, justify, wrap, gap, responsive]);

    // Grid configuration for multi-column layouts
    const gridConfig = useMemo(() => {
      if (columns <= 1) return {};

      const gridTemplateColumns = generateGoldenGridTemplate(columns);

      return {
        display: 'grid',
        gridTemplateColumns,
        gap: `var(--luxury-spacing-${gap})`,
        alignItems: align,
        justifyItems: justify === 'center' ? 'center' : justify === 'end' ? 'end' : 'start',
      };
    }, [columns, gap, align, justify]);

    // Visual effects configuration
    const visualEffects = useMemo(() => {
      const effects: React.CSSProperties = {};

      // Glass effect
      if (glassEffect) {
        effects.backdropFilter = 'blur(20px)';
        effects.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        effects.border = '1px solid rgba(255, 255, 255, 0.2)';
      }

      // Gradient background
      if (gradientBackground) {
        effects.background = 'var(--gradient-luxury-purple-gold)';
      }

      // Glow effect
      if (glowEffect) {
        effects.boxShadow = '0 8px 32px rgba(138, 43, 226, 0.15)';
      }

      return effects;
    }, [glassEffect, gradientBackground, glowEffect]);

    // Performance adaptation
    const performanceTier = useMemo(() =>
      adaptQualityForPerformance(
        { effects: true, animations: true },
        { effects: true, animations: false },
        { effects: false, animations: false },
        { effects: false, animations: false }
      ), []
    );

    // Accessibility enhancements
    const accessibilityProps = useMemo(() => {
      const props: Record<string, any> = {};

      if (ariaLabel) {
        props['aria-label'] = ariaLabel;
      }

      if (role) {
        props.role = role;
      }

      if (skipLink) {
        props.tabIndex = -1;
      }

      // Focus management
      if (focusTrap) {
        props['data-focus-trap'] = 'true';
      }

      return props;
    }, [ariaLabel, role, skipLink, focusTrap]);

    // Skip link component
    const SkipLink = () => (
      skipLink ? (
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 luxury-bg-primary luxury-color-white luxury-padding-md luxury-radius-md"
        >
          Skip to main content
        </a>
      ) : null
    );

    // Combine className with luxury-specific classes
    const combinedClassName = cn(
      'luxury-layout',
      `luxury-layout--${variant}`,
      `luxury-layout--${size}`,
      `luxury-layout--columns-${columns}`,
      `luxury-layout--gap-${gap}`,
      {
        'luxury-layout--glass': glassEffect,
        'luxury-layout--gradient': gradientBackground,
        'luxury-layout--glow': glowEffect,
        'luxury-layout--responsive': responsive,
        'luxury-layout--animated': animate,
        'luxury-layout--grid': columns > 1,
      },
      className
    );

    // Animation delay for staggered animations
    const animationVariants = useMemo(() => ({
      ...layoutVariants,
      animate: {
        ...layoutVariants.animate,
        transition: {
          ...layoutVariants.animate.transition,
          delay: animationDelay,
        },
      },
    }), [animationDelay]);

    // Final layout styles
    const finalStyles = useMemo(() => ({
      ...layoutConfig,
      ...gridConfig,
      ...visualEffects,
      ...style,
    }), [layoutConfig, gridConfig, visualEffects, style]);

    // Render component
    const LayoutComponent = animate ? motion.div : 'div';

    return (
      <>
        <SkipLink />
        <LayoutComponent
          ref={ref}
          className={combinedClassName}
          style={finalStyles}
          variants={animate ? animationVariants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
          exit={animate ? "exit" : undefined}
          {...accessibilityProps}
          {...props}
        >
          {children}
        </LayoutComponent>
      </>
    );
  }
);

LuxuryLayout.displayName = 'LuxuryLayout';

// Convenience components for specific variants
export const LuxuryHero = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="hero" {...props} />
);
LuxuryHero.displayName = 'LuxuryHero';

export const LuxurySection = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="section" {...props} />
);
LuxurySection.displayName = 'LuxurySection';

export const LuxuryCard = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="card" {...props} />
);
LuxuryCard.displayName = 'LuxuryCard';

export const LuxurySidebar = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="sidebar" {...props} />
);
LuxurySidebar.displayName = 'LuxurySidebar';

export const LuxuryFooter = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="footer" {...props} />
);
LuxuryFooter.displayName = 'LuxuryFooter';

export const LuxuryNavigation = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant'>>(
  (props, ref) => <LuxuryLayout ref={ref} variant="navigation" {...props} />
);
LuxuryNavigation.displayName = 'LuxuryNavigation';

// Grid system components
export const LuxuryGrid = forwardRef<HTMLDivElement, Omit<LuxuryLayoutProps, 'variant' | 'direction'> & {
  columns: number;
}>(
  ({ columns, ...props }, ref) => (
    <LuxuryLayout
      ref={ref}
      variant="section"
      direction="row"
      columns={columns}
      wrap={true}
      {...props}
    />
  )
);
LuxuryGrid.displayName = 'LuxuryGrid';

// Accessibility utilities
export const LuxuryFocusTrap = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('luxury-focus-trap', className)}
      data-focus-trap="true"
      {...props}
    >
      {children}
    </div>
  )
);
LuxuryFocusTrap.displayName = 'LuxuryFocusTrap';

// Screen reader only content
export const LuxuryScreenReaderOnly = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'sr-only',
        'absolute',
        'w-px',
        'h-px',
        'p-0',
        '-m-px',
        'overflow-hidden',
        'clip-[rect(0,0,0,0)]',
        'whitespace-nowrap',
        'border-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
LuxuryScreenReaderOnly.displayName = 'LuxuryScreenReaderOnly';

export default LuxuryLayout;
