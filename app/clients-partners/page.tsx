"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Building2,
  Handshake,
  Users,
  Star,
  Award,
  Globe,
  CheckCircle2,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import AnimatedDiv from "@/components/ui/animated-div";
import type { Swiper as SwiperType } from "swiper";
import type { Metadata } from "next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "Our Clients & Strategic Partners - Trusted Relationships",
  description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders including Microsoft, AWS, Google Cloud, Cisco, and serve enterprises across multiple industries.",
  keywords: [
    "JAYAA IT clients",
    "strategic partners",
    "technology partners",
    "enterprise clients",
    "Microsoft partner",
    "AWS partner",
    "Google Cloud partner",
    "Cisco partner",
    "IT service clients",
    "managed services clients",
    "enterprise partnerships",
    "technology alliances"
  ],
  alternates: {
    canonical: "/clients-partners",
  },
  openGraph: {
    title: "Our Clients & Strategic Partners - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders and serve enterprises across multiple industries.",
    url: "https://www.jayaaitsolution.com/clients-partners",
    type: "website",
    images: [
      {
        url: "/og-clients-partners.jpg",
        width: 1200,
        height: 630,
        alt: "JAYAA IT Solution Clients & Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients & Strategic Partners - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders and serve enterprises across multiple industries.",
    images: ["/og-clients-partners.jpg"],
  },
};

// Client data from ClientsSection
const clients = [
  { id: 1, name: "Axis Bank", logo: "/companies/axis.png" },
  { id: 2, name: "Bajaj", logo: "/companies/bajaj.webp" },
  { id: 3, name: "HDFC Bank", logo: "/companies/hdfc.jpg" },
  { id: 4, name: "Kotak Bank", logo: "/companies/kotak.webp" },
  { id: 5, name: "SBI", logo: "/companies/sbi.png" },
  { id: 6, name: "Client 6", logo: "/companies/page9_img3.png" },
  { id: 7, name: "Client 7", logo: "/companies/page9_img5.jpeg" },
  { id: 8, name: "Client 8", logo: "/companies/page9_img6.jpeg" },
  { id: 9, name: "Client 9", logo: "/companies/page9_img7.jpeg" },
  { id: 10, name: "Client 10", logo: "/companies/page9_img8.jpeg" },
  { id: 11, name: "Client 11", logo: "/companies/page9_img9.png" },
  { id: 12, name: "Client 12", logo: "/companies/page9_img10.png" },
  { id: 13, name: "Client 13", logo: "/companies/page9_img14.png" },
  { id: 14, name: "Client 14", logo: "/companies/page9_img16.jpeg" },
  { id: 15, name: "Client 15", logo: "/companies/page9_img17.png" },
  { id: 16, name: "Client 16", logo: "/companies/page9_img18.png" },
];

// Strategic Partners data from StrategicPartnersSection
const strategicPartners = [
  { id: 1, name: "Microsoft", logo: "/partners/strategic/page10_img26.png" },
  {
    id: 2,
    name: "Amazon Web Services",
    logo: "/partners/strategic/page10_img25.png",
  },
  { id: 3, name: "Google Cloud", logo: "/partners/strategic/page10_img24.png" },
  { id: 4, name: "Cisco", logo: "/partners/strategic/page10_img23.png" },
  { id: 5, name: "VMware", logo: "/partners/strategic/page10_img22.png" },
  { id: 6, name: "Oracle", logo: "/partners/strategic/page10_img21.png" },
  { id: 7, name: "IBM", logo: "/partners/strategic/page10_img20.png" },
  { id: 8, name: "Salesforce", logo: "/partners/strategic/page10_img19.png" },
  { id: 9, name: "ServiceNow", logo: "/partners/strategic/page10_img18.jpeg" },
  { id: 10, name: "Atlassian", logo: "/partners/strategic/page10_img16.jpeg" },
  { id: 11, name: "Adobe", logo: "/partners/strategic/page10_img14.png" },
  { id: 12, name: "Slack", logo: "/partners/strategic/page10_img12.png" },
];

const clientStats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: clients.length.toString(),
    label: "Satisfied Clients",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    value: "15+",
    label: "Industries Served",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "99.9%",
    label: "Client Satisfaction",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "500+",
    label: "Projects Completed",
    color: "from-orange-500 to-red-500",
  },
];

const managedServices = [
  "License Procurement & Management",
  "Tool Setup & Configuration",
  "24/7 Monitoring & Maintenance",
  "User Training & Support",
  "Performance Optimization",
  "Security & Compliance Monitoring",
  "Regular Updates & Patches",
  "Technical Issue Resolution",
  "Custom Integration Services",
];

export default function ClientsPartnersPage() {
  const [partnersSwiperInstance, setPartnersSwiperInstance] =
    useState<SwiperType | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full mb-8 border border-primary/20">
                <Handshake className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Clients & Partners
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Trusted Relationships
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Drive Success
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Building strong relationships based on trust, collaboration, and
                mutual success with industry leaders across diverse sectors and
                innovative technology partners worldwide.
              </p>
            </AnimatedDiv>
          </div>

          {/* Overview Stats */}
          <AnimatedDiv
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            delay={0.2}
          >
            {[
              {
                icon: <Building2 className="h-6 w-6" />,
                value: "16+",
                label: "Valued Clients",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                value: "12+",
                label: "Tech Partners",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                value: "15+",
                label: "Industries",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: <Award className="h-6 w-6" />,
                value: "500+",
                label: "Projects",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="relative z-10 pt-6 pb-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-3`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Our Valued Clients
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Trusted by Industry
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Leaders
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We&apos;ve had the privilege of partnering with diverse
                organizations across multiple industries, delivering exceptional
                IT solutions and building lasting relationships built on trust and
                excellence.
              </p>
            </AnimatedDiv>
          </div>

          {/* Client Stats Grid */}
          <AnimatedDiv
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            delay={0.2}
          >
            {clientStats.map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 hover:rotate-1 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-8 text-center relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>

          {/* Clients Carousel */}
          <AnimatedDiv delay={0.5}>
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-2xl p-8 rounded-3xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  Trusted by Leading Organizations
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gray-50/50 dark:bg-gray-800/50 p-6">
                <Swiper
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
                    640: { slidesPerView: 3, spaceBetween: 50 },
                    768: { slidesPerView: 4, spaceBetween: 60 },
                    1024: { slidesPerView: 5, spaceBetween: 70 },
                    1280: { slidesPerView: 6, spaceBetween: 80 },
                  }}
                  className="clients-carousel"
                >
                  {[...clients, ...clients, ...clients].map((client, index) => (
                    <SwiperSlide key={`${client.id}-${index}`}>
                      <div className="flex items-center justify-center h-24 p-4">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={120}
                          height={80}
                          className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Award className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">Industry Leaders</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Trusted Partners</span>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
                <Handshake className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Strategic Alliances
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Trusted Technology
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Partners
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We collaborate with industry-leading third-party service and
                tool providers to enhance the value we offer to our clients.
                Instead of building everything from scratch, we partner with
                trusted platforms and technologies, providing licenses and
                managed services so you can focus on your core business.
              </p>
            </AnimatedDiv>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Managed Services */}
            <AnimatedDiv className="space-y-8" delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Our Managed Services
                    </h3>
                    <p className="text-muted-foreground">
                      Complete setup, monitoring & maintenance
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {managedServices.map((service, index) => (
                    <AnimatedDiv key={service} delay={0.3 + index * 0.05}>
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-foreground leading-tight">
                          {service}
                        </span>
                      </div>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                <div className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Why Choose Our Managed Model?
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                      Most clients prefer not to manage these tools themselves
                      due to time or technical limitations. We provide licenses
                      or access to these tools and take full responsibility for
                      setup, monitoring, and ongoing maintenance, so you can
                      focus on your core business.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            {/* Partners Carousel */}
            <AnimatedDiv delay={0.4} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>

              <Card className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-2xl p-8 rounded-3xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-foreground">
                    Strategic Partners
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => partnersSwiperInstance?.slidePrev()}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
                    >
                      <ChevronLeft className="h-5 w-5 text-primary" />
                    </button>
                    <button
                      onClick={() => partnersSwiperInstance?.slideNext()}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>

                <Swiper
                  onSwiper={setPartnersSwiperInstance}
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-primary/30",
                    bulletActiveClass:
                      "swiper-pagination-bullet-active !bg-primary",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  className="partners-swiper"
                >
                  {strategicPartners.map((partner) => (
                    <SwiperSlide key={partner.id}>
                      <div className="group h-24 w-full">
                        <div className="h-full w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 p-4">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={80}
                            height={60}
                            className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Partner with JAYAA IT Solution and leverage our extensive
                  network of clients and technology partners to accelerate your
                  digital transformation journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/contact">
                      Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-8 py-4 text-lg"
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>

      <style jsx global>{`
        .partners-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        .partners-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .clients-carousel .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .clients-carousel .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </>
  );
}
