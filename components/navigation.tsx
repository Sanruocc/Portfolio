"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "projects", "about", "contact"]
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
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 w-full z-50"
    >
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-pink-500/20 shadow-2xl" : "bg-transparent"
        }`}
        style={{
          background: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.1)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        }}
        maxWidth="full"
        height="80px"
      >
        <NavbarContent>
          <NavbarBrand>
            <motion.div
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))",
              }}
              className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent"
            >
              {"<RAJESH />"}
            </motion.div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  activeSection === item.id ? "text-pink-400" : "text-white/80 hover:text-pink-300"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                as="a"
                href="mailto:rajeshshrirao696@gmail.com"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                }}
              >
                Hire Me
              </Button>
            </motion.div>
          </NavbarItem>
          <NavbarMenuToggle
            className="md:hidden text-white"
            icon={
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            }
          />
        </NavbarContent>

        <NavbarMenu className="bg-black/95 backdrop-blur-xl">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-4 pt-8"
              >
                {navItems.map((item, index) => (
                  <NavbarMenuItem key={item.id}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${
                        activeSection === item.id
                          ? "text-pink-400 bg-pink-500/10"
                          : "text-white/80 hover:text-pink-300 hover:bg-pink-500/5"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  </NavbarMenuItem>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  )
}
