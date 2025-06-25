import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online store with seamless checkout and inventory management",
      techStack: "React • Node.js • PostgreSQL",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative workspace with real-time updates and team analytics",
      techStack: "Next.js • TypeScript • Prisma",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Smart content creation tool powered by machine learning algorithms",
      techStack: "Python • OpenAI • FastAPI",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and alerts",
      techStack: "Vue.js • Chart.js • API",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Comprehensive dashboard for tracking social media performance",
      techStack: "React • D3.js • MongoDB",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description: "Automated trading system with advanced risk management features",
      techStack: "Python • WebSocket • Redis",
      image: "/placeholder.svg?height=240&width=400",
      github: "#",
      live: "#",
      featured: true,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web development and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden"
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
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-black font-medium">Featured</Badge>
                  </div>
                )}

                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Link
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-500 hover:text-black transition-all duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-500 hover:text-black transition-all duration-200"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-xl font-semibold group-hover:text-orange-500 transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs font-medium"
                  >
                    {project.techStack}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>

              {/* Bottom Border Accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
