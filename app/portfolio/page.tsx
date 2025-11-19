import { ExternalLink, Github, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReliableImage from "@/components/reliable-image"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
      category: "Web Application",
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      category: "Mobile Development",
      link: "#",
      github: "#",
    },
    {
      title: "Cloud Infrastructure Migration",
      description:
        "Complete cloud migration project for a Fortune 500 company, reducing costs by 40% and improving performance.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "Cloud Services",
      link: "#",
      github: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning capabilities for predictive business insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      category: "Data Analytics",
      link: "#",
      github: "#",
    },
    {
      title: "Cybersecurity Assessment Tool",
      description: "Automated security assessment platform for identifying vulnerabilities and compliance gaps.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      category: "Cybersecurity",
      link: "#",
      github: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Explore our successful projects and see how we've helped businesses transform through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Team Image */}
      <div className="container mx-auto px-4 -mt-10 mb-10 relative z-10">
        <ReliableImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80"
          alt="NEXUS TECHNOLOGIES project team"
          width={1200}
          height={400}
          className="rounded-lg shadow-xl mx-auto"
        />
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent work across various industries and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <ReliableImage
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-900">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Study Spotlight</h2>
              <p className="text-xl text-gray-600">Deep dive into one of our most successful transformations.</p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ReliableImage
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Case study"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-purple-100 text-purple-800">Case Study</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    FinTech Startup Scales to 1M+ Users
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How we helped a financial technology startup build a scalable platform that grew from 0 to over 1
                    million users in just 18 months, while maintaining 99.9% uptime and bank-level security.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-900">Performance Improvement</span>
                      <span className="text-green-600 font-bold">300%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-900">Cost Reduction</span>
                      <span className="text-green-600 font-bold">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-900">Time to Market</span>
                      <span className="text-green-600 font-bold">6 months</span>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "TypeScript",
              "AWS",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Stripe",
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-100 transition-colors">
                  <span className="text-2xl font-bold text-gray-600 group-hover:text-purple-600">{tech.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our proven expertise and cutting-edge
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
