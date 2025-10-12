import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import SkillsSection from "../components/skills-section"
import PortfolioGrid from "../components/portfolio-grid"
import FiverrGallery from "../components/fiverr-gallery"
import AboutSection from "../components/about-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import FaviconGenerator from "../components/favicon-generator"
import { SectionDivider } from "@/components/ui/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-yellow-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-premium-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-premium-breathe" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <FaviconGenerator />
        <Navigation />
        <section id="home">
          <HeroSection />
        </section>
        <SectionDivider variant="wave" className="text-[hsl(var(--background))]" colorClass="fill-background" />
        <SkillsSection />
        <SectionDivider variant="angle" flip className="text-[hsl(var(--background))]" colorClass="fill-background" />
        <PortfolioGrid />
        <SectionDivider variant="wave" className="text-[hsl(var(--background))]" colorClass="fill-background" />
        <FiverrGallery />
        <SectionDivider variant="angle" className="text-[hsl(var(--background))]" colorClass="fill-background" />
        <AboutSection />
        <SectionDivider variant="wave" flip className="text-[hsl(var(--background))]" colorClass="fill-background" />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
