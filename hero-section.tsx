import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-orange-500 text-sm font-medium">Available for new opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          Building the
          <br />
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Future of</span>
          <br />
          <span className="text-orange-500">Digital</span>
        </h1>

        {/* Intro Text */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Full-stack developer and digital architect crafting exceptional web experiences that drive innovation and
          deliver measurable results for forward-thinking companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 group"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 group"
          >
            <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center">
          <button className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300">
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            <span className="text-lg">hello@yourname.com</span>
            <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
