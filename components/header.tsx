"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden sm:flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+973 3948 0949 | +973 3948 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@esquirebusinesssolutions.com</span>
              </div>
            </div>
            <div className="text-xs">
              Leading provider of professional auditing, accounting, and VAT services in Bahrain
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="sm:hidden">
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+973 3948 0949 | +973 3948 0950</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-3 w-3" />
                <span className="truncate">info@esquirebusinesssolutions.com</span>
              </div>
              <div className="text-center text-xs opacity-90">
                Professional auditing, accounting & VAT services
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/favicon_1.png"
                alt="Esquire Business Solutions"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                OUR SERVICES
              </Link>
              <Link
                href="/our-team"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                OUR TEAM
              </Link>
              <Link
                href="/why-choose-us"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                WHY CHOOSE US
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={handleNavClick}
              >
                CONTACT US
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  HOME
                </Link>
                <Link
                  href="/about-us"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/services"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  OUR SERVICES
                </Link>
                <Link
                  href="/our-team"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  OUR TEAM
                </Link>
                <Link
                  href="/why-choose-us"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  WHY CHOOSE US
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                  onClick={handleNavClick}
                >
                  CONTACT US
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}