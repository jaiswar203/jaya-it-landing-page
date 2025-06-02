import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  SearchCheck,
  CloudCog,
  ListChecks,
  Zap,
  Star,
  CheckCircle,
  Target,
  Shield
} from "lucide-react"

interface ServiceCategory {
  name: string
  title: string
  icon: React.ReactNode
  description: string
  href: string
  items: string[]
  gradient: string
  iconBg: string
}

interface ServiceSuitesSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  serviceCategories?: ServiceCategory[]
  className?: string
}

const defaultServiceCategories: ServiceCategory[] = [
  {
    name: "Peregrine",
    title: "Managed Detection & Response",
    icon: <ShieldCheck className="h-8 w-8" />,
    description: "Proactive threat detection and response services to safeguard your digital assets with 24/7 monitoring and expert analysis.",
    href: "/services/peregrine",
    items: [
      "Managed Detection & Response (MDR)",
      "Threat Intelligence Services", 
      "Digital Forensics Services",
      "Brand Risk & Dark Web Monitoring",
      "Security Orchestration & Response (SOAR)",
      "Endpoint Detection & Response (EDR)"
    ],
    gradient: "from-red-500 to-orange-500",
    iconBg: "from-red-500/10 to-orange-500/10"
  },
  {
    name: "Pinpoint",
    title: "Assessment & Simulation",
    icon: <SearchCheck className="h-8 w-8" />,
    description: "Comprehensive security assessments and simulations to identify vulnerabilities and strengthen your defenses.",
    href: "/services/pinpoint",
    items: [
      "Vulnerability Assessment & Penetration Testing",
      "Cloud Security Assessment",
      "Phishing Simulation Services",
      "Red Teaming Services",
      "Breach and Attack Simulation (BAS)",
      "Application Security Testing (SAST/DAST)"
    ],
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "from-blue-500/10 to-cyan-500/10"
  },
  {
    name: "MSP247",
    title: "Managed Cloud & Security",
    icon: <CloudCog className="h-8 w-8" />,
    description: "Round-the-clock managed services for cloud infrastructure and security, ensuring optimal performance and protection.",
    href: "/services/msp247",
    items: [
      "24x7 Managed Cloud Services (AWS, Azure, GCP)",
      "Cloud Security Implementation & Management",
      "Disaster Recovery & Business Continuity",
      "Security Patching & Vulnerability Management",
      "Web Application Firewall (WAF) Services",
      "DevOps & Infrastructure as Code (IaC)"
    ],
    gradient: "from-green-500 to-emerald-500",
    iconBg: "from-green-500/10 to-emerald-500/10"
  },
  {
    name: "nCompass",
    title: "Consulting & Compliance",
    icon: <ListChecks className="h-8 w-8" />,
    description: "Expert consulting for IT governance, risk management, and regulatory compliance across multiple frameworks.",
    href: "/services/ncompass",
    items: [
      "Virtual CISO (vCISO) Services",
      "DPDP Act Consulting & Compliance",
      "ISO 27001 Consulting & Certification",
      "RBI Master Direction Compliance (BFSI)",
      "Security Awareness Training Programs",
      "IT Governance, Risk & Compliance (GRC)"
    ],
    gradient: "from-purple-500 to-violet-500",
    iconBg: "from-purple-500/10 to-violet-500/10"
  }
]

export default function ServiceSuitesSection({
  badge = "Our Services",
  title = "Specialized Service",
  subtitle = "Suites",
  description = "Comprehensive IT solutions designed to empower organizations with cutting-edge technology, robust security, and expert guidance.",
  serviceCategories = defaultServiceCategories,
  className = ""
}: ServiceSuitesSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
              <Star className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedDiv>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {serviceCategories.map((category, index) => (
            <AnimatedDiv key={category.name} delay={index * 0.2}>
              <Card className="group h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-3 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center space-y-6 pb-8 relative z-10">
                  {/* Service Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${category.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto`}>
                    {category.icon}
                  </div>
                  
                  {/* Service Name & Title */}
                  <div className="space-y-3">
                    <CardTitle className="text-3xl font-bold text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {category.title}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8 relative z-10">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {category.description}
                  </p>
                  
                  {/* Service Items */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-center mb-6 flex items-center justify-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>Key Services</span>
                    </h4>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={item} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-primary/5 dark:from-gray-800/50 dark:to-primary/5 transition-all duration-300 hover:scale-105 group-hover:bg-white/50">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-6 text-center">
                    <Button asChild className={`bg-gradient-to-r ${category.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-semibold group-hover:scale-105`}>
                      <Link href={category.href} className="flex items-center">
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 