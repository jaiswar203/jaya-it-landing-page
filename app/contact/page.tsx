"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  Clock, 
  MessageSquare, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Building2,
  Calendar,
  Shield
} from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Expert IT Support & Consultation",
  description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation. Call +91 8268949507 or email us today.",
  keywords: [
    "contact JAYAA IT",
    "IT support contact",
    "cybersecurity consultation",
    "IT services inquiry",
    "technical support",
    "free IT consultation",
    "enterprise IT contact",
    "digital transformation consultation",
    "IT solutions contact",
    "technology consulting"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact JAYAA IT Solution - Expert IT Support & Consultation",
    description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation.",
    url: "https://www.jayaaitsolution.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact JAYAA IT Solution - Expert IT Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JAYAA IT Solution - Expert IT Support & Consultation",
    description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Enhanced form submission handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Add form submission logic here (e.g., send to an API endpoint)
    alert("Thank you for your message! We'll get back to you soon.")
    setIsSubmitting(false)
    
    // Reset form
    const form = event.target as HTMLFormElement
    form.reset()
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      value: "+91 8268949507",
      action: "tel:+918268949507",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      available: "24/7 Available",
      isPrimary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support", 
      description: "Send us your detailed requirements",
      value: "sanjayj@jayaaitsolution.com",
      action: "mailto:sanjayj@jayaaitsolution.com",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      available: "Response within 24hrs",
      isPrimary: true
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant support online",
      value: "Start Chat",
      action: "#",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
      available: "Mon-Fri 9AM-6PM",
      isPrimary: false
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      value: "Book Now",
      action: "#",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      available: "Free Consultation",
      isPrimary: false
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ]

  const whyChooseUs = [
    "Expert IT Professionals",
    "24/7 Technical Support", 
    "Proven Track Record",
    "Competitive Pricing",
    "Quick Response Time",
    "Customized Solutions"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
                <MessageSquare className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Let&apos;s Start Your
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Digital Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Ready to transform your business with cutting-edge IT solutions? Our expert team is here to help you every step of the way. Reach out today for a free consultation.
              </p>
              
              {/* Single Primary CTA in Hero */}
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <a href="tel:+918268949507">
                    Call Now: +91 8268949507 <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </AnimatedDiv>
          </div>

          {/* Quick Stats */}
          <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16" delay={0.2}>
            {[
              { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Support Available", color: "from-blue-500 to-cyan-500" },
              { icon: <Headphones className="h-6 w-6" />, value: "<2hrs", label: "Response Time", color: "from-green-500 to-emerald-500" },
              { icon: <CheckCircle2 className="h-6 w-6" />, value: "500+", label: "Projects Delivered", color: "from-purple-500 to-violet-500" },
              { icon: <Shield className="h-6 w-6" />, value: "99.9%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="relative z-10 pt-6 pb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-3`}>
                      {stat.icon}
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Contact Methods Section - Redesigned with better colors and fewer CTAs */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full mb-8 border border-secondary/20">
                <MessageSquare className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Multiple Ways to Reach Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Choose Your Preferred
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Contact Method
                </span>
              </h2>
            </AnimatedDiv>
          </div>

          <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" delay={0.2}>
            {contactMethods.map((method, index) => (
              <AnimatedDiv key={method.title} delay={0.3 + index * 0.1}>
                <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${method.bgGradient} backdrop-blur-sm hover:-translate-y-3 relative overflow-hidden`}>
                  
                  <CardContent className="relative z-10 p-6 text-center h-full flex flex-col">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto mb-4`}>
                      {method.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {method.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                        <p className="text-sm font-medium text-foreground">{method.value}</p>
                      </div>
                      
                      <div className="text-xs text-muted-foreground font-medium">
                        {method.available}
                      </div>
                      
                      {/* Only show CTAs for primary contact methods */}
                      {method.isPrimary && (
                        <Button
                          asChild
                          size="sm"
                          className={`w-full bg-gradient-to-r ${method.gradient} hover:shadow-lg transition-all duration-300`}
                        >
                          <a href={method.action}>
                            Contact Now <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      
                      {/* Show text links for secondary methods */}
                      {!method.isPrimary && (
                        <Link 
                          href={method.action}
                          className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                        >
                          {method.value} <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <AnimatedDiv className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                    <p className="text-muted-foreground">Get in touch with our expert team</p>
                  </div>
                </div>

                <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Our Office</h4>
                        <p className="text-muted-foreground leading-relaxed">803/8, Ekatva Onyx, Wagle Estate<br />Thane West-400604, Maharashtra, India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Phone Support</h4>
                        <a href="tel:+918268949507" className="text-muted-foreground hover:text-primary transition-colors">
                          +91 8268949507
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Email Support</h4>
                        <a
                          href="mailto:info@jayaaitsolution.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@jayaaitsolution.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Website</h4>
                        <a
                          href="https://www.jayaaitsolution.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          www.jayaaitsolution.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Visit for more information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-100">
                      <Clock className="h-5 w-5" />
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-blue-700 dark:text-blue-300 font-medium">{schedule.day}</span>
                        <span className="text-blue-600 dark:text-blue-400">{schedule.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </AnimatedDiv>

            {/* Contact Form */}
            <AnimatedDiv delay={0.2}>
              <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Fill out the form below and we&apos;ll get back to you soon</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Input
                          required
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          aria-label="Your Name"
                          className="h-12 text-base border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          required
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          aria-label="Your Email"
                          className="h-12 text-base border-2 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        aria-label="Phone Number"
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company Name (Optional)"
                        aria-label="Company Name"
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <Input
                      required
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      aria-label="Subject"
                      className="h-12 text-base border-2 focus:border-primary transition-colors"
                    />
                    
                    <Textarea
                      required
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      aria-label="Your Message"
                      rows={6}
                      className="text-base border-2 focus:border-primary transition-colors resize-none"
                    />
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 h-12 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Why Choose Us */}
                  <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-semibold text-lg text-foreground mb-4">Why Choose JAYAA IT?</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {whyChooseUs.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* CTA Section - Single CTA following guidelines */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv delay={0.2}>
            <Card className="bg-gradient-to-br from-white/90 to-primary/5 dark:from-gray-900/90 dark:to-primary/10 border-0 shadow-2xl backdrop-blur-sm p-8 md:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              
              <CardContent className="relative z-10 text-center space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Don&apos;t wait to start your digital transformation journey. Our expert team is ready to provide you with a free consultation and customized IT solutions that drive real results.
                </p>
                
                {/* Single Primary CTA */}
                <div className="flex justify-center pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/services">
                      Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
