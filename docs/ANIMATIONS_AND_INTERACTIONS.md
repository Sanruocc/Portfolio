# Animations and Interactions Guide

This document provides a comprehensive guide to all the animation and interaction features implemented in the portfolio.

## Table of Contents

1. [Framer Motion Variants](#framer-motion-variants)
2. [Scroll Animations](#scroll-animations)
3. [Cursor Effects](#cursor-effects)
4. [Background Effects](#background-effects)
5. [Loading States](#loading-states)
6. [Performance Optimizations](#performance-optimizations)
7. [Micro-interactions](#micro-interactions)
8. [Usage Examples](#usage-examples)

---

## Framer Motion Variants

All animations are centralized in [`lib/animations.ts`](lib/animations.ts:1) for consistency and reusability.

### Basic Variants

```typescript
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

// Fade in from bottom
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Scale in
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Stagger children
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};
```

### Usage

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Your content
</motion.div>
```

---

## Scroll Animations

### Scroll Progress Indicator

A thin gradient line at the top of the page that fills as the user scrolls.

**Component:** [`components/ui/scroll-progress.tsx`](components/ui/scroll-progress.tsx:1)

**Features:**
- 2px height gradient line (purple to orange)
- Smooth spring animation
- Hidden on mobile
- Auto-hides after initial load

### Section Reveal

Components that animate in when they come into view.

**Component:** [`components/ui/section-reveal.tsx`](components/ui/section-reveal.tsx:1)

**Usage:**

```tsx
import { SectionReveal, Reveal } from '@/components/ui/section-reveal';

// For entire sections
<SectionReveal staggerChildren>
  <div>Child 1</div>
  <div>Child 2</div>
</SectionReveal>

// For individual elements
<Reveal direction="up" delay={0.2}>
  Your content
</Reveal>
```

**Props:**
- `threshold`: Visibility threshold (default: 0.2)
- `staggerChildren`: Enable staggering (default: false)
- `delay`: Animation delay (default: 0)
- `direction`: Animation direction ('up', 'down', 'left', 'right')

### Parallax Effects

Subtle parallax scrolling for decorative elements.

**Component:** [`components/ui/parallax.tsx`](components/ui/parallax.tsx:1)

**Usage:**

```tsx
import { Parallax, ParallaxBackground } from '@/components/ui/parallax';

// For content
<Parallax speed={0.5} direction="up">
  Your content
</Parallax>

// For background elements
<ParallaxBackground speed={0.3}>
  <div className="absolute inset-0 bg-gradient..." />
</ParallaxBackground>
```

**Props:**
- `speed`: Parallax speed multiplier (default: 0.5)
- `direction`: Movement direction (default: 'up')
- `disabledOnMobile`: Disable on mobile (default: true)

---

## Cursor Effects

### Custom Cursor

A custom cursor that replaces the default browser cursor on desktop.

**Component:** [`components/ui/custom-cursor.tsx`](components/ui/custom-cursor.tsx:1)

**Features:**
- Small dot (8px) that follows cursor
- Trail effect with 3 fading dots
- Different states:
  - Default: small dot
  - Hover links: expands to 24px circle
  - Hover buttons: becomes 32px square
- Click animation
- Automatically disabled on touch devices

**Note:** The cursor is automatically integrated via [`GlobalProviders`](components/global-providers.tsx:1).

### Magnetic Buttons

Buttons that attract the cursor when nearby.

**Component:** [`components/ui/magnetic-button.tsx`](components/ui/magnetic-button.tsx:1)

**Usage:**

```tsx
import { MagneticButton, MagneticContainer } from '@/components/ui/magnetic-button';

// Basic usage
<MagneticButton onClick={handleClick}>
  Click me
</MagneticButton>

// With variants
<MagneticButton 
  variant="primary" 
  size="lg" 
  magnetic={true}
>
  Primary CTA
</MagneticButton>

// For containers
<MagneticContainer strength={0.3}>
  <div>Your interactive content</div>
</MagneticContainer>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `magnetic`: Enable/disable magnetic effect
- `strength`: Magnetic strength (0-1)

---

## Background Effects

### Animated Gradient Mesh

Subtle animated gradients for hero and contact sections.

**Component:** [`components/ui/animated-gradient.tsx`](components/ui/animated-gradient.tsx:1)

**Usage:**

```tsx
import { AnimatedGradient, GradientBackground } from '@/components/ui/animated-gradient';

// For sections
<AnimatedGradient intensity="medium">
  <div>Your content</div>
</AnimatedGradient>

// Global background (in layout)
<GradientBackground />
```

**Features:**
- Purple → Blue → Purple color cycle (30s)
- Subtle mesh grid overlay
- GPU-accelerated animations
- Reduced opacity on mobile

### Floating Particles

Lightweight particle system for visual interest.

**Component:** [`components/ui/floating-particles.tsx`](components/ui/floating-particles.tsx:1)

**Usage:**

```tsx
import { OptimizedParticles } from '@/components/ui/floating-particles';

<OptimizedParticles />
```

**Features:**
- 20 particles on desktop, 5 on mobile
- Random sizes (2-6px)
- Slow drifting motion
- Gradient colors
- Automatically disabled with reduced motion preference

### Grain Texture

Subtle noise overlay for depth.

**Implementation:** [`app/globals.css`](app/globals.css:91)

**Features:**
- Very faint opacity (0.03)
- Mix-blend-mode: overlay
- Static (not animated for performance)
- Disabled in high contrast mode

---

## Loading States

### Loading Spinner

Animated spinner for loading states.

**Component:** [`components/ui/loading-spinner.tsx`](components/ui/loading-spinner.tsx:1)

**Usage:**

```tsx
import { LoadingSpinner, PageLoader, SkeletonLoader } from '@/components/ui/loading-spinner';

// Spinner
<LoadingSpinner size="md" color="#7C3AED" />

// Page loader (automatic)
<PageLoader />

// Skeleton screens
<SkeletonLoader count={3} type="card" />
```

### Page Loader

Automatic page loader shown during initial load.

**Features:**
- RS logo with rotating ring
- "Loading portfolio..." text
- Fades out after 1-2 seconds
- Smooth exit animation

---

## Performance Optimizations

### Reduced Motion Support

All animations respect the user's `prefers-reduced-motion` preference.

**Implementation:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Mobile Optimizations

- Disabled cursor effects on touch devices
- Reduced particle count (20 → 5)
- Disabled parallax effects
- Simplified animations
- Faster animation durations

### GPU Acceleration

All animations use `transform` and `opacity` for GPU acceleration:

```css
.element {
  transform: translateZ(0);
  will-change: transform;
}
```

### Debounced Scroll Listeners

Scroll events are debounced to 16ms (60fps) for optimal performance.

---

## Micro-interactions

### Buttons

**Hover:**
- Scale: 1.05
- Shadow enhancement
- Gradient shift

**Click:**
- Scale: 0.95
- Ripple effect

**Implementation:** [`app/globals.css`](app/globals.css:140)

### Links

**Hover:**
- Underline slides in from left
- Color shifts to accent
- Smooth 0.3s transition

### Cards

**Hover:**
- Lift with shadow
- Subtle rotation (1-2 degrees)
- Border glow animation

### Form Inputs

**Focus:**
- Label floats up
- Border animates around perimeter

**Error:**
- Shake animation

**Success:**
- Checkmark fade-in

---

## Usage Examples

### Complete Section with Animations

```tsx
import { SectionReveal, Reveal } from '@/components/ui/section-reveal';
import { fadeInUp } from '@/lib/animations';
import { motion } from 'framer-motion';

<SectionReveal className="py-20" staggerChildren>
  <Reveal direction="up">
    <h2 className="text-3xl font-bold">Section Title</h2>
  </Reveal>
  
  <Reveal direction="up" delay={0.2}>
    <p className="text-muted-foreground mt-4">
      Section description
    </p>
  </Reveal>
  
  <Reveal direction="up" delay={0.4}>
    <motion.div
      variants={fadeInUp}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
    >
      {/* Cards with hover effects */}
      <div className="card-hover p-6 rounded-xl bg-card">
        Card content
      </div>
    </motion.div>
  </Reveal>
</SectionReveal>
```

### Interactive Button

```tsx
import { MagneticButton } from '@/components/ui/magnetic-button';

<MagneticButton
  variant="primary"
  size="lg"
  onClick={handleClick}
  className="mt-8"
>
  <span>Let's Talk</span>
  <ArrowRightIcon className="w-4 h-4 ml-2" />
</MagneticButton>
```

### Hero Section with Background Effects

```tsx
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { Parallax } from '@/components/ui/parallax';

<AnimatedGradient className="min-h-screen flex items-center">
  <div className="container mx-auto px-4">
    <Parallax speed={0.3}>
      <h1 className="text-6xl font-bold">Hero Title</h1>
    </Parallax>
  </div>
</AnimatedGradient>
```

---

## Testing Checklist

### Desktop Testing
- [ ] Scroll progress indicator appears and fills correctly
- [ ] Custom cursor follows mouse smoothly
- [ ] Cursor changes on hover (links, buttons)
- [ ] Magnetic buttons attract cursor
- [ ] Parallax effects work smoothly
- [ ] All section reveals trigger correctly
- [ ] Page loader displays and fades out
- [ ] 60fps performance maintained

### Mobile Testing
- [ ] Cursor effects disabled
- [ ] Particle count reduced
- [ ] Parallax disabled
- [ ] Touch interactions work properly
- [ ] Performance is smooth
- [ ] No animation jank

### Accessibility Testing
- [ ] Reduced motion preference respected
- [ ] High contrast mode works
- [ ] Keyboard navigation functional
- [ ] Screen readers work properly
- [ ] Focus states visible

### Performance Testing
- [ ] Lighthouse score 95+
- [ ] No layout shifts
- [ ] Smooth scrolling
- [ ] Fast loading times
- [ ] No memory leaks

---

## Troubleshooting

### Animations Not Working

1. Check if `prefers-reduced-motion` is enabled
2. Verify Framer Motion is installed
3. Ensure variants are imported correctly
4. Check for CSS conflicts

### Performance Issues

1. Reduce particle count
2. Disable parallax on mobile
3. Simplify complex animations
4. Use `will-change` sparingly
5. Optimize images

### Cursor Not Visible

1. Check if on touch device (cursor disabled)
2. Verify custom cursor component is mounted
3. Check for z-index conflicts
4. Ensure pointer-events are not disabled

---

## Best Practices

1. **Use transform and opacity** for animations (GPU accelerated)
2. **Avoid animating** width, height, top, left
3. **Respect user preferences** for reduced motion
4. **Optimize for mobile** with reduced effects
5. **Test on real devices** not just devtools
6. **Keep animations subtle** and purposeful
7. **Use consistent timing** (0.3s for micro-interactions)
8. **Debounce scroll listeners** to 16ms
9. **Remove will-change** after animations complete
10. **Test with slow networks** and throttled CPU

---

## File Structure

```
components/
├── ui/
│   ├── custom-cursor.tsx          # Custom cursor with hover states
│   ├── magnetic-button.tsx        # Magnetic button effects
│   ├── scroll-progress.tsx        # Scroll progress indicator
│   ├── section-reveal.tsx         # Section reveal animations
│   ├── parallax.tsx               # Parallax scrolling effects
│   ├── animated-gradient.tsx      # Animated gradient backgrounds
│   ├── floating-particles.tsx     # Particle system
│   └── loading-spinner.tsx        # Loading states
├── global-providers.tsx           # Global animation providers
└── footer.tsx                     # Enhanced footer

lib/
├── animations.ts                  # Framer Motion variants
└── hooks.ts                       # Animation hooks

app/
├── globals.css                    # CSS animations and utilities
└── layout.tsx                     # Global providers integration
```

---

For questions or issues, refer to the individual component files or check the implementation in the codebase.