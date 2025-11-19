"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-2">
              <Logo size="medium" showText={true} className="sm:mr-4" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                Login
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Support</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link href="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full justify-center text-gray-700 hover:text-purple-600 mb-2">
                  Login
                </Button>
              </Link>
              <Link href="/contact" onClick={toggleMenu}>
                <Button className="w-full justify-center bg-purple-600 hover:bg-purple-700 text-white">
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
