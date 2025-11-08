"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HireMeButton } from "@/components/ui/premium-button"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"
import { Menu, X, Code, Zap, Globe, Smartphone, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        // Glass morphism background
        "bg-gradient-to-br from-white/10 via-purple-500/10 to-white/5",
        "backdrop-blur-xl",
        // Enhanced visibility
        "border-b border-white/20",
        // Shadow effects
        isScrolled 
          ? "shadow-2xl shadow-purple-500/20" 
          : "shadow-lg shadow-purple-500/10"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 sm:py-3.5 lg:py-4 min-h-[56px] sm:min-h-[60px] lg:min-h-[64px]">
          {/* Premium Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400/50 rounded-md"
            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
            whileTap={!reducedMotion ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
              {"<Dev />"}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1.5 lg:gap-2 max-md:hidden" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "relative flex items-center gap-1.5 px-2.5 lg:px-3.5 py-2 rounded-lg",
                    "transition-all duration-300 font-medium text-sm lg:text-base",
                    "focus:outline-none focus:ring-2 focus:ring-purple-400/50",
                    "border backdrop-blur-sm whitespace-nowrap",
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-500/60 to-pink-500/60 border-purple-400/80 shadow-lg shadow-purple-500/50"
                      : "text-white/95 bg-white/15 border-white/40 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/30"
                  )}
                  whileHover={!reducedMotion ? { y: -2, scale: 1.03 } : {}}
                  whileTap={!reducedMotion ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label={`Navigate to ${item.label} section`}
                  role="menuitem"
                >
                  <IconComponent size={16} className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden md:inline lg:inline text-sm lg:text-base">{item.label}</span>
                </motion.button>
              )
            })}

            {/* Premium CTA Button */}
            <div className="ml-1 lg:ml-3">
              <HireMeButton
                onClick={() => scrollToSection("contact")}
                size="md"
                className="text-sm lg:text-base shadow-xl shadow-purple-500/30 whitespace-nowrap font-semibold"
                animated={!reducedMotion}
              >
                Let's Talk
              </HireMeButton>
            </div>
          </nav>

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
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-left text-base",
                          "focus:outline-none focus:ring-2 focus:ring-purple-400/50",
                          "backdrop-blur-sm",
                          activeSection === item.id
                            ? "text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/60 shadow-lg shadow-purple-500/30"
                            : "text-white/90 hover:text-white hover:bg-white/20 hover:border hover:border-white/30"
                        )}
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
                      size="lg"
                      fullWidth={true}
                      className="text-base shadow-xl shadow-purple-500/25"
                      animated={!reducedMotion}
                    >
                      Let's Talk
                    </HireMeButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
