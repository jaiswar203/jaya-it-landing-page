// Placeholder for /services/peregrine page
// Similar structure can be used for pinpoint, msp247, ncompass
import { ServicePageLayout } from "@/components/services"
import { ShieldAlert } from "lucide-react"

const peregrineServices = [
  "Managed Detection & Response (MDR)",
  "Threat Intelligence Services",
  "Digital Forensics Services",
  "Brand Risk & Dark Web Monitoring",
  "Elastic Stack Consulting",
  "Threat Hunting Services",
  "Security Orchestration, Automation and Response (SOAR)",
  "Endpoint Detection and Response (EDR) Management",
  "Security Information and Event Management (SIEM)"
]

const peregrineStats = [
  { value: "24/7", label: "SOC Monitoring" },
  { value: "< 5min", label: "Response Time" },
  { value: "99.8%", label: "Threat Detection" },
  { value: "50+", label: "Security Analysts" }
]

export default function PeregrinePage() {
  return (
    <ServicePageLayout
      serviceName="Peregrine"
      serviceTitle="Managed Detection & Response"
      serviceIcon={<ShieldAlert size={120} />}
      heroDescription="Proactive threat detection, rapid response, and continuous monitoring to safeguard your critical assets 24/7 with our advanced MDR capabilities."
      fullDescription="Peregrine provides comprehensive Managed Detection and Response services, combining cutting-edge technology with expert security analysts to protect your organization from advanced threats and cyber attacks."
      services={peregrineServices}
      gradient="from-red-500 to-orange-500"
      stats={peregrineStats}
      primaryButtonText="Start Protection Now"
      primaryButtonHref="/contact?service=peregrine"
    />
  )
}
