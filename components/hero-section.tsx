import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-montserrat text-balance">
                Welcome to <span className="text-secondary">Esquire Business Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Your trusted partner for professional auditing, accounting, and VAT services in Bahrain.
              </p>
              <p className="text-lg text-muted-foreground">
                Any accountant can learn to understand your books, but do they understand your business? At Esquire
                Business Solutions, we go beyond numbers to deliver strategic insights that drive growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/services" passHref legacyBehavior>
                <Button as="a" size="lg" className="bg-primary hover:bg-primary/90">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button as="a" size="lg" variant="outline">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Certified Auditors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">VAT Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Business Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Business Advisory</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats and image */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <img
                src="/professional-business-meeting-with-diverse-team-di.jpg"
                alt="Professional business consultation"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
