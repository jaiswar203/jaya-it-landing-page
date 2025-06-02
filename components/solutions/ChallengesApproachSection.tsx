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
  Monitor,
  ArrowRight,
  Target,
  TrendingUp
} from "lucide-react"

interface Challenge {
  text: string
  icon: React.ReactNode
  severity: 'high' | 'medium' | 'low'
}

interface Responsibility {
  text: string
  icon: React.ReactNode
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
    severity: 'high'
  },
  { 
    text: "Staff Shortage of Skilled Professionals", 
    icon: <Users className="h-5 w-5" />,
    severity: 'high'
  },
  { 
    text: "False Positives & Negatives", 
    icon: <ShieldQuestion className="h-5 w-5" />,
    severity: 'medium'
  },
  { 
    text: "Integration Issues with Security Tools", 
    icon: <AlertTriangle className="h-5 w-5" />,
    severity: 'medium'
  },
  { 
    text: "Latency in Threat Detection", 
    icon: <ShieldQuestion className="h-5 w-5" />,
    severity: 'high'
  },
  { 
    text: "Insider Threats & Compromised Users", 
    icon: <Users className="h-5 w-5" />,
    severity: 'high'
  },
  { 
    text: "Compliance & Reporting Challenges", 
    icon: <FileText className="h-5 w-5" />,
    severity: 'medium'
  },
  { 
    text: "Shadow IT Risks & Unauthorized Apps", 
    icon: <AlertTriangle className="h-5 w-5" />,
    severity: 'medium'
  },
]

const defaultResponsibilities: Responsibility[] = [
  { 
    text: "Real-time Dashboard Monitoring", 
    icon: <CheckSquare className="h-5 w-5" />,
    category: "Monitoring"
  },
  { 
    text: "License & Compliance Management", 
    icon: <FileText className="h-5 w-5" />,
    category: "Compliance"
  },
  { 
    text: "SPOC Reporting & Updates", 
    icon: <Presentation className="h-5 w-5" />,
    category: "Communication"
  },
  { 
    text: "Follow-ups for Task Closure", 
    icon: <CheckSquare className="h-5 w-5" />,
    category: "Management"
  },
  { 
    text: "Issue Escalation Handling", 
    icon: <Shield className="h-5 w-5" />,
    category: "Support"
  },
  { 
    text: "Detailed Report Preparation & Review", 
    icon: <FileText className="h-5 w-5" />,
    category: "Documentation"
  },
  { 
    text: "Timely Report Submission", 
    icon: <Presentation className="h-5 w-5" />,
    category: "Communication"
  },
  { 
    text: "Professional Presentation & Insights", 
    icon: <Presentation className="h-5 w-5" />,
    category: "Communication"
  },
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high': return 'text-red-500 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
    case 'medium': return 'text-orange-500 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800'
    case 'low': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800'
    default: return 'text-gray-500 bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800'
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
    <section className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
              <Target className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Security Challenges */}
          <AnimatedDiv>
            <Card className="h-full shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10"></div>
              
              <CardHeader className="relative z-10 text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg mb-6 mx-auto">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
                  Common Security Challenges
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Complex security challenges that organizations face daily
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {challenges.map((challenge, index) => (
                  <AnimatedDiv key={index} delay={index * 0.1}>
                    <div className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 border ${getSeverityColor(challenge.severity)}`}>
                      <div className="flex-shrink-0 mt-1">
                        {challenge.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-medium leading-relaxed">
                          {challenge.text}
                        </span>
                        <div className="mt-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wider ${
                            challenge.severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                            challenge.severity === 'medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {challenge.severity} Priority
                          </span>
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
            <Card className="h-full shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200/50 dark:border-green-800/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10"></div>
              
              <CardHeader className="relative z-10 text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg mb-6 mx-auto">
                  <CheckSquare className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                  How We Partner With You
                </CardTitle>
                <p className="text-muted-foreground text-lg mb-6">
                  As your trusted partner, we take on key responsibilities to ensure your security posture is robust and resilient
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <AnimatedDiv key={index} delay={0.2 + index * 0.1}>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-800/50 transition-all duration-300 hover:scale-105 hover:bg-green-100/50 dark:hover:bg-green-900/30 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-2 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
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
                  </AnimatedDiv>
                ))}
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>

        {/* Statistics Section */}
        <AnimatedDiv delay={0.4} className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Security Monitoring</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <AnimatedDiv delay={0.6}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg mb-8">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Transform Your Security Strategy?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you overcome these challenges and build a robust security foundation for your organization.
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