"use client"
import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH3, 
  TypographyH5,
  TypographyBadge,
  TypographySmall 
} from "@/components/ui/typography"
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
  iconColor: string
  bgGradient: string
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
    name: "Attack Surface Management",
    abbreviation: "ASM",
    description: "Continuously monitor your external-facing assets for vulnerabilities and misconfigurations.",
    icon: <Search className="h-8 w-8" />,
    iconColor: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20"
  },
  {
    name: "Security Dashboard & SIEM Integration",
    description: "Aggregate alerts, logs, and threat intel into a centralized, actionable dashboard.",
    icon: <Monitor className="h-8 w-8" />,
    iconColor: "text-secondary",
    bgGradient: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20"
  },
  {
    name: "Threat Intelligence & Correlation",
    description: "Automated correlation of logs, IOCs, and user behavior for advanced threat detection.",
    icon: <Activity className="h-8 w-8" />,
    iconColor: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20"
  },
  {
    name: "Real-Time Alerting & Incident Response",
    description: "Streamline detection-to-response timelines through automated playbooks and alert prioritization.",
    icon: <Clock className="h-8 w-8" />,
    iconColor: "text-secondary",
    bgGradient: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20"
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
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Monitor className="h-4 w-4 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH2 className="mb-6">
              {title}
              <TypographyGradientSubtitle>
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH2>
            <TypographyLead muted>
              {description}
            </TypographyLead>
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
                  <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${service.bgGradient} hover:-translate-y-1 flex flex-col`}>
                    <CardHeader className="pb-4 flex-shrink-0">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <div className={service.iconColor}>
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">
                            <TypographyH5 className="leading-tight group-hover:text-primary transition-colors duration-300">
                              {service.name}
                              {service.abbreviation && (
                                <TypographySmall muted className="block font-normal mt-1">
                                  ({service.abbreviation})
                                </TypographySmall>
                              )}
                            </TypographyH5>
                          </CardTitle>
                          {service.frequency && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-secondary mt-2">
                              <Clock className="h-4 w-4" />
                              <TypographySmall className="font-medium">{service.frequency}</TypographySmall>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 text-center flex-grow flex items-center">
                      <CardDescription>
                        <TypographySmall className="leading-relaxed">
                          {service.description}
                        </TypographySmall>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedDiv>

          {/* View All Solutions Card */}
          <AnimatedDiv delay={0.8}>
            <div className="mt-8 flex justify-end">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <Card className="group border border-gray-200 dark:border-gray-700 hover:border-primary/60 bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20 hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1">
                  <Link href="/solutions" className="block p-6">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-secondary">
                          <Plus className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <TypographyH5 className="text-primary group-hover:text-secondary transition-colors duration-300 mb-1">
                          15+ Security Solutions
                        </TypographyH5>
                        <div className="flex items-center text-primary group-hover:text-secondary transition-colors duration-300">
                          <TypographySmall className="font-medium">Explore More</TypographySmall>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
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