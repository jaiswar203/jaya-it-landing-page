import { ServicePageLayout } from "@/components/services"
import { Zap } from "lucide-react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation Services - Modernize Your Business",
  description: "Accelerate your digital transformation journey with JAYAA IT Solution. Cloud migration, process automation, data analytics, and modern technology solutions for business growth and efficiency.",
  keywords: [
    "digital transformation",
    "cloud migration",
    "process automation",
    "business modernization",
    "data analytics",
    "digital strategy",
    "technology modernization",
    "enterprise transformation",
    "automation solutions",
    "digital innovation",
    "business process optimization",
    "cloud transformation"
  ],
  alternates: {
    canonical: "/services/digital-transformation",
  },
  openGraph: {
    title: "Digital Transformation Services - Modernize Your Business | JAYAA IT",
    description: "Accelerate your digital transformation journey with JAYAA IT Solution. Cloud migration, process automation, data analytics, and modern technology solutions.",
    url: "https://www.jayaaitsolution.com/services/digital-transformation",
    type: "website",
    images: [
      {
        url: "/og-digital-transformation.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Transformation Services - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Services - Modernize Your Business | JAYAA IT",
    description: "Accelerate your digital transformation journey with JAYAA IT Solution. Cloud migration, process automation, data analytics, and modern technology solutions.",
    images: ["/og-digital-transformation.jpg"],
  },
};

const digitalTransformationServices = [
  "Legacy-to-Cloud Modernization",
  "Robotic Process Automation (RPA)",
  "Smart Workflow Engineering",
  "Business Intelligence Dashboards",
  "API & System Integration",
  "Digital Process Optimization",
  "Intelligent Document Processing",
  "Cloud-Native Application Development",
  "DevOps & CI/CD Implementation"
]

const digitalTransformationStats = [
  { value: "70%", label: "Faster Processes" },
  { value: "Real-time", label: "Decision Making" },
  { value: "90%", label: "Error Reduction" },
  { value: "Scalable", label: "Infrastructure" }
]

export default function DigitalTransformationPage() {
  return (
    <ServicePageLayout
      serviceName="Digital Transformation & Automation"
      serviceTitle="Reimagining Business Through Intelligent Automation"
      serviceIcon={<Zap size={120} />}
      heroDescription="We empower organizations to modernize legacy processes, eliminate inefficiencies, and drive innovation using digital-first strategies. From cloud migration to workflow automation — we guide you every step of the transformation journey."
      fullDescription="Our Digital Transformation & Automation services help organizations transition from traditional business models to digital-first operations. We leverage cutting-edge technologies including AI, machine learning, and intelligent automation to streamline processes, enhance productivity, and create new value propositions for your business."
      services={digitalTransformationServices}
      gradient="from-blue-500 to-cyan-500"
      stats={digitalTransformationStats}
      primaryButtonText="Start Transformation"
      primaryButtonHref="/contact?service=digital-transformation"
      benefits={[
        "70% faster processes",
        "Real-time decision making",
        "Reduced manual errors",
        "Scalable digital infrastructure",
        "Enhanced customer experience",
        "Improved operational efficiency"
      ]}
      additionalContent="Digitize smarter. Operate faster. Lead the change. Our comprehensive approach ensures seamless transformation while maintaining business continuity and maximizing ROI on your digital investments."
    />
  )
} 