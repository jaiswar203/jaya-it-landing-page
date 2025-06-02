import { ServicePageLayout } from "@/components/services"
import { Compass } from "lucide-react"

const ncompassServices = [
  "Virtual CISO (vCISO) Services",
  "DPDP Act Consulting & Compliance",
  "ISO 27001 Consulting & Certification Assistance",
  "RBI Master Direction Compliance (BFSI)",
  "SEBI CSCRF Framework Consulting",
  "SEBI Cloud Adoption Framework Consulting",
  "Cybersecurity Staffing & Talent Acquisition",
  "Security Awareness Training Programs",
  "IT Governance, Risk & Compliance (GRC) Framework Implementation",
  "Privacy Impact Assessment (PIA)"
]

const ncompassStats = [
  { value: "100%", label: "Compliance Success" },
  { value: "50+", label: "Frameworks Covered" },
  { value: "Expert", label: "Consultants" },
  { value: "Strategic", label: "Guidance" }
]

export default function NCompassPage() {
  return (
    <ServicePageLayout
      serviceName="nCompass"
      serviceTitle="Consulting & Compliance"
      serviceIcon={<Compass size={120} />}
      heroDescription="Navigate the complex landscape of IT governance, risk management, and regulatory compliance with our expert consulting services tailored to your industry needs."
      fullDescription="nCompass offers specialized consulting services to help establish robust IT governance, manage risks effectively, and achieve regulatory compliance across multiple frameworks and standards."
      services={ncompassServices}
      gradient="from-purple-500 to-violet-500"
      stats={ncompassStats}
      primaryButtonText="Get Consultation"
      primaryButtonHref="/contact?service=ncompass"
    />
  )
}
