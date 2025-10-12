"use client"

import { motion } from "framer-motion"
import { Github, Mail, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"

export default function Footer() {
  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:rajeshshrirao696@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajesh,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0AProject%20Type:%20[Web%20App%20/%20Mobile%20App%20/%20AI%20Automation]%0ABudget:%20[Your%20Budget]%0ATimeline:%20[Your%20Timeline]%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ABest%20regards,%0A[Your%20Name]",
      label: "Email",
      text: "rajeshshrirao696@gmail.com",
      primary: true
    },
    {
      icon: Github,
      href: "https://github.com/Sanruocc",
      label: "GitHub",
      text: "View Projects",
      primary: false
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/rajesh.shrirao/",
      label: "Instagram",
      text: "Follow Journey",
      primary: false
    },
    {
      icon: ExternalLink,
      href: "https://www.fiverr.com/s/akjWLR",
      label: "Fiverr",
      text: "Hire on Fiverr",
      primary: false
    },
  ]

  return (
    <footer className="bg-card py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">

          {/* Left Column - Brand & CTA */}
          <AnimatedSection>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 purple-neon-text">
                  Let's Build Something <span className="text-primary">Amazing</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Full-stack developer specializing in Next.js, Flutter, and AI automation.
                  Ready to transform your business with cutting-edge technology.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="text-green-400 font-medium">Available for Premium Projects</span>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:rajeshshrirao696@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajesh,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0AProject%20Type:%20[Web%20App%20/%20Mobile%20App%20/%20AI%20Automation]%0ABudget:%20[Your%20Budget]%0ATimeline:%20[Your%20Timeline]%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ABest%20regards,%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Column - Contact Details */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>

              <div className="space-y-4">
                {contactLinks.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group ${contact.primary
                          ? 'bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20'
                          : 'hover:bg-muted/50'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${contact.primary
                          ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30'
                          : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                        }`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {contact.text}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> Usually within 24 hours
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection delay={0.4}>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                {"<RajeshShrirao />"}
              </motion.div>

              <div className="text-center sm:text-right">
                <p className="text-muted-foreground text-sm">
                  &copy; {new Date().getFullYear()} Rajesh Shrirao. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Full-Stack Developer • Next.js • Flutter • AI Automation
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
