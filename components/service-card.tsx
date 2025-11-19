import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ActionButton from "@/components/ui/action-button"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  buttonText?: string
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/services",
  buttonText = "Learn More",
  className = "",
}: ServiceCardProps) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 ${className}`}
    >
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
          <Icon className="h-8 w-8 text-purple-600 group-hover:text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-center">{description}</CardDescription>
        <div className="mt-6 flex justify-center">
          <ActionButton href={href} variant="outline" color="purple">
            {buttonText}
          </ActionButton>
        </div>
      </CardContent>
    </Card>
  )
}
