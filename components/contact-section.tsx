"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Instagram, ExternalLink, ArrowRight, Calendar, MessageCircle } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function ContactSection() {
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rajeshshrirao696@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajesh,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details:%0A%0AProject%20Type:%20[Web%20App%20/%20Mobile%20App%20/%20AI%20Automation%20/%20Other]%0ABudget%20Range:%20[Your%20Budget]%0ATimeline:%20[Your%20Timeline]%0ADescription:%20[Brief%20description%20of%20your%20project]%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards,%0A[Your%20Name]",
      color: "hover:text-blue-400 hover:bg-blue-500/10",
      description: "Direct email for project inquiries",
      primary: true
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Sanruocc",
      color: "hover:text-gray-300 hover:bg-gray-500/10",
      description: "View my code and projects",
      primary: false
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/rajesh.shrirao/",
      color: "hover:text-pink-400 hover:bg-pink-500/10",
      description: "Follow my journey",
      primary: false
    },
    {
      name: "Fiverr",
      icon: ExternalLink,
      url: "https://www.fiverr.com/s/akjWLR",
      color: "hover:text-green-400 hover:bg-green-500/10",
      description: "Hire me on Fiverr",
      primary: false
    },
  ]

  const handleEmailClick = () => {
    window.open(contactMethods[0].url, '_blank')
  }

  const handleConsultationClick = () => {
    const subject = "Free Consultation Request"
    const body = `Hi Rajesh,

I'd like to schedule a free consultation to discuss my project requirements.

Preferred Time: [Your preferred time/date]
Project Type: [Brief description]
Budget Range: [Your budget range]
Timeline: [Your timeline]

Please let me know your availability.

Best regards,
[Your Name]`
    
    const mailtoUrl = `mailto:rajeshshrirao696@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')
  }

  return (
    <section id="contact" className="py-32 sm:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20 sm:mb-24 lg:mb-28">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-10">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-green-400 text-sm font-medium">Ready to Scale Your Business</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-10 purple-neon-text leading-tight">
            Turn Your Vision Into <span className="text-primary">Market Domination</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Join successful entrepreneurs who've chosen strategic technology partnerships over quick fixes. 
            Let's architect your competitive advantage and accelerate your growth trajectory.
          </p>
        </AnimatedSection>

        {/* Primary CTA Buttons */}
        <AnimatedSection delay={0.2} className="mb-20 sm:mb-24 lg:mb-28">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleEmailClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Mail className="mr-3 w-5 h-5" />
                Start Your Project
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleConsultationClick}
                variant="outline"
                size="lg"
                className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <Calendar className="mr-3 w-5 h-5" />
                Free Consultation
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Methods Grid */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-24">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-500 hover:bg-card/70 group h-full">
                  <CardContent className="p-6 text-center">
                    <motion.a
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${method.color} border border-border group-hover:border-primary/30`}>
                        <method.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Quick Contact Info */}
        <AnimatedSection delay={0.6}>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 purple-neon-subtle">
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground purple-neon-text">
                  Direct Contact
                </h3>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <motion.a
                    href="mailto:rajeshshrirao696@gmail.com"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>rajeshshrirao696@gmail.com</span>
                  </motion.a>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground">
                    Ready to transform your business? Let's discuss your project requirements and create something extraordinary together.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Availability Status */}
        <AnimatedSection delay={0.8} className="mt-16 sm:mt-20">
          <motion.div
            className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 rounded-2xl p-6 sm:p-8 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-green-400 font-semibold text-lg">Available for New Projects</span>
            </div>
            <p className="text-foreground font-medium text-lg mb-2">
              Currently accepting projects for Q1 2025
            </p>
            <p className="text-muted-foreground">
              Let's discuss your requirements and timeline to get started
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}