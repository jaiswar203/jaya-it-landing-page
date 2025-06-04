import {
  MonitoringSolutionsSection,
  ChallengesApproachSection
} from "@/components/solutions"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Solutions - Monitoring & Security Solutions",
  description: "Comprehensive IT solutions including security monitoring, threat detection, compliance management, and infrastructure monitoring. Advanced solutions for enterprise security and operational excellence.",
  keywords: [
    "IT solutions",
    "security monitoring",
    "threat detection",
    "compliance management",
    "infrastructure monitoring",
    "security solutions",
    "monitoring tools",
    "enterprise solutions",
    "IT security",
    "operational monitoring",
    "business solutions",
    "technology solutions"
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "IT Solutions - Monitoring & Security Solutions | JAYAA IT",
    description: "Comprehensive IT solutions including security monitoring, threat detection, compliance management, and infrastructure monitoring.",
    url: "https://www.jayaaitsolution.com/solutions",
    type: "website",
    images: [
      {
        url: "/og-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "IT Solutions - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions - Monitoring & Security Solutions | JAYAA IT",
    description: "Comprehensive IT solutions including security monitoring, threat detection, compliance management, and infrastructure monitoring.",
    images: ["/og-solutions.jpg"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <MonitoringSolutionsSection />
      <ChallengesApproachSection />
    </>
  )
}
