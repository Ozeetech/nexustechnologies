import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatProviderSimple from "@/components/chat-provider-simple"
import { ToastProvider } from "@/components/simple-toast"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "NEXUS TECHNOLOGIES - Enterprise IT Solutions & 24/7 Support",
  description:
    "We provide comprehensive technology solutions and round-the-clock support to keep your business running smoothly. From cloud infrastructure to cybersecurity.",
  keywords: "IT support, cloud services, cybersecurity, software development, managed IT services, technical support",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nexustechnologies.org/",
    title: "NEXUS TECHNOLOGIES - Enterprise IT Solutions & 24/7 Support",
    description: "Comprehensive technology solutions and 24/7 support for businesses across the UK.",
    siteName: "NEXUS TECHNOLOGIES",
    images: [
      {
        url: "https://nexustechnologies.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXUS TECHNOLOGIES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS TECHNOLOGIES - Enterprise IT Solutions & 24/7 Support",
    description: "Comprehensive technology solutions and 24/7 support for businesses across the UK.",
    images: ["https://nexustechnologies.org/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatProviderSimple />
        </ToastProvider>
      </body>
    </html>
  )
}
