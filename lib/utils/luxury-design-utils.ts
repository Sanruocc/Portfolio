/**
 * Luxury Design Utility Functions
 *
 * Provides utility functions for luxury design system calculations,
 * color manipulation, responsive design, and performance optimization.
 */

import { GOLDEN_RATIO, LUXURY_COLORS, LUXURY_EASING } from '../constants/luxury-design-tokens';

// Typography Scale (Golden Ratio Based)
export const TYPOGRAPHY_SCALE = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
} as const;

// Luxury Text Shadows
export const LUXURY_TEXT_SHADOWS = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.1)',
  premium: '0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
  luxury: '0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
} as const;

// Type definitions
export type LuxuryColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type LuxuryColorName = 'luxury' | 'luxury-gold' | 'luxury-sapphire' | 'luxury-emerald' | 'luxury-ruby';
export type EasingCurve = keyof typeof LUXURY_EASING;

/**
 * Golden Ratio Calculation Utilities
 */

// Calculate golden ratio based value
export function goldenRatio(base: number, multiplier: number = 1): number {
  return base * Math.pow(GOLDEN_RATIO, multiplier);
}

// Generate golden ratio scale from base value
export function generateGoldenRatioScale(base: number, steps: number = 5): number[] {
  const scale: number[] = [base];
  for (let i = 1; i < steps; i++) {
    scale.push(base * Math.pow(GOLDEN_RATIO, i));
    scale.unshift(base / Math.pow(GOLDEN_RATIO, i));
  }
  return scale.sort((a, b) => a - b);
}

// Calculate optimal line height for given font size using golden ratio
export function calculateLineHeight(fontSize: number): number {
  // Golden ratio based line height calculation
  return fontSize * 1.618;
}

// Calculate optimal letter spacing for luxury typography
export function calculateLetterSpacing(fontSize: number, density: 'tight' | 'normal' | 'wide' | 'luxury' = 'normal'): string {
  const spacingMap = {
    tight: -0.01,
    normal: 0,
    wide: 0.01,
    luxury: 0.02,
  };

  return `${spacingMap[density]}em`;
}

/**
 * Color Manipulation Utilities
 */

// Get luxury color with opacity
export function getLuxuryColorWithOpacity(
  colorName: LuxuryColorName,
  shade: LuxuryColorShade,
  opacity: number
): string {
  const colorValue = LUXURY_COLORS[colorName][shade];
  return colorValue.replace(')', ` / ${opacity})`).replace('hsl', 'hsla');
}

// Create luxury gradient from two colors
export function createLuxuryGradient(
  color1: string,
  color2: string,
  angle: number = 135
): string {
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Get contrasting text color for background
export function getContrastTextColor(backgroundColor: string): 'white' | 'black' {
  // Simple contrast calculation - in a real implementation, you'd use a proper contrast ratio
  const isDark = backgroundColor.includes('900') || backgroundColor.includes('800') || backgroundColor.includes('700');
  return isDark ? 'white' : 'black';
}

/**
 * Responsive Design Utilities
 */

// Convert pixel value to rem
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

// Convert rem value to pixel
export function remToPx(rem: number): number {
  return rem * 16;
}

// Generate responsive typography scale
export function generateResponsiveScale(
  baseSize: number,
  minViewport: number = 320,
  maxViewport: number = 1200
): string {
  const minSize = baseSize * 0.8;
  const maxSize = baseSize * 1.2;

  return `clamp(${pxToRem(minSize)}, ${4}vw, ${pxToRem(maxSize)})`;
}

// Calculate golden ratio based container width
export function calculateGoldenContainerWidth(maxWidth: number = 1200): string {
  const goldenWidth = maxWidth / GOLDEN_RATIO;
  return pxToRem(goldenWidth);
}

/**
 * Animation and Transition Utilities
 */

// Get luxury easing curve
export function getLuxuryEasing(easing: EasingCurve): string {
  return LUXURY_EASING[easing];
}

// Generate luxury transition
export function createLuxuryTransition(
  property: string = 'all',
  duration: number = 0.3,
  easing: EasingCurve = 'luxury-cubic-bezier'
): string {
  return `${property} ${duration}s ${getLuxuryEasing(easing)}`;
}

// Generate luxury animation keyframes name
export function generateAnimationName(baseName: string): string {
  return `luxury-${baseName}-${Date.now()}`;
}

/**
 * Glass Morphism Utilities
 */

// Generate glass morphism styles
export function generateGlassMorphism(
  blur: 'subtle' | 'soft' | 'medium' | 'strong' | 'intense' | 'luxury' = 'medium',
  opacity: number = 0.1,
  borderOpacity: number = 0.1
): {
  backdropFilter: string;
  backgroundColor: string;
  border: string;
} {
  const blurValues = {
    subtle: 'blur(4px)',
    soft: 'blur(8px)',
    medium: 'blur(12px)',
    strong: 'blur(16px)',
    intense: 'blur(20px)',
    luxury: 'blur(24px)',
  };

  return {
    backdropFilter: blurValues[blur],
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  };
}

// Generate multi-layer glass effect
export function generateMultiLayerGlass(
  layers: number = 3,
  baseOpacity: number = 0.1
): Array<{
  backdropFilter: string;
  backgroundColor: string;
  border: string;
  transform: string;
}> {
  const glassLayers = [];

  for (let i = 0; i < layers; i++) {
    const opacity = baseOpacity * (1 - (i * 0.2));
    const blurIntensity = 8 + (i * 4);
    const translateY = i * 2;

    glassLayers.push({
      backdropFilter: `blur(${blurIntensity}px)`,
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      border: `1px solid rgba(255, 255, 255, ${opacity * 0.5})`,
      transform: `translateY(${translateY}px)`,
    });
  }

  return glassLayers;
}

/**
 * Performance Optimization Utilities
 */

// Detect device performance tier
export function detectPerformanceTier(): 'luxury' | 'high' | 'medium' | 'low' {
  if (typeof window === 'undefined') return 'medium';

  // Simple performance detection based on device pixel ratio and hardware concurrency
  const pixelRatio = window.devicePixelRatio || 1;
  const hardwareConcurrency = navigator.hardwareConcurrency || 2;

  if (pixelRatio >= 2 && hardwareConcurrency >= 8) {
    return 'luxury';
  } else if (pixelRatio >= 1.5 && hardwareConcurrency >= 4) {
    return 'high';
  } else if (hardwareConcurrency >= 2) {
    return 'medium';
  } else {
    return 'low';
  }
}

// Adapt quality based on performance tier
export function adaptQualityForPerformance<T>(
  luxuryValue: T,
  highValue: T,
  mediumValue: T,
  lowValue: T
): T {
  const tier = detectPerformanceTier();

  switch (tier) {
    case 'luxury':
      return luxuryValue;
    case 'high':
      return highValue;
    case 'medium':
      return mediumValue;
    case 'low':
      return lowValue;
    default:
      return mediumValue;
  }
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Accessibility Utilities
 */

// Calculate accessible color contrast ratio
export function calculateContrastRatio(color1: string, color2: string): number {
  // Simplified contrast calculation
  // In a real implementation, you'd convert colors to RGB and calculate properly
  const isColor1Dark = color1.includes('900') || color1.includes('800');
  const isColor2Dark = color2.includes('900') || color2.includes('800');

  if (isColor1Dark && !isColor2Dark) return 7.5; // High contrast
  if (!isColor1Dark && isColor2Dark) return 7.5; // High contrast
  if (isColor1Dark && isColor2Dark) return 2.5; // Low contrast
  return 5.5; // Medium contrast
}

// Ensure minimum contrast ratio
export function ensureContrastRatio(
  backgroundColor: string,
  textColor: string,
  minimumRatio: number = 4.5
): { background: string; text: string } {
  const currentRatio = calculateContrastRatio(backgroundColor, textColor);

  if (currentRatio >= minimumRatio) {
    return { background: backgroundColor, text: textColor };
  }

  // Return high contrast combination
  return {
    background: backgroundColor,
    text: getContrastTextColor(backgroundColor) === 'white' ? 'white' : 'black',
  };
}

/**
 * Layout Utilities
 */

// Calculate golden ratio grid columns
export function calculateGoldenGrid(columns: number): number[] {
  const ratios: number[] = [];
  let remaining = 1;

  for (let i = 0; i < columns; i++) {
    if (i === columns - 1) {
      ratios.push(remaining);
    } else {
      const ratio = remaining / GOLDEN_RATIO;
      ratios.push(ratio);
      remaining -= ratio;
    }
  }

  return ratios;
}

// Generate golden ratio based grid template
export function generateGoldenGridTemplate(columns: number): string {
  const ratios = calculateGoldenGrid(columns);
  return ratios.map(ratio => `${ratio}fr`).join(' ');
}

/**
 * String and Text Utilities
 */

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert kebab-case to camelCase
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Convert camelCase to kebab-case
export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Math Utilities
 */

// Clamp value between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Linear interpolation
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

// Map value from one range to another
export function mapRange(
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number {
  const normalizedValue = (value - fromMin) / (fromMax - fromMin);
  return toMin + normalizedValue * (toMax - toMin);
}
