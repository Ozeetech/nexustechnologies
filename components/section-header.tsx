interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, subtitle, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
