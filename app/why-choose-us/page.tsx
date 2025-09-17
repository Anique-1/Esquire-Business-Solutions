import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award, TrendingUp, CheckCircle, Star, Globe, Phone, Mail } from "lucide-react"

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description:
        "Over 15 years of proven experience in auditing, accounting, and business advisory services in Bahrain and the GCC region.",
      highlights: ["Licensed professionals", "Regulatory compliance", "Industry expertise"],
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines. Our efficient processes ensure all deliverables are completed on time, every time.",
      highlights: ["On-time delivery", "Efficient processes", "Deadline commitment"],
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Every client receives dedicated attention with customized solutions tailored to their specific business needs and objectives.",
      highlights: ["Dedicated account manager", "Customized solutions", "Personal attention"],
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description:
        "Our team holds prestigious certifications including CPA, ACCA, CMA, and other internationally recognized qualifications.",
      highlights: ["Certified professionals", "Continuous education", "Best practices"],
    },
    {
      icon: TrendingUp,
      title: "Business Growth Focus",
      description:
        "We don't just manage your finances - we help you identify opportunities for growth and operational improvements.",
      highlights: ["Strategic insights", "Growth opportunities", "Performance optimization"],
    },
    {
      icon: Globe,
      title: "Local & International Standards",
      description:
        "Deep understanding of Bahrain regulations combined with international accounting and auditing standards expertise.",
      highlights: ["Local compliance", "International standards", "Cross-border expertise"],
    },
  ]

  const achievements = [
    { number: "200+", label: "Satisfied Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Compliance Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  const services = [
    "External Auditing",
    "Internal Auditing",
    "VAT Services",
    "Corporate Tax",
    "Financial Consulting",
    "Business Advisory",
    "Accounting Services",
    "Risk Management",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Star className="h-16 w-16 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6 text-balance">
            Why Choose Esquire Business Solutions?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover what sets us apart as Bahrain's leading provider of professional auditing, accounting, and business
            advisory services.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
              Excellence in Every Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what makes us the preferred choice for businesses across Bahrain and the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{reason.description}</p>
                  <div className="space-y-2">
                    {reason.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Comprehensive Service Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Full-spectrum financial and business services under one roof
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg border border-border hover:border-primary/30 transition-colors text-center"
              >
                <div className="text-sm font-medium text-foreground">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-2xl border border-border">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-secondary fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl text-foreground mb-6 italic text-balance">
              "Esquire Business Solutions has been instrumental in our company's growth. Their expertise in VAT
              compliance and financial advisory has saved us both time and money while ensuring we meet all regulatory
              requirements."
            </blockquote>
            <div className="text-muted-foreground">
              <div className="font-medium">Ahmed Al-Rashid</div>
              <div className="text-sm">CEO, Gulf Trading Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-balance">Experience the Esquire Difference</h2>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Join hundreds of satisfied clients who trust us with their financial and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Get Started Today
            </a>
            <a
              href="tel:+973 3380 5353"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call for Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
