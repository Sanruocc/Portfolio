"use client"

import { motion } from "framer-motion"
import { Github, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:rajeshshrirao696@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/Sanruocc", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/rajesh.shrirao/", label: "Instagram" },
  ]

  return (
    <footer id="contact" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <Link href={social.href} className="group" aria-label={social.label}>
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110">
                    <social.icon className="w-8 h-8 text-orange-500 group-hover:text-black transition-colors duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
                {"<Rajesh />"}
              </motion.div>
              <p className="text-gray-400">© {new Date().getFullYear()} Rajesh Shrirao. All rights reserved.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
