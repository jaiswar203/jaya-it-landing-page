import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  Server,
  Users,
  Settings,
  BarChart2,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Globe
} from "lucide-react"

interface Offering {
  category: string
  items: string[]
  icon: React.ReactNode
  gradient: string
  description: string
}

interface CoreCapabilitiesSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  offerings?: Record<string, string[]>
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const transformOfferingsToStructured = (offerings: Record<string, string[]>): Offering[] => {
  const iconMap = {
    "IT Security Solutions": {
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-red-500 to-pink-500",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure"
    },
    "Infrastructure Management": {
      icon: <Server className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "End-to-end infrastructure management and optimization services"
    },
    "Cyber Security Services": {
      icon: <Users className="h-8 w-8" />,
      gradient: "from-purple-500 to-violet-500",
      description: "Advanced cybersecurity services and threat protection strategies"
    },
    "Managed Services": {
      icon: <Settings className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
      description: "24/7 managed services for continuous monitoring and support"
    }
  }

  return Object.entries(offerings).map(([category, items]) => ({
    category,
    items,
    icon: iconMap[category as keyof typeof iconMap]?.icon || <BarChart2 className="h-8 w-8" />,
    gradient: iconMap[category as keyof typeof iconMap]?.gradient || "from-gray-500 to-gray-600",
    description: iconMap[category as keyof typeof iconMap]?.description || "Specialized services tailored to your business needs"
  }))
}

const defaultOfferings: Record<string, string[]> = {
  "IT Security Solutions": [
    "Next-Generation Firewalls",
    "Data Loss Prevention (DLP)",
    "Document Rights Management (DRM)",
    "Email Security & Protection",
    "Network Security Monitoring",
    "Security Information and Event Management (SIEM)"
  ],
  "Infrastructure Management": [
    "Audit Tool (Compliance Mitigation)",
    "Data Classification & Discovery",
    "Privilege Access Management (PAM/PIM)",
    "Endpoint Protection & Management",
    "Zero Trust Architecture Services",
    "Virtual Desktop Infrastructure (VDI)",
    "Application Performance Monitoring (APM)",
    "Cloud Infrastructure Optimization"
  ],
  "Cyber Security Services": [
    "Vulnerability Assessment and Penetration Testing (VAPT)",
    "Security Compliance and Risk Management",
    "Incident Response and Forensic Analysis",
    "Security Awareness Training Programs",
    "Threat Intelligence and Analysis",
    "Digital Forensics and Investigation",
    "Security Architecture Design"
  ],
  "Managed Services": [
    "24/7 IT Support and Monitoring",
    "Managed Security Services (MSS)",
    "Endpoint Management & Monitoring",
    "Cloud Services Management",
    "Security Operations Center (SOC)",
    "IT Service Desk & Help Desk",
    "Backup and Disaster Recovery"
  ]
}

export default function CoreCapabilitiesSection({
  badge = "Core Capabilities",
  title = "Broad Spectrum",
  subtitle = "Solutions",
  description = "Our comprehensive range of IT services covers every aspect of your technology infrastructure, from security to compliance and everything in between.",
  offerings = defaultOfferings,
  primaryButtonText = "Explore All Capabilities",
  primaryButtonHref = "/solutions",
  secondaryButtonText = "Contact Our Experts",
  secondaryButtonHref = "/contact",
  className = ""
}: CoreCapabilitiesSectionProps) {
  const structuredOfferings = transformOfferingsToStructured(offerings)

  return (
    <section className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-6 py-3 rounded-full mb-8 border border-secondary/20">
              <Target className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedDiv>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {structuredOfferings.map((offering, index) => (
            <AnimatedDiv key={offering.category} delay={index * 0.2}>
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="space-y-6 relative z-10">
                  {/* Category Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${offering.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {offering.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                        {offering.category}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  {/* Services List */}
                  <div className="grid gap-3">
                    {offering.items.map((item, itemIndex) => (
                      <AnimatedDiv key={item} delay={index * 0.2 + itemIndex * 0.05}>
                        <div className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-primary/5 dark:from-gray-800/50 dark:to-primary/5 transition-all duration-300 hover:scale-105 group-hover:bg-white/50 border border-transparent hover:border-primary/20">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground leading-relaxed">
                            {item}
                          </span>
                        </div>
                      </AnimatedDiv>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {/* Statistics Section */}
        <AnimatedDiv delay={0.6} className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Security Solutions</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Compliance Coverage</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Support Available</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Service Uptime</div>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        {/* Call to Action */}
        <div className="text-center">
          <AnimatedDiv delay={0.8}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-secondary to-primary text-white shadow-lg mb-8">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Transform Your IT Infrastructure Today
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Leverage our comprehensive capabilities to build a secure, efficient, and future-ready technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
                  <Link href={primaryButtonHref}>
                    {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 px-8 py-4 text-lg">
                  <Link href={secondaryButtonHref}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
} 