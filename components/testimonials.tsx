import { Star } from "lucide-react"
import ReliableImage from "./reliable-image"
import HeartIcon from "./heart-icon"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  avatarUrl: string
}

function Testimonial({ quote, author, role, company, avatarUrl }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <ReliableImage
          src={avatarUrl}
          alt={author}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover mr-4"
          fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nexus Technologies transformed our IT infrastructure. Their team was professional, knowledgeable, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Fintech Solutions Ltd",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote:
        "The cybersecurity solutions provided by Nexus have given us peace of mind. Their ongoing support is exceptional.",
      author: "Michael Chen",
      role: "IT Director",
      company: "Global Retail Group",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote:
        "Working with Nexus on our cloud migration was seamless. They understood our business needs and delivered a tailored solution.",
      author: "Emma Wilson",
      role: "Operations Manager",
      company: "Healthcare Innovations",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our services.
          </p>
          <div className="flex justify-center items-center mt-4">
            <span className="text-gray-600 mr-2">Loved by businesses</span>
            <HeartIcon filled={true} className="text-red-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
