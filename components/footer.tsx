"use client"

import { motion } from "framer-motion"
import { Button } from "@nextui-org/react"
import { Github, Mail, Instagram, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:rajeshshrirao696@gmail.com",
      label: "Email",
      gradient: "from-pink-500 to-purple-600",
      hoverColor: "#ec4899",
    },
    {
      icon: Github,
      href: "https://github.com/Sanruocc",
      label: "GitHub",
      gradient: "from-purple-500 to-pink-600",
      hoverColor: "#8b5cf6",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/rajesh.shrirao/",
      label: "Instagram",
      gradient: "from-pink-600 to-purple-500",
      hoverColor: "#ec4899",
    },
  ]

  return (
    <footer id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
            style={{
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
            }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
              LET'S CREATE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              MAGIC
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Ready to embark on a divine journey of digital transformation? Let's craft something extraordinary together.
          </motion.p>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(236, 72, 153, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="mailto:rajeshshrirao696@gmail.com"
              size="lg"
              className="px-12 py-6 text-xl font-bold text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              }}
              startContent={<Mail className="w-6 h-6" />}
            >
              Start Divine Collaboration
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links - FIXED */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-8 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.2,
              }}
            >
              <Link href={social.href} className="group" aria-label={social.label}>
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(236, 72, 153, 0.3)",
                  }}
                  whileHover={{
                    background: `linear-gradient(135deg, ${
                      social.gradient.includes("pink-500") ? "#ec4899" : "#8b5cf6"
                    }, ${social.gradient.includes("purple-600") ? "#8b5cf6" : "#ec4899"})`,
                    boxShadow: `0 0 30px ${social.hoverColor}50`,
                  }}
                >
                  {/* Gradient background overlay for hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div className="relative z-10" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <social.icon className="w-8 h-8 text-pink-400 group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${social.hoverColor}20 0%, transparent 70%)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-purple-500/20 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0"
            >
              {"<RAJESH />"}
            </motion.div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {new Date().getFullYear()} Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-5 h-5 text-pink-500" />
              </motion.div>
              <span>by Divine Developer</span>
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pink-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
