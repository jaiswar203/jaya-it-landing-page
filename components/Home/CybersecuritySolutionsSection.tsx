import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Shield, 
  Eye, 
  Activity, 
  Code, 
  SearchCheck, 
  Database, 
  Lock, 
  ShieldCheck, 
  Globe, 
  Mail, 
  Users 
} from "lucide-react"

interface Solution {
  name: string
  description: string
  icon: React.ReactNode
}

interface Category {
  category: string
  solutions: Solution[]
}

interface CybersecuritySolutionsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  categories?: Category[]
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const defaultCategories: Category[] = [
  {
    category: "Threat Detection & Response",
    solutions: [
      { name: "Dark Web Monitoring", description: "Detect compromised credentials and organizational exposure", icon: <Eye className="h-6 w-6" /> },
      { name: "SOC Monitoring 24/7", description: "Round-the-clock security operations center monitoring", icon: <Activity className="h-6 w-6" /> },
      { name: "Cybersecurity Dashboard", description: "Real-time visibility into security metrics and alerts", icon: <Activity className="h-6 w-6" /> },
    ]
  },
  {
    category: "Security Testing",
    solutions: [
      { name: "Red Teaming", description: "Simulated cyberattacks to test detection and response", icon: <Shield className="h-6 w-6" /> },
      { name: "DAST Testing", description: "Dynamic application security testing for running apps", icon: <Code className="h-6 w-6" /> },
      { name: "SAST Testing", description: "Static code analysis for early vulnerability detection", icon: <Code className="h-6 w-6" /> },
      { name: "VA-PT Services", description: "Comprehensive testing for infrastructure, apps, and APIs", icon: <SearchCheck className="h-6 w-6" /> },
    ]
  },
  {
    category: "Data Protection & Access Control",
    solutions: [
      { name: "Auto Data Discovery & Classification", description: "Automated identification and protection of sensitive data", icon: <Database className="h-6 w-6" /> },
      { name: "Privileged Access Management", description: "Secure access to critical systems with role-based controls", icon: <Lock className="h-6 w-6" /> },
      { name: "Data Loss Prevention (DLP)", description: "Prevent accidental or malicious data leaks", icon: <ShieldCheck className="h-6 w-6" /> },
      { name: "API Security", description: "Secure APIs through encryption and threat monitoring", icon: <Globe className="h-6 w-6" /> },
    ]
  },
  {
    category: "Security Awareness & Training",
    solutions: [
      { name: "Phishing Drills & Simulations", description: "Test and train user awareness with simulated attacks", icon: <Mail className="h-6 w-6" /> },
      { name: "Security Awareness Training", description: "Comprehensive cybersecurity education programs", icon: <Users className="h-6 w-6" /> },
      { name: "Security Awareness Emailers", description: "Regular educational content and best practices", icon: <Mail className="h-6 w-6" /> },
      { name: "DMARC Implementation", description: "Secure your domain from spoofing and phishing", icon: <Shield className="h-6 w-6" /> },
    ]
  },
]

export default function CybersecuritySolutionsSection({
  badge = "Cybersecurity Solutions",
  title = "Complete Security",
  subtitle = "Protection Suite",
  description = "Advanced cybersecurity solutions covering threat detection, security testing, data protection, and awareness training.",
  categories = defaultCategories,
  primaryButtonText = "Explore All Solutions",
  primaryButtonHref = "/solutions",
  secondaryButtonText = "Get Security Assessment",
  secondaryButtonHref = "/contact",
  className = ""
}: CybersecuritySolutionsSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </AnimatedDiv>
        </div>
        
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <AnimatedDiv key={category.category} delay={categoryIndex * 0.2}>
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.solutions.map((solution, index) => (
                    <AnimatedDiv key={solution.name} delay={categoryIndex * 0.2 + index * 0.1}>
                      <Card className="group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:-translate-y-1">
                        <CardHeader className="pb-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-primary">
                                {solution.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                                {solution.name}
                              </CardTitle>
                              <CardDescription className="text-sm leading-relaxed">
                                {solution.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <AnimatedDiv delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:border-primary/50">
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