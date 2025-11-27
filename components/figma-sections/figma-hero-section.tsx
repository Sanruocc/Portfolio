'use client';

import { useEffect } from "react";
import { ArrowRight, Figma, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { renderCanvas } from "@/components/ui/canvas";

export function FigmaHeroSection() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-32">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6 text-primary/60">
            <Figma className="h-5 p-1" /> Figma to Next.js Conversion Service
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6 max-w-6xl">
          <div className="px-2">
            <div className="relative mx-auto border border-purple-500/20 p-8 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-16">
              <h1 className="text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Turn Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                  Figma Design
                </span>{' '}
                into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 dark:from-orange-400 dark:via-purple-400 dark:to-orange-400 bg-[length:200%_auto] animate-gradient-shift">
                  Blazing Fast
                </span>{' '}
                Next.js Website — Delivered in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                  5 Days
                </span>
              </h1>
            </div>
          </div>

          <p className="md:text-lg mx-auto mb-16 mt-6 max-w-3xl px-6 text-muted-foreground sm:px-6 md:max-w-4xl">
            Get pixel-perfect, production-grade frontend with clean React code, SEO structure, and 100+ Lighthouse scores.
          </p>

          {/* Trust Indicators */}
          <div className="mb-12 flex animate-pulse-once flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-foreground">Mobile responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-foreground">SEO-ready HTML</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-foreground">Tailwind + Next.js stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-foreground">Hosted on Vercel</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.me/919822379976?text=Hi Rajesh, I'm interested in your Figma to Next.js conversion service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_auto] hover:animate-gradient-shift text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  <span>Start on WhatsApp →</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </a>

            {/* Secondary CTA - Email */}
            <a
              href="mailto:rajeshshrirao696@gmail.com?subject=Figma to Next.js Project Inquiry&body=Hi Rajesh, I'd like to discuss my Figma design conversion project."
            >
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 text-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:bg-card"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Not ready to chat? Email me your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/5 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
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