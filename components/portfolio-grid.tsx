"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardBody, CardFooter, Button, Chip } from "@nextui-org/react"
import { ExternalLink, Eye, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function PortfolioGrid() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const projects = [
    {
      id: 1,
      slug: "taskflow-project-management",
      title: "TaskFlow",
      subtitle: "Project Management Revolution",
      description: "MERN stack application with real-time collaboration and divine UX",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygwsqvvewm8ts303j23c9z9%2F1750766515_img_0.webp?st=2025-06-24T10%3A13%3A47Z&se=2025-06-30T11%3A13%3A47Z&sks=b&skt=2025-06-24T10%3A13%3A47Z&ske=2025-06-30T11%3A13%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DtMTqwmGvNot3tqz4cinw0irtcOIYDGYTwZ7uf%2FypSY%3D&az=oaivgprodscus?",
      featured: true,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 2,
      slug: "ecoshop-sustainable-ecommerce",
      title: "EcoShop",
      subtitle: "Sustainable E-commerce",
      description: "Next.js platform promoting eco-friendly products with divine design",
      techStack: ["Next.js", "TypeScript", "Stripe"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygww4h4etdaszvgwax6rgt8%2F1750766644_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Iw5yXVs27pX7sG7NqRnAjAEoOcCFDS%2Bs3SJmPo%2FyOCo%3D&az=oaivgprodscus",
      featured: false,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      slug: "fittracker-health-fitness-app",
      title: "FitTracker",
      subtitle: "Health & Fitness Revolution",
      description: "Flutter app with divine UX for tracking workouts and nutrition",
      techStack: ["Flutter", "Dart", "Firebase"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxcrqjerp93sx8etv3czzk%2F1750767186_img_0.webp?st=2025-06-24T11%3A08%3A15Z&se=2025-06-30T12%3A08%3A15Z&sks=b&skt=2025-06-24T11%3A08%3A15Z&ske=2025-06-30T12%3A08%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nRc8o2MX3hIBFqKYJb5jX6D3trXo7Gqi7V71pREfw8o%3D&az=oaivgprodscus",
      featured: true,
      gradient: "from-pink-600 to-purple-500",
    },
    {
      id: 4,
      slug: "studybuddy-learning-companion",
      title: "StudyBuddy",
      subtitle: "Learning Companion",
      description: "Android app with divine material design for students",
      techStack: ["Kotlin", "Android", "Material"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygyf350edfaajc2jy4yavk5%2F1750768423_img_0.webp?st=2025-06-24T11%3A09%3A16Z&se=2025-06-30T12%3A09%3A16Z&sks=b&skt=2025-06-24T11%3A09%3A16Z&ske=2025-06-30T12%3A09%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v8R7bY71gJ2H%2FbLZhFEmi4xVeERDUkzkg2JfjN1DTsU%3D&az=oaivgprodscus",
      featured: false,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      id: 5,
      slug: "financeflow-expense-tracker",
      title: "FinanceFlow",
      subtitle: "Divine Finance Tracker",
      description: "Beautiful expense tracking with animated charts and insights",
      techStack: ["React", "Chart.js", "Node.js"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxepn6fv0awcha0vzb3dcx%2F1750767317_img_0.webp?st=2025-06-24T11%3A07%3A42Z&se=2025-06-30T12%3A07%3A42Z&sks=b&skt=2025-06-24T11%3A07%3A42Z&ske=2025-06-30T12%3A07%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=TClcNbO%2FdJH%2BiaBxO%2B7PoPVTiw6H5lYA01JKLPr3D1o%3D&az=oaivgprodscus",
      featured: false,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 6,
      slug: "devportfolio-designer-showcase",
      title: "DevPortfolio",
      subtitle: "Divine Design Showcase",
      description: "Stunning portfolio with divine animations and modern design",
      techStack: ["Next.js", "Framer Motion", "Tailwind"],
      image:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jygxf00qe8f8qyk9qy5vyevb%2F1750767280_img_0.webp?st=2025-06-24T11%3A07%3A41Z&se=2025-06-30T12%3A07%3A41Z&sks=b&skt=2025-06-24T11%3A07%3A41Z&ske=2025-06-30T12%3A07%3A41Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=pxmu1TSNwbTaxMpqmG6ksKI2BeB0jmza6Ftw3OrJSVk%3D&az=oaivgprodscus",
      featured: true,
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div style={{ y, opacity }} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
              DIVINE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Witness the convergence of art and technology through projects crafted with divine inspiration
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Link href={`/projects/${project.slug}`}>
                <Card
                  className="h-full cursor-pointer group border-0 shadow-2xl"
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(236, 72, 153, 0.1)",
                  }}
                >
                  <CardBody className="p-0 relative overflow-hidden">
                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                        className="absolute top-4 left-4 z-10"
                      >
                        <Chip className={`bg-gradient-to-r ${project.gradient} text-white font-bold`} size="sm">
                          DIVINE
                        </Chip>
                      </motion.div>
                    )}

                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="flex gap-4">
                          <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                            <Button isIconOnly className={`bg-gradient-to-r ${project.gradient} text-white`} size="lg">
                              <Eye className="w-5 h-5" />
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.2, rotate: -360 }} transition={{ duration: 0.3 }}>
                            <Button
                              isIconOnly
                              variant="bordered"
                              className="border-white/50 text-white backdrop-blur-md"
                              size="lg"
                            >
                              <Code className="w-5 h-5" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardBody>

                  <CardFooter className="flex-col items-start p-6">
                    <motion.h3
                      className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-purple-300 mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.8 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Chip
                            size="sm"
                            variant="flat"
                            className="bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {tech}
                          </Chip>
                        </motion.div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="/projects"
              size="lg"
              className="px-12 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600"
              endContent={<ExternalLink className="w-5 h-5" />}
            >
              Explore Divine Universe
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
