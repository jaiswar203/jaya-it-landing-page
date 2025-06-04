import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TypographyH1, 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH4, 
  TypographyBadge,
  TypographyP,
  TypographySmall 
} from "@/components/ui/typography"
import {
  Shield,
  CheckCircle,
  FileCheck
} from "lucide-react"
import Image from "next/image"

interface RegulatoryBody {
  name: string
  fullName: string
  description: string
  icon?: React.ReactNode
  logo?: string
  colorClass: string
  iconBg: string
}

interface RegulatoryComplianceSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  regulatoryBodies?: RegulatoryBody[]
  className?: string
}

const defaultRegulatoryBodies: RegulatoryBody[] = [
  {
    name: "RBI",
    fullName: "Reserve Bank of India",
    description: "Banking and financial services regulatory compliance with stringent security and operational guidelines.",
    logo: "/regulatories/rbi.png",
    colorClass: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    iconBg: "bg-primary"
  },
  {
    name: "SEBI",
    fullName: "Securities and Exchange Board of India",
    description: "Capital markets and securities regulation compliance for investment and trading platforms.",
    logo: "/regulatories/sebi.png",
    colorClass: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/30 text-secondary dark:text-secondary",
    iconBg: "bg-secondary"
  },
  {
    name: "NBFC",
    fullName: "Non-Banking Financial Company",
    description: "Non-banking financial services compliance with regulatory frameworks and operational standards.",
    logo: "/regulatories/nbfc.png",
    colorClass: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    iconBg: "bg-primary"
  },
  {
    name: "IRDAI",
    fullName: "Insurance Regulatory and Development Authority of India",
    description: "Insurance sector regulatory compliance with comprehensive risk management and security protocols.",
    logo: "/regulatories/IRDA.png",
    colorClass: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/30 text-secondary dark:text-secondary",
    iconBg: "bg-secondary"
  },
  {
    name: "Cert-IN",
    fullName: "Indian Computer Emergency Response Team",
    description: "National cybersecurity guidelines and incident response framework compliance.",
    logo: "/regulatories/CERTIN.png",
    colorClass: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    iconBg: "bg-primary"
  },
  {
    name: "NIST Framework",
    fullName: "National Institute of Standards and Technology",
    description: "International cybersecurity framework standards for comprehensive risk management and security controls.",
    logo: "/regulatories/NIST.png",
    colorClass: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/30 text-secondary dark:text-secondary",
    iconBg: "bg-secondary"
  },
  {
    name: "ADHICS",
    fullName: "Aadhaar Data Hub Information and Cyber Security",
    description: "Aadhaar ecosystem security and privacy compliance with strict data protection standards.",
    icon: <FileCheck className="h-8 w-8" />,
    colorClass: "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    iconBg: "bg-primary"
  },
  {
    name: "NESA",
    fullName: "National Electronic Security Authority",
    description: "National electronic security standards and cryptographic compliance for secure communications.",
    logo: "/regulatories/NESA.png",
    colorClass: "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/30 text-secondary dark:text-secondary",
    iconBg: "bg-secondary"
  }
]

export default function RegulatoryComplianceSection({
  badge = "Regulatory Compliance",
  title = "Aligned with Leading",
  subtitle = "Regulatory Standards",
  description = "We ensure our services and solutions meet the highest regulatory standards across various industries, providing you with confidence and compliance assurance.",
  regulatoryBodies = defaultRegulatoryBodies,
  className = ""
}: RegulatoryComplianceSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/20 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-full shadow-lg mb-8">
              <Shield className="h-5 w-5 text-white" />
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

        {/* Regulatory Bodies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {regulatoryBodies.map((body, index) => (
            <AnimatedDiv key={body.name} delay={index * 0.1}>
              <Card className="group h-full shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${body.logo ? 'bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50' : body.iconBg + ' text-white'} shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      {body.logo ? (
                        <Image
                          src={body.logo}
                          alt={`${body.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        body.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle>
                        <TypographyH4 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 mb-1">
                          {body.name}
                        </TypographyH4>
                        <TypographySmall className="text-gray-600 dark:text-gray-400 font-medium">
                          {body.fullName}
                        </TypographySmall>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {body.description}
                  </div>
                  
                  {/* Compliance Badge */}
                  <div className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${body.colorClass} border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02]`}>
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Compliance Aligned
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <AnimatedDiv delay={0.6}>
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary-950/20 dark:to-secondary-950/20 p-8 rounded-2xl border border-primary/20 dark:border-primary/30">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <TypographyH4 className="text-primary">Comprehensive Compliance Assurance</TypographyH4>
            </div>
            <TypographyP className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our team stays updated with the latest regulatory requirements and implements robust compliance frameworks 
              to ensure your organization meets all necessary standards and maintains regulatory approval.
            </TypographyP>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  )
} 