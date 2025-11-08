"use client"

import { motion } from "framer-motion"
import { GlassCard, GlassButton } from "@/components/ui/glass-morphism"
import { ViewProjectsButton } from "@/components/ui/premium-button"
import { PremiumBadge, FeaturedBadge, TechBadge } from "@/components/ui/premium-badge"
import { ExternalLink, Github, Eye, Star } from "lucide-react"
import Image from "next/image"
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"
import Link from "next/link"
import AnimatedSection from "./animated-section"

export default function PortfolioGrid() {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()
  
  // 3 Flagship Web Development Projects
  const projects = [
    {
      id: 1,
      slug: "invoiceflowme-invoicing-payments",
      title: "InvoiceFlowMe – Instant Invoicing & Payments",
      description:
        "A SaaS tool for freelancers and small businesses to create, send, and track invoices. Supports PDF export, Stripe/PayPal demo payments, real-time status updates, income analytics dashboard, and responsive design. Features include instant invoice creation & editing, PDF download & email sending, mock Stripe payment (sandbox), dashboard with analytics, and demo login or guest mode.",
      techStack: "Next.js • Stripe • MongoDB • React • Node.js",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
      live: "https://invoiceflowme.vercel.app",
      featured: true,
    },
    {
      id: 2,
      slug: "shoply-ecommerce-store",
      title: "Shoply – Modern E-Commerce Demo Store",
      description: "Conversion-focused store with instant search, category filters, cart and wishlist, real checkout (sandbox), review/ratings, and admin panel preview. Features fast search/filter, cart & demo checkout, product reviews, admin panel walkthrough, and AI-powered product suggestions.",
      techStack: "Next.js • Stripe • Firebase • React",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      slug: "ai-guru-support-bot",
      title: "AI Guru – Conversational Support Bot Platform",
      description: "AI-powered assistant offering tech support, instant chat, ticket system, dashboard view of logs and ticket status, and editable bot personality/FAQ. Features live chatbot interface, simulated ticket creation, dashboard demo, and customizable bot settings.",
      techStack: "Next.js • OpenAI API • Node.js • Supabase",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
      live: "#",
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const getStorySlices = (text: string) => {
    const words = text.split(/\s+/)
    const chunk = Math.ceil(words.length / 3)
    const challenge = words.slice(0, chunk).join(' ')
    const solution = words.slice(chunk, 2 * chunk).join(' ')
    const impact = words.slice(2 * chunk).join(' ')
    return { challenge, solution, impact }
  }

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section Header */}
        <AnimatedSection className="text-center margin-responsive">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-400 text-xs sm:text-sm font-medium">Featured Projects</span>
          </div>

          <h2 className="text-responsive-title font-bold text-foreground mb-4 sm:mb-6 purple-neon-text leading-tight">
            3 Flagship <span className="text-primary">Web Applications</span>
          </h2>
          <p className="text-responsive-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing expertise in SaaS platforms, e-commerce solutions, and AI-powered applications
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection delay={0.2}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => {
              const story = getStorySlices(project.description)
              return (
                <motion.div key={project.id} variants={cardVariants} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                  <GlassCard
                    className="group overflow-hidden h-full cursor-pointer"
                    intensity="medium"
                    hover={true}
                    glow={project.featured}
                  >
                    {/* Project Image */}
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={240}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div
                            className="absolute top-4 left-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            <FeaturedBadge size="sm" />
                          </motion.div>
                        )}

                        {/* Overlay with Demo Link */}
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="z-10"
                          >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <div className="p-3 bg-accent rounded-full text-accent-foreground transition-all duration-200">
                                <ExternalLink className="w-5 h-5" />
                              </div>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <Link href={`/projects/${project.slug}`}>
                      <div className="p-3 sm:p-4 lg:p-5 pb-1 sm:pb-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold group-hover:text-purple-400 transition-colors duration-200 mb-2 purple-neon-text leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <TechBadge size="xs" className="text-xs">
                            {project.techStack}
                          </TechBadge>
                        </div>
                      </div>

                      <div className="px-3 sm:px-4 lg:px-5 pt-0">
                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                          {project.description}
                        </p>
                        {/* Mini Storyline */}
                        <div className="grid grid-cols-1 gap-1.5 text-xs text-white/90">
                          <div><span className="font-semibold text-purple-300">Challenge:</span> {story.challenge}</div>
                          <div><span className="font-semibold text-purple-300">Solution:</span> {story.solution}</div>
                          <div><span className="font-semibold text-purple-300">Impact:</span> {story.impact}</div>
                        </div>
                      </div>
                    </Link>

                      {/* Floating Tech Icons in Card */}
                      {performanceTier !== 'low' && !reducedMotion && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FloatingTechIcons count={2} size="sm" animated={false} />
                        </div>
                      )}

                    {/* Bottom Border Accent */}
                    <div className="h-1 bg-gradient-purple-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatedSection>

        {/* Floating Tech Icons Background */}
        {performanceTier === 'elite' && !reducedMotion && (
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <FloatingTechIcons count={4} size="xs" animated={true} />
          </div>
        )}
      </div>
    </section>
  )
}
