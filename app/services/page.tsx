import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Shield,
  Users,
  Zap,
  Cloud,
  Lock,
  BarChart,
  Headphones,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReliableImage from "@/components/reliable-image"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Enterprise web applications, mobile solutions, and API integrations built with modern frameworks and technologies for optimal performance.",
      features: [
        "Full-stack web application development",
        "Mobile app development (iOS & Android)",
        "API development and integration",
        "Legacy system modernization",
        "Custom software solutions",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "High-performance database architecture, optimization, and management for SQL and NoSQL systems with comprehensive backup and recovery solutions.",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration and integration",
        "Backup and disaster recovery",
        "24/7 database monitoring",
      ],
    },
    {
      icon: Globe,
      title: "Cloud Services",
      description:
        "End-to-end cloud migration, infrastructure management, and optimization across AWS, Azure, and Google Cloud with 24/7 monitoring and support.",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code (IaC)",
        "Multi-cloud management",
        "Cost optimization",
        "Scalability planning",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions including penetration testing, vulnerability assessments, 24/7 monitoring, and compliance management for regulated industries.",
      features: [
        "Security assessments and audits",
        "Penetration testing",
        "Compliance management (GDPR, HIPAA, PCI)",
        "Security monitoring and incident response",
        "Employee security training",
      ],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Strategic consulting and implementation to modernize your business processes, legacy systems, and technology stack for improved efficiency and innovation.",
      features: [
        "Digital strategy development",
        "Process automation",
        "Legacy system modernization",
        "Change management",
        "Technology roadmap planning",
      ],
    },
    {
      icon: Users,
      title: "Managed IT Services",
      description:
        "Comprehensive IT management including 24/7 monitoring, maintenance, security, and support for your entire technology infrastructure with predictable monthly costs.",
      features: [
        "24/7 system monitoring",
        "Proactive maintenance",
        "Help desk support",
        "Network management",
        "Vendor management",
      ],
    },
  ]

  const supportPlans = [
    {
      name: "Standard",
      price: "£399",
      description: "Essential support for small businesses",
      features: [
        "Business hours support (8AM-6PM)",
        "4-hour response time",
        "Email and phone support",
        "Monthly system health reports",
        "Up to 20 support tickets monthly",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "£999",
      description: "Comprehensive support for growing businesses",
      features: [
        "24/7 support coverage",
        "1-hour response time guarantee",
        "Email, phone, and live chat support",
        "Weekly system health reports",
        "Unlimited support tickets",
        "Dedicated support engineer",
        "Monthly strategy consultation",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored support for large organizations",
      features: [
        "24/7/365 priority support",
        "15-minute response time for critical issues",
        "All communication channels",
        "Dedicated support team",
        "On-site emergency support",
        "Quarterly business reviews",
        "Custom SLA options",
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom development to managed IT services, we provide end-to-end technology solutions for businesses
              of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right level of support for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "relative bg-gradient-to-b from-purple-50 to-white" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center pb-4 border-b ${plan.popular ? "pt-8" : ""}`}>
                  <CardTitle className="text-xl font-bold text-slate-900">{plan.name} Support</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="w-full block">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Service Details</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our core services in more detail</p>
          </div>

          <Tabs defaultValue="development" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="development">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Code className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Custom Development</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our expert development team builds custom applications tailored to your specific business needs,
                      using the latest technologies and best practices.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Web Applications</h4>
                          <p className="text-sm text-gray-600">
                            Responsive, scalable web applications built with modern frameworks like React, Angular, or
                            Vue.js.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Mobile Development</h4>
                          <p className="text-sm text-gray-600">
                            Native and cross-platform mobile applications for iOS and Android using React Native,
                            Flutter, or Swift/Kotlin.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">API Development</h4>
                          <p className="text-sm text-gray-600">
                            Secure, well-documented APIs that enable seamless integration between systems and
                            applications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Discuss Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Custom Development"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="cloud">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Cloud className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Cloud Services</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Comprehensive cloud solutions to help you migrate, optimize, and manage your infrastructure in
                      AWS, Azure, or Google Cloud.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Cloud Migration</h4>
                          <p className="text-sm text-gray-600">
                            Seamless migration of your applications and data to the cloud with minimal disruption to
                            your business.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Infrastructure as Code</h4>
                          <p className="text-sm text-gray-600">
                            Automated infrastructure provisioning and management using Terraform, CloudFormation, or
                            Pulumi.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Cost Optimization</h4>
                          <p className="text-sm text-gray-600">
                            Continuous monitoring and optimization of your cloud resources to reduce costs while
                            maintaining performance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Explore Cloud Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Cloud Services"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Lock className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Cybersecurity</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Protect your business from cyber threats with our comprehensive security solutions and 24/7
                      monitoring.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Security Assessments</h4>
                          <p className="text-sm text-gray-600">
                            Thorough evaluation of your security posture to identify vulnerabilities and recommend
                            improvements.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Penetration Testing</h4>
                          <p className="text-sm text-gray-600">
                            Simulated cyber attacks to identify and address security weaknesses before they can be
                            exploited.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Compliance Management</h4>
                          <p className="text-sm text-gray-600">
                            Ensure your systems meet industry regulations such as GDPR, HIPAA, PCI DSS, and more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Secure Your Business
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Cybersecurity"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="data">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Database className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Database Solutions</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Optimize your data management with our database design, migration, and performance tuning
                      services.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Database Design</h4>
                          <p className="text-sm text-gray-600">
                            Efficient database architecture designed for your specific business needs and scalability
                            requirements.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Performance Optimization</h4>
                          <p className="text-sm text-gray-600">
                            Identify and resolve database performance issues to improve application responsiveness and
                            user experience.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Data Migration</h4>
                          <p className="text-sm text-gray-600">
                            Seamless migration of your data between different database systems with minimal downtime.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Optimize Your Data
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Database Solutions"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="consulting">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <BarChart className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Digital Transformation</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Strategic consulting to help you modernize your business processes and technology stack for
                      improved efficiency and innovation.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Digital Strategy</h4>
                          <p className="text-sm text-gray-600">
                            Develop a comprehensive digital roadmap aligned with your business goals and market
                            opportunities.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Process Automation</h4>
                          <p className="text-sm text-gray-600">
                            Identify and automate manual processes to improve efficiency, reduce errors, and free up
                            resources.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Legacy Modernization</h4>
                          <p className="text-sm text-gray-600">
                            Transform outdated systems into modern, scalable solutions without disrupting your business.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Transform Your Business
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Digital Transformation"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="support">
              <Card className="border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Headphones className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-2xl font-bold text-slate-900">Managed IT Services</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Comprehensive IT management and support to keep your technology running smoothly and securely.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">24/7 Monitoring</h4>
                          <p className="text-sm text-gray-600">
                            Continuous monitoring of your systems to detect and resolve issues before they impact your
                            business.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Help Desk Support</h4>
                          <p className="text-sm text-gray-600">
                            Responsive technical support for your team via phone, email, or live chat with guaranteed
                            response times.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Proactive Maintenance</h4>
                          <p className="text-sm text-gray-600">
                            Regular updates, patches, and optimizations to keep your systems secure and performing at
                            their best.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Get Managed IT Support
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <ReliableImage
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Managed IT Services"
                      fill
                      className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have specialized expertise across a wide range of industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Healthcare", icon: "🏥" },
              { name: "Finance", icon: "💰" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Retail", icon: "🛒" },
              { name: "Education", icon: "🎓" },
              { name: "Professional Services", icon: "👔" },
              { name: "Technology", icon: "💻" },
              { name: "Government", icon: "🏛️" },
              { name: "Non-Profit", icon: "🤝" },
              { name: "Logistics", icon: "🚚" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Energy", icon: "⚡" },
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <p className="font-medium text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your technology needs and discover how our services can help your business
            thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
