import { Heart } from "lucide-react"
import ReliableImage from "./reliable-image"

interface HeartIconProps {
  className?: string
  filled?: boolean
  size?: number
  useImage?: boolean
}

export default function HeartIcon({ className = "", filled = true, size = 16, useImage = false }: HeartIconProps) {
  if (useImage) {
    return (
      <ReliableImage
        src="/icons/heart.png"
        alt="Heart"
        width={size}
        height={size}
        className={className}
        fallbackSrc="https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=200&auto=format&fit=crop"
        fallbackElement={<Heart className={`${className} ${filled ? "fill-red-500" : ""}`} size={size} />}
      />
    )
  }

  return <Heart className={`${className} ${filled ? "fill-red-500" : ""}`} size={size} />
}
