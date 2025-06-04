import { ServicePageLayout } from "@/components/services"
import { Users } from "lucide-react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional IT Services - Expert Consulting & Support",
  description: "Expert professional IT services including strategic consulting, project management, technical support, and IT training. Experienced professionals for your technology initiatives.",
  keywords: [
    "professional IT services",
    "IT consulting",
    "project management",
    "technical support",
    "IT training",
    "technology consulting",
    "expert services",
    "strategic consulting",
    "IT professionals",
    "technology expertise",
    "business consulting",
    "IT advisory services"
  ],
  alternates: {
    canonical: "/services/professional-services",
  },
  openGraph: {
    title: "Professional IT Services - Expert Consulting & Support | JAYAA IT",
    description: "Expert professional IT services including strategic consulting, project management, technical support, and IT training.",
    url: "https://www.jayaaitsolution.com/services/professional-services",
    type: "website",
    images: [
      {
        url: "/og-professional-services.jpg",
        width: 1200,
        height: 630,
        alt: "Professional IT Services - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional IT Services - Expert Consulting & Support | JAYAA IT",
    description: "Expert professional IT services including strategic consulting, project management, technical support, and IT training.",
    images: ["/og-professional-services.jpg"],
  },
};

const professionalServices = [
  "Strategic IT Consulting",
  "Staff Augmentation & Project Support",
  "System Integrations & Migrations",
  "IT Audits & Compliance Readiness",
  "Managed Services & SLA-Based Support",
  "Technology Advisory Services",
  "Digital Strategy Consulting",
  "Project Management & Delivery",
  "Change Management Support"
]

const professionalStats = [
  { value: "Expert", label: "Consultants" },
  { value: "Proven", label: "Track Record" },
  { value: "Transparent", label: "Engagement" },
  { value: "National", label: "Reach" }
]

export default function ProfessionalServicesPage() {
  return (
    <ServicePageLayout
      serviceName="Professional Services"
      serviceTitle="IT Expertise, Delivered On-Demand"
      serviceIcon={<Users size={120} />}
      heroDescription="Our Professional Services team becomes an extension of your IT department — delivering deep technical expertise, project execution excellence, and a commitment to your success."
      fullDescription="Our Professional Services offering provides organizations with access to specialized IT expertise when and where it's needed most. Whether you need strategic guidance, additional resources for critical projects, or ongoing managed support, our team of certified professionals delivers results that align with your business objectives."
      services={professionalServices}
      gradient="from-purple-500 to-violet-500"
      stats={professionalStats}
      primaryButtonText="Get Expert Support"
      primaryButtonHref="/contact?service=professional-services"
      benefits={[
        "Proven implementation track record",
        "Transparent engagement models",
        "Local presence, national reach",
        "Flexible resource allocation",
        "Industry-specific expertise",
        "Results-driven approach"
      ]}
      additionalContent="Empower your digital vision with experts who speak your language. Our professional services are designed to complement your internal capabilities while delivering measurable business value through strategic IT initiatives."
    />
  )
} 