import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TypographyH1, 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH4, 
  TypographyH5,
  TypographyBadge,
  TypographyP,
  TypographySmall 
} from "@/components/ui/typography"
import Link from "next/link"
import {
  Building2,
  Hospital,
  ShoppingCart,
  Landmark,
  Shield,
  CheckCircle,
  ArrowRight,
  Code,
  Wrench,
  Cloud
} from "lucide-react"

interface Industry {
  name: string
  description: string
  icon: React.ReactNode
  colorClass: string
  iconBg: string
  features: string[]
}

interface IndustriesWeSeSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  industries?: Industry[]
  primaryButtonText?: string
  primaryButtonHref?: string
  className?: string
}

const defaultIndustries: Industry[] = [
  {
    name: "BFSI",
    description: "We ensure regulatory compliance and secure data exchange for financial institutions with RBI-ready documentation, real-time VAPT, and 24/7 SOC monitoring for fraud detection.",
    icon: <Landmark className="h-8 w-8" />,
    colorClass: "from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500",
    features: [
      "RBI-ready documentation",
      "Real-time VAPT",
      "24/7 SOC monitoring",
      "Fraud detection systems",
      "Regulatory compliance"
    ]
  },
  {
    name: "Healthcare",
    description: "With the rise of digital patient records, we support HIPAA and NDHM security compliance, EMR/HIMS testing, and phishing training for medical staff.",
    icon: <Hospital className="h-8 w-8" />,
    colorClass: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500",
    features: [
      "HIPAA compliance",
      "NDHM security compliance",
      "EMR/HIMS testing",
      "Phishing training for medical staff",
      "Patient data protection"
    ]
  },
  {
    name: "Retail & SaaS",
    description: "We help fast-growing online businesses secure user data and transactions through PCI-DSS gap analysis, DevSecOps services, and bot mitigation strategies.",
    icon: <ShoppingCart className="h-8 w-8" />,
    colorClass: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/30 text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500",
    features: [
      "PCI-DSS gap analysis",
      "DevSecOps services",
      "Bot mitigation strategies",
      "User data protection",
      "Transaction security"
    ]
  },
  {
    name: "Government/Public Sector",
    description: "Our team has conducted portal and infrastructure testing for state and central projects, aligning with CERT-IN methodologies and SCADA security guidelines.",
    icon: <Building2 className="h-8 w-8" />,
    colorClass: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/30 text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-500",
    features: [
      "Portal testing for government",
      "Infrastructure testing",
      "CERT-IN methodologies",
      "SCADA security guidelines",
      "Public sector compliance"
    ]
  }
]

export default function IndustriesWeServeSection({
  badge = "Industries We Serve",
  title = "Specialized Solutions for",
  subtitle = "Every Industry",
  description = "We deliver tailored cybersecurity and IT solutions across diverse industries, ensuring regulatory compliance and robust protection for your specific sector needs.",
  industries = defaultIndustries,
  primaryButtonText = "Discuss Your Industry Needs",
  primaryButtonHref = "/contact",
  className = ""
}: IndustriesWeSeSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8">
              <Building2 className="h-5 w-5 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH1 className="mb-8 leading-tight">
              {title}
              <TypographyGradientSubtitle>
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH1>
            <TypographyLead muted>
              {description}
            </TypographyLead>
          </AnimatedDiv>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <AnimatedDiv key={industry.name} delay={index * 0.2}>
              <Card className="group h-full shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer">
                <CardHeader className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${industry.iconBg} text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle>
                        <TypographyH4 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                          {industry.name}
                        </TypographyH4>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {industry.description}
                  </div>
                  
                  {/* Key Features */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Key Features</span>
                    </div>
                    <div className="grid gap-4">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={feature} className={`flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r ${industry.colorClass.split(' ')[0]} ${industry.colorClass.split(' ')[1]} ${industry.colorClass.split(' ')[2]} ${industry.colorClass.split(' ')[3]} border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02]`}>
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="text-base font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover CTA */}
                  <div className="pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
                    <div className="flex items-center justify-between">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <span className="text-sm font-bold text-primary">Learn More About Our Solutions</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <AnimatedDiv delay={0.8}>
            <Button asChild size="lg" className="bg-primary shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
              <Link href={primaryButtonHref}>
                {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
} 