"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ec4899",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      slug: "taskflow-project-management",
      title: "TaskFlow - Project Management",
      description:
        "Full-stack MERN application with real-time collaboration, task tracking, and team analytics dashboard",
      techStack: "MongoDB • Express • React • Node.js",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
      featured: true,
    },
    {
      id: 2,
      slug: "ecoshop-sustainable-ecommerce",
      title: "EcoShop - Sustainable E-commerce",
      description:
        "Next.js e-commerce platform promoting eco-friendly products with advanced filtering and payment integration",
      techStack: "Next.js • TypeScript • Stripe • Prisma",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygww4h4etdaszvgwax6rgt8%2F1750766644_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Iw5yXVs27pX7sG7NqRnAjAEoOcCFDS%2Bs3SJmPo%2FyOCo%3D&az=oaivgprodscus",
      featured: false,
    },
    {
      id: 3,
      slug: "fittracker-health-fitness-app",
      title: "FitTracker - Health & Fitness App",
      description: "Cross-platform Flutter app for workout tracking, nutrition logging, and progress visualization",
      techStack: "Flutter • Dart • Firebase • Charts",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
      featured: true,
    },
    {
      id: 4,
      slug: "studybuddy-learning-companion",
      title: "StudyBuddy - Learning Companion",
      description: "Native Android app for students with flashcards, study timers, and offline note synchronization",
      techStack: "Kotlin • Room Database • Material Design",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
      featured: false,
    },
    {
      id: 5,
      slug: "financeflow-expense-tracker",
      title: "FinanceFlow - Expense Tracker",
      description: "Beautiful expense tracking web app with animated charts, budget planning, and spending insights",
      techStack: "React • Chart.js • Node.js • MongoDB",
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
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
      featured: true,
    },
  ]

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
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                All <span className="text-orange-500">Projects</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A comprehensive showcase of my development work across web, mobile, and design projects
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <Card className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden h-full cursor-pointer">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={240}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-orange-500 text-black font-medium">Featured</Badge>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-3 bg-orange-500 rounded-full text-black">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-white text-xl font-semibold group-hover:text-orange-500 transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs font-medium w-fit"
                        >
                          {project.techStack}
                        </Badge>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <CardDescription className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardContent>

                      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
