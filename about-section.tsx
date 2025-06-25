import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Palette, GraduationCap, User, Calendar } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { name: "MERN Stack", icon: Code, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { name: "Next.js", icon: Code, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "Flutter", icon: Smartphone, color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    { name: "Android", icon: Smartphone, color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { name: "UX/UI Design", icon: Palette, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  ]

  const highlights = [
    { icon: User, label: "Developer", value: "Rajesh Shrirao" },
    { icon: Calendar, label: "Age", value: "21 Years" },
    { icon: GraduationCap, label: "Education", value: "BCA Graduate" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-orange-500 text-sm font-medium">About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-orange-500">Rajesh</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="transition-all duration-300 hover:text-white">
                A passionate 21-year-old developer and BCA graduate specializing in full-stack development with the{" "}
                <span className="text-orange-500 font-medium">MERN stack</span> and modern frameworks like
                <span className="text-blue-400 font-medium"> Next.js</span>.
              </p>

              <p className="transition-all duration-300 hover:text-white">
                I create seamless mobile experiences with <span className="text-cyan-400 font-medium">Flutter</span> and
                native <span className="text-green-400 font-medium">Android development</span>, while bringing designs
                to life through <span className="text-purple-400 font-medium">intuitive UX/UI</span> with smooth
                animations.
              </p>

              <p className="transition-all duration-300 hover:text-white">
                My goal is to bridge the gap between functionality and aesthetics, creating digital experiences that are
                both powerful and delightful to use.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className={`${skill.color} px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default`}
                >
                  <skill.icon className="w-4 h-4 mr-2" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Profile Highlights */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-orange-500/30 transition-all duration-500 hover:bg-gray-900/70 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                        <p className="text-white text-lg font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Summary Card */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 hover:border-orange-500/30 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Code className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developer</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Crafting end-to-end solutions from responsive web applications to mobile experiences, with a keen
                      eye for design and user experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      </div>
    </section>
  )
}
