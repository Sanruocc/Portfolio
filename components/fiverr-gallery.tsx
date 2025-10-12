"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "./animated-section"

export default function FiverrGallery() {
  const fiverrProjects = [
    {
      id: 1,
      title: "AI Chatbot for E-commerce Store",
      description: "Built intelligent customer service bot with 24/7 support capabilities",
      result: "Increased customer satisfaction by 85% and reduced response time to under 30 seconds",
      techStack: ["Next.js", "AI Agents", "OpenAI", "Stripe"],
      image: "/placeholder.jpg",
      fiverrUrl: "#",
    },
    {
      id: 2,
      title: "Flutter Food Delivery App",
      description: "Complete mobile app with real-time tracking and payment integration",
      result: "Delivered full-featured app with 4.8/5 rating and seamless user experience",
      techStack: ["Flutter", "Firebase", "Stripe", "Google Maps"],
      image: "/placeholder.jpg",
      fiverrUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Dashboard with AI Analytics",
      description: "Custom analytics platform with automated reporting and insights",
      result: "Helped client increase revenue by 40% through data-driven decision making",
      techStack: ["Next.js", "Supabase", "AI Analytics", "Charts"],
      image: "/placeholder.jpg",
      fiverrUrl: "#",
    },
    {
      id: 4,
      title: "Python Automation Workflow",
      description: "Automated business processes saving 20+ hours per week",
      result: "Streamlined operations with 95% accuracy and zero manual intervention",
      techStack: ["Python", "APIs", "Automation", "AI"],
      image: "/placeholder.jpg",
      fiverrUrl: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="fiverr" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge variant="featured" className="text-lg px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Top Rated Fiverr
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fiverr Highlights: <span className="text-primary">AI & App Projects for Clients Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering exceptional results for businesses across the globe with cutting-edge technology solutions
          </p>
        </AnimatedSection>

        {/* Fiverr Projects Grid */}
        <AnimatedSection delay={0.2}>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {fiverrProjects.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    {/* Top Rated Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="gold" className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        5.0
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-foreground text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Result */}
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                      <p className="text-sm text-foreground font-medium">
                        <span className="text-accent">Result:</span> {project.result}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="purple" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* See on Fiverr Button */}
                    <div className="pt-2">
                      <Button
                        variant="glow"
                        size="sm"
                        className="w-full group/btn"
                        asChild
                      >
                        <a href={project.fiverrUrl} target="_blank" rel="noopener noreferrer">
                          See on Fiverr
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>

                  {/* Bottom Border Accent */}
                  <div className="h-1 bg-gradient-purple-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  )
}