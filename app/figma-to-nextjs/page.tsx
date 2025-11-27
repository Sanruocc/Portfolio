import { Metadata } from 'next';
import { FigmaHeroSection } from '@/components/figma-sections/figma-hero-section';
import { FigmaProofSection } from '@/components/figma-sections/figma-proof-section';
import { FigmaExplanationSection } from '@/components/figma-sections/figma-explanation-section';
import { FigmaPackageSection } from '@/components/figma-sections/figma-package-section';
import { FigmaTrustSection } from '@/components/figma-sections/figma-trust-section';
import { FigmaFAQSection } from '@/components/figma-sections/figma-faq-section';
import { FigmaFinalCTASection } from '@/components/figma-sections/figma-final-cta-section';

export const metadata: Metadata = {
  title: 'Figma to Next.js Developer - Convert Your Design in 5 Days | Rajesh Shrirao',
  description: 'Turn your Figma design into a blazing fast Next.js website. Pixel-perfect, production-grade frontend with 100+ Lighthouse scores. Delivered in 5 days.',
  keywords: [
    'figma to nextjs',
    'figma to react',
    'design to code',
    'figma developer',
    'nextjs developer',
    'react developer',
    'figma conversion',
    'design to web',
    'figma to website',
    'react development services'
  ],
  openGraph: {
    title: 'Figma to Next.js Developer - Convert Your Design in 5 Days',
    description: 'Turn your Figma design into a blazing fast Next.js website. Pixel-perfect, production-grade frontend with 100+ Lighthouse scores.',
    type: 'website',
    url: 'https://rajeshshrirao.com/figma-to-nextjs',
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