"use client"

import Image from "next/image"
import { useState } from "react"

interface LogoProps {
  variant?: "default" | "white"
  size?: "small" | "medium" | "large"
  showText?: boolean
  className?: string
}

export default function Logo({ variant = "default", size = "medium", showText = true, className = "" }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  const logoSrc = "/logo.png"
  const logoAlt = "NEXUS TECHNOLOGIES"

  // Define sizes based on the size prop
  const dimensions = {
    small: { width: 32, height: 32, textClass: "text-sm md:text-base" },
    medium: { width: 40, height: 40, textClass: "text-base md:text-lg" },
    large: { width: 48, height: 48, textClass: "text-lg md:text-xl" },
  }

  const { width, height, textClass } = dimensions[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex-shrink-0">
        {!imageError ? (
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt={logoAlt}
            width={width}
            height={height}
            className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className={`flex items-center justify-center rounded-md ${
              variant === "white" ? "bg-white text-purple-600" : "bg-purple-600 text-white"
            }`}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <span className="font-bold text-lg">N</span>
          </div>
        )}
      </div>
      {showText && (
        <span
          className={`font-bold ${textClass} ml-2 ${
            variant === "white" ? "text-white" : "text-gray-900"
          } tracking-tight whitespace-nowrap`}
        >
          NEXUS TECHNOLOGIES
        </span>
      )}
    </div>
  )
}
