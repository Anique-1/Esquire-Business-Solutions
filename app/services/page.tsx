import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Calculator, Building, TrendingUp, Users, Briefcase, CheckCircle } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Auditing Services",
    description:
      "Comprehensive audit and assurance services, compliance and assurance for your business, financial statements.",
    features: ["Financial Audits", "Compliance Reviews", "Risk Assessment", "Internal Audits", "Statutory Audits"],
    details:
      "Our audit services ensure your financial statements are accurate and compliant with local and international standards.",
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Professional bookkeeping and financial accounting solutions tailored to your needs.",
    features: ["Bookkeeping", "Financial Reporting", "Tax Preparation", "Payroll Management", "Financial Analysis"],
    details: "Complete accounting solutions from basic bookkeeping to complex financial reporting and analysis.",
  },
  {
    icon: Building,
    title: "VAT Services Bahrain",
    description: "Expert VAT consultation and compliance services specifically for Bahrain businesses.",
    features: ["VAT Registration", "VAT Returns", "Compliance Support", "VAT Planning", "Advisory Services"],
    details: "Navigate Bahrain's VAT requirements with confidence through our specialized VAT services.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic business consulting to help your business financial and long-term growth.",
    features: [
      "Strategic Planning",
      "Financial Analysis",
      "Growth Consulting",
      "Performance Improvement",
      "Risk Management",
    ],
    details: "Strategic guidance to optimize your business operations and drive sustainable growth.",
  },
  {
    icon: Briefcase,
    title: "Company Formation",
    description: "Complete company setup and registration services with ongoing support.",
    features: [
      "Business Registration",
      "Legal Compliance",
      "Ongoing Support",
      "License Applications",
      "Corporate Structuring",
    ],
    details: "End-to-end company formation services to get your business up and running efficiently.",
  },
  {
    icon: Users,
    title: "Management Consulting",
    description: "Expert guidance on business management, financial planning and organizational support.",
    features: [
      "Process Optimization",
      "Team Development",
      "Performance Management",
      "Change Management",
      "Operational Excellence",
    ],
    details: "Transform your business operations with our comprehensive management consulting services.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Professional Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-balance">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Esquire Business Solutions provides specialist services across Bahrain and the Gulf region, from company
              formation to ongoing business advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-background h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <p className="text-sm text-muted-foreground">{service.details}</p>

                  <div className="space-y-2 flex-1">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Our Services */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-4">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over 15 years of experience and 500+ satisfied clients, we deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="font-medium mb-2">Years of Experience</div>
                <div className="text-sm text-muted-foreground">Proven track record in financial services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="font-medium mb-2">Satisfied Clients</div>
                <div className="text-sm text-muted-foreground">Trusted by businesses across the Gulf</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="font-medium mb-2">Compliance Rate</div>
                <div className="text-sm text-muted-foreground">Full regulatory compliance guaranteed</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our professional services can benefit your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
