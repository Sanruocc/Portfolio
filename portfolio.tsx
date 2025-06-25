import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "API Integration", "Chart.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site built with modern web technologies",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance tracking",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking interface with biometric authentication",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React Native", "Firebase", "Biometrics"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, Vue.js, TypeScript" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Responsive Design" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS/Android" },
    { name: "Full Stack", icon: Globe, description: "Node.js, Python, PostgreSQL, MongoDB" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-orange-500">{"<Dev />"}</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="#projects" className="hover:text-orange-500 transition-colors">
                Projects
              </Link>
              <Link href="#about" className="hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
            >
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-orange-500">Alex Johnson</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & UI/UX Designer crafting digital experiences that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 text-lg">
                View My Work
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Link
                      href={project.github}
                      className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <Github className="w-5 h-5 text-black" />
                    </Link>
                    <Link
                      href={project.live}
                      className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-orange-500/20 text-orange-500 border-orange-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-orange-500">Me</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                  bridge the gap between design and functionality. My journey in tech started with a curiosity about how
                  things work, and it has evolved into a career dedicated to building meaningful applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in writing clean, maintainable code and
                  creating user experiences that truly matter.
                </p>
                <p>
                  Currently, I'm focused on modern web technologies, cloud architecture, and helping businesses
                  transform their ideas into scalable digital products.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-white text-lg">{skill.name}</CardTitle>
                    <CardDescription className="text-gray-300">{skill.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <Link href="mailto:alex@example.com" className="group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Mail className="w-8 h-8 text-orange-500 group-hover:text-black" />
              </div>
            </Link>
            <Link href="https://github.com" className="group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Github className="w-8 h-8 text-orange-500 group-hover:text-black" />
              </div>
            </Link>
            <Link href="https://linkedin.com" className="group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-orange-500 group-hover:text-black" />
              </div>
            </Link>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">{"<Dev />"}</div>
              <p className="text-gray-400">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
