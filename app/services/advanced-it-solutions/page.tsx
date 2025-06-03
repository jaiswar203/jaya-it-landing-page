import { ServicePageLayout } from "@/components/services"
import { Monitor } from "lucide-react"

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