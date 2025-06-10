"use client"
import { useState } from "react"
import { 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyH3, 
  TypographyH4,
  TypographyBadge,
  TypographyP,
  TypographySmall 
} from "@/components/ui/typography"
import Image from "next/image"
import { CheckCircle2, Shield, Settings, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Partner {
  id: number
  name: string
  logo: string
}

interface StrategicPartnersSectionMobileProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  partners?: Partner[]
  className?: string
}

const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "Cisco",
    logo: "/partners/strategic/cisco.png"
  },
  {
    id: 2,
    name: "Fortinet",
    logo: "/partners/strategic/fortinet.png"
  },
  {
    id: 3,
    name: "Palo Alto Networks",
    logo: "/partners/strategic/paloalto.jpg"
  },
  {
    id: 4,
    name: "CyberArk",
    logo: "/partners/strategic/cybrark.png"
  },
  {
    id: 5,
    name: "RSA Security",
    logo: "/partners/strategic/rsa.png"
  },
  {
    id: 6,
    name: "Forcepoint",
    logo: "/partners/strategic/forcepoint.png"
  },
  {
    id: 7,
    name: "ManageEngine",
    logo: "/partners/strategic/manageengine.png"
  },
  {
    id: 8,
    name: "Commvault",
    logo: "/partners/strategic/commvault.png"
  },
  {
    id: 9,
    name: "Citrix",
    logo: "/partners/strategic/citrix.png"
  },
  {
    id: 10,
    name: "Broadcom",
    logo: "/partners/strategic/broadcom.png"
  },
  {
    id: 11,
    name: "BMC Software",
    logo: "/partners/strategic/bmc.png"
  },
  {
    id: 12,
    name: "AppDynamics",
    logo: "/partners/strategic/app-dynamics.jpg"
  },
  {
    id: 13,
    name: "Arcon",
    logo: "/partners/strategic/arcon.png"
  },
  {
    id: 14,
    name: "Beyond Security",
    logo: "/partners/strategic/beyond.jpg"
  },
  {
    id: 15,
    name: "Seclore",
    logo: "/partners/strategic/seclore.png"
  },
  {
    id: 16,
    name: "Versa Networks",
    logo: "/partners/strategic/versa.png"
  },
  {
    id: 17,
    name: "Accops",
    logo: "/partners/strategic/accops.jpg"
  },
  {
    id: 18,
    name: "VyomLabs",
    logo: "/partners/strategic/vyomlab.png"
  }
]

const managedServices = [
  "License Management & Renewals",
  "Tool Setup & Technical Configuration",
  "24/7 Monitoring & Incident Handling", 
  "Performance & Uptime Optimization",
  "Regular Security Patches & Feature Updates",
  "User Enablement & Technical Support",
  "Custom Integration & Interoperability",
  "Security & Compliance Reporting",
  "Fast-track Issue Resolution"
]

export default function StrategicPartnersSectionMobile({
  badge = "Strategic Partnerships",
  title = "Trusted Technology",
  subtitle = "Partners",
  description = "We collaborate with industry-leading third-party service and tool providers to enhance the value we offer to our clients. Instead of building everything from scratch, we partner with trusted platforms and technologies, providing licenses and managed services so you can focus on your core business.",
  partners = defaultPartners,
  className = ""
}: StrategicPartnersSectionMobileProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const partnersPerSlide = 4
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentPartners = () => {
    const startIndex = currentSlide * partnersPerSlide
    return partners.slice(startIndex, startIndex + partnersPerSlide)
  }

  return (
    <section className={`py-12 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary text-white px-3 py-1.5 rounded-full shadow-lg mb-4">
            <Zap className="h-3 w-3 text-white" />
            <TypographyBadge className="text-white text-xs">{badge}</TypographyBadge>
          </div>
          <TypographyH2 className="mb-4 text-2xl">
            {title}
            <TypographyGradientSubtitle className="text-2xl">
              {subtitle}
            </TypographyGradientSubtitle>
          </TypographyH2>
          <TypographyP className="text-sm leading-relaxed px-2">
            {description}
          </TypographyP>
        </div>

        {/* Partners Carousel - Mobile First */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <TypographyH3 className="text-lg">Strategic Partners</TypographyH3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="w-8 h-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="w-8 h-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {getCurrentPartners().map((partner) => (
                <div key={partner.id} className="group">
                  <div className="h-16 w-full bg-white dark:bg-gray-800 rounded-lg border hover:shadow-md flex items-center justify-center group-hover:scale-105 transition-all duration-300 p-3">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={60}
                      height={40}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Managed Services */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <TypographyH4 className="text-foreground text-lg">Our Managed Services</TypographyH4>
              <TypographyP className="text-sm" muted>Complete setup, monitoring & maintenance</TypographyP>
            </div>
          </div>

          <div className="space-y-2">
            {managedServices.map((service) => (
              <div key={service} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-950/20 border border-secondary/20 dark:border-secondary/30">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3 w-3 text-secondary" />
                </div>
                <TypographySmall className="font-medium text-foreground leading-tight text-xs">{service}</TypographySmall>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-950/20 rounded-xl border border-primary/20 dark:border-primary/30">
            <div className="flex items-start space-x-3">
              <Settings className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <TypographyH4 className="font-semibold text-primary dark:text-primary mb-2 text-base">Why Choose Our Managed Model?</TypographyH4>
                <TypographySmall className="text-primary/80 dark:text-primary/80 leading-relaxed text-xs">
                  Most clients prefer not to manage these tools themselves due to time or technical limitations. 
                  We provide licenses or access to these tools and take full responsibility for setup, monitoring, 
                  and ongoing maintenance, so you can focus on your core business.
                </TypographySmall>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 