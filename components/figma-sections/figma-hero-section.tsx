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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-purple-50/30 to-orange-50/30 dark:from-background dark:via-purple-950/20 dark:to-orange-950/20">
      <div className="animation-delay-8 animate-fadeIn mt-16 sm:mt-20 flex flex-col items-center justify-center px-3 sm:px-4 text-center md:mt-32">
        <div className="z-10 mb-6 mt-8 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-2 text-xs sm:text-sm leading-6 text-purple-700 dark:text-purple-300 shadow-sm">
            <Figma className="h-4 w-4 sm:h-5 sm:w-5 p-0.5 mr-2" /> 
            <span className="font-medium">Professional Figma to Next.js Conversion</span>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 mt-4 md:mt-6 max-w-5xl">
          <div className="px-1 sm:px-2">
            <div className="relative mx-auto border border-purple-200 dark:border-purple-800 rounded-2xl p-4 sm:p-6 md:p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg">
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="block sm:inline">Turn Your{' '}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                  Figma Design
                </span>{' '}
                <span className="block sm:inline">into a{' '}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 dark:from-orange-400 dark:via-purple-400 dark:to-orange-400 bg-[length:200%_auto] animate-gradient-shift">
                  Blazing Fast
                </span>{' '}
                <span className="block sm:inline">Next.js Website</span>
                <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  — Delivered in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                    5 Days
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg mx-auto mb-8 sm:mb-12 mt-4 sm:mt-6 max-w-2xl sm:max-w-3xl px-4 sm:px-6 text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Get pixel-perfect, production-grade frontend with clean React code, SEO structure, and 100+ Lighthouse scores.
          </p>

          {/* Trust Indicators - Optimized for Mobile */}
          <div className="mb-8 sm:mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-3 sm:px-4 py-2 shadow-sm border border-green-200 dark:border-green-800">
              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
              <span className="text-green-700 dark:text-green-300">Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-3 sm:px-4 py-2 shadow-sm border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
              <span className="text-blue-700 dark:text-blue-300">SEO Optimized</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-3 sm:px-4 py-2 shadow-sm border border-purple-200 dark:border-purple-800">
              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Next.js + Tailwind</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {/* Primary CTA - WhatsApp - Optimized for Mobile */}
            <a
              href="https://wa.me/919822379976?text=Hi Rajesh, I'm interested in your Figma to Next.js conversion service. Please send me details about the $349 package."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Start on WhatsApp</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>

            {/* Secondary CTA - Email - Mobile Optimized */}
            <a
              href="mailto:rajeshshrirao696@gmail.com?subject=Figma to Next.js Project Inquiry&body=Hi Rajesh, I'd like to discuss my Figma design conversion project. Please send me details about pricing and timeline."
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-full border-2 border-purple-500/50 hover:border-purple-500 text-purple-700 dark:text-purple-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <span>Get Quote via Email</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Social Proof - Mobile Optimized */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">5.0 rating from 40+ clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span className="font-medium">3+ years experience</span>
            </div>
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