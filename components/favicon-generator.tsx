"use client"

import { useEffect } from "react"

export default function FaviconGenerator() {
  useEffect(() => {
    // Generate a simple favicon using canvas
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext("2d")

    if (ctx) {
      // Black background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, 32, 32)

      // Orange "R" for Rajesh
      ctx.fillStyle = "#f97316"
      ctx.font = "bold 20px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("R", 16, 16)

      // Convert to favicon
      const link = (document.querySelector("link[rel*='icon']") as HTMLLinkElement) || document.createElement("link")
      link.type = "image/x-icon"
      link.rel = "shortcut icon"
      link.href = canvas.toDataURL("image/x-icon")
      document.getElementsByTagName("head")[0].appendChild(link)
    }
  }, [])

  return null
}
