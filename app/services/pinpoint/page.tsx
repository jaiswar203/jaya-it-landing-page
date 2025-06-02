import { ServicePageLayout } from "@/components/services"
import { Target } from "lucide-react"

const pinpointServices = [
  "Cloud Security Assessment",
  "Phishing Simulation Services",
  "Red Teaming Services",
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "Secure Code Review Services",
  "Breach and Attack Simulation (BAS) Services",
  "IoT/OT Security Assessment",
  "Application Security Testing (SAST/DAST)",
  "Infrastructure Security Assessment"
]

const pinpointStats = [
  { value: "1000+", label: "Assessments Completed" },
  { value: "95%", label: "Vulnerability Detection Rate" },
  { value: "Zero", label: "False Positives" },
  { value: "Expert", label: "Security Team" }
]

export default function PinpointPage() {
  return (
    <ServicePageLayout
      serviceName="Pinpoint"
      serviceTitle="Assessment & Simulation"
      serviceIcon={<Target size={120} />}
      heroDescription="Identify vulnerabilities and strengthen your defenses with our comprehensive security assessment and simulation services designed to test every aspect of your security posture."
      fullDescription="Pinpoint offers precision security insights through rigorous testing methodologies, helping you understand potential attack vectors, uncover hidden vulnerabilities, and evaluate the effectiveness of your existing defenses."
      services={pinpointServices}
      gradient="from-blue-500 to-cyan-500"
      stats={pinpointStats}
      primaryButtonText="Schedule Assessment"
      primaryButtonHref="/contact?service=pinpoint"
    />
  )
}
