import type React from "react"
interface HeroSectionProps {
  title: string
  subtitle?: string
  bgClass?: string
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  subtitle,
  bgClass = "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
  children,
}: HeroSectionProps) {
  return (
    <section className={`${bgClass} text-white py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-gray-300">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
