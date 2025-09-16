import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, Building, TrendingUp, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Auditing Services",
    description:
      "Comprehensive audit and assurance services, compliance and assurance for your business, financial statements.",
    features: ["Financial Audits", "Compliance Reviews", "Risk Assessment"],
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Professional bookkeeping and financial accounting solutions tailored to your needs.",
    features: ["Bookkeeping", "Financial Reporting", "Tax Preparation"],
  },
  {
    icon: Building,
    title: "VAT Services Bahrain",
    description: "Expert VAT consultation and compliance services specifically for Bahrain businesses.",
    features: ["VAT Registration", "VAT Returns", "Compliance Support"],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic business consulting to help your business financial and long-term growth.",
    features: ["Strategic Planning", "Financial Analysis", "Growth Consulting"],
  },
  {
    icon: Briefcase,
    title: "Company Formation",
    description: "Complete company setup and registration services with ongoing support.",
    features: ["Business Registration", "Legal Compliance", "Ongoing Support"],
  },
  {
    icon: Users,
    title: "Management Consulting",
    description: "Expert guidance on business management, financial planning and organizational support.",
    features: ["Process Optimization", "Team Development", "Performance Management"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mb-4">Our Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Esquire Business Solutions is a firm of Chartered Accountants, Management Consultants and Business Advisors,
            providing specialist services across Bahrain and the Gulf region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
