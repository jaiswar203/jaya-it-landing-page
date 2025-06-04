import { ServicePageLayout } from "@/components/services"
import { Monitor, Settings } from "lucide-react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced IT Solutions - Enterprise Technology Services",
  description: "Comprehensive advanced IT solutions including cloud infrastructure, enterprise applications, system integration, and technology consulting. Scalable solutions for modern business needs.",
  keywords: [
    "advanced IT solutions",
    "enterprise technology",
    "cloud infrastructure",
    "system integration",
    "enterprise applications",
    "technology consulting",
    "IT architecture",
    "scalable solutions",
    "business technology",
    "infrastructure services",
    "technology implementation",
    "enterprise IT services"
  ],
  alternates: {
    canonical: "/services/advanced-it-solutions",
  },
  openGraph: {
    title: "Advanced IT Solutions - Enterprise Technology Services | JAYAA IT",
    description: "Comprehensive advanced IT solutions including cloud infrastructure, enterprise applications, system integration, and technology consulting.",
    url: "https://www.jayaaitsolution.com/services/advanced-it-solutions",
    type: "website",
    images: [
      {
        url: "/og-advanced-it-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced IT Solutions - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced IT Solutions - Enterprise Technology Services | JAYAA IT",
    description: "Comprehensive advanced IT solutions including cloud infrastructure, enterprise applications, system integration, and technology consulting.",
    images: ["/og-advanced-it-solutions.jpg"],
  },
};

const advancedITServices = [
  "Secure Network Architecture Design",
  "Endpoint Protection & Patch Management",
  "Virtualization & Cloud Services (AWS, Azure)",
  "Data Backup & Disaster Recovery Planning",
  "AI-Powered IT Monitoring",
  "Enterprise Security Solutions",
  "Infrastructure Optimization",
  "High-Availability System Design",
  "Performance Monitoring & Analytics"
]

const advancedITStats = [
  { value: "24/7", label: "Technical Support" },
  { value: "99.9%", label: "System Uptime" },
  { value: "Certified", label: "Engineers" },
  { value: "Scalable", label: "Solutions" }
]

export default function AdvancedITSolutionsPage() {
  return (
    <ServicePageLayout
      serviceName="Advanced IT Solutions"
      serviceTitle="Future-Ready Tech Solutions Built Around You"
      serviceIcon={<Monitor size={120} />}
      heroDescription="Jayaa IT Solution delivers cutting-edge, customized IT solutions that grow with your business. Whether it's setting up enterprise networks, enhancing cybersecurity, or deploying intelligent systems — we ensure unmatched performance and uptime."
      fullDescription="Our Advanced IT Solutions provide comprehensive technology infrastructure designed to support your business growth. From secure network architecture to AI-powered monitoring systems, we deliver enterprise-grade solutions with built-in security, scalability, and reliability at every layer."
      services={advancedITServices}
      gradient="from-green-500 to-emerald-500"
      stats={advancedITStats}
      primaryButtonText="Explore Solutions"
      primaryButtonHref="/contact?service=advanced-it-solutions"
      benefits={[
        "Industry-certified engineers",
        "Built-in security from day one",
        "24/7 technical support",
        "Scalable, cost-efficient deployments",
        "Future-proof architecture",
        "Proactive maintenance and monitoring"
      ]}
      additionalContent="Technology that adapts, evolves, and secures — all under one roof. Our solutions are designed to grow with your business while maintaining the highest standards of security, performance, and reliability."
    />
  )
} 