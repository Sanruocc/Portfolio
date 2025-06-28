import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rajesh Shrirao - Divine Developer",
  description:
    "Divine portfolio of Rajesh Shrirao - Full-stack developer specializing in MERN stack, Next.js, Flutter, and divine UX/UI design",
  keywords: ["Rajesh Shrirao", "Full Stack Developer", "MERN Stack", "Next.js", "Flutter", "React", "Portfolio"],
  authors: [{ name: "Rajesh Shrirao" }],
  creator: "Rajesh Shrirao",
  openGraph: {
    title: "Rajesh Shrirao - Divine Developer",
    description: "Full-stack developer specializing in MERN stack, Next.js, Flutter, and divine UX/UI design",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Shrirao - Divine Developer",
    description: "Full-stack developer specializing in MERN stack, Next.js, Flutter, and divine UX/UI design",
  },
  robots: "index, follow",
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ec4899",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black overflow-x-hidden antialiased`}>
        <NextUIProvider>
          <div className="relative min-h-screen">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  )
}
