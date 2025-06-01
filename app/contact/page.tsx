"use client"

import type React from "react"

import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"

export default function ContactPage() {
  // Basic form submission handler (client-side for now)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add form submission logic here (e.g., send to an API endpoint)
    alert("Form submitted! (This is a demo)")
  }

  return (
    <>
      <PageHeader
        title="Get In Touch With Us"
        description="We're here to help. Reach out for inquiries, support, or to discuss your IT needs."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedDiv className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-foreground/80 text-lg">
                  We’d love to hear from you! Whether you have a question about our services, pricing, or anything else,
                  our team is ready to answer all your questions.
                </p>
              </div>
              <Card className="bg-muted/50 shadow-subtle">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Our Office</h4>
                      <p className="text-foreground/80">803/8, Ekatva Onyx, Wagle Estate Thane West-400604.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Phone</h4>
                      <a href="tel:+918268949507" className="text-foreground/80 hover:text-primary transition-colors">
                        +91 8268949507
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Email</h4>
                      <a
                        href="mailto:sanjayj@jayaaitsolution.com"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        sanjayj@jayaaitsolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Website</h4>
                      <a
                        href="https://www.jayaaitsolution.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        www.jayaaitsolution.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="h-12 text-base"
                      />
                      <Input
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="h-12 text-base"
                      />
                    </div>
                    <Input
                      required
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      aria-label="Subject"
                      className="h-12 text-base"
                    />
                    <Textarea
                      required
                      name="message"
                      placeholder="Your Message"
                      aria-label="Your Message"
                      rows={6}
                      className="text-base"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold"
                    >
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </>
  )
}
