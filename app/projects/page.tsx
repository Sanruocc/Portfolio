"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-morphism"
import { FeaturedBadge, TechBadge } from "@/components/ui/premium-badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities"

export default function ProjectsPage() {
  const { performanceTier, reducedMotion } = useDeviceCapabilities()

  const projects = [
    {
      id: 1,
      slug: "invoiceflowme-invoicing-payments",
      title: "InvoiceFlowMe – Instant Invoicing & Payments",
      description:
        "A SaaS tool for freelancers and small businesses to create, send, and track invoices. Supports PDF export, Stripe/PayPal demo payments, real-time status updates, income analytics dashboard, and responsive design.",
      techStack: "Next.js • Stripe • MongoDB • React • Node.js",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
      live: "https://invoiceflowme.vercel.app",
      featured: true,
    },
    {
      id: 2,
      slug: "myfitcoach-ai-fitness",
      title: "MyFitCoach – AI-Powered Fitness App",
      description:
        "Cross-platform fitness app featuring drag & drop workout builder, AI-driven diet/workout plans, trainer chat, video tutorials, and progress tracking charts.",
      techStack: "Flutter • Next.js • TensorFlow • MongoDB",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygww4h4etdaszvgwax6rgt8%2F1750766644_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Iw5yXVs27pX7sG7NqRnAjAEoOcCFDS%2Bs3SJmPo%2FyOCo%3D&az=oaivgprodscus",
      live: "/",
      featured: false,
    },
    {
      id: 3,
      slug: "shoply-ecommerce-store",
      title: "Shoply – Modern E-Commerce Demo Store",
      description: "Conversion-focused store with instant search, category filters, cart and wishlist, real checkout (sandbox), review/ratings, and admin panel preview.",
      techStack: "Next.js • Stripe • Firebase • React",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
      live: "#",
      featured: true,
    },
    {
      id: 4,
      slug: "ai-guru-support-bot",
      title: "AI Guru – Conversational Support Bot Platform",
      description: "AI-powered assistant offering tech support, instant chat, ticket system, dashboard view of logs and ticket status, and editable bot personality/FAQ.",
      techStack: "Next.js • OpenAI API • Node.js • Supabase",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      slug: "urbannest-real-estate",
      title: "UrbanNest – Real Estate Portal",
      description: "Modern property search platform with map-based listings, dynamic filters, agent profiles, visit booking (calendar demo), and chat.",
      techStack: "Next.js • Google Maps API • MongoDB • React",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      slug: "devportfolio-designer-showcase",
      title: "DevPortfolio - Designer Showcase",
      description: "Stunning portfolio website with smooth animations, dark mode, and responsive design system",
      techStack: "Next.js • Framer Motion • Tailwind CSS",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxf00qe8f8qyk9qy5vyevb%2F1750767280_img_0.webp?st=2025-06-24T11%3A07%3A41Z&se=2025-06-30T12%3A07%3A41Z&sks=b&skt=2025-06-24T11%3A07%3A41Z&ske=2025-06-30T12%3A07%3A41Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=pxmu1TSNwbTaxMpqmG6ksKI2BeB0jmza6Ftw3OrJSVk%3D&az=oaivgprodscus",
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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-yellow-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-premium-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-premium-breathe" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Header */}
        <section className="section-padding">
          <div className="container-responsive">
            <AnimatedSection className="text-center margin-responsive">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="text-purple-400 text-xs sm:text-sm font-medium">Full Portfolio</span>
              </div>

              <h1 className="text-responsive-title font-bold text-foreground mb-4 sm:mb-6 purple-neon-text leading-tight">
                All <span className="text-primary">Projects</span>
              </h1>
              <p className="text-responsive-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of my development work across web, mobile, and design projects
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-responsive">
            <AnimatedSection delay={0.2}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <GlassCard
                      className="group overflow-hidden h-full"
                      intensity="medium"
                      hover={true}
                      glow={project.featured}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={240}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

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

                        {/* View Details Link */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        >
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <div className="p-3 bg-accent rounded-full text-accent-foreground">
                              <ExternalLink className="w-5 h-5" />
                            </div>
                          </motion.div>
                        </Link>
                      </div>

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

                      <div className="px-3 sm:px-4 lg:px-5 pt-0 pb-3 sm:pb-4">
                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="h-1 bg-gradient-purple-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
