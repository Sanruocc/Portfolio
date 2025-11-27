import { Metadata } from 'next';
import { FigmaHeroSection } from '@/components/figma-sections/figma-hero-section';
import { FigmaProofSection } from '@/components/figma-sections/figma-proof-section';
import { FigmaExplanationSection } from '@/components/figma-sections/figma-explanation-section';
import { FigmaPackageSection } from '@/components/figma-sections/figma-package-section';
import { FigmaTrustSection } from '@/components/figma-sections/figma-trust-section';
import { FigmaFAQSection } from '@/components/figma-sections/figma-faq-section';
import { FigmaFinalCTASection } from '@/components/figma-sections/figma-final-cta-section';

export const metadata: Metadata = {
  title: 'Figma to Next.js Developer - $349 Website in 5 Days | Rajesh Shrirao',
  description: 'Professional Figma to Next.js conversion service. Get your design converted to a fast, SEO-optimized website in 3-5 days. Starting at $349. 100+ Lighthouse scores guaranteed.',
  keywords: [
    'figma to nextjs conversion',
    'figma to react developer',
    'design to code service',
    'figma website development',
    'nextjs conversion service',
    'react development agency',
    'figma to web conversion',
    'professional web development',
    'figma to website conversion',
    'nextjs development service',
    'react frontend development',
    'figma design to code',
    'professional web developer',
    'nextjs website development',
    'figma to nextjs expert'
  ],
  openGraph: {
    title: 'Figma to Next.js Developer - $349 Website in 5 Days',
    description: 'Professional Figma to Next.js conversion service. Get your design converted to a fast, SEO-optimized website in 3-5 days. Starting at $349. 100+ Lighthouse scores guaranteed.',
    type: 'website',
    url: 'https://rajeshshrirao.com/figma-to-nextjs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Figma to Next.js Developer - Professional Conversion Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figma to Next.js Developer - $349 Website in 5 Days',
    description: 'Professional Figma to Next.js conversion service. Get your design converted to a fast, SEO-optimized website in 3-5 days.',
    images: ['/og-image.jpg'],
    creator: '@rajeshshrirao',
  },
};

export default function FigmaToNextjsPage() {
  return (
    <div className="min-h-screen bg-background">
      <FigmaHeroSection />
      <FigmaProofSection />
      <FigmaExplanationSection />
      <FigmaPackageSection />
      <FigmaTrustSection />
      <FigmaFAQSection />
      <FigmaFinalCTASection />
    </div>
  );
}