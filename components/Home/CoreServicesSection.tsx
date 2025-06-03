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
    name: "Peregrine",
    description: "Managed Detection & Response",
    href: "/services/peregrine",
    icon: <ShieldCheck className="h-8 w-8" />,
    gradient: "from-red-500 to-orange-500",
    iconBg: "from-red-500/10 to-orange-500/10",
  },
  {
    name: "Pinpoint",
    description: "Assessment & Simulation",
    href: "/services/pinpoint",
    icon: <SearchCheck className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "from-blue-500/10 to-cyan-500/10",
  },
  {
    name: "MSP247",
    description: "Managed Cloud & Security",
    href: "/services/msp247",
    icon: <CloudCog className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-500",
    iconBg: "from-green-500/10 to-emerald-500/10",
  },
  {
    name: "nCompass",
    description: "Consulting & Compliance",
    href: "/services/ncompass",
    icon: <ListChecks className="h-8 w-8" />,
    gradient: "from-purple-500 to-violet-500",
    iconBg: "from-purple-500/10 to-violet-500/10",
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
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:-translate-y-2 flex flex-col justify-center">
                <CardHeader className="text-center space-y-4 pb-4 flex flex-col items-center justify-center flex-1">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      <TypographyH4 className="mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </TypographyH4>
                    </CardTitle>
                    <CardDescription>
                      <TypographyP muted className="font-medium">
                        {service.description}
                      </TypographyP>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-8 flex items-center justify-center">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link href={service.href} className="flex items-center justify-center">
                      Explore {service.name} 
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
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
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