import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Quote, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
}

interface TestimonialsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  testimonials?: Testimonial[]
  primaryButtonText?: string
  primaryButtonHref?: string
  className?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "CTO",
    company: "TechCorp Solutions",
    content: "JAYAA IT has transformed our cybersecurity infrastructure completely. Their 24/7 monitoring and rapid response capabilities have given us peace of mind. The team's expertise in threat detection is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "IT Director",
    company: "Financial Systems Ltd",
    content: "Working with JAYAA IT for our cloud migration was seamless. Their MSP247 service has improved our operational efficiency by 40%. Excellent support and proactive monitoring.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 3,
    name: "Amit Kumar",
    position: "CISO",
    company: "Healthcare Innovations",
    content: "The vulnerability assessment and penetration testing services exceeded our expectations. JAYAA IT identified critical security gaps we missed and provided comprehensive remediation strategies.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    position: "VP Technology",
    company: "E-commerce Dynamics",
    content: "Their security awareness training program significantly reduced our phishing incidents by 85%. The team's approach to employee education is both engaging and effective.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Operations Manager",
    company: "Manufacturing Hub",
    content: "JAYAA IT's infrastructure management has been outstanding. Zero downtime in the last 18 months, and their predictive maintenance approach has saved us significant costs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 6,
    name: "Meera Joshi",
    position: "Security Lead",
    company: "Banking Solutions",
    content: "The compliance consulting services helped us achieve ISO 27001 certification seamlessly. Their expertise in regulatory requirements is exceptional and thorough.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
]

export default function TestimonialsSection({
  badge = "Client Testimonials",
  title = "What Our Clients",
  subtitle = "Say About Us",
  description = "Discover how JAYAA IT Solution has transformed businesses across industries with innovative technology solutions and exceptional service.",
  testimonials = defaultTestimonials,
  primaryButtonText = "See more testimonials",
  primaryButtonHref = "/testimonials",
  className = ""
}: TestimonialsSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Quote className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </AnimatedDiv>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedDiv key={testimonial.id} delay={index * 0.15}>
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                <CardContent className="p-8">
                  {/* Star Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <AnimatedDiv delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
} 