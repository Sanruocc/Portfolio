"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              {"<Rajesh />"}
            </Link>
            <Link href="/" className="flex items-center text-gray-300 hover:text-orange-500 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title.split(" - ")[0]}
                <span className="text-orange-500 block text-2xl md:text-3xl mt-2">{project.title.split(" - ")[1]}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-orange-500">Project Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-300">{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-300">{project.team}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-300">{project.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Overview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.overview}</p>

                <h3 className="text-2xl font-semibold mb-4 text-orange-500">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(project.development).map(([phase, description], index) => (
                  <div key={phase} className="bg-gray-800/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-orange-500 capitalize">{phase}</h3>
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Challenges & Solutions</h2>

              <div className="space-y-8">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-800/50 p-8 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-400">Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{challenge.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-green-400">Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Interested in Similar Work?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how I can help bring your project ideas to life with the same attention to detail and
                technical expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:rajeshshrirao696@gmail.com">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                  >
                    View More Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
