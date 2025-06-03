"use client"
import { useState } from "react"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent } from "@/components/ui/card"
import { 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH3, 
  TypographyH4,
  TypographyBadge,
  TypographyP,
  TypographySmall 
} from "@/components/ui/typography"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, CheckCircle2, Handshake, Shield, Settings, Zap } from "lucide-react"
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Partner {
  id: number
  name: string
  logo: string
}

interface StrategicPartnersSectionProps {
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
    name: "Microsoft",
    logo: "/partners/strategic/page10_img26.png"
  },
  {
    id: 2,
    name: "Amazon Web Services",
    logo: "/partners/strategic/page10_img25.png"
  },
  {
    id: 3,
    name: "Google Cloud",
    logo: "/partners/strategic/page10_img24.png"
  },
  {
    id: 4,
    name: "Cisco",
    logo: "/partners/strategic/page10_img23.png"
  },
  {
    id: 5,
    name: "VMware",
    logo: "/partners/strategic/page10_img22.png"
  },
  {
    id: 6,
    name: "Oracle",
    logo: "/partners/strategic/page10_img21.png"
  },
  {
    id: 7,
    name: "IBM",
    logo: "/partners/strategic/page10_img20.png"
  },
  {
    id: 8,
    name: "Salesforce",
    logo: "/partners/strategic/page10_img19.png"
  },
  {
    id: 9,
    name: "ServiceNow",
    logo: "/partners/strategic/page10_img18.jpeg"
  },
  {
    id: 10,
    name: "Atlassian",
    logo: "/partners/strategic/page10_img16.jpeg"
  },
  {
    id: 11,
    name: "Adobe",
    logo: "/partners/strategic/page10_img14.png"
  },
  {
    id: 12,
    name: "Slack",
    logo: "/partners/strategic/page10_img12.png"
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

export default function StrategicPartnersSection({
  badge = "Strategic Partnerships",
  title = "Trusted Technology",
  subtitle = "Partners",
  description = "We collaborate with industry-leading third-party service and tool providers to enhance the value we offer to our clients. Instead of building everything from scratch, we partner with trusted platforms and technologies, providing licenses and managed services so you can focus on your core business.",
  partners = defaultPartners,
  className = ""
}: StrategicPartnersSectionProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Zap className="h-4 w-4 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH2 className="mb-6">
              {title}
              <TypographyGradientSubtitle>
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH2>
            <TypographyLead muted>
              {description}
            </TypographyLead>
          </AnimatedDiv>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Managed Services */}
          <AnimatedDiv className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <TypographyH4 className="text-foreground">Our Managed Services</TypographyH4>
                  <TypographyP muted>Complete setup, monitoring & maintenance</TypographyP>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {managedServices.map((service, index) => (
                  <AnimatedDiv key={service} delay={index * 0.05}>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-950/20 border border-secondary/20 dark:border-secondary/30">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                      </div>
                      <TypographySmall className="font-medium text-foreground leading-tight">{service}</TypographySmall>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-950/20 rounded-2xl border border-primary/20 dark:border-primary/30">
              <div className="flex items-start space-x-3">
                <Settings className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <TypographyH4 className="font-semibold text-primary dark:text-primary mb-2">Why Choose Our Managed Model?</TypographyH4>
                  <TypographySmall className="text-primary/80 dark:text-primary/80 leading-relaxed">
                    Most clients prefer not to manage these tools themselves due to time or technical limitations. 
                    We provide licenses or access to these tools and take full responsibility for setup, monitoring, 
                    and ongoing maintenance, so you can focus on your core business.
                  </TypographySmall>
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Partners Carousel */}
          <AnimatedDiv delay={0.3} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white dark:bg-gray-900/50 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <TypographyH3 className="text-foreground">Strategic Partners</TypographyH3>
              </div>

              <Swiper
                onSwiper={setSwiperInstance}
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: false,
                }}
                speed={5000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                allowTouchMove={false}
                watchSlidesProgress={true}
                className="partners-swiper"
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <SwiperSlide key={`${partner.id}-${index}`}>
                    <div className="group h-28 w-full">
                      <div className="h-full w-full bg-white dark:bg-gray-900 rounded-2xl  hover:shadow-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300  p-6">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={120}
                          height={80}
                          className="object-contain max-w-full max-h-full transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .partners-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  )
} 