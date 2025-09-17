import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Ravi.B Soni",
      position: "COO Director",
      qualifications: ["CPA", "ACCA", "MBA"],
      experience: "15+ years",
      specialization: "Corporate Auditing & Financial Advisory",
      description:
        "Leading expert in corporate governance and financial risk management with extensive experience in GCC markets.",
      image: "/ravi image.jpeg",
    },
    {
      name: "Muhammad Ahmad",
      position: "SSenior associate",
      qualifications: ["CTA", "ACCA", "MSc Taxation"],
      experience: "12+ years",
      specialization: "VAT & Corporate Tax Planning",
      description:
        "Specialized in Bahrain VAT regulations and international tax compliance with proven track record in tax optimization.",
      image: "/ahmad image.jpeg",
    },
    {
      name: "Nikhil George Eapen",
      position: "Senior Manager",
      qualifications: ["CMA", "ACCA", "BSc Accounting"],
      experience: "10+ years",
      specialization: "Management Accounting & Business Analysis",
      description: "Expert in financial planning, budgeting, and performance analysis for SMEs and large corporations.",
      image: "/ceo-Photoroom.png",
    },
    {
      name: "Syeda Bismah",
      position: "Associate",
      qualifications: ["ACCA", "CIA", "BSc Finance"],
      experience: "8+ years",
      specialization: "Internal Audit & Risk Assessment",
      description: "Focused on internal controls, risk management, and compliance auditing across various industries.",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Users className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6 text-balance">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our team of certified professionals brings decades of combined experience in auditing, accounting, and
            business advisory services to help your business thrive.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
              Professional Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each team member brings unique expertise and unwavering commitment to delivering exceptional results for
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.position}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.qualifications.map((qual, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {qual}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="font-medium">Experience:</span>
                      <span className="text-muted-foreground">{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      <span className="font-medium">Specialization:</span>
                      <span className="text-muted-foreground">{member.specialization}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-balance">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Contact us today to discuss how our experienced professionals can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="tel:+973 3380 5353"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
