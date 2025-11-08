"use client"

import { motion } from "framer-motion"
import { BentoCard3D } from "@/components/ui/bento-card-3d"
import { CursorSpotlight } from "@/components/ui/cursor-spotlight"
import { 
  Code2, 
  Zap, 
  Sparkles, 
  Rocket, 
  Database, 
  Layers,
  ArrowRight,
  TrendingUp
} from "lucide-react"

export function HeroBentoGrid() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CursorSpotlight />
      
      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[180px]">
        {/* Large Featured Card - Top Left */}
        <div className="md:col-span-5 md:row-span-2" style={{ animation: "float 6s ease-in-out infinite" }}>
          <BentoCard3D delay={0.1} className="h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-xs font-medium">Full-Stack Developer</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Building Digital
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Crafting scalable web apps with modern tech
              </p>
            </div>
          </BentoCard3D>
        </div>

        {/* Tech Stack Card - Top Right */}
        <div className="md:col-span-3 md:row-span-1" style={{ animation: "float-delayed 5s ease-in-out infinite" }}>
          <BentoCard3D delay={0.2} className="h-full">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">Next.js</div>
                <div className="text-white/60 text-xs">React Framework</div>
              </div>
            </div>
          </BentoCard3D>
        </div>

        {/* Speed/Performance Card - Top Right */}
        <div className="md:col-span-4 md:row-span-1" style={{ animation: "float-slow 7s ease-in-out infinite" }}>
          <BentoCard3D delay={0.3} className="h-full">
            <div className="flex items-center justify-between h-full">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          </BentoCard3D>
        </div>

        {/* Database Card - Middle Right */}
        <div className="md:col-span-3 md:row-span-1" style={{ animation: "float 5.5s ease-in-out infinite" }}>
          <BentoCard3D delay={0.4} className="h-full">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-white font-semibold">Postgres</div>
                <div className="text-white/60 text-xs">SQL Database</div>
              </div>
            </div>
          </BentoCard3D>
        </div>

        {/* Projects Count - Middle Right */}
        <div className="md:col-span-4 md:row-span-1" style={{ animation: "float-delayed 6.5s ease-in-out infinite" }}>
          <BentoCard3D delay={0.5} className="h-full">
            <div className="flex items-center justify-between h-full">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-white/70 text-sm">Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Layers className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </BentoCard3D>
        </div>

        {/* TypeScript Card - Bottom Left */}
        <div className="md:col-span-2 md:row-span-1" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
          <BentoCard3D delay={0.6} className="h-full">
            <div className="flex flex-col justify-center h-full text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">TS</div>
              <div className="text-white/60 text-xs">TypeScript</div>
            </div>
          </BentoCard3D>
        </div>

        {/* Experience Card - Bottom Left */}
        <div className="md:col-span-3 md:row-span-1" style={{ animation: "float 7s ease-in-out infinite" }}>
          <BentoCard3D delay={0.7} className="h-full">
            <div className="flex items-center justify-between h-full">
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">5+</div>
                <div className="text-white/70 text-sm">Years Exp</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20">
                <TrendingUp className="w-8 h-8 text-pink-400" />
              </div>
            </div>
          </BentoCard3D>
        </div>

        {/* CTA Card - Bottom Right - Spans full width on mobile */}
        <div className="md:col-span-7 md:row-span-1 col-span-1" style={{ animation: "float-delayed 5.5s ease-in-out infinite" }}>
          <BentoCard3D delay={0.8} className="h-full cursor-pointer group" onClick={scrollToProjects}>
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-1">View My Work</div>
                  <div className="text-white/70 text-sm">Explore 3 flagship projects</div>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </BentoCard3D>
        </div>
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
