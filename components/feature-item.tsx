import { CheckCircle } from "lucide-react"

interface FeatureItemProps {
  title: string
  description: string
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
