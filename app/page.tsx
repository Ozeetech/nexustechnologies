import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Shield,
  Users,
  Zap,
  Star,
  Quote,
  Clock,
  Cpu,
  Server,
  Headphones,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/logo"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CTO, HealthTech Solutions",
      content:
        "NEXUS TECHNOLOGIES transformed our entire infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving our system performance dramatically. Their 24/7 support team is exceptional.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "David Chen",
      role: "CEO, FinEdge",
      content:
        "Working with NEXUS was a game-changer for our fintech startup. They built our secure platform from scratch and helped us scale to over 100K users in just 8 months. Their cybersecurity expertise was invaluable for our compliance needs.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Maria Rodriguez",
      role: "Director of IT, GlobalRetail Inc.",
      content:
        "The cybersecurity solutions provided by NEXUS gave us peace of mind. Their 24/7 monitoring and proactive approach prevented multiple potential threats. When we had a critical issue at 2 AM, their team was responsive and resolved it within an hour.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white">
        {/* Full-width hero image with no opacity reduction */}
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Enterprise IT Solutions"
            fill
            priority={true}
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80" />

          {/* Content positioned over the image */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="mb-6 flex justify-center">
                  <Logo variant="white" size="large" showText={true} />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Enterprise IT Solutions & 24/7 Support
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                  From cloud infrastructure to cybersecurity, we provide comprehensive technology solutions and
                  round-the-clock support to keep your business running smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 w-full sm:w-auto"
                    >
                      Get IT Support Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 w-full sm:w-auto"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-300">500+</div>
                    <div className="text-xs md:text-sm text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">99.9%</div>
                    <div className="text-xs md:text-sm text-gray-300">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-300">15+</div>
                    <div className="text-xs md:text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-300">24/7/365</div>
                    <div className="text-xs md:text-sm text-gray-300">Technical Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Enterprise-Grade IT Support</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical support solutions for businesses of all sizes
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=400&q=80"
                alt="NEXUS TECHNOLOGIES Support Team"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">24/7 Help Desk</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Round-the-clock technical support with 15-minute response time guarantee for critical issues. Access
                  support via phone, email, or live chat.
                </CardDescription>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-purple-600">Average response time: 8 minutes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Remote Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Proactive 24/7 monitoring of your servers, networks, and critical systems to identify and resolve
                  issues before they impact your business.
                </CardDescription>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-blue-600">99.9% uptime guarantee</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">On-Site Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Rapid dispatch of certified technicians to your location for hardware issues, network problems, or
                  infrastructure upgrades that require physical presence.
                </CardDescription>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-green-600">4-hour on-site response for critical issues</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Assigned technical account manager and support team who understand your business and IT environment
                  for personalized assistance.
                </CardDescription>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-amber-600">Personalized support plans available</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View All Support Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Code className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Custom Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Enterprise web applications, mobile solutions, and API integrations built with modern frameworks and
                  technologies for optimal performance.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Database className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Database Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  High-performance database architecture, optimization, and management for SQL and NoSQL systems with
                  comprehensive backup and recovery solutions.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Globe className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Cloud Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  End-to-end cloud migration, infrastructure management, and optimization across AWS, Azure, and Google
                  Cloud with 24/7 monitoring and support.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <Shield className="h-8 w-8 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Comprehensive security solutions including penetration testing, vulnerability assessments, 24/7
                  monitoring, and compliance management for regulated industries.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors">
                  <Zap className="h-8 w-8 text-yellow-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Strategic consulting and implementation to modernize your business processes, legacy systems, and
                  technology stack for improved efficiency and innovation.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                  <Users className="h-8 w-8 text-indigo-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Managed IT Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Comprehensive IT management including 24/7 monitoring, maintenance, security, and support for your
                  entire technology infrastructure with predictable monthly costs.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <Link href="/services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support Plans</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right level of support for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4 border-b">
                <CardTitle className="text-xl font-bold text-slate-900">Standard Support</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£399</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Business hours support (8AM-6PM)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>4-hour response time</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Email and phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Monthly system health reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Up to 20 support tickets monthly</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="w-full block">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl transition-all duration-300 relative bg-gradient-to-b from-purple-50 to-white">
              <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4 border-b pt-8">
                <CardTitle className="text-xl font-bold text-slate-900">Premium Support</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>24/7 support coverage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>1-hour response time guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Email, phone, and live chat support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Weekly system health reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited support tickets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Dedicated support engineer</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Monthly strategy consultation</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="w-full block">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4 border-b">
                <CardTitle className="text-xl font-bold text-slate-900">Enterprise Support</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>24/7/365 priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>15-minute response time for critical issues</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>All communication channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>On-site emergency support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Quarterly business reviews</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Custom SLA options</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="w-full block">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative mb-8 lg:mb-0">
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500&q=80"
                  alt="NEXUS TECHNOLOGIES Technical Expert"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-purple-600">15+ years experience</div>
                <div className="text-xs text-gray-500">Certified IT professionals</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose NEXUS TECHNOLOGIES?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that not only work but drive
                real results for your organization.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Certified Expertise</h3>
                    <p className="text-gray-600">
                      Our team holds over 200+ technical certifications across AWS, Microsoft, Cisco, CompTIA, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Guaranteed Response Times</h3>
                    <p className="text-gray-600">
                      We offer SLA-backed response times as fast as 15 minutes for critical issues, with 24/7/365
                      coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Proactive Monitoring</h3>
                    <p className="text-gray-600">
                      Our advanced monitoring systems detect and resolve 93% of issues before they impact your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Industry Experience</h3>
                    <p className="text-gray-600">
                      Specialized expertise in healthcare, finance, manufacturing, and professional services industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate IT Support?</h3>
              <p className="mb-6 opacity-90">
                Our technical support team is available 24/7 to help resolve your IT issues quickly and efficiently.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-purple-200" />
                    <span className="font-medium">+44 (0) 20 7946 0582</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-200" />
                    <span className="font-medium">support@nexustechnologies.org</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Link href="/contact">
                    <Button className="w-full md:w-auto bg-white text-purple-600 hover:bg-gray-100">
                      Contact Support Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and discover how our technical expertise can help solve your
            most challenging IT problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 w-full sm:w-auto">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 w-full sm:w-auto"
              >
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
