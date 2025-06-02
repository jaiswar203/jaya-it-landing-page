import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Shield,
  Zap
} from "lucide-react"

interface ServicePageLayoutProps {
  serviceName: string
  serviceTitle: string
  serviceIcon: React.ReactNode
  heroDescription: string
  fullDescription: string
  services: string[]
  gradient: string
  bgPattern?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  stats?: Array<{
    value: string
    label: string
  }>
}

export default function ServicePageLayout({
  serviceName,
  serviceTitle,
  serviceIcon,
  heroDescription,
  fullDescription,
  services,
  gradient,
  bgPattern = "bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900",
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/solutions",
  stats = [
    { value: "24/7", label: "Monitoring" },
    { value: "99.9%", label: "Uptime" },
    { value: "< 15min", label: "Response Time" },
    { value: "100%", label: "Coverage" }
  ]
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className={`py-20 sm:py-28 ${bgPattern} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimatedDiv className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Premium Service</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className={`text-transparent bg-gradient-to-r ${gradient} bg-clip-text`}>
                      {serviceName}
                    </span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                    {serviceTitle}
                  </h2>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {heroDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className={`bg-gradient-to-r ${gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg`}>
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
            </AnimatedDiv>
            
            {/* Visual */}
            <AnimatedDiv delay={0.2} className="flex justify-center">
              <div className={`relative bg-gradient-to-r ${gradient} p-12 rounded-3xl shadow-2xl`}>
                <div className="text-white">
                  {serviceIcon}
                </div>
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-secondary/20 px-6 py-3 rounded-full mb-8 border border-secondary/20">
                <Target className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Key Services</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                What <span className={`text-transparent bg-gradient-to-r ${gradient} bg-clip-text`}>{serviceName}</span> Offers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {fullDescription}
              </p>
            </AnimatedDiv>
          </div>
          
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <AnimatedDiv key={service} delay={index * 0.1}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Comprehensive {service.toLowerCase()} designed to enhance your security posture and operational efficiency.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>

          {/* Stats Section */}
          <AnimatedDiv delay={0.4}>
            <div className={`bg-gradient-to-r ${gradient} p-12 rounded-3xl shadow-2xl text-white text-center`}>
              <h3 className="text-3xl font-bold mb-8">Why Choose {serviceName}?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center">
            <AnimatedDiv>
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg mb-8">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ready to Get Started with {serviceName}?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contact our experts today to learn how {serviceName} can transform your organization's security and operational capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild size="lg" className={`bg-gradient-to-r ${gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg`}>
                    <Link href={primaryButtonHref}>
                      Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 px-8 py-4 text-lg">
                    <Link href="/services">
                      View All Services
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </>
  )
} 