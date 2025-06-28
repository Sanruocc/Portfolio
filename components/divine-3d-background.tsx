"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Divine3DBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="w-full h-full"
          style={{
            background: `
              linear-gradient(90deg, transparent 49%, rgba(236, 72, 153, 0.5) 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, rgba(139, 92, 246, 0.5) 50%, transparent 51%)
            `,
            backgroundSize: "60px 60px",
            transform: `perspective(1000px) rotateX(${60 + mousePosition.y * 10}deg) rotateY(${mousePosition.x * 5}deg)`,
            transformOrigin: "center center",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Divine Orbs */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0
                ? "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)"
                : i % 3 === 1
                  ? "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)"
                  : "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)",
            filter: "blur(30px)",
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* 3D Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/6"
        style={{
          width: "120px",
          height: "120px",
          background: "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "blur(2px)",
          transform: `perspective(500px) rotateX(${30 + mousePosition.y * 20}deg) rotateY(${mousePosition.x * 30}deg)`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/6"
        style={{
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))",
          borderRadius: "50%",
          filter: "blur(1px)",
          transform: `perspective(500px) rotateX(${-30 + mousePosition.y * 15}deg) rotateZ(${mousePosition.x * 25}deg)`,
        }}
        animate={{
          rotate: [360, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(90deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          filter: "blur(1px)",
          transform: `perspective(500px) rotateY(${mousePosition.x * 40}deg) rotateX(${mousePosition.y * 20}deg)`,
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Divine Light Rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: "2px",
              height: "100%",
              left: `${(i + 1) * 16.66}%`,
              background: `linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.3), transparent)`,
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: "center center",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#ec4899" : "#8b5cf6",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#ec4899" : "#8b5cf6"}`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}
