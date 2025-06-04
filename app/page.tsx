import HeroSection from "@/components/sections/hero-section";
import {
  AboutSection,
  CoreServicesSection,
  CybersecuritySolutionsSection,
  InformationSecurityDashboardSection,
  IndustriesWeServeSection,
  RegulatoryComplianceSection,
  WhyChooseUsSection,
  StrategicPartnersSection,
  ClientsSection,
  CallToActionSection,
} from "@/components/Home";

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
      <RegulatoryComplianceSection />
      <StrategicPartnersSection />
      {/* <TestimonialsSection /> */}
      <ClientsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </>
  );
}
