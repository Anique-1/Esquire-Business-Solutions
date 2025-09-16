import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Esquire Business Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-balance">
              Your Trusted Financial Partners in Bahrain
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A firm of Chartered Accountants, Management Consultants and Business Advisors providing specialist
              end-to-end services across the Gulf region.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-balance">
                Excellence in Financial Services Since 2009
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Esquire Business Solutions is a firm of Chartered Accountants, Management Consultants and Business
                  Advisors. Based in Bahrain, we provide specialist end-to-end services right through feasibility
                  studies, company incorporation, accounting & book keeping, audit & assurance, and business advisory in
                  terms of all global and local compliances.
                </p>

                <p>
                  Our experienced team brings together expertise oriented. We explore focus their efforts to understand
                  exactly how your business and its financial systems have been performing, and identify areas that
                  performance could be improved, we recommend and implement solutions that are tailored to your
                  operations.
                </p>

                <p>
                  As Business Advisors, we aim to enhance clients' enterprise performance and ensure business growth in
                  the next level and systems such growth, maximizing shareholder and stakeholder value opportunities.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </div>

            {/* Right content - Image */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <img
                    src="/modern-office-environment-with-business-profession.jpg"
                    alt="Business professionals at work"
                    className="w-full h-96 object-cover"
                  />

                  {/* Overlay badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-secondary text-secondary-foreground">Trusted by 500+ Businesses</Badge>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="font-semibold mb-2">Professional Excellence</h3>
                      <p className="text-sm opacity-90">
                        Delivering comprehensive business solutions across the Gulf region
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="text-center p-6 border-0 bg-muted/30">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Committed to delivering the highest quality of professional services
              </p>
            </Card>
            <Card className="text-center p-6 border-0 bg-muted/30">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Client Focus</h3>
              <p className="text-sm text-muted-foreground">
                Your success is our priority, with personalized solutions for every client
              </p>
            </Card>
            <Card className="text-center p-6 border-0 bg-muted/30">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Maintaining the highest ethical standards in all our business dealings
              </p>
            </Card>
            <Card className="text-center p-6 border-0 bg-muted/30">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                Serving clients across Bahrain and the broader Gulf region
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Esquire Business Solutions can help your business achieve its financial goals
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
      
  )
  
}
