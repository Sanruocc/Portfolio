"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, Github, Linkedin, Code2, Zap, Award } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { icon: Code2, label: "Projects Delivered", value: "50+" },
    { icon: Zap, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Client Satisfaction", value: "100%" }
  ]

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "PostgreSQL", "MongoDB", "AWS", "Docker"
  ]

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative flex items-center">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <div className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 animate-ping"></div>
            </div>
            <span className="text-orange-400 text-sm font-semibold tracking-wide">
              {isHovered ? "Let's Build Something Amazing" : "Available for New Opportunities"}
            </span>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            <span className="block mb-2">Crafting Digital</span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Experiences
            </span>
            <span className="block mt-2 text-gray-400 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal">
              That Drive Results
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Full-stack developer specializing in building{" "}
            <span className="text-white font-semibold">scalable web applications</span>,{" "}
            <span className="text-white font-semibold">modern UX design</span>, and{" "}
            <span className="text-white font-semibold">cloud architecture</span>
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-black hover:border-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 group font-bold"
            >
              Let's Talk
              <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links & Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Download CV</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-gray-700 rounded-full flex justify-center p-2 hover:border-orange-500 transition-colors duration-300">
            <div className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
