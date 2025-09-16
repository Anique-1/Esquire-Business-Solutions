import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              About Esquire Business Solutions
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-balance">
              Your Trusted Financial Partners in Bahrain
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Esquire Business Solutions is a firm of Chartered Accountants, Management Consultants and Business
                Advisors. Based in Bahrain, we provide specialist end-to-end services right through feasibility studies,
                company incorporation, accounting & book keeping, audit & assurance, and business advisory in terms of
                all global and local compliances.
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
      </div>
    </section>
  )
}
