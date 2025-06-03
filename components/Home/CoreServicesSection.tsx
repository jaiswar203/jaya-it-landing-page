import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TypographyH2, 
  TypographyGradientSubtitle, 
  TypographyLead, 
  TypographyH4, 
  TypographyBadge,
  TypographyP 
} from "@/components/ui/typography"
import Link from "next/link"
import { ArrowRight, Star, ShieldCheck, SearchCheck, CloudCog, ListChecks } from "lucide-react"

interface ServiceHighlight {
  name: string
  description: string
  href: string
  icon: React.ReactNode
  gradient: string
  iconBg: string
}

interface CoreServicesSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  services?: ServiceHighlight[]
  viewAllText?: string
  viewAllHref?: string
  className?: string
}

const defaultServices: ServiceHighlight[] = [
  {
    name: "Zero Trust Security Services",
    description: "Comprehensive Security Framework",
    href: "/services/zero-trust-security",
    icon: <ShieldCheck className="h-6 w-6" />,
    gradient: "text-red-500",
    iconBg: "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
  },
  {
    name: "Digital Transformation & Automation",
    description: "Modernize & Streamline Operations",
    href: "/services/digital-transformation",
    icon: <SearchCheck className="h-6 w-6" />,
    gradient: "text-blue-500",
    iconBg: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
  },
  {
    name: "Advance IT Solutions",
    description: "Cutting-Edge Technology Solutions",
    href: "/services/advance-it-solutions",
    icon: <CloudCog className="h-6 w-6" />,
    gradient: "text-green-500",
    iconBg: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
  },
  {
    name: "Professional Services",
    description: "Expert Consulting & Support",
    href: "/services/professional-services",
    icon: <ListChecks className="h-6 w-6" />,
    gradient: "text-purple-500",
    iconBg: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
  },
]

export default function CoreServicesSection({
  badge = "Our Services",
  title = "Our Core Service",
  subtitle = "Pillars",
  description = "Comprehensive IT solutions designed to empower your business with cutting-edge technology and unmatched expertise.",
  services = defaultServices,
  viewAllText = "View All Services",
  viewAllHref = "/services",
  className = ""
}: CoreServicesSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Star className="h-4 w-4 text-white" />
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
        
        <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedDiv key={service.name} delay={index * 0.15}>
              <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${service.iconBg} hover:-translate-y-1 flex flex-col`}>
                <CardHeader className="text-center space-y-4 pb-4 flex flex-col items-center justify-center flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className={service.gradient}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      <TypographyH4 className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </TypographyH4>
                    </CardTitle>
                    <CardDescription>
                      <TypographyP muted className="text-sm font-medium">
                        {service.description}
                      </TypographyP>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-6 flex items-center justify-center">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-sm"
                  >
                    <Link href={service.href} className="flex items-center justify-center">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
        
        <div className="text-center mt-16">
          <AnimatedDiv delay={0.6}>
            <Button asChild size="lg" className="bg-primary shadow-lg hover:shadow-xl transition-all duration-300 px-8">
              <Link href={viewAllHref}>
                {viewAllText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
} 