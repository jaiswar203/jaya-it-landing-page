"use client"
import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Shield, 
  Search, 
  Users, 
  Key, 
  Activity, 
  Settings,
  Monitor,
  Clock,
  Plus
} from "lucide-react"

interface SecurityService {
  name: string
  abbreviation?: string
  frequency?: string
  description: string
  icon: React.ReactNode
  gradient: string
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

const featuredSecurityServices: SecurityService[] = [
  {
    name: "Data Loss Prevention",
    abbreviation: "DLP",
    description: "Advanced protection against unauthorized data transmission and leaks with real-time monitoring",
    icon: <Shield className="h-8 w-8" />,
    gradient: "from-red-500 to-pink-500"
  },
  {
    name: "Vulnerability Assessment",
    abbreviation: "VA-PT",
    description: "Comprehensive vulnerability assessment and penetration testing for proactive security",
    icon: <Search className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Privileged Access Management",
    abbreviation: "PIM/PAM",
    description: "Secure privileged identity and access management with advanced authentication",
    icon: <Key className="h-8 w-8" />,
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Security Awareness Training",
    frequency: "Quarterly",
    description: "Regular phishing simulations and security awareness programs for employee education",
    icon: <Users className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-500"
  }
]

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
            <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Monitor className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
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

        {/* Featured Security Services */}
        <div className="mb-16">
          <AnimatedDiv delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredSecurityServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:-translate-y-2 hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto mb-4`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                        {service.name}
                        {service.abbreviation && (
                          <span className="block text-sm text-muted-foreground font-normal mt-1">
                            ({service.abbreviation})
                          </span>
                        )}
                      </CardTitle>
                      {service.frequency && (
                        <div className="flex items-center justify-center space-x-2 text-sm text-secondary mt-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{service.frequency}</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0 text-center">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedDiv>

          {/* View All Solutions Card */}
          <AnimatedDiv delay={0.8}>
            <div className="mt-8 flex justify-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <Card className="group border-2 border-dashed border-primary/30 hover:border-primary/60 bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 hover:shadow-xl cursor-pointer">
                  <Link href="/solutions" className="block p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 mx-auto mb-4">
                      <Plus className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                      View All Security Solutions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Discover our complete suite of 15+ security services and solutions
                    </p>
                    <div className="inline-flex items-center text-primary group-hover:text-secondary transition-colors duration-300 mt-4">
                      <span className="text-sm font-medium">Explore More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </AnimatedDiv>
        </div>

      </div>
    </section>
  )
} 