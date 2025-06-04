import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  AlertTriangle,
  CheckSquare,
  FileText,
  Presentation,
  Users,
  ShieldQuestion,
  Shield,
  ArrowRight,
  Target,
  TrendingUp
} from "lucide-react"

interface Challenge {
  text: string
  icon: React.ReactNode
  iconColor: string
  bgGradient: string
  severity: 'high' | 'medium' | 'low'
}

interface Responsibility {
  text: string
  icon: React.ReactNode
  iconColor: string
  bgGradient: string
  category: string
}

interface ChallengesApproachSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  challenges?: Challenge[]
  responsibilities?: Responsibility[]
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const defaultChallenges: Challenge[] = [
  { 
    text: "Data Overload & Alert Fatigue", 
    icon: <AlertTriangle className="h-5 w-5" />,
    iconColor: "text-red-500",
    bgGradient: "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
    severity: 'high'
  },
  { 
    text: "Staff Shortage of Skilled Professionals", 
    icon: <Users className="h-5 w-5" />,
    iconColor: "text-orange-500",
    bgGradient: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
    severity: 'high'
  },
  { 
    text: "False Positives & Negatives", 
    icon: <ShieldQuestion className="h-5 w-5" />,
    iconColor: "text-purple-500",
    bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
    severity: 'medium'
  },
  { 
    text: "Integration Issues with Security Tools", 
    icon: <AlertTriangle className="h-5 w-5" />,
    iconColor: "text-blue-500",
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
    severity: 'medium'
  },
  { 
    text: "Latency in Threat Detection", 
    icon: <ShieldQuestion className="h-5 w-5" />,
    iconColor: "text-cyan-500",
    bgGradient: "from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20",
    severity: 'high'
  },
  { 
    text: "Insider Threats & Compromised Users", 
    icon: <Users className="h-5 w-5" />,
    iconColor: "text-indigo-500",
    bgGradient: "from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20",
    severity: 'high'
  },
  { 
    text: "Compliance & Reporting Challenges", 
    icon: <FileText className="h-5 w-5" />,
    iconColor: "text-teal-500",
    bgGradient: "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
    severity: 'medium'
  },
  { 
    text: "Shadow IT Risks & Unauthorized Apps", 
    icon: <AlertTriangle className="h-5 w-5" />,
    iconColor: "text-emerald-500",
    bgGradient: "from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20",
    severity: 'medium'
  },
]

const defaultResponsibilities: Responsibility[] = [
  { 
    text: "Real-time Dashboard Monitoring", 
    icon: <CheckSquare className="h-5 w-5" />,
    iconColor: "text-green-500",
    bgGradient: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
    category: "Monitoring"
  },
  { 
    text: "License & Compliance Management", 
    icon: <FileText className="h-5 w-5" />,
    iconColor: "text-blue-500",
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
    category: "Compliance"
  },
  { 
    text: "SPOC Reporting & Updates", 
    icon: <Presentation className="h-5 w-5" />,
    iconColor: "text-purple-500",
    bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
    category: "Communication"
  },
  { 
    text: "Follow-ups for Task Closure", 
    icon: <CheckSquare className="h-5 w-5" />,
    iconColor: "text-orange-500",
    bgGradient: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
    category: "Management"
  },
  { 
    text: "Issue Escalation Handling", 
    icon: <Shield className="h-5 w-5" />,
    iconColor: "text-red-500",
    bgGradient: "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
    category: "Support"
  },
  { 
    text: "Detailed Report Preparation & Review", 
    icon: <FileText className="h-5 w-5" />,
    iconColor: "text-cyan-500",
    bgGradient: "from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20",
    category: "Documentation"
  },
  { 
    text: "Timely Report Submission", 
    icon: <Presentation className="h-5 w-5" />,
    iconColor: "text-indigo-500",
    bgGradient: "from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20",
    category: "Communication"
  },
  { 
    text: "Professional Presentation & Insights", 
    icon: <Presentation className="h-5 w-5" />,
    iconColor: "text-teal-500",
    bgGradient: "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
    category: "Communication"
  },
]

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case 'high': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    case 'medium': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
    case 'low': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
  }
}

export default function ChallengesApproachSection({
  badge = "Our Approach",
  title = "Navigating Security",
  subtitle = "Complexities Together",
  description = "We understand the unique challenges organizations face in cybersecurity and provide comprehensive solutions to address them effectively.",
  challenges = defaultChallenges,
  responsibilities = defaultResponsibilities,
  primaryButtonText = "Partner With Us",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/about",
  className = ""
}: ChallengesApproachSectionProps) {
  return (
    <section className={`py-16 sm:py-20 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-6">
              <Target className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedDiv>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Security Challenges */}
          <AnimatedDiv>
            <Card className="h-full shadow-xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 shadow-lg mb-4 mx-auto">
                  <div className="text-red-500">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                  Common Security Challenges
                </CardTitle>
                <p className="text-muted-foreground">
                  Complex security challenges that organizations face daily
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {challenges.map((challenge, index) => (
                  <AnimatedDiv key={index} delay={index * 0.05}>
                    <div className={`group h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${challenge.bgGradient} hover:-translate-y-1 flex flex-col p-4 rounded-xl`}>
                      <div className="flex items-start space-x-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <div className={challenge.iconColor}>
                            {challenge.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground font-medium leading-relaxed">
                            {challenge.text}
                          </span>
                          <div className="mt-2">
                            <span className={`text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wider ${getSeverityBadge(challenge.severity)}`}>
                              {challenge.severity} Priority
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </CardContent>
            </Card>
          </AnimatedDiv>

          {/* Our Partnership Approach */}
          <AnimatedDiv delay={0.2}>
            <Card className="h-full shadow-xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 shadow-lg mb-4 mx-auto">
                  <div className="text-green-500">
                    <CheckSquare className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  How We Partner With You
                </CardTitle>
                <p className="text-muted-foreground">
                  As your trusted partner, we take on key responsibilities to ensure your security posture is robust and resilient
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <AnimatedDiv key={index} delay={0.2 + index * 0.05}>
                    <div className={`group h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${responsibility.bgGradient} hover:-translate-y-1 flex flex-col p-4 rounded-xl`}>
                      <div className="flex items-start space-x-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <div className={responsibility.iconColor}>
                            {responsibility.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground font-medium leading-relaxed">
                            {responsibility.text}
                          </span>
                          <div className="mt-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 font-semibold uppercase tracking-wider">
                              {responsibility.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>

        {/* Statistics Section */}
        <AnimatedDiv delay={0.4}>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary/20 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Security Monitoring</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        {/* Call to Action */}
        <div className="text-center">
          <AnimatedDiv delay={0.6}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Transform Your Security Strategy?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                Let us help you overcome these challenges and build a robust security foundation for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3">
                  <Link href={primaryButtonHref}>
                    {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 px-6 py-3">
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