import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
                          <Image
                            src="/esquire new logo 1-Photoroom.png"
                            alt="Esquire Business Solutions"
                            width={40}
                            height={40}
                            className="h-10 w-auto"
                          />
                         
            
            <p className="text-sm opacity-90">
              Leading provider of professional auditing, accounting, and VAT services in Bahrain. We help businesses
              achieve compliance and drive growth.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-secondary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Auditing Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  VAT Services Bahrain
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Company Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Office No 32(202), Salahuddin</p>
                  <p>Center, Road 402, Block 304</p>
                  <p>Kingdom of Bahrain</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>+973 3380 5353</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p>info.bh@esqbusiness.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Sun - Thu: 8:00 AM - 6:00 PM</p>
                  <p>Fri - Sat: Closed</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-medium mb-2">Stay Updated</h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs opacity-75 mt-2">
                Subscribe to get updates on VAT regulations and business insights.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>
            © 2025 Esquire Business Solutions. All rights reserved | Professional Auditing & VAT Services in Bahrain
          </p>
        </div>
      </div>
    </footer>
  )
}
