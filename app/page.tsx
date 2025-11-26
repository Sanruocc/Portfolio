import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TechShowcase } from '@/components/sections/tech-showcase';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { StructuredData, personSchema, websiteSchema, localBusinessSchema } from '@/components/seo/structured-data';

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={localBusinessSchema} />
      
      <HeroSection />
      <ServicesSection />
      <TechShowcase />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
