"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/simple-toast"

// Contact form component to avoid duplication
const ContactForm = ({ onSubmit, isSubmitting, formData, handleChange, services }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          placeholder="Your Company Ltd."
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <select
          id="service"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Tell us about your project or inquiry..."
        rows={5}
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        required
      />
    </div>

    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="animate-spin mr-2">◌</span>
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  </form>
)

// Contact information component to avoid duplication
const ContactInfo = () => (
  <div className="space-y-6 mb-8">
    <div className="flex items-start">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
        <MapPin className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
        <p className="text-gray-600">45 Cannon Street, London, EC4M 5SH, United Kingdom</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
        <Phone className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">Phone Number</h3>
        <p className="text-gray-600">+44 (0) 20 7946 0582</p>
        <p className="text-gray-600">Support: +44 (0) 20 7946 0583</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
        <Mail className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">Email Address</h3>
        <p className="text-gray-600">info@nexustechnologies.org</p>
        <p className="text-gray-600">support@nexustechnologies.org</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
        <Clock className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-600">Technical Support: 24/7/365</p>
      </div>
    </div>
  </div>
)

export default function ContactPage() {
  const { addToast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      addToast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        type: "success",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      })
    }, 1500)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "cloud-services", label: "Cloud Services" },
    { value: "database-solutions", label: "Database Solutions" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "it-consulting", label: "IT Consulting" },
    { value: "other", label: "Other" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Ready to start your next project? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Banner */}
      <section className="py-8 bg-purple-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Live Chat Available</h3>
                <p className="text-sm text-gray-600">Get instant support from our team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">24/7 Phone Support</h3>
                <p className="text-sm text-gray-600">Call us anytime for urgent issues</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Fast Response Time</h3>
                <p className="text-sm text-gray-600">We respond to all inquiries within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <ContactForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                formData={formData}
                handleChange={handleChange}
                services={services}
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Our team is here to help. Reach out to us using any of the methods
                below.
              </p>

              <ContactInfo />

              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1775372028395!2d-0.09470492341297924!3d51.51177097181493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b553a3ed6c7%3A0x3b0e3e1c9a0a2b6c!2s45%20Cannon%20St%2C%20London%20EC4M%205SH%2C%20UK!5e0!3m2!1sen!2sus!4v1686665432345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NEXUS TECHNOLOGIES Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Support Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support option that works best for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Live Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Get instant assistance from our technical team through our live chat system. Available 24/7 for all
                  support plan customers.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">Start Chat</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Call our dedicated support line for immediate assistance with technical issues or to speak with a
                  support engineer.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">+44 (0) 20 7946 0583</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Send us an email with your questions or issues. Our team will respond within 2 business hours during
                  normal working hours.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Button className="bg-green-600 hover:bg-green-700">support@nexustechnologies.org</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and support options
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">What are your support hours?</h3>
              <p className="text-gray-600">
                Our standard business hours are Monday through Friday, 9:00 AM to 6:00 PM GMT. However, our technical
                support team is available 24/7/365 for clients on Premium and Enterprise support plans.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">
                For general inquiries, we aim to respond within 2 business hours during normal working hours. For
                technical support, response times vary based on your support plan and issue severity, ranging from 15
                minutes to 4 hours.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Do you offer on-site support?</h3>
              <p className="text-gray-600">
                Yes, we offer on-site support for clients in the London area and surrounding regions. On-site support is
                included in our Enterprise plan and available as an add-on for other support plans.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">How do I escalate a critical issue?</h3>
              <p className="text-gray-600">
                For critical issues, you can call our emergency support line at +44 (0) 20 7946 0584, which is available
                24/7. You can also mark your ticket as "Critical" in our support portal or inform the support agent
                during a live chat session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your IT needs and discover how our solutions can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              View Support Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
