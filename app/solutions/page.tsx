// Content from MonitoringSolutionsSection and ChallengesSection
import PageHeader from "@/components/ui/page-header"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedDiv from "@/components/ui/animated-div"
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
} from "lucide-react"

const solutions = [
  { name: "Data Classification", icon: <DatabaseZap /> },
  { name: "Document Rights Management (DRM)", icon: <FileLock /> },
  { name: "DMARK (Email Protection)", icon: <MailCheck /> },
  { name: "Source Code Review – Quarterly", icon: <Code /> },
  { name: "Attack Surface Management (ASM)", icon: <ShieldQuestion /> },
  { name: "Breach & Attack Simulation (BAS)", icon: <Shield /> },
  { name: "Red Teaming", icon: <Users /> },
  { name: "Awareness Emails & Wallpapers – Weekly", icon: <MessageCircle /> },
  { name: "API Security", icon: <LockKeyhole /> },
  { name: "Privileged Identity/Access Management (PIM/PAM)", icon: <Users /> },
  { name: "SDWAN Solutions", icon: <Router /> },
  { name: "Data Loss Prevention (DLP)", icon: <Shield /> },
  { name: "VA and Penetration Testing (VAPT)", icon: <Search /> },
  { name: "Phishing Simulations – Quarterly", icon: <MailCheck /> },
  { name: "Comprehensive Managed Services", icon: <Network /> },
]

const challenges = [
  { text: "Data Overload & Alert Fatigue", icon: <AlertTriangle className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Staff Shortage of Skilled Professionals", icon: <Users className="h-5 w-5 text-destructive mr-3" /> },
  { text: "False Positives & Negatives", icon: <ShieldQuestion className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Integration Issues with Security Tools", icon: <AlertTriangle className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Latency in Threat Detection", icon: <ShieldQuestion className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Insider Threats & Compromised Users", icon: <Users className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Compliance & Reporting Challenges", icon: <FileText className="h-5 w-5 text-destructive mr-3" /> },
  { text: "Shadow IT Risks & Unauthorized Apps", icon: <AlertTriangle className="h-5 w-5 text-destructive mr-3" /> },
]

const responsibilities = [
  { text: "Real-time Dashboard Monitoring", icon: <CheckSquare className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "License & Compliance Management", icon: <FileText className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "SPOC Reporting & Updates", icon: <Presentation className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "Follow-ups for Task Closure", icon: <CheckSquare className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "Issue Escalation Handling", icon: <Shield className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "Detailed Report Preparation & Review", icon: <FileText className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "Timely Report Submission", icon: <Presentation className="h-5 w-5 text-green-500 mr-3" /> },
  { text: "Professional Presentation & Insights", icon: <Presentation className="h-5 w-5 text-green-500 mr-3" /> },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Advanced Security Solutions & Monitoring"
        description="Explore our cutting-edge Information Security Dashboard, Monitoring Solutions, and how we address modern cybersecurity challenges."
      />
      <section id="monitoring-solutions" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Information Security Dashboard and Monitoring Solutions & Services"
            subtitle="Our Specialized Tools"
          />
          <AnimatedDiv className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <AnimatedDiv key={solution.name} delay={index * 0.05}>
                <Card className="text-center h-full shadow-subtle hover:shadow-medium transition-shadow duration-300 group transform hover:-translate-y-1">
                  <CardHeader className="items-center pt-6">
                    <div className="p-4 bg-primary/10 rounded-full mb-3 group-hover:bg-primary transition-colors duration-300">
                      {solution.icon && (
                        <solution.icon.type
                          {...solution.icon.props}
                          className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <h3 className="text-md font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {solution.name}
                    </h3>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      <section id="challenges-approach" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Navigating Security Complexities" subtitle="Our Approach" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedDiv>
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-destructive flex items-center">
                    <AlertTriangle className="h-7 w-7 mr-2" /> Common Security Monitoring Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        {challenge.icon}
                        <span>{challenge.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <Card className="shadow-lg border-green-500/30 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 dark:text-green-500 flex items-center">
                    <CheckSquare className="h-7 w-7 mr-2" /> How We Partner With You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    As your trusted partner, we take on key responsibilities to ensure your security posture is robust
                    and resilient:
                  </p>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        {responsibility.icon}
                        <span>{responsibility.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </>
  )
}
