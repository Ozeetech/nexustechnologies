"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ReliableImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  fallbackAlt?: string
}

export default function ReliableImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  fallbackAlt,
  ...props
}: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [imgAlt, setImgAlt] = useState(alt)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      if (fallbackAlt) setImgAlt(fallbackAlt)
      setHasError(true)
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={imgAlt}
      onError={handleError}
      loading={props.priority ? "eager" : "lazy"}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  )
}
