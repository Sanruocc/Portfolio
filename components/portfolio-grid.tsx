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
  const projects = [
    {
      id: 1,
      slug: "ai-chatbot-automation",
      title: "Enterprise AI Automation Suite",
      description:
        "Enterprise AI automation that reduced support costs by 70% and increased customer satisfaction by 45%. Platform handles 10,000+ daily conversations with 95% accuracy and seamless human escalation.",
      techStack: "Next.js • AI Agents • Supabase • OpenAI",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T12%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      slug: "flutter-fintech-app",
      title: "FinTech Mobile Banking Revolution",
      description:
        "Mobile banking powerhouse that processed $2.3M+ in transactions within Q1 launch. Features bank-grade security, real-time fraud detection, and achieved 4.8★ app store rating with 50K+ downloads.",
      techStack: "Flutter • Dart • Stripe • Firebase",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygww4h4etdaszvgwax6rgt8%2F1750766644_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Iw5yXVs27pX7sG7NqRnAjAEoOcCFDS%2Bs3SJmPo%2FyOCo%3D&az=oaivgprodscus",
      live: "#",
      featured: false,
    },
    {
      id: 3,
      slug: "saas-dashboard-analytics",
      title: "AI-Powered Business Intelligence Platform",
      description: "AI-powered business intelligence platform that accelerated decision-making by 300% and generates $750K+ ARR. Features predictive analytics with 92% accuracy and automated insights that saved 40+ hours weekly.",
      techStack: "Next.js • TypeScript • Supabase • AI Analytics",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
      live: "#",
      featured: true,
    },
    {
      id: 4,
      slug: "python-automation-suite",
      title: "Enterprise Workflow Automation Engine",
      description: "Enterprise automation engine that eliminated 45+ hours of manual work weekly and reduced operational costs by 60%. AI-driven workflows with 99.8% uptime and seamless API orchestration across 20+ platforms.",
      techStack: "Python • AI Workflows • APIs • Automation",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      slug: "flutter-ecommerce-app",
      title: "Next-Gen Mobile Commerce Platform",
      description: "E-commerce platform that boosted conversion rates by 85% and increased AOV by 62%. Features AR try-on technology, one-tap checkout with 94% success rate, and AI recommendations driving 40% of sales.",
      techStack: "Flutter • Stripe • UI/UX Design • APIs",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      slug: "nextjs-ai-portfolio",
      title: "AI-Enhanced Digital Showcase",
      description: "AI-enhanced portfolio system that generated 412% more qualified leads and achieved 89% engagement rate. Features intelligent content adaptation, 98+ PageSpeed scores, and conversion-optimized user journeys.",
      techStack: "Next.js • AI Integration • Framer Motion • Tailwind",
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
            <span className="text-purple-400 text-xs sm:text-sm font-medium">Portfolio Showcase</span>
          </div>

          <h2 className="text-responsive-title font-bold text-foreground mb-4 sm:mb-6 purple-neon-text leading-tight">
            Revenue-Generating Applications That <span className="text-primary">Transform Businesses</span>
          </h2>
          <p className="text-responsive-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each project represents a strategic partnership where cutting-edge technology meets business objectives,
            delivering measurable ROI and competitive advantages
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
                  <Link href={`/projects/${project.slug}`}>
                    <GlassCard
                      className="group overflow-hidden h-full cursor-pointer"
                      intensity="medium"
                      hover={true}
                      glow={project.featured}
                    >
                      {/* Project Image */}
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

                        {/* Overlay with Link */}
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <div className="p-3 bg-accent rounded-full text-accent-foreground transition-all duration-200">
                              <ExternalLink className="w-5 h-5" />
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Card Content */}
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

                      {/* Floating Tech Icons in Card */}
                      {performanceTier !== 'low' && !reducedMotion && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FloatingTechIcons count={2} size="sm" animated={false} />
                        </div>
                      )}

                      {/* Bottom Border Accent */}
                      <div className="h-1 bg-gradient-purple-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </GlassCard>
                  </Link>
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

        {/* View More Button */}
        <AnimatedSection delay={0.4} className="text-center margin-responsive relative z-10">
          <ViewProjectsButton
            size="md"
            animated={!reducedMotion}
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </ViewProjectsButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
