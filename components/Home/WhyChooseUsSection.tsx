import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, BarChart3, ShieldCheck } from "lucide-react"

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  bgGradient: string
  iconColor: string
}

interface WhyChooseUsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  benefits?: Benefit[]
  className?: string
}

const defaultBenefits: Benefit[] = [
  {
    title: "Expertise & Experience",
    description: "Decades of industry experience and a team of certified professionals delivering world-class solutions.",
    icon: <Users className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Comprehensive Solutions",
    description: "End-to-end IT services covering security, infrastructure, and consultancy with seamless integration.",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    iconColor: "text-green-500",
  },
  {
    title: "Client-Focused Support",
    description: "Dedicated 24/7 support and tailored solutions designed to meet your unique business challenges.",
    icon: <ShieldCheck className="h-8 w-8" />,
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
    iconColor: "text-purple-500",
  },
]

export default function WhyChooseUsSection({
  badge = "Our Difference",
  title = "Why Partner with",
  subtitle = "JAYAA IT?",
  benefits = defaultBenefits,
  className = ""
}: WhyChooseUsSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Zap className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">{badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                {subtitle}
              </span>
            </h2>
          </AnimatedDiv>
        </div>
        
        <AnimatedDiv className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedDiv key={benefit.title} delay={index * 0.2}>
              <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${benefit.bgGradient} hover:-translate-y-1 flex flex-col`}>
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className={benefit.iconColor}>
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  )
} 