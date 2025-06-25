import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import PortfolioGrid from "../components/portfolio-grid"
import AboutSection from "../components/about-section"
import Footer from "../components/footer"
import FaviconGenerator from "../components/favicon-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <FaviconGenerator />
      <Navigation />
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
