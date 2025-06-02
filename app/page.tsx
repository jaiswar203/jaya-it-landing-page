import HeroSection from "@/components/sections/hero-section"
import {
  StatsSection,
  AboutSection,
  CoreServicesSection,
  CybersecuritySolutionsSection,
  InformationSecurityDashboardSection,
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
      <StatsSection />
      <AboutSection />
      <CoreServicesSection />
      <CybersecuritySolutionsSection />
      <InformationSecurityDashboardSection />
      <StrategicPartnersSection />
      <TestimonialsSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </>
  )
}
