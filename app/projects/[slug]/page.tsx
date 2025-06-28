"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ec4899",
}

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
  "fittracker-health-fitness-app": {
    title: "FitTracker - Health & Fitness App",
    subtitle: "Cross-Platform Flutter Application",
    description:
      "A comprehensive health and fitness tracking application built with Flutter, featuring workout logging, nutrition tracking, progress visualization, and social features to motivate users on their fitness journey.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
    techStack: ["Flutter", "Dart", "Firebase", "Provider", "Charts", "Camera", "Health Connect"],
    liveUrl: "#",
    duration: "5 months",
    team: "Solo Project",
    role: "Mobile App Developer & UI/UX Designer",
    overview:
      "FitTracker is designed to be a comprehensive fitness companion that helps users achieve their health goals through detailed tracking, insightful analytics, and motivational features. The app combines workout logging, nutrition tracking, and social elements to create an engaging fitness experience.",
    features: [
      "Comprehensive workout logging with exercise library",
      "Nutrition tracking with barcode scanning",
      "Progress visualization with interactive charts",
      "Social features for sharing achievements",
      "Custom workout plan creation",
      "Integration with health platforms and wearables",
      "Offline functionality for uninterrupted tracking",
    ],
    challenges: [
      {
        problem: "Cross-Platform Consistency",
        solution:
          "Leveraged Flutter's widget system to create consistent UI/UX across iOS and Android while respecting platform-specific design guidelines.",
      },
      {
        problem: "Data Synchronization",
        solution:
          "Implemented Firebase Firestore with offline persistence to ensure data is always available and synchronized across devices.",
      },
      {
        problem: "Performance with Large Datasets",
        solution:
          "Optimized data queries with pagination and implemented efficient caching strategies for smooth performance with extensive workout history.",
      },
    ],
    development: {
      planning:
        "Analyzed popular fitness apps to identify gaps in the market and conducted user interviews to understand pain points in fitness tracking.",
      design:
        "Created an energetic and motivational design language with vibrant colors and clear data visualization. Focused on making complex data easily digestible.",
      backend:
        "Utilized Firebase services including Firestore for data storage, Authentication for user management, and Cloud Functions for server-side logic.",
      frontend:
        "Built responsive Flutter widgets with smooth animations and intuitive navigation. Implemented complex chart visualizations for progress tracking.",
      testing:
        "Conducted extensive testing on multiple devices and platforms, including performance testing with large datasets and offline functionality testing.",
    },
  },
  "studybuddy-learning-companion": {
    title: "StudyBuddy - Learning Companion",
    subtitle: "Native Android Application",
    description:
      "An intelligent study companion app for students, featuring flashcards, study timers, note-taking, and offline synchronization. Built with modern Android development practices using Kotlin and Material Design.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
    techStack: ["Kotlin", "Android SDK", "Room Database", "Material Design", "WorkManager", "Coroutines"],
    liveUrl: "#",
    duration: "3 months",
    team: "Solo Project",
    role: "Android Developer & UI/UX Designer",
    overview:
      "StudyBuddy addresses the challenges students face in organizing their study materials and maintaining consistent study habits. The app provides a comprehensive suite of study tools while maintaining simplicity and ease of use.",
    features: [
      "Interactive flashcard system with spaced repetition",
      "Pomodoro timer with customizable intervals",
      "Rich text note-taking with organization",
      "Study session tracking and analytics",
      "Offline-first architecture for reliability",
      "Dark mode support for comfortable studying",
      "Widget support for quick access to timers",
    ],
    challenges: [
      {
        problem: "Offline Data Management",
        solution:
          "Implemented Room database with proper migration strategies and background synchronization using WorkManager for seamless offline experience.",
      },
      {
        problem: "Memory Optimization",
        solution:
          "Utilized Android's lifecycle-aware components and implemented proper memory management techniques to prevent memory leaks and ensure smooth performance.",
      },
      {
        problem: "User Engagement",
        solution:
          "Incorporated gamification elements and study streak tracking to motivate consistent study habits and long-term app usage.",
      },
    ],
    development: {
      planning:
        "Conducted surveys with students to understand their study habits and pain points. Analyzed existing study apps to identify opportunities for improvement.",
      design:
        "Followed Material Design guidelines while creating a calming, distraction-free interface that promotes focus and productivity.",
      backend:
        "Built with Room database for local storage and implemented background services for study reminders and data synchronization.",
      frontend:
        "Created intuitive Android UI with modern components, smooth animations, and accessibility features for inclusive design.",
      testing:
        "Performed comprehensive testing including unit tests, UI tests, and user acceptance testing across various Android devices and versions.",
    },
  },
  "financeflow-expense-tracker": {
    title: "FinanceFlow - Expense Tracker",
    subtitle: "Full-Stack Financial Management App",
    description:
      "A beautiful and intuitive expense tracking application that helps users manage their finances with animated charts, budget planning, spending insights, and financial goal tracking.",
    image:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    duration: "4 months",
    team: "Solo Project",
    role: "Full-Stack Developer & Data Visualization Specialist",
    overview:
      "FinanceFlow transforms the often tedious task of expense tracking into an engaging and insightful experience. The application provides users with powerful tools to understand their spending patterns, set realistic budgets, and achieve their financial goals.",
    features: [
      "Intuitive expense entry with category auto-suggestion",
      "Interactive charts and data visualizations",
      "Budget creation and monitoring with alerts",
      "Financial goal setting and progress tracking",
      "Recurring transaction management",
      "Export functionality for tax preparation",
      "Multi-currency support for international users",
    ],
    challenges: [
      {
        problem: "Data Visualization Performance",
        solution:
          "Optimized Chart.js rendering with data aggregation and lazy loading to handle large datasets while maintaining smooth animations.",
      },
      {
        problem: "Financial Data Security",
        solution:
          "Implemented robust security measures including data encryption, secure authentication, and regular security audits to protect sensitive financial information.",
      },
      {
        problem: "Complex Financial Calculations",
        solution:
          "Developed accurate algorithms for budget calculations, trend analysis, and financial projections while handling edge cases and currency conversions.",
      },
    ],
    development: {
      planning:
        "Researched personal finance management challenges and analyzed user behavior patterns to design features that encourage consistent financial tracking.",
      design:
        "Created a clean, professional interface with intuitive data visualization that makes complex financial information easily understandable at a glance.",
      backend:
        "Built secure APIs with Express.js and MongoDB, implementing proper data validation and financial calculation logic with high precision.",
      frontend:
        "Developed responsive React components with beautiful animations and interactive charts that make financial data engaging and actionable.",
      testing:
        "Conducted thorough testing including financial calculation accuracy, security testing, and cross-browser compatibility to ensure reliability.",
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

              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                <Link href={project.liveUrl}>
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
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
      </main>
    </div>
  )
}
