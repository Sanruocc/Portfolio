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
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
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
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">Premium</span> Web Experiences
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my creative playground! I'm{" "}
            <span className="text-ali font-bold">Rajesh Shrirao</span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I craft enchanting visuals for brands, and conjure design resources
            to empower others. From Pune to Mumbai — Specializing in SaaS-style websites that convert visitors into customers.
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

          <div className="flex justify-center gap-2">
            <Link href={"/#projects"}>
              <Button variant="default" size="lg">
                View My Work
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button variant="outline" size="lg">
                Book a Call
              </Button>
            </Link>
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