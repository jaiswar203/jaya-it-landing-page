import HeroSection from "@/components/sections/hero-section"
import {
  AboutSection,
  CoreServicesSection,
  CybersecuritySolutionsSection,
  InformationSecurityDashboardSection,
  IndustriesWeServeSection,
  TestimonialsSection,
  WhyChooseUsSection,
  StrategicPartnersSection,
  ClientsSection,
  CallToActionSection
} from "@/components/Home"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <AboutSection />
      <CoreServicesSection />
      <CybersecuritySolutionsSection />
      <InformationSecurityDashboardSection />
      <IndustriesWeServeSection />
      <StrategicPartnersSection />
      {/* <TestimonialsSection /> */}
      <ClientsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </>
  )
}
