"use client";
import {
  TypographyH2,
  TypographyGradientSubtitle,
  TypographyLead,
  TypographyH3,
  TypographyH4,
  TypographyBadge,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CheckCircle2, Shield, Settings, Zap } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface StrategicPartnersSectionDesktopProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  partners?: Partner[];
  className?: string;
}

const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "Cisco",
    logo: "/partners/strategic/cisco.jpg",
  },
  {
    id: 2,
    name: "Fortinet",
    logo: "/partners/strategic/fortinet.png",
  },
  {
    id: 3,
    name: "Palo Alto Networks",
    logo: "/partners/strategic/paloalto.jpg",
  },
  {
    id: 4,
    name: "CyberArk",
    logo: "/partners/strategic/cybrark.png",
  },
  {
    id: 5,
    name: "RSA Security",
    logo: "/partners/strategic/rsa.png",
  },
  {
    id: 6,
    name: "Forcepoint",
    logo: "/partners/strategic/forcepoint.png",
  },
  {
    id: 7,
    name: "ManageEngine",
    logo: "/partners/strategic/manageengine.png",
  },
  {
    id: 8,
    name: "Commvault",
    logo: "/partners/strategic/commvault.png",
  },
  {
    id: 9,
    name: "Citrix",
    logo: "/partners/strategic/citrix.png",
  },
  {
    id: 10,
    name: "Broadcom",
    logo: "/partners/strategic/broadcom.png",
  },
  {
    id: 11,
    name: "BMC Software",
    logo: "/partners/strategic/bmc.png",
  },
  {
    id: 12,
    name: "AppDynamics",
    logo: "/partners/strategic/app-dynamics.jpg",
  },
  {
    id: 13,
    name: "Arcon",
    logo: "/partners/strategic/arcon.png",
  },
  {
    id: 14,
    name: "Beyond Security",
    logo: "/partners/strategic/beyond.jpg",
  },
  {
    id: 15,
    name: "Seclore",
    logo: "/partners/strategic/seclore.png",
  },
  {
    id: 16,
    name: "Versa Networks",
    logo: "/partners/strategic/versa.png",
  },
  {
    id: 17,
    name: "Accops",
    logo: "/partners/strategic/accops.jpg",
  },
  {
    id: 18,
    name: "VyomLabs",
    logo: "/partners/strategic/vyomlab.png",
  },
  {
    id: 19,
    name: "Tenable",
    logo: "/partners/strategic/tenable.png",
  },
];

const managedServices = [
  "License Management & Renewals",
  "Tool Setup & Technical Configuration",
  "24/7 Monitoring & Incident Handling",
  "Performance & Uptime Optimization",
  "Regular Security Patches & Feature Updates",
  "User Enablement & Technical Support",
  "Custom Integration & Interoperability",
  "Security & Compliance Reporting",
  "Fast-track Issue Resolution",
];

export default function StrategicPartnersSectionDesktop({
  badge = "Strategic Partnerships",
  title = "Trusted Technology",
  subtitle = "Partners",
  description = "We collaborate with industry-leading third-party service and tool providers to enhance the value we offer to our clients. Instead of building everything from scratch, we partner with trusted platforms and technologies, providing licenses and managed services so you can focus on your core business.",
  partners = defaultPartners,
  className = "",
}: StrategicPartnersSectionDesktopProps) {
  return (
    <section
      className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
            <Zap className="h-4 w-4 text-white" />
            <TypographyBadge className="text-white">{badge}</TypographyBadge>
          </div>
          <TypographyH2 className="mb-6">
            {title}
            <TypographyGradientSubtitle>{subtitle}</TypographyGradientSubtitle>
          </TypographyH2>
          <TypographyLead muted>{description}</TypographyLead>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Managed Services */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <TypographyH4 className="text-foreground">
                    Our Managed Services
                  </TypographyH4>
                  <TypographyP muted>
                    Complete setup, monitoring & maintenance
                  </TypographyP>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {managedServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-950/20 border border-secondary/20 dark:border-secondary/30"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <TypographySmall className="font-medium text-foreground leading-tight">
                      {service}
                    </TypographySmall>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-950/20 rounded-2xl border border-primary/20 dark:border-primary/30">
              <div className="flex items-start space-x-3">
                <Settings className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <TypographyH4 className="font-semibold text-primary dark:text-primary mb-2">
                    Why Choose Our Managed Model?
                  </TypographyH4>
                  <TypographySmall className="text-primary/80 dark:text-primary/80 leading-relaxed">
                    Most clients prefer not to manage these tools themselves due
                    to time or technical limitations. We provide licenses or
                    access to these tools and take full responsibility for
                    setup, monitoring, and ongoing maintenance, so you can focus
                    on your core business.
                  </TypographySmall>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Carousel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-white dark:bg-gray-900/50 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <TypographyH3 className="text-foreground">
                  Strategic Partners
                </TypographyH3>
              </div>

              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{
                  delay: 50,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
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
                allowTouchMove={true}
                watchSlidesProgress={true}
                className="partners-swiper"
              >
                {[...partners, ...partners].map((partner, index) => (
                  <SwiperSlide key={`${partner.id}-${index}`}>
                    <div className="group h-28 w-full">
                      <div className="h-full w-full bg-white dark:bg-gray-900 rounded-2xl  flex items-center justify-center group-hover:scale-105 transition-all duration-300 p-6">
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
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
        .partners-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
}
