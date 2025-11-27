"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Shapes, ArrowRight, Plus, MapPin, CheckCircle2 } from "lucide-react";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6 text-primary/60">
            <Shapes className="h-5 p-1" /> Full-Stack Developer & AI Automation Builder
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">Premium</span> Web Experiences for Modern Businesses
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available for new projects</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            I&apos;m <span className="text-ali font-bold">Rajesh Shrirao</span>, a full-stack developer and AI automation builder
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I design and build fast, elegant, and conversion-focused websites with a refined SaaS aesthetic. My work blends thoughtful UI, strong engineering, and practical business sense.
          </p>

          {/* Trust Indicators */}
          <div className="mb-8 flex animate-pulse-once flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground sm:mb-10 sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">21</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-purple-500 dark:text-purple-400 sm:h-4 sm:w-4" />
              <span className="">Pune, India</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400 sm:h-4 sm:w-4" />
              <span className="">Freelance + Agency Growth</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* Primary CTA - Let's Build Together */}
            <Link href={"#contact"}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-[length:200%_auto] hover:animate-gradient-shift text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Let&apos;s Build Together</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-orange-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </Button>
            </Link>

            {/* Secondary CTA - View My Work */}
            <Link href={"/#projects"}>
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 text-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:bg-card"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/5 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
          </div>

          {/* Quick Contact Alternative */}
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Or quick chat on</span>
            <a
              href="https://wa.me/919822379976?text=Hi Rajesh, I'm interested in working with you"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-300"
            >
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.684"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
}