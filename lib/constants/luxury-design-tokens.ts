/**
 * Luxury Design System Constants
 *
 * Defines the foundational constants for the luxury design system,
 * including golden ratio calculations, color palettes, and design tokens.
 */

// Golden Ratio Constant (φ = 1.618033988749895)
export const GOLDEN_RATIO = 1.618033988749895;

// Golden Ratio Typography Scale
export const TYPOGRAPHY_SCALE = {
  '4xl': '4.236rem', // 67.776px - Primary headings
  '3xl': '2.618rem', // 41.888px - Secondary headings
  '2xl': '1.618rem', // 25.888px - Subheadings
  'xl': '1rem',     // 16px - Body large
  'lg': '0.618rem', // 9.888px - Body
  'md': '0.382rem', // 6.112px - Body small
  'sm': '0.236rem', // 3.776px - Caption
  'xs': '0.146rem', // 2.336px - Fine print
} as const;

// Luxury Color Palette (HSL format for better manipulation)
export const LUXURY_COLORS = {
  // Primary Purple (Brand Color)
  luxury: {
    50: 'hsl(262 83% 95%)',
    100: 'hsl(262 83% 90%)',
    200: 'hsl(262 83% 80%)',
    300: 'hsl(262 83% 70%)',
    400: 'hsl(262 83% 60%)',
    500: 'hsl(262 83% 58%)', // Primary
    600: 'hsl(262 83% 50%)',
    700: 'hsl(262 83% 40%)',
    800: 'hsl(262 83% 30%)',
    900: 'hsl(262 83% 20%)',
    950: 'hsl(262 83% 10%)',
  },

  // Luxury Gold (Accent Color)
  'luxury-gold': {
    50: 'hsl(45 86% 95%)',
    100: 'hsl(45 86% 90%)',
    200: 'hsl(45 86% 80%)',
    300: 'hsl(45 86% 70%)',
    400: 'hsl(45 86% 60%)',
    500: 'hsl(45 86% 58%)', // Primary
    600: 'hsl(45 86% 50%)',
    700: 'hsl(45 86% 40%)',
    800: 'hsl(45 86% 30%)',
    900: 'hsl(45 86% 20%)',
    950: 'hsl(45 86% 10%)',
  },

  // Jewel Tone: Sapphire
  'luxury-sapphire': {
    50: 'hsl(217 91% 95%)',
    100: 'hsl(217 91% 90%)',
    200: 'hsl(217 91% 80%)',
    300: 'hsl(217 91% 70%)',
    400: 'hsl(217 91% 60%)',
    500: 'hsl(217 91% 58%)', // Primary
    600: 'hsl(217 91% 50%)',
    700: 'hsl(217 91% 40%)',
    800: 'hsl(217 91% 30%)',
    900: 'hsl(217 91% 20%)',
    950: 'hsl(217 91% 10%)',
  },

  // Jewel Tone: Emerald
  'luxury-emerald': {
    50: 'hsl(160 84% 95%)',
    100: 'hsl(160 84% 90%)',
    200: 'hsl(160 84% 80%)',
    300: 'hsl(160 84% 70%)',
    400: 'hsl(160 84% 60%)',
    500: 'hsl(160 84% 58%)', // Primary
    600: 'hsl(160 84% 50%)',
    700: 'hsl(160 84% 40%)',
    800: 'hsl(160 84% 30%)',
    900: 'hsl(160 84% 20%)',
    950: 'hsl(160 84% 10%)',
  },

  // Jewel Tone: Ruby
  'luxury-ruby': {
    50: 'hsl(0 84% 95%)',
    100: 'hsl(0 84% 90%)',
    200: 'hsl(0 84% 80%)',
    300: 'hsl(0 84% 70%)',
    400: 'hsl(0 84% 60%)',
    500: 'hsl(0 84% 58%)', // Primary
    600: 'hsl(0 84% 50%)',
    700: 'hsl(0 84% 40%)',
    800: 'hsl(0 84% 30%)',
    900: 'hsl(0 84% 20%)',
    950: 'hsl(0 84% 10%)',
  },
} as const;

// Luxury Gradients
export const LUXURY_GRADIENTS = {
  'luxury-purple-indigo': 'linear-gradient(135deg, hsl(262 83% 58%) 0%, hsl(234 89% 74%) 100%)',
  'luxury-purple-gold': 'linear-gradient(135deg, hsl(262 83% 58%) 0%, hsl(45 86% 83%) 100%)',
  'luxury-gold-metallic': 'linear-gradient(135deg, hsl(45 86% 83%) 0%, hsl(38 92% 50%) 100%)',
  'luxury-sapphire': 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(224 76% 48%) 100%)',
  'luxury-emerald': 'linear-gradient(135deg, hsl(160 84% 39%) 0%, hsl(142 71% 45%) 100%)',
  'luxury-ruby': 'linear-gradient(135deg, hsl(0 84% 60%) 0%, hsl(330 81% 60%) 100%)',
} as const;

// Golden Ratio Spacing System
export const LUXURY_SPACING = {
  xs: '0.146rem',   // 2.336px
  sm: '0.236rem',   // 3.776px
  md: '0.382rem',   // 6.112px
  lg: '0.618rem',   // 9.888px
  xl: '1rem',       // 16px
  '2xl': '1.618rem', // 25.888px
  '3xl': '2.618rem', // 41.888px
  '4xl': '4.236rem', // 67.776px
  '5xl': '6.854rem', // 109.664px
  '6xl': '11.09rem', // 177.44px
} as const;

// Luxury Animation Curves (Cubic Bezier)
export const LUXURY_EASING = {
  'luxury-cubic-bezier': 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Smooth, elegant
  'luxury-easing': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Material Design inspired
  'luxury-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy, playful
  'luxury-elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Elastic effect
} as const;

// Glass Morphism Settings
export const GLASS_MORPHISM = {
  blur: {
    subtle: 'blur(4px)',
    soft: 'blur(8px)',
    medium: 'blur(12px)',
    strong: 'blur(16px)',
    intense: 'blur(20px)',
    luxury: 'blur(24px)',
  },
  opacity: {
    light: '0.1',
    medium: '0.2',
    strong: '0.3',
    intense: '0.4',
  },
  borderOpacity: {
    subtle: '0.1',
    medium: '0.2',
    strong: '0.3',
  },
} as const;

// Luxury Text Shadows
export const LUXURY_TEXT_SHADOWS = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.1)',
  premium: '0 2px 4px rgba(138, 43, 226, 0.2)',
  luxury: '0 4px 8px rgba(138, 43, 226, 0.3)',
  gold: '0 2px 4px rgba(245, 158, 11, 0.3)',
  intense: '0 6px 12px rgba(138, 43, 226, 0.4)',
} as const;

// Performance Tiers for Device Adaptation
export const PERFORMANCE_TIERS = {
  luxury: {
    animations: true,
    shadows: true,
    blur: true,
    gradients: true,
  },
  high: {
    animations: true,
    shadows: true,
    blur: false,
    gradients: true,
  },
  medium: {
    animations: true,
    shadows: false,
    blur: false,
    gradients: true,
  },
  low: {
    animations: false,
    shadows: false,
    blur: false,
    gradients: false,
  },
} as const;

// Luxury Border Radius (Golden Ratio based)
export const LUXURY_BORDER_RADIUS = {
  none: '0',
  sm: '0.146rem',   // 2.336px
  md: '0.236rem',   // 3.776px
  lg: '0.382rem',   // 6.112px
  xl: '0.618rem',   // 9.888px
  '2xl': '1rem',    // 16px
  '3xl': '1.618rem', // 25.888px
  full: '9999px',
} as const;

// Luxury Breakpoints (Golden Ratio based)
export const LUXURY_BREAKPOINTS = {
  xs: '320px',
  sm: '518px',  // 320 * 1.618
  md: '838px',  // 518 * 1.618
  lg: '1356px', // 838 * 1.618
  xl: '2194px', // 1356 * 1.618
  '2xl': '3550px', // 2194 * 1.618
} as const;

// Utility function to calculate golden ratio values
export function goldenRatio(base: number, multiplier: number = 1): number {
  return base * Math.pow(GOLDEN_RATIO, multiplier);
}

// Utility function to get responsive typography scale
export function getResponsiveTypography(baseSize: keyof typeof TYPOGRAPHY_SCALE): string {
  return `clamp(${TYPOGRAPHY_SCALE.xs}, 4vw, ${TYPOGRAPHY_SCALE[baseSize]})`;
}

// Utility function to get luxury color with opacity
export function getLuxuryColorWithOpacity(colorName: string, shade: number, opacity: number): string {
  // This would need to be implemented based on your color system
  return `${colorName}-${shade} / ${opacity}`;
}
