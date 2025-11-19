import ActionButton from "@/components/ui/action-button"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  bgClass?: string
}

export default function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  bgClass = "bg-gradient-to-r from-purple-600 to-blue-600",
}: CTASectionProps) {
  return (
    <section className={`py-16 ${bgClass} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ActionButton href={primaryButtonHref} color="white" size="lg">
            {primaryButtonText}
          </ActionButton>
          {secondaryButtonText && secondaryButtonHref && (
            <ActionButton href={secondaryButtonHref} variant="outline" color="white" size="lg">
              {secondaryButtonText}
            </ActionButton>
          )}
        </div>
      </div>
    </section>
  )
}
