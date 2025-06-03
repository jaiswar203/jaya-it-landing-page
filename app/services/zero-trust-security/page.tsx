import { ServicePageLayout } from "@/components/services"
import { ShieldCheck } from "lucide-react"

const zeroTrustServices = [
  "Identity & Access Management (IAM)",
  "Continuous Risk-Based Authentication",
  "Network Micro-Segmentation",
  "Device Compliance Enforcement",
  "End-to-End Threat Visibility",
  "Privileged Access Management",
  "Multi-Factor Authentication Implementation",
  "Zero Trust Network Access (ZTNA)",
  "Security Policy Engine"
]

const zeroTrustStats = [
  { value: "Zero", label: "Trust Model" },
  { value: "100%", label: "Access Verification" },
  { value: "Continuous", label: "Monitoring" },
  { value: "Real-time", label: "Threat Response" }
]

export default function ZeroTrustSecurityPage() {
  return (
    <ServicePageLayout
      serviceName="Zero Trust Security Services"
      serviceTitle="Never Trust, Always Verify"
      serviceIcon={<ShieldCheck size={120} />}
      heroDescription="Secure Every Access Point — In today's perimeter-less digital world, traditional security models are obsolete. Our Zero Trust Security Services enforce strict identity verification, micro-segmentation, and least-privilege access across users, devices, and networks."
      fullDescription="Zero Trust Security Services implement a comprehensive security framework that eliminates implicit trust and continuously validates every transaction. Our approach ensures that every user, device, and network flow is authenticated, authorized, and continuously validated for security configuration and posture before being granted access to applications and data."
      services={zeroTrustServices}
      gradient="from-red-500 to-orange-500"
      stats={zeroTrustStats}
      primaryButtonText="Implement Zero Trust"
      primaryButtonHref="/contact?service=zero-trust-security"
      benefits={[
        "Prevent lateral movement",
        "Reduce insider threats", 
        "Ensure compliance readiness",
        "Protect remote and hybrid work environments",
        "Enhanced visibility and control",
        "Reduced attack surface"
      ]}
      additionalContent="Transition to a more resilient and proactive security framework — because trust is earned, not given. Our Zero Trust approach provides comprehensive protection against modern cyber threats while enabling secure digital transformation."
    />
  )
} 