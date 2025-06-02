import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  DatabaseZap,
  Code,
  Search,
  Users,
  MailCheck,
  Network,
  LockKeyhole,
  Router,
  FileLock,
  ShieldQuestion,
  MessageCircle,
  AlertTriangle,
  CheckSquare,
  FileText,
  Presentation,
  ArrowRight,
  Monitor,
  Zap
} from "lucide-react"

interface Solution {
  name: string
  description: string
  icon: React.ReactNode
  gradient: string
  category: string
}

interface MonitoringSolutionsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  solutions?: Solution[]
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const defaultSolutions: Solution[] = [
  {
    name: "Data Classification",
    description: "Automated identification and categorization of sensitive data across your organization",
    icon: <DatabaseZap className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    category: "Data Protection"
  },
  {
    name: "Document Rights Management",
    description: "Control access and usage of digital documents with advanced DRM capabilities",
    icon: <FileLock className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    category: "Data Protection"
  },
  {
    name: "DMARC Email Protection",
    description: "Prevent email spoofing and phishing with domain-based message authentication",
    icon: <MailCheck className="h-6 w-6" />,
    gradient: "from-purple-500 to-violet-500",
    category: "Email Security"
  },
  {
    name: "Source Code Review",
    description: "Quarterly comprehensive security analysis of your application source code",
    icon: <Code className="h-6 w-6" />,
    gradient: "from-indigo-500 to-blue-500",
    category: "Code Security"
  },
  {
    name: "Attack Surface Management",
    description: "Monitor and manage external attack vectors and exposed assets",
    icon: <ShieldQuestion className="h-6 w-6" />,
    gradient: "from-teal-500 to-cyan-500",
    category: "Threat Management"
  },
  {
    name: "Breach & Attack Simulation",
    description: "Continuous security validation through simulated breach scenarios",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-rose-500 to-pink-500",
    category: "Threat Management"
  },
  {
    name: "Red Teaming",
    description: "Advanced persistent threat simulation to test your security defenses",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-red-600 to-red-500",
    category: "Security Testing"
  },
  {
    name: "Security Awareness Training",
    description: "Weekly security awareness emails and educational wallpapers",
    icon: <MessageCircle className="h-6 w-6" />,
    gradient: "from-green-600 to-green-500",
    category: "Training"
  },
  {
    name: "API Security",
    description: "Comprehensive protection for your APIs against threats and vulnerabilities",
    icon: <LockKeyhole className="h-6 w-6" />,
    gradient: "from-blue-600 to-indigo-500",
    category: "Application Security"
  },
  {
    name: "Privileged Access Management",
    description: "Control and monitor privileged user access across your infrastructure",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-purple-600 to-purple-500",
    category: "Access Control"
  },
  {
    name: "SD-WAN Solutions",
    description: "Software-defined wide area networking for enhanced connectivity",
    icon: <Router className="h-6 w-6" />,
    gradient: "from-cyan-600 to-blue-500",
    category: "Network Security"
  },
  {
    name: "Data Loss Prevention",
    description: "Prevent unauthorized data transmission and protect sensitive information",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-red-500 to-pink-500",
    category: "Data Protection"
  },
  {
    name: "VA and Penetration Testing",
    description: "Comprehensive vulnerability assessment and penetration testing services",
    icon: <Search className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    category: "Security Testing"
  },
  {
    name: "Phishing Simulations",
    description: "Quarterly phishing simulation exercises to test employee awareness",
    icon: <MailCheck className="h-6 w-6" />,
    gradient: "from-yellow-500 to-orange-500",
    category: "Training"
  },
  {
    name: "Comprehensive Managed Services",
    description: "24/7 security operations and monitoring with expert support",
    icon: <Network className="h-6 w-6" />,
    gradient: "from-gray-600 to-gray-500",
    category: "Managed Services"
  }
]

// Group solutions by category
const groupSolutionsByCategory = (solutions: Solution[]) => {
  return solutions.reduce((acc, solution) => {
    if (!acc[solution.category]) {
      acc[solution.category] = []
    }
    acc[solution.category].push(solution)
    return acc
  }, {} as Record<string, Solution[]>)
}

export default function MonitoringSolutionsSection({
  badge = "Security Solutions",
  title = "Information Security Dashboard",
  subtitle = "& Monitoring Solutions",
  description = "Comprehensive suite of advanced cybersecurity tools and services designed to protect, monitor, and enhance your organization's security posture.",
  solutions = defaultSolutions,
  primaryButtonText = "Schedule Security Assessment",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View All Services",
  secondaryButtonHref = "/services",
  className = ""
}: MonitoringSolutionsSectionProps) {
  const groupedSolutions = groupSolutionsByCategory(solutions)

  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-6 py-3 rounded-full mb-8 border border-secondary/20">
              <Monitor className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{badge}</span>
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

        {/* Solutions by Category */}
        <div className="space-y-20">
          {Object.entries(groupedSolutions).map(([category, categorySolutions], categoryIndex) => (
            <AnimatedDiv key={category} delay={categoryIndex * 0.2}>
              <div className="space-y-12">
                {/* Category Header */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-4">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                  </div>
                </div>
                
                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categorySolutions.map((solution, index) => (
                    <AnimatedDiv key={solution.name} delay={categoryIndex * 0.2 + index * 0.1}>
                      <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                        {/* Gradient Background on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        <CardHeader className="text-center space-y-4 pb-4 relative z-10">
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto`}>
                            {solution.icon}
                          </div>
                          <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                            {solution.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 relative z-10">
                          <CardDescription className="text-sm text-center leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {solution.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <AnimatedDiv delay={0.8}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Enhance Your Security Posture?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with our comprehensive security solutions and protect your organization from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
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