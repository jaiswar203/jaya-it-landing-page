"use client"
import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Shield, 
  Database, 
  FileText, 
  Mail, 
  Code, 
  Search, 
  Users, 
  Key, 
  Globe, 
  Activity, 
  Settings,
  Monitor,
  Clock,
  Calendar
} from "lucide-react"

interface SecurityService {
  name: string
  abbreviation?: string
  frequency?: string
  description: string
  icon: React.ReactNode
  gradient: string
  position: { row: number; col: number }
  connections?: number[]
}

interface InformationSecurityDashboardSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const securityServices: SecurityService[] = [
  {
    name: "Data Classification",
    description: "Automated identification and categorization of sensitive data",
    icon: <Database className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    position: { row: 0, col: 0 },
    connections: [1]
  },
  {
    name: "Data Loss Prevention",
    abbreviation: "DLP",
    description: "Prevent unauthorized data transmission and leaks",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-red-500 to-pink-500",
    position: { row: 0, col: 1 },
    connections: [2]
  },
  {
    name: "Document Rights Management",
    abbreviation: "DRM",
    description: "Control access and usage of digital documents",
    icon: <FileText className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    position: { row: 0, col: 2 },
    connections: [3]
  },
  {
    name: "DMARC",
    description: "Email authentication and domain protection",
    icon: <Mail className="h-6 w-6" />,
    gradient: "from-purple-500 to-violet-500",
    position: { row: 0, col: 3 },
    connections: [4]
  },
  {
    name: "VA and Penetration",
    abbreviation: "VA-PT",
    description: "Vulnerability assessment and penetration testing",
    icon: <Search className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    position: { row: 0, col: 4 }
  },
  {
    name: "Source Code Review",
    frequency: "Quarterly",
    description: "Comprehensive code security analysis",
    icon: <Code className="h-6 w-6" />,
    gradient: "from-indigo-500 to-blue-500",
    position: { row: 1, col: 0 },
    connections: [6]
  },
  {
    name: "Attack Surface Management",
    abbreviation: "ASM",
    description: "Monitor and manage external attack vectors",
    icon: <Monitor className="h-6 w-6" />,
    gradient: "from-teal-500 to-cyan-500",
    position: { row: 1, col: 1 },
    connections: [7]
  },
  {
    name: "Breach & Attack Simulation",
    abbreviation: "BAS",
    description: "Continuous security validation testing",
    icon: <Activity className="h-6 w-6" />,
    gradient: "from-rose-500 to-pink-500",
    position: { row: 1, col: 2 },
    connections: [8]
  },
  {
    name: "Red Teaming",
    description: "Advanced persistent threat simulation",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-red-600 to-red-500",
    position: { row: 1, col: 3 },
    connections: [9]
  },
  {
    name: "Phishing Simulations",
    frequency: "Quarterly",
    description: "Employee security awareness testing",
    icon: <Mail className="h-6 w-6" />,
    gradient: "from-yellow-500 to-orange-500",
    position: { row: 1, col: 4 }
  },
  {
    name: "Awareness Emails & Wallpapers",
    frequency: "Weekly",
    description: "Regular security education content",
    icon: <Mail className="h-6 w-6" />,
    gradient: "from-green-600 to-green-500",
    position: { row: 2, col: 0 },
    connections: [11]
  },
  {
    name: "API Security",
    description: "Secure API endpoints and data transmission",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-blue-600 to-indigo-500",
    position: { row: 2, col: 1 },
    connections: [12]
  },
  {
    name: "PIM/PAM",
    description: "Privileged Identity and Access Management",
    icon: <Key className="h-6 w-6" />,
    gradient: "from-purple-600 to-purple-500",
    position: { row: 2, col: 2 },
    connections: [13]
  },
  {
    name: "SD-WAN",
    description: "Software-defined wide area networking",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-cyan-600 to-blue-500",
    position: { row: 2, col: 3 },
    connections: [14]
  },
  {
    name: "Managed Services",
    description: "24/7 security operations and monitoring",
    icon: <Settings className="h-6 w-6" />,
    gradient: "from-gray-600 to-gray-500",
    position: { row: 2, col: 4 }
  }
]

// Connection lines component
const ConnectionLines = () => {
  const connections = [
    { from: { row: 0, col: 0 }, to: { row: 0, col: 1 } },
    { from: { row: 0, col: 1 }, to: { row: 0, col: 2 } },
    { from: { row: 0, col: 2 }, to: { row: 0, col: 3 } },
    { from: { row: 0, col: 3 }, to: { row: 0, col: 4 } },
    { from: { row: 1, col: 0 }, to: { row: 1, col: 1 } },
    { from: { row: 1, col: 1 }, to: { row: 1, col: 2 } },
    { from: { row: 1, col: 2 }, to: { row: 1, col: 3 } },
    { from: { row: 1, col: 3 }, to: { row: 1, col: 4 } },
    { from: { row: 2, col: 0 }, to: { row: 2, col: 1 } },
    { from: { row: 2, col: 1 }, to: { row: 2, col: 2 } },
    { from: { row: 2, col: 2 }, to: { row: 2, col: 3 } },
    { from: { row: 2, col: 3 }, to: { row: 2, col: 4 } },
  ]

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ zIndex: 0 }}>
      {connections.map((connection, index) => {
        const startX = (connection.from.col * 20) + 10
        const startY = (connection.from.row * 25) + 12.5
        const endX = (connection.to.col * 20) + 10
        const endY = (connection.to.row * 25) + 12.5

        return (
          <motion.line
            key={index}
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: index * 0.1, duration: 1, ease: "easeInOut" }}
          />
        )
      })}
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function InformationSecurityDashboardSection({
  badge = "Security Dashboard",
  title = "Information Security Dashboard",
  subtitle = "& Monitoring Solutions",
  description = "Comprehensive security monitoring and management solutions providing real-time visibility, threat detection, and automated response capabilities.",
  primaryButtonText = "View Security Dashboard",
  primaryButtonHref = "/solutions",
  secondaryButtonText = "Schedule Assessment",
  secondaryButtonHref = "/contact",
  className = ""
}: InformationSecurityDashboardSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Monitor className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {description}
            </p>
          </AnimatedDiv>
        </div>

        {/* Security Services Flow Chart */}
        <div className="relative mb-16">
          <AnimatedDiv delay={0.2}>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <ConnectionLines />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6" style={{ minHeight: '600px' }}>
                {securityServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="relative"
                    style={{
                      gridRow: service.position.row + 1,
                      gridColumn: service.position.col + 1
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    <Card className="group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:-translate-y-1 relative z-10">
                      <CardHeader className="pb-3 text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-3`}>
                          {service.icon}
                        </div>
                        <CardTitle className="text-sm font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                          {service.name}
                          {service.abbreviation && (
                            <span className="block text-xs text-muted-foreground font-normal">
                              ({service.abbreviation})
                            </span>
                          )}
                        </CardTitle>
                        {service.frequency && (
                          <div className="flex items-center justify-center space-x-1 text-xs text-secondary">
                            <Clock className="h-3 w-3" />
                            <span>{service.frequency}</span>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-xs text-center leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* Key Features */}
        <AnimatedDiv delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg mb-4">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
              <p className="text-muted-foreground">24/7 continuous monitoring and alerting for all security services</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrated Protection</h3>
              <p className="text-muted-foreground">Seamlessly connected security layers for comprehensive protection</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Response</h3>
              <p className="text-muted-foreground">Intelligent automation for faster threat detection and response</p>
            </div>
          </div>
        </AnimatedDiv>

        <div className="text-center">
          <AnimatedDiv delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50">
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
} 