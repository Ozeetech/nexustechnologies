import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export default function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-purple-600 mb-4" />
        <p className="text-gray-600 mb-6 italic">"{content}"</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={avatar || "/placeholder.svg?height=48&width=48"}
              alt={name}
              fill
              className="rounded-full object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <div className="font-semibold text-slate-900">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
