"use client"

import { Suspense } from "react"
import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import PortfolioGrid from "../components/portfolio-grid"
import AboutSection from "../components/about-section"
import Footer from "../components/footer"
import BackgroundEffects from "../components/background-effects"
import ErrorBoundary from "../components/error-boundary"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ec4899",
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-black relative overflow-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <BackgroundEffects />
          <Navigation />
          <HeroSection />
          <PortfolioGrid />
          <AboutSection />
          <Footer />
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}
