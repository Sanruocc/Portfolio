"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  "taskflow-project-management": {
    title: "TaskFlow - Project Management",
    subtitle: "Full-Stack MERN Application",
    description:
      "A comprehensive project management solution built with the MERN stack, featuring real-time collaboration, advanced task tracking, and insightful team analytics.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    duration: "3 months",
    team: "Solo Project",
    role: "Full-Stack Developer",
    overview:
      "TaskFlow addresses the common challenges faced by teams in project management by providing an intuitive, real-time collaborative platform. The application streamlines workflow management, enhances team communication, and provides valuable insights through comprehensive analytics.",
    features: [
      "Real-time task updates and notifications using Socket.io",
      "Drag-and-drop Kanban board interface",
      "Team collaboration with comments and file attachments",
      "Advanced filtering and search capabilities",
      "Comprehensive analytics dashboard with charts",
      "Role-based access control and permissions",
      "Mobile-responsive design for on-the-go access",
    ],
    challenges: [
      {
        problem: "Real-time Synchronization",
        solution:
          "Implemented Socket.io for instant updates across all connected clients, ensuring data consistency and seamless collaboration.",
      },
      {
        problem: "Scalable Database Design",
        solution:
          "Designed efficient MongoDB schemas with proper indexing and aggregation pipelines for optimal performance with large datasets.",
      },
      {
        problem: "State Management",
        solution:
          "Utilized Redux Toolkit for predictable state management and implemented optimistic updates for better user experience.",
      },
    ],
    development: {
      planning:
        "Started with user research and competitive analysis to identify key pain points in existing project management tools. Created detailed wireframes and user flow diagrams.",
      design:
        "Developed a clean, intuitive interface focusing on usability and accessibility. Implemented a consistent design system with reusable components.",
      backend:
        "Built RESTful APIs with Express.js, implemented JWT authentication, and designed efficient database schemas. Added real-time functionality with Socket.io.",
      frontend:
        "Created responsive React components with modern hooks, implemented drag-and-drop functionality, and integrated real-time updates seamlessly.",
      testing:
        "Conducted thorough testing including unit tests, integration tests, and user acceptance testing to ensure reliability and performance.",
    },
  },
  "ecoshop-sustainable-ecommerce": {
    title: "EcoShop - Sustainable E-commerce",
    subtitle: "Next.js E-commerce Platform",
    description:
      "A modern e-commerce platform dedicated to promoting sustainable and eco-friendly products, built with Next.js and featuring advanced filtering, secure payments, and environmental impact tracking.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygww4h4etdaszvgwax6rgt8%2F1750766644_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Iw5yXVs27pX7sG7NqRnAjAEoOcCFDS%2Bs3SJmPo%2FyOCo%3D&az=oaivgprodscus",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    duration: "4 months",
    team: "Solo Project",
    role: "Full-Stack Developer & UI/UX Designer",
    overview:
      "EcoShop is an innovative e-commerce platform that makes sustainable shopping accessible and engaging. The platform not only facilitates eco-friendly purchases but also educates users about environmental impact and tracks their contribution to sustainability goals.",
    features: [
      "Advanced product filtering by sustainability metrics",
      "Secure payment processing with Stripe integration",
      "Environmental impact calculator for purchases",
      "User dashboard with sustainability tracking",
      "Vendor onboarding system for eco-friendly brands",
      "Product recommendation engine based on preferences",
      "Mobile-first responsive design with smooth animations",
    ],
    challenges: [
      {
        problem: "Complex Product Categorization",
        solution:
          "Developed a multi-dimensional tagging system that allows products to be categorized by multiple sustainability criteria while maintaining fast search performance.",
      },
      {
        problem: "Payment Security",
        solution:
          "Integrated Stripe with proper webhook handling and implemented comprehensive error handling for secure transaction processing.",
      },
      {
        problem: "Performance Optimization",
        solution:
          "Utilized Next.js features like Image Optimization, Static Site Generation, and API Routes to achieve excellent Core Web Vitals scores.",
      },
    ],
    development: {
      planning:
        "Conducted market research on sustainable e-commerce trends and identified key features that would differentiate the platform from traditional online stores.",
      design:
        "Created a nature-inspired design system with earthy colors and clean typography. Focused on creating an intuitive shopping experience that highlights product sustainability features.",
      backend:
        "Built with Next.js API routes and Prisma ORM for type-safe database operations. Implemented comprehensive product management and order processing systems.",
      frontend:
        "Developed responsive React components with TypeScript for type safety. Added smooth animations with Framer Motion to enhance user engagement.",
      testing:
        "Performed extensive testing including payment flow testing, cross-browser compatibility, and mobile responsiveness across various devices.",
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
  "urbannest-real-estate": {
    title: "UrbanNest – Real Estate Portal",
    subtitle: "Modern Property Search Platform",
    description:
      "A comprehensive real estate portal featuring map-based property listings, dynamic filters, agent profiles, visit booking system, and real-time chat. Designed to streamline the property search experience for buyers and renters.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
    techStack: ["Next.js", "Google Maps API", "MongoDB", "React", "Node.js", "WebSocket"],
    liveUrl: "#",
    duration: "5 months",
    team: "Solo Project",
    role: "Full-Stack Developer & Real Estate Platform Specialist",
    overview:
      "UrbanNest revolutionizes property searching by combining interactive map-based browsing with powerful filtering capabilities and seamless communication tools. The platform provides an intuitive experience for finding the perfect property while connecting users directly with agents.",
    features: [
      "Map search (Google Maps mock)",
      "Instant filters",
      "Agent chat demo",
      "Book demo visits/calendar",
      "Responsive & modern UI",
      "Property comparison tool",
      "Saved searches and favorites",
      "Virtual tour integration",
    ],
    challenges: [
      {
        problem: "Map Performance with Large Datasets",
        solution:
          "Implemented clustering and lazy loading for map markers, ensuring smooth performance even with thousands of property listings.",
      },
      {
        problem: "Real-time Chat Implementation",
        solution:
          "Integrated WebSocket connections for instant messaging between users and agents, with message persistence and notification system.",
      },
      {
        problem: "Complex Search Filters",
        solution:
          "Developed an advanced filtering system with multiple criteria (price, location, amenities) while maintaining fast query performance through optimized MongoDB indexing.",
      },
    ],
    development: {
      planning:
        "Analyzed user behavior in property search and identified pain points in existing platforms. Designed user flows for efficient property discovery and agent communication.",
      design:
        "Created a modern, intuitive interface with emphasis on visual property browsing. Implemented responsive design for seamless mobile and desktop experiences.",
      backend:
        "Built RESTful APIs with Next.js, integrated Google Maps API for location services, and implemented MongoDB for efficient property data storage and retrieval.",
      frontend:
        "Developed interactive React components with map integration, dynamic filters, calendar booking system, and real-time chat functionality.",
      testing:
        "Performed comprehensive testing including map functionality, filter accuracy, booking system validation, and cross-platform compatibility.",
    },
  },
  "devportfolio-designer-showcase": {
    title: "DevPortfolio - Designer Showcase",
    subtitle: "Modern Portfolio Website",
    description:
      "A stunning portfolio website showcasing modern web development and design skills, featuring smooth animations, dark mode, responsive design, and an intuitive content management system.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxf00qe8f8qyk9qy5vyevb%2F1750767280_img_0.webp?st=2025-06-24T11%3A07%3A41Z&se=2025-06-30T12%3A07%3A41Z&sks=b&skt=2025-06-24T11%3A07%3A41Z&ske=2025-06-30T12%3A07%3A41Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=pxmu1TSNwbTaxMpqmG6ksKI2BeB0jmza6Ftw3OrJSVk%3D&az=oaivgprodscus",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Sanity CMS", "Vercel"],
    liveUrl: "#",
    duration: "2 months",
    team: "Solo Project",
    role: "Frontend Developer & UI/UX Designer",
    overview:
      "DevPortfolio represents the perfect blend of aesthetic design and technical excellence. This project showcases advanced frontend development skills while providing a platform for creative professionals to present their work in the most compelling way possible.",
    features: [
      "Smooth page transitions and micro-interactions",
      "Responsive design optimized for all devices",
      "Dark/light mode with system preference detection",
      "Dynamic content management with Sanity CMS",
      "SEO optimization and performance tuning",
      "Contact form with email integration",
      "Progressive Web App (PWA) capabilities",
    ],
    challenges: [
      {
        problem: "Animation Performance",
        solution:
          "Optimized Framer Motion animations using transform properties and proper animation triggers to maintain 60fps performance across all devices.",
      },
      {
        problem: "Content Management Flexibility",
        solution:
          "Integrated Sanity CMS with custom schemas that allow for flexible content updates while maintaining design consistency and type safety.",
      },
      {
        problem: "Cross-Browser Compatibility",
        solution:
          "Implemented progressive enhancement strategies and thorough testing across browsers to ensure consistent experience for all users.",
      },
    ],
    development: {
      planning:
        "Analyzed top portfolio websites and design trends to create a unique visual identity that stands out while maintaining professional credibility.",
      design:
        "Developed a sophisticated design system with careful attention to typography, spacing, and color theory to create visual hierarchy and emotional impact.",
      backend:
        "Integrated headless CMS for content management and implemented API routes for contact form handling and dynamic content delivery.",
      frontend:
        "Built with modern React patterns and Next.js features, implementing advanced animations and interactions that enhance user engagement without sacrificing performance.",
      testing:
        "Conducted extensive testing including performance audits, accessibility testing, and cross-device compatibility to ensure professional quality.",
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
