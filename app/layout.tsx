import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "../components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rajesh Shrirao - Full Stack Developer",
  description: "Portfolio of Rajesh Shrirao - Developer specializing in MERN stack, Next.js, Flutter, and UX/UI design",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
