import { CheckCircle } from "lucide-react"
import Image from "next/image"
import HeartIcon from "@/components/heart-icon"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexus Technologies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to solving complex IT challenges and delivering
            exceptional results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Nexus Technologies began with a simple mission: to provide businesses with reliable,
                innovative IT solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small team of three dedicated IT professionals has grown into a comprehensive
                technology partner serving clients across the United Kingdom and Europe.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be trusted by over 200 businesses, from startups to enterprises, helping them
                navigate the ever-evolving technology landscape with confidence.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-gray-700 mr-2">Built with passion in London</span>
                <HeartIcon filled={true} className="text-red-500" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
              <div className="relative z-10 w-full h-[300px] md:h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Nexus Technologies team meeting"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from the solutions we design to the support we provide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and creative thinking to solve complex problems and drive progress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency, honesty, and ethical standards in all our business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the experienced professionals guiding our company's vision and success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                alt="James Wilson"
                width={300}
                height={300}
                className="rounded-lg shadow-md mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">James Wilson</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                alt="Emily Chen"
                width={300}
                height={300}
                className="rounded-lg shadow-md mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">Emily Chen</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
                alt="David Thompson"
                width={300}
                height={300}
                className="rounded-lg shadow-md mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">David Thompson</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/team"
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              View our full team
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-purple-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-purple-200">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-200">IT Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Partner with Nexus Technologies for innovative solutions tailored to your business needs.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get in Touch
            </a>
            <div className="ml-4 flex items-center">
              <HeartIcon filled={true} className="text-red-500 mr-2" />
              <span className="text-gray-600">Trusted by businesses across the UK</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
