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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Client data from ClientsSection
const clients = [
  {
    id: 1,
    name: "Axis Bank",
    logo: "/companies/axis.png",
  },
  {
    id: 2,
    name: "Bajaj",
    logo: "/company/bajaj.png",
  },
  {
    id: 3,
    name: "HDFC Bank",
    logo: "/company/hdfc-sales.png",
  },
  {
    id: 4,
    name: "Kotak Bank",
    logo: "/company/kotak-life.png",
  },
  {
    id: 5,
    name: "SBI",
    logo: "/company/sbi-general.png",
  },
  {
    id: 6,
    name: "Client 6",
    logo: "/company/indusland.png",
  },
  {
    id: 7,
    name: "Client 7",
    logo: "/companies/page9_img5.jpeg",
  },
  {
    id: 8,
    name: "Client 8",
    logo: "/companies/page9_img6.jpeg",
  },
  {
    id: 9,
    name: "Client 9",
    logo: "/companies/page9_img7.jpeg",
  },
  {
    id: 10,
    name: "Client 10",
    logo: "/company/arohi.png",
  },
  {
    id: 11,
    name: "Client 11",
    logo: "/companies/page9_img9.png",
  },
  {
    id: 12,
    name: "Client 12",
    logo: "/companies/page9_img10.png",
  },
  {
    id: 13,
    name: "Client 13",
    logo: "/company/icici-lombard.png",
  },
  {
    id: 14,
    name: "Client 14",
    logo: "/company/oman-development-bank.png",
  },
  {
    id: 15,
    name: "Client 15",
    logo: "/companies/page9_img17.png",
  },
  {
    id: 16,
    name: "Client 16",
    logo: "/company/icici-bank.png",
  },
];

// Strategic Partners data from StrategicPartnersSection
const strategicPartners = [
  { id: 1, name: "Cisco", logo: "/partners/strategic/cisco.png" },
  { id: 2, name: "Fortinet", logo: "/partners/strategic/fortinet.png" },
  {
    id: 3,
    name: "Palo Alto Networks",
    logo: "/partners/strategic/paloalto.jpg",
  },
  { id: 4, name: "CyberArk", logo: "/partners/strategic/cybrark.png" },
  { id: 5, name: "RSA Security", logo: "/partners/strategic/rsa.png" },
  { id: 6, name: "Forcepoint", logo: "/partners/strategic/forcepoint.png" },
  { id: 7, name: "ManageEngine", logo: "/partners/strategic/manageengine.png" },
  { id: 8, name: "Commvault", logo: "/partners/strategic/commvault.png" },
  { id: 9, name: "Citrix", logo: "/partners/strategic/citrix.png" },
  { id: 10, name: "Broadcom", logo: "/partners/strategic/broadcom.png" },
  { id: 11, name: "BMC Software", logo: "/partners/strategic/bmc.png" },
  { id: 12, name: "AppDynamics", logo: "/partners/strategic/app-dynamics.jpg" },
  { id: 13, name: "Arcon", logo: "/partners/strategic/arcon.png" },
  { id: 14, name: "Beyond Security", logo: "/partners/strategic/beyond.jpg" },
  { id: 15, name: "Seclore", logo: "/partners/strategic/seclore.png" },
  { id: 16, name: "Versa Networks", logo: "/partners/strategic/versa.png" },
  { id: 17, name: "Accops", logo: "/partners/strategic/accops.jpg" },
  { id: 18, name: "VyomLabs", logo: "/partners/strategic/vyomlab.png" },
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

export default function ClientsPartnersClient() {
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
                icon: <Handshake className="h-6 w-6" />,
                value: "18+",
                label: "Strategic Partners",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                value: "10+",
                label: "Countries Served",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                value: "5+",
                label: "Years of Partnership",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="relative z-10 text-center p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
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

      {/* Our Clients Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-6 py-3 rounded-full mb-8 border border-blue-500/20">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Our Valued Clients
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Enterprises That
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text">
                  Trust Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Serving leading organizations across banking, finance,
                healthcare, manufacturing, and technology sectors with tailored
                IT solutions that drive business growth.
              </p>
            </AnimatedDiv>
          </div>

          {/* Client Stats */}
          <AnimatedDiv
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            delay={0.2}
          >
            {clientStats.map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="relative z-10 pt-8 pb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
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

          {/* Clients Grid */}
          <AnimatedDiv delay={0.4}>
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Trusted by Industry Leaders
                </h3>
                <p className="text-muted-foreground">
                  Organizations that rely on our expertise for their critical IT
                  infrastructure
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {clients.map((client, index) => (
                  <AnimatedDiv key={client.id} delay={0.5 + index * 0.05}>
                    <div className="group h-20 w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg flex items-center justify-center transition-all duration-300 p-4">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-green-500/10 px-6 py-3 rounded-full mb-8 border border-green-500/20">
                <Handshake className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  Strategic Partnerships
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Technology
                <span className="block text-transparent bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text">
                  Alliance Partners
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Collaborating with industry-leading technology providers to
                deliver comprehensive solutions. We manage licenses, setup, and
                ongoing support so you can focus on your core business.
              </p>
            </AnimatedDiv>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Managed Services Benefits */}
            <AnimatedDiv className="space-y-8" delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
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

                <div className="grid gap-3">
                  {managedServices.map((service, index) => (
                    <AnimatedDiv key={service} delay={0.3 + index * 0.05}>
                      <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50 hover:shadow-md transition-all duration-300">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium text-foreground text-sm leading-tight">
                          {service}
                        </span>
                      </div>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary/20 dark:border-primary/30">
                <div className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-primary mb-3">
                      Why Choose Our Managed Model?
                    </h4>
                    <p className="text-primary/80 dark:text-primary/80 leading-relaxed text-sm">
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
            <AnimatedDiv className="relative" delay={0.4}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>

              <Card className="relative bg-white dark:bg-gray-900/50 p-8 border-0 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground">
                    Strategic Partners
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => partnersSwiperInstance?.slidePrev()}
                      className="w-10 h-10 p-0 border-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => partnersSwiperInstance?.slideNext()}
                      className="w-10 h-10 p-0 border-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  speed={1000}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  loop={true}
                  onSwiper={setPartnersSwiperInstance}
                  className="partners-swiper"
                >
                  {[...strategicPartners, ...strategicPartners].map(
                    (partner, index) => (
                      <SwiperSlide key={`${partner.id}-${index}`}>
                        <div className="group h-28 w-full">
                          <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 p-6">
                            <Image
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              width={120}
                              height={80}
                              className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
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
                  Partner with JAYAA IT Solution for reliable, scalable, and
                  innovative IT solutions. Let us help you achieve your
                  technology goals with our proven expertise and strategic
                  partnerships.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/contact">
                      Become a Client <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/services">
                      Explore Partnership Opportunities
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
        .partners-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </>
  );
}
