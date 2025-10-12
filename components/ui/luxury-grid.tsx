'use client';

import React, { forwardRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  calculateGoldenGrid,
  generateGoldenGridTemplate,
  adaptQualityForPerformance,
  getLuxuryColorWithOpacity,
} from '@/lib/utils/luxury-design-utils';

// Types
export type LuxuryGridVariant = 'masonry' | 'bento' | 'asymmetric' | 'golden' | 'fibonacci';
export type LuxuryGridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type LuxuryGridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type LuxuryGridAlignment = 'start' | 'center' | 'end' | 'stretch';
export type LuxuryGridJustification = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface LuxuryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  // Grid configuration
  variant?: LuxuryGridVariant;
  columns?: LuxuryGridColumns;
  gap?: LuxuryGridGap;
  minItemWidth?: string;
  maxItemWidth?: string;

  // Layout properties
  align?: LuxuryGridAlignment;
  justify?: LuxuryGridJustification;
  autoFit?: boolean;
  autoFill?: boolean;

  // Visual customization
  glassEffect?: boolean;
  gradientBackground?: boolean;
  glowEffect?: boolean;
  itemGlow?: boolean;

  // Responsive behavior
  responsive?: boolean;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';

  // Animation
  animate?: boolean;
  staggerAnimation?: boolean;
  animationDelay?: number;

  // Accessibility
  ariaLabel?: string;
  role?: string;

  // Performance
  lazyLoad?: boolean;
  virtualize?: boolean;
}

// Grid variant configurations
const GRID_CONFIGS = {
  masonry: {
    gridAutoRows: '200px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    alignItems: 'start',
    justifyItems: 'stretch',
  },
  bento: {
    gridAutoRows: 'minmax(200px, auto)',
    gridTemplateColumns: 'repeat(4, 1fr)',
    alignItems: 'start',
    justifyItems: 'stretch',
  },
  asymmetric: {
    gridAutoRows: 'minmax(150px, auto)',
    gridTemplateColumns: '1fr 2fr 1fr',
    alignItems: 'stretch',
    justifyItems: 'stretch',
  },
  golden: {
    gridAutoRows: 'minmax(200px, auto)',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    alignItems: 'start',
    justifyItems: 'stretch',
  },
  fibonacci: {
    gridAutoRows: 'minmax(150px, auto)',
    gridTemplateColumns: '1fr 1fr 2fr 3fr 5fr',
    alignItems: 'stretch',
    justifyItems: 'stretch',
  },
} as const;

// Responsive grid configurations
const RESPONSIVE_GRIDS = {
  sm: {
    columns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--luxury-spacing-sm)',
  },
  md: {
    columns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--luxury-spacing-md)',
  },
  lg: {
    columns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--luxury-spacing-lg)',
  },
  xl: {
    columns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: 'var(--luxury-spacing-xl)',
  },
} as const;

// Animation variants for grid items
const gridItemVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
      delay: index * 0.1,
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const LuxuryGrid = forwardRef<HTMLDivElement, LuxuryGridProps>(
  (
    {
      children,
      variant = 'golden',
      columns = 3,
      gap = 'xl',
      minItemWidth,
      maxItemWidth,
      align = 'start',
      justify = 'start',
      autoFit = true,
      autoFill = false,
      glassEffect = false,
      gradientBackground = false,
      glowEffect = false,
      itemGlow = false,
      responsive = true,
      breakpoint = 'md',
      animate = true,
      staggerAnimation = true,
      animationDelay = 0,
      ariaLabel,
      role = 'grid',
      lazyLoad = false,
      virtualize = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Performance optimization - memoize grid configuration
    const gridConfig = useMemo(() => {
      const config = GRID_CONFIGS[variant];
      const responsiveConfig = RESPONSIVE_GRIDS[breakpoint];

      let gridTemplateColumns: string;

      if (autoFit) {
        gridTemplateColumns = responsive
          ? responsiveConfig.columns
          : `repeat(auto-fit, minmax(${minItemWidth || '250px'}, 1fr))`;
      } else if (autoFill) {
        gridTemplateColumns = `repeat(auto-fill, minmax(${minItemWidth || '250px'}, 1fr))`;
      } else {
        // Use golden ratio for custom column layouts
        if (variant === 'golden' || variant === 'fibonacci') {
          gridTemplateColumns = generateGoldenGridTemplate(columns);
        } else {
          gridTemplateColumns = `repeat(${columns}, 1fr)`;
        }
      }

      return {
        display: 'grid',
        gridTemplateColumns,
        gridAutoRows: config.gridAutoRows,
        gap: `var(--luxury-spacing-${gap})`,
        alignItems: align,
        justifyItems: justify,
        placeItems: `${align} ${justify}`,
      };
    }, [variant, columns, gap, minItemWidth, maxItemWidth, align, justify, autoFit, autoFill, responsive, breakpoint]);

    // Visual effects configuration
    const visualEffects = useMemo(() => {
      const effects: React.CSSProperties = {};

      // Glass effect for grid container
      if (glassEffect) {
        effects.backdropFilter = 'blur(20px)';
        effects.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        effects.border = '1px solid rgba(255, 255, 255, 0.1)';
      }

      // Gradient background
      if (gradientBackground) {
        effects.background = 'var(--gradient-luxury-purple-gold)';
      }

      // Glow effect
      if (glowEffect) {
        effects.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1)';
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

    // Convert children to array for processing
    const childrenArray = useMemo(() =>
      React.Children.toArray(children), [children]
    );

    // Accessibility props
    const accessibilityProps = useMemo(() => ({
      role,
      'aria-label': ariaLabel,
      'aria-rowcount': Math.ceil(childrenArray.length / columns),
      'aria-colcount': columns,
    }), [role, ariaLabel, childrenArray.length, columns]);

    // Combine className with luxury-specific classes
    const combinedClassName = cn(
      'luxury-grid',
      `luxury-grid--${variant}`,
      `luxury-grid--columns-${columns}`,
      `luxury-grid--gap-${gap}`,
      {
        'luxury-grid--glass': glassEffect,
        'luxury-grid--gradient': gradientBackground,
        'luxury-grid--glow': glowEffect,
        'luxury-grid--responsive': responsive,
        'luxury-grid--animated': animate,
        'luxury-grid--staggered': staggerAnimation,
        'luxury-grid--lazy': lazyLoad,
        'luxury-grid--virtual': virtualize,
      },
      className
    );

    // Final grid styles
    const finalStyles = useMemo(() => ({
      ...gridConfig,
      ...visualEffects,
      ...style,
    }), [gridConfig, visualEffects, style]);

    // Render grid items with animations and effects
    const renderGridItems = () => {
      return childrenArray.map((child, index) => {
        const itemProps: any = {
          key: `grid-item-${index}`,
          className: cn(
            'luxury-grid-item',
            {
              'luxury-grid-item--glow': itemGlow && performanceTier.effects,
              'luxury-grid-item--glass': glassEffect && performanceTier.effects,
            }
          ),
          style: {
            minWidth: minItemWidth,
            maxWidth: maxItemWidth,
          },
        };

        // Add animation if enabled
        if (animate && performanceTier.animations) {
          if (staggerAnimation) {
            itemProps.initial = 'initial';
            itemProps.animate = 'animate';
            itemProps.variants = gridItemVariants;
            itemProps.custom = index;
            itemProps.whileHover = 'hover';
          } else {
            itemProps.initial = { opacity: 0, y: 20 };
            itemProps.animate = { opacity: 1, y: 0 };
            itemProps.transition = {
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
              delay: animationDelay + (index * 0.05),
            };
          }
        }

        // Add glass effect to items
        if (glassEffect && performanceTier.effects) {
          itemProps.style = {
            ...itemProps.style,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          };
        }

        // Add glow effect to items
        if (itemGlow && performanceTier.effects) {
          itemProps.style = {
            ...itemProps.style,
            boxShadow: '0 4px 20px rgba(138, 43, 226, 0.1)',
          };
        }

        const ItemComponent = animate && staggerAnimation ? motion.div : 'div';

        return (
          <ItemComponent {...itemProps}>
            {child}
          </ItemComponent>
        );
      });
    };

    return (
      <div
        ref={ref}
        className={combinedClassName}
        style={finalStyles}
        {...accessibilityProps}
        {...props}
      >
        {renderGridItems()}
      </div>
    );
  }
);

LuxuryGrid.displayName = 'LuxuryGrid';

// Convenience components for specific grid variants
export const LuxuryMasonryGrid = forwardRef<HTMLDivElement, Omit<LuxuryGridProps, 'variant'>>(
  (props, ref) => <LuxuryGrid ref={ref} variant="masonry" {...props} />
);
LuxuryMasonryGrid.displayName = 'LuxuryMasonryGrid';

export const LuxuryBentoGrid = forwardRef<HTMLDivElement, Omit<LuxuryGridProps, 'variant'>>(
  (props, ref) => <LuxuryGrid ref={ref} variant="bento" {...props} />
);
LuxuryBentoGrid.displayName = 'LuxuryBentoGrid';

export const LuxuryAsymmetricGrid = forwardRef<HTMLDivElement, Omit<LuxuryGridProps, 'variant'>>(
  (props, ref) => <LuxuryGrid ref={ref} variant="asymmetric" {...props} />
);
LuxuryAsymmetricGrid.displayName = 'LuxuryAsymmetricGrid';

export const LuxuryGoldenGrid = forwardRef<HTMLDivElement, Omit<LuxuryGridProps, 'variant'>>(
  (props, ref) => <LuxuryGrid ref={ref} variant="golden" {...props} />
);
LuxuryGoldenGrid.displayName = 'LuxuryGoldenGrid';

export const LuxuryFibonacciGrid = forwardRef<HTMLDivElement, Omit<LuxuryGridProps, 'variant'>>(
  (props, ref) => <LuxuryGrid ref={ref} variant="fibonacci" {...props} />
);
LuxuryFibonacciGrid.displayName = 'LuxuryFibonacciGrid';

// Grid item component for individual items
export const LuxuryGridItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
  glass?: boolean;
}>(
  ({ children, glow = false, glass = false, className, style, ...props }, ref) => {
    const itemStyles = useMemo(() => {
      const styles: React.CSSProperties = {};

      if (glass) {
        styles.backdropFilter = 'blur(10px)';
        styles.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        styles.border = '1px solid rgba(255, 255, 255, 0.1)';
      }

      if (glow) {
        styles.boxShadow = '0 4px 20px rgba(138, 43, 226, 0.1)';
      }

      return { ...styles, ...style };
    }, [glass, glow, style]);

    return (
      <div
        ref={ref}
        className={cn(
          'luxury-grid-item',
          {
            'luxury-grid-item--glow': glow,
            'luxury-grid-item--glass': glass,
          },
          className
        )}
        style={itemStyles}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LuxuryGridItem.displayName = 'LuxuryGridItem';

export default LuxuryGrid;
