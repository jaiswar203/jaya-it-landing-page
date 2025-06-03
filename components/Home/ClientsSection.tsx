"use client"
import { useState } from "react"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent } from "@/components/ui/card"
import { 
  TypographyH1, 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH3, 
  TypographyH5,
  TypographyBadge,
  TypographySmall,
  TypographyStats 
} from "@/components/ui/typography"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Users, Building2, Award, Globe, Star } from "lucide-react"
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'

interface Client {
  id: number
  name: string
  logo: string
}

interface ClientsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  clients?: Client[]
  className?: string
}

const defaultClients: Client[] = [
  {
    id: 1,
    name: "Axis Bank",
    logo: "/companies/axis.png"
  },
  {
    id: 2,
    name: "Bajaj",
    logo: "/companies/bajaj.webp"
  },
  {
    id: 3,
    name: "HDFC Bank",
    logo: "/companies/hdfc.jpg"
  },
  {
    id: 4,
    name: "Kotak Bank",
    logo: "/companies/kotak.webp"
  },
  {
    id: 5,
    name: "SBI",
    logo: "/companies/sbi.png"
  },
  {
    id: 6,
    name: "Client 6",
    logo: "/companies/page9_img3.png"
  },
  {
    id: 7,
    name: "Client 7",
    logo: "/companies/page9_img5.jpeg"
  },
  {
    id: 8,
    name: "Client 8",
    logo: "/companies/page9_img6.jpeg"
  },
  {
    id: 9,
    name: "Client 9",
    logo: "/companies/page9_img7.jpeg"
  },
  {
    id: 10,
    name: "Client 10",
    logo: "/companies/page9_img8.jpeg"
  },
  {
    id: 11,
    name: "Client 11",
    logo: "/companies/page9_img9.png"
  },
  {
    id: 12,
    name: "Client 12",
    logo: "/companies/page9_img10.png"
  },
  {
    id: 13,
    name: "Client 13",
    logo: "/companies/page9_img14.png"
  },
  {
    id: 14,
    name: "Client 14",
    logo: "/companies/page9_img16.jpeg"
  },
  {
    id: 15,
    name: "Client 15",
    logo: "/companies/page9_img17.png"
  },
  {
    id: 16,
    name: "Client 16",
    logo: "/companies/page9_img18.png"
  }
]

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "50+",
    label: "Satisfied Clients",
    iconColor: "text-blue-500",
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "99.9%",
    label: "Client Satisfaction",
    iconColor: "text-green-500",
    bgGradient: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
  }
]

export default function ClientsSection({
  badge = "Our Clients",
  title = "Trusted by Industry",
  subtitle = "Leaders",
  description = "We've had the privilege of partnering with diverse organizations across multiple industries, delivering exceptional IT solutions and building lasting relationships built on trust and excellence.",
  clients = defaultClients,
  className = ""
}: ClientsSectionProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 via-transparent to-secondary/3"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Building2 className="h-4 w-4 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH1 className="mb-8 leading-tight">
              {title}
              <TypographyGradientSubtitle className="animate-pulse">
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH1>
            <TypographyLead muted>
              {description}
            </TypographyLead>
          </AnimatedDiv>
        </div>

        {/* Enhanced Stats Grid */}
        <AnimatedDiv className="flex justify-center mb-20">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl w-full">
            {stats.map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={index * 0.2}>
                <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${stat.bgGradient} hover:-translate-y-1 flex flex-col`}>
                  <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className={stat.iconColor}>
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Value */}
                    <div className="mb-3">
                      <TypographyStats className="text-foreground group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </TypographyStats>
                    </div>
                    
                    {/* Label */}
                    <TypographyH5 className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </TypographyH5>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

        {/* Enhanced Clients Carousel */}
        <AnimatedDiv delay={0.4} className="relative">
          <div className="relative bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {/* Header with gradient text */}
            <div className="text-center mb-8">
              <TypographyH3 gradient className="mb-3">
                Trusted by Leading Organizations
              </TypographyH3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            
            {/* Simple Logo Carousel */}
            <div className="relative overflow-hidden rounded-xl bg-gray-50/50 dark:bg-gray-800/50 p-6">
              <Swiper
                onSwiper={setSwiperInstance}
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 70,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 80,
                  },
                }}
                className="clients-simple-swiper"
              >
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <SwiperSlide key={`${client.id}-${index}`}>
                    <div className="flex items-center justify-center h-24 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={100}
                        height={60}
                        className="object-contain max-w-full max-h-full transition-opacity duration-300 filter "
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe className="h-4 w-4 text-secondary" />
                <TypographySmall className="font-medium">Global Reach</TypographySmall>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="h-4 w-4 text-secondary" />
                <TypographySmall className="font-medium">Industry Leaders</TypographySmall>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-4 w-4 text-secondary" />
                <TypographySmall className="font-medium">Trusted Partners</TypographySmall>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      <style jsx global>{`
        .clients-simple-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .clients-simple-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  )
} 