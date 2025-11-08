"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-morphism"
import { TechBadge, FeaturedBadge } from "@/components/ui/premium-badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

const projectsData = {
  "invoiceflowme-invoicing-payments": {
    title: "InvoiceFlowMe – Instant Invoicing & Payments",
    subtitle: "SaaS Invoicing Platform",
    description:
      "A comprehensive SaaS tool for freelancers and small businesses to create, send, and track invoices. Features PDF export, Stripe/PayPal demo payments, real-time status updates, income analytics dashboard, and responsive design.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
    techStack: ["Next.js", "Stripe", "MongoDB", "React", "Node.js", "PDF Generation", "Tailwind CSS"],
    liveUrl: "https://invoiceflowme.vercel.app",
    duration: "4 months",
    team: "Solo Project",
    role: "Full-Stack Developer & Product Designer",
    overview:
      "InvoiceFlowMe revolutionizes invoicing for freelancers and small businesses by providing an intuitive platform for creating professional invoices, tracking payments, and managing finances. The application streamlines the entire invoicing workflow from creation to payment collection, with real-time analytics to help businesses make informed decisions.",
    features: [
      "Instant invoice creation & editing with template library",
      "PDF download & email sending with custom branding",
      "Mock Stripe payment integration (sandbox mode)",
      "Real-time payment status tracking and notifications",
      "Income analytics dashboard with visual charts",
      "Client management system with contact history",
      "Demo login or guest mode for easy testing",
      "Multi-currency support and tax calculations",
    ],
    challenges: [
      {
        problem: "PDF Generation Quality",
        solution:
          "Implemented server-side PDF generation with custom templates, ensuring professional-quality invoices with proper formatting, branding, and print optimization.",
      },
      {
        problem: "Payment Integration",
        solution:
          "Integrated Stripe payment processing in sandbox mode with comprehensive webhook handling for real-time payment status updates and automated invoice marking.",
      },
      {
        problem: "Real-time Analytics",
        solution:
          "Built efficient aggregation pipelines in MongoDB to calculate income metrics and payment trends, with cached results for instant dashboard loading.",
      },
    ],
    development: {
      planning:
        "Researched invoicing pain points of freelancers and small businesses. Designed user flows focused on minimizing time to create and send invoices.",
      design:
        "Created a clean, professional interface with intuitive invoice builder. Focused on mobile-first design for on-the-go invoice management.",
      backend:
        "Built RESTful APIs with Next.js, integrated Stripe for payments, implemented PDF generation engine, and designed efficient MongoDB schemas for invoices and clients.",
      frontend:
        "Developed responsive React components with real-time updates, interactive invoice preview, and comprehensive analytics dashboard with Chart.js visualizations.",
      testing:
        "Conducted thorough testing including payment flow validation, PDF generation across devices, and user acceptance testing with real freelancers.",
    },
  },
  "shoply-ecommerce-store": {
    title: "Shoply – Modern E-Commerce Demo Store",
    subtitle: "Conversion-Focused E-Commerce Platform",
    description:
      "A modern e-commerce platform featuring instant search, category filters, cart and wishlist, real checkout (sandbox), review/ratings, and admin panel preview. Built for maximum conversion with AI-powered product suggestions.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
    techStack: ["Next.js", "Stripe", "Firebase", "React", "Tailwind CSS", "AI/ML"],
    liveUrl: "#",
    duration: "4 months",
    team: "Solo Project",
    role: "Full-Stack Developer & E-Commerce Specialist",
    overview:
      "Shoply represents the future of online retail with a conversion-optimized design, instant search capabilities, and intelligent product recommendations. The platform combines modern e-commerce features with AI-powered suggestions to create a seamless shopping experience.",
    features: [
      "Fast search/filter",
      "Cart & demo checkout",
      "Product reviews",
      "Admin panel walkthrough",
      "AI-powered product suggestions",
      "Real-time inventory management",
      "Wishlist functionality",
      "Secure payment processing (sandbox)",
    ],
    challenges: [
      {
        problem: "Search Performance",
        solution:
          "Implemented instant search with debouncing and caching strategies, ensuring sub-100ms response times even with thousands of products.",
      },
      {
        problem: "Payment Integration",
        solution:
          "Integrated Stripe payment processing in sandbox mode with comprehensive webhook handling for order fulfillment and payment status updates.",
      },
      {
        problem: "AI Product Recommendations",
        solution:
          "Built machine learning recommendation engine using collaborative filtering and user behavior analysis to suggest relevant products.",
      },
    ],
    development: {
      planning:
        "Researched top e-commerce platforms to identify best practices for conversion optimization. Designed user flows focused on reducing cart abandonment.",
      design:
        "Created a clean, modern interface with intuitive navigation and prominent call-to-action buttons. Focused on mobile-first design principles.",
      backend:
        "Built with Next.js API routes, integrated Firebase for real-time data, and implemented Stripe for secure payment processing.",
      frontend:
        "Developed responsive React components with Next.js, optimized images for fast loading, and implemented smooth animations for better UX.",
      testing:
        "Conducted A/B testing for conversion optimization, performed load testing for high traffic scenarios, and validated payment flows extensively.",
    },
  },
  "ai-guru-support-bot": {
    title: "AI Guru – Conversational Support Bot Platform",
    subtitle: "AI-Powered Customer Support System",
    description:
      "An intelligent conversational support bot platform offering tech support, instant chat, ticket system, dashboard view of logs and ticket status, and editable bot personality/FAQ. Built with cutting-edge AI technology for superior customer experience.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
    techStack: ["Next.js", "OpenAI API", "Node.js", "Supabase", "React", "WebSocket"],
    liveUrl: "#",
    duration: "4 months",
    team: "Solo Project",
    role: "Full-Stack Developer & AI Integration Specialist",
    overview:
      "AI Guru revolutionizes customer support by providing instant, intelligent responses to user queries. The platform combines advanced AI capabilities with traditional support systems to create a seamless support experience that reduces response times and improves customer satisfaction.",
    features: [
      "Live chatbot interface",
      "Simulated ticket creation",
      "Dashboard demo",
      "Customizable bot settings",
      "Real-time conversation logging",
      "Editable bot personality/FAQ",
      "Multi-channel support integration",
      "Analytics and performance metrics",
    ],
    challenges: [
      {
        problem: "Natural Language Understanding",
        solution:
          "Integrated OpenAI API with custom fine-tuning to understand context and provide accurate, helpful responses across various technical support scenarios.",
      },
      {
        problem: "Real-time Communication",
        solution:
          "Implemented WebSocket connections for instant message delivery and typing indicators, creating a smooth conversational experience.",
      },
      {
        problem: "Bot Personality Customization",
        solution:
          "Built a flexible configuration system allowing admins to adjust tone, knowledge base, and response patterns without code changes.",
      },
    ],
    development: {
      planning:
        "Researched customer support pain points and analyzed chatbot best practices. Designed conversation flows for common support scenarios.",
      design:
        "Created an intuitive chat interface with clear visual hierarchy and admin dashboard for monitoring and configuration.",
      backend:
        "Built scalable APIs with Next.js, integrated OpenAI for AI capabilities, and used Supabase for real-time data synchronization and ticket management.",
      frontend:
        "Developed responsive React components with real-time chat functionality, typing indicators, and smooth animations for better UX.",
      testing:
        "Conducted extensive testing including AI response accuracy validation, load testing for concurrent chats, and user acceptance testing.",
    },
  },
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Effects - Same as Main Page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-yellow-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-premium-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-premium-breathe" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Back Button */}
        <AnimatedSection className="container-responsive py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-responsive">
            <AnimatedSection className="text-center space-y-6 mb-12">
              {/* Title */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <span className="text-purple-400 text-xs sm:text-sm font-medium">{project.subtitle}</span>
                </div>
                <h1 className="text-responsive-title font-bold text-foreground purple-neon-text leading-tight">
                  {project.title}
                </h1>
                <p className="text-responsive-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech, index) => (
                  <TechBadge key={index} size="sm" className="text-xs">
                    {tech}
                  </TechBadge>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-purple-500/30"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Project Image */}
            <AnimatedSection delay={0.2} className="mb-16">
              <GlassCard className="overflow-hidden" intensity="medium" glow={true}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar - Project Info */}
              <AnimatedSection delay={0.3} className="lg:col-span-1 space-y-6">
                <GlassCard intensity="medium" className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 purple-neon-text">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm text-foreground">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Team</p>
                        <p className="text-sm text-foreground">{project.team}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Role</p>
                        <p className="text-sm text-foreground">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>

              {/* Main Content */}
              <AnimatedSection delay={0.4} className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 purple-neon-text">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 text-purple-400">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="section-padding">
          <div className="container-responsive">
            <AnimatedSection delay={0.5} className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground purple-neon-text">Development Process</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(project.development).map(([phase, description], index) => (
                <AnimatedSection key={phase} delay={0.6 + index * 0.1}>
                  <GlassCard className="p-6 h-full" intensity="low" hover={true}>
                    <h3 className="text-lg font-bold text-purple-400 mb-3 capitalize">{phase}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section-padding bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
          <div className="container-responsive">
            <AnimatedSection delay={0.7} className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground purple-neon-text">Challenges & Solutions</h2>
            </AnimatedSection>

            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <AnimatedSection key={index} delay={0.8 + index * 0.1}>
                  <GlassCard className="p-8" intensity="medium">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                          <span className="text-2xl">⚠️</span>
                          Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{challenge.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                          <span className="text-2xl">✅</span>
                          Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-responsive">
            <AnimatedSection delay={0.9}>
              <GlassCard className="p-12 text-center" intensity="medium" glow={true}>
                <h2 className="text-2xl font-bold text-foreground mb-4 purple-neon-text">
                  Interested in Similar Work?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help bring your project ideas to life with the same attention to detail and
                  technical expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="mailto:rajeshshrirao696@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-purple-500/30"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                  >
                    View More Projects
                  </Link>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
