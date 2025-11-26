"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProjectScroll() {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Featured Project <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              SaaS Marketing Platform
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            High-converting SaaS landing page with advanced analytics integration.
            Built to showcase product features and drive trial signups with a 15% conversion rate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Next.js
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              TypeScript
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Tailwind
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Framer Motion
            </span>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="https://example.com" target="_blank">
              <Button variant="default" size="lg">
                Live Demo
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="lg">
                View Code
              </Button>
            </Link>
          </div>
        </>
      }
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="SaaS Marketing Platform Dashboard"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-center"
          draggable={false}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        {/* Stats overlay */}
        <div className="absolute bottom-6 left-6 rounded-lg bg-background/80 p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-green-600">↑ 15%</div>
          <div className="text-sm text-muted-foreground">Conversion Rate</div>
        </div>
      </div>
    </ContainerScroll>
  );
}