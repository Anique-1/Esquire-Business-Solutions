import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Globe } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+973 3948 0949", "+973 3948 0950"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@esquirebusinesssolutions.com"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Manama, Kingdom of Bahrain", "Gulf Region Coverage"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      action: "Schedule Meeting",
    },
  ]

  const services = [
    "External Auditing",
    "Internal Auditing",
    "VAT Services",
    "Corporate Tax Consultation",
    "Financial Advisory",
    "Business Consulting",
    "Accounting Services",
    "Risk Management",
    "Other (Please specify)",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6 text-balance">
            Get in Touch with Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to take your business to the next level? Contact our expert team for professional auditing,
            accounting, and business advisory services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="text-xs bg-transparent">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                        <Input placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                        <Input placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input type="email" placeholder="Enter your email address" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <Input placeholder="Enter your company name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service of Interest</label>
                      <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea placeholder="Tell us about your requirements or questions..." rows={5} required />
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" className="mt-1" required />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I agree to be contacted by Esquire Business Solutions regarding my inquiry and consent to the
                        processing of my personal data in accordance with the privacy policy.
                      </label>
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Why Contact Us?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Free Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get expert advice tailored to your business needs at no cost.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 p-2 rounded-full mt-1">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Local Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep understanding of Bahrain and GCC business environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-foreground">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Need urgent assistance with compliance deadlines or financial matters?
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Emergency Line
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Available during business hours for urgent matters
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday - Thursday</span>
                      <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Don't wait - contact us today and let's discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97339480949"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="mailto:info@esquirebusinesssolutions.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
