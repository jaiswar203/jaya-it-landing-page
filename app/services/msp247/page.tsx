import { ServicePageLayout } from "@/components/services"
import { ServerCog } from "lucide-react"

const msp247Services = [
  "24 X 7 Managed Cloud Services (AWS, Azure, GCP)",
  "Cloud Security Implementation & Management",
  "Disaster Recovery & Business Continuity Planning",
  "Security Patching & Vulnerability Management",
  "Web Application Firewall (WAF) Services",
  "Cloud Cost Optimization",
  "DevOps & Infrastructure as Code (IaC) Management",
  "Managed Backup & Recovery",
  "Cloud Migration & Modernization"
]

const msp247Stats = [
  { value: "24/7", label: "Cloud Support" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "30%", label: "Cost Reduction" },
  { value: "Multi-Cloud", label: "Expertise" }
]

export default function MSP247Page() {
  return (
    <ServicePageLayout
      serviceName="MSP247"
      serviceTitle="Managed Cloud & Security"
      serviceIcon={<ServerCog size={120} />}
      heroDescription="Reliable 24/7 managed services for your cloud infrastructure and security, ensuring optimal performance, cost efficiency, and protection across all major cloud platforms."
      fullDescription="MSP247 provides comprehensive managed services for your cloud environments, offering round-the-clock monitoring, management, and support to help you harness the full potential of the cloud while ensuring security and compliance."
      services={msp247Services}
      gradient="from-green-500 to-emerald-500"
      stats={msp247Stats}
      primaryButtonText="Start Cloud Journey"
      primaryButtonHref="/contact?service=msp247"
    />
  )
}
