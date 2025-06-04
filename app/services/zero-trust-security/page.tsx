import { ServicePageLayout } from "@/components/services"
import { ShieldCheck } from "lucide-react"
import {
  ZeroTrustHeroSection,
  ZeroTrustSolutionsSection,
  SecurityFrameworkSection,
  ZeroTrustBenefitsSection,
  SecurityComplianceSection,
  ZeroTrustImplementationSection,
  SecurityCaseStudiesSection,
  SecurityCTASection,
} from "@/components/services/zero-trust-security";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Zero Trust Security Solutions - Advanced Cybersecurity",
  description: "Implement comprehensive Zero Trust Security architecture with JAYAA IT Solution. Advanced cybersecurity, identity management, endpoint protection, and compliance solutions for enterprise security.",
  keywords: [
    "zero trust security",
    "cybersecurity solutions",
    "identity management",
    "endpoint protection",
    "network security",
    "security architecture",
    "advanced threat protection",
    "security compliance",
    "enterprise cybersecurity",
    "security framework",
    "multi-factor authentication",
    "security monitoring"
  ],
  alternates: {
    canonical: "/services/zero-trust-security",
  },
  openGraph: {
    title: "Zero Trust Security Solutions - Advanced Cybersecurity | JAYAA IT",
    description: "Implement comprehensive Zero Trust Security architecture with JAYAA IT Solution. Advanced cybersecurity, identity management, and compliance solutions.",
    url: "https://www.jayaaitsolution.com/services/zero-trust-security",
    type: "website",
    images: [
      {
        url: "/og-zero-trust-security.jpg",
        width: 1200,
        height: 630,
        alt: "Zero Trust Security Solutions - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Trust Security Solutions - Advanced Cybersecurity | JAYAA IT",
    description: "Implement comprehensive Zero Trust Security architecture with JAYAA IT Solution. Advanced cybersecurity, identity management, and compliance solutions.",
    images: ["/og-zero-trust-security.jpg"],
  },
};

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