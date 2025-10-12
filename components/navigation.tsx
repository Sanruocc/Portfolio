"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassNav } from "@/components/ui/glass-morphism"
import { HireMeButton } from "@/components/ui/premium-button"
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"
import { Menu, X, Code, Zap, Globe, Smartphone, BookOpen } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "fiverr", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home", icon: Code },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: Globe },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "fiverr", label: "Fiverr", icon: Smartphone },
    { id: "about", label: "About", icon: Code },
    { id: "contact", label: "Contact", icon: Globe },
  ]

  const handleNavigation = (item: any) => {
    if (item.id === 'blog') {
      window.location.href = '/blog'
    } else {
      scrollToSection(item.id)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <GlassNav
      sticky={true}
      className={`transition-all duration-500 ${
        isScrolled ? 'glass-nav-scrolled' : 'glass-nav-transparent'
      }`}
      intensity={isScrolled ? 'high' : 'medium'}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-2 sm:py-2.5 lg:py-3 min-h-[52px] sm:min-h-[56px] lg:min-h-[60px]">
          {/* Clean Logo */}
          <motion.div
            className="flex items-center"
            whileHover={!reducedMotion ? { scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent purple-neon-text">
              {"<RajeshShrirao />"}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-md transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:ring-offset-background ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-500/15 border border-purple-500/30 purple-neon-glow"
                      : "text-white/80 hover:text-white hover:bg-white/10 hover:purple-neon-subtle"
                  }`}
                  whileHover={!reducedMotion ? { y: -0.5, scale: 1.01 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label={`Navigate to ${item.label} section`}
                  role="menuitem"
                >
                  <IconComponent size={14} className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline text-sm">{item.label}</span>
                </motion.button>
              )
            })}

            {/* Premium Hire Me Button */}
            <HireMeButton
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="ml-2 lg:ml-3 text-sm"
              animated={!reducedMotion}
            >
              Hire Me
            </HireMeButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:ring-offset-background"
              whileTap={!reducedMotion ? { scale: 0.95 } : {}}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              role="menu"
            >
              <div className="py-3 border-t border-white/10 border-purple-500/20">
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigation(item)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-md transition-all duration-300 font-medium text-left text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:ring-offset-background ${
                          activeSection === item.id
                            ? "text-purple-400 bg-purple-500/15 border border-purple-500/30 purple-neon-glow"
                            : "text-white/80 hover:text-white hover:bg-white/10 hover:purple-neon-subtle"
                        }`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08, duration: 0.25 }}
                        aria-label={`Navigate to ${item.label} section`}
                        role="menuitem"
                      >
                        <IconComponent size={14} />
                        {item.label}
                      </motion.button>
                    )
                  })}

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.08, duration: 0.25 }}
                    className="px-3 pt-3"
                  >
                    <HireMeButton
                      onClick={() => scrollToSection("contact")}
                      size="md"
                      fullWidth={true}
                      className="text-sm"
                      animated={!reducedMotion}
                    >
                      Hire Me
                    </HireMeButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Tech Icons Background */}
      {performanceTier === 'elite' && !reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <FloatingTechIcons
            count={3}
            size="xs"
            animated={true}
            className="opacity-15"
          />
        </div>
      )}
    </GlassNav>
  )
}
