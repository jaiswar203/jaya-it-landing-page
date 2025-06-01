import HeroSection from "@/components/sections/hero-section"
import SectionHeading from "@/components/ui/section-heading"
import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  SearchCheck, 
  CloudCog, 
  ListChecks, 
  Users, 
  BarChart3,
  Award,
  TrendingUp,
  Clock,
  Star,
  Sparkles,
  Zap,
  Eye,
  Activity,
  Code,
  Lock,
  AlertTriangle,
  Mail,
  Database,
  Globe,
  Monitor,
  Shield
} from "lucide-react"

const serviceHighlights = [
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

const stats = [
  { number: "250+", label: "Projects Delivered", icon: <Award className="h-6 w-6" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="h-6 w-6" /> },
]

const cybersecuritySolutions = [
  {
    category: "Threat Detection & Response",
    solutions: [
      { name: "Dark Web Monitoring", description: "Detect compromised credentials and organizational exposure", icon: <Eye className="h-6 w-6" /> },
      { name: "SOC Monitoring 24/7", description: "Round-the-clock security operations center monitoring", icon: <Activity className="h-6 w-6" /> },
      { name: "Cybersecurity Dashboard", description: "Real-time visibility into security metrics and alerts", icon: <Monitor className="h-6 w-6" /> },
    ]
  },
  {
    category: "Security Testing",
    solutions: [
      { name: "Red Teaming", description: "Simulated cyberattacks to test detection and response", icon: <AlertTriangle className="h-6 w-6" /> },
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

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedDiv key={stat.label} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">About JAYAA IT</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Premier IT Service Provider
                  <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                    Driving Digital Excellence
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jayaa IT Solution is renowned for delivering innovative, cutting-edge technology solutions globally. We
                focus on IT security, infrastructure management, consultancy, and support, empowering organizations to
                achieve their goals with precision and efficiency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["Innovative & Scalable Solutions", "Customer-Centric Approach", "Expert Team & OEM Partnerships", "24/7 Premium Support"].map(
                  (item, index) => (
                    <AnimatedDiv key={item} delay={index * 0.1}>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    </AnimatedDiv>
                  ),
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                  <Link href="/contact">
                    Get Started Today
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?width=600&height=400&text=JAYAA+Innovation+Hub"
                    alt="Jayaa IT Innovation"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Innovation Score</span>
                    <span className="text-sm font-bold text-primary">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '98.5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Enhanced Core Services Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Core Service
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Pillars
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT solutions designed to empower your business with cutting-edge technology and unmatched expertise.
              </p>
            </AnimatedDiv>
          </div>
          
          <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <AnimatedDiv key={service.name} delay={index * 0.15}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardHeader className="text-center space-y-4 pb-4">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-8">
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
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Comprehensive Cybersecurity Solutions Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Cybersecurity Solutions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Complete Security
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Protection Suite
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced cybersecurity solutions covering threat detection, security testing, data protection, and awareness training.
              </p>
            </AnimatedDiv>
          </div>
          
          <div className="space-y-16">
            {cybersecuritySolutions.map((category, categoryIndex) => (
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
                  <Link href="/solutions">
                    Explore All Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50">
                  <Link href="/contact">
                    Get Security Assessment
                  </Link>
                </Button>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
                <Zap className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Difference</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Partner with
                <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                  JAYAA IT?
                </span>
              </h2>
            </AnimatedDiv>
          </div>
          
          <AnimatedDiv className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise & Experience",
                description: "Decades of industry experience and a team of certified professionals delivering world-class solutions.",
                icon: <Users className="h-8 w-8" />,
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
              },
              {
                title: "Comprehensive Solutions",
                description: "End-to-end IT services covering security, infrastructure, and consultancy with seamless integration.",
                icon: <BarChart3 className="h-8 w-8" />,
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
              },
              {
                title: "Client-Focused Support",
                description: "Dedicated 24/7 support and tailored solutions designed to meet your unique business challenges.",
                icon: <ShieldCheck className="h-8 w-8" />,
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
              },
            ].map((item, index) => (
              <AnimatedDiv key={item.title} delay={index * 0.2}>
                <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${item.bgGradient} hover:-translate-y-1`}>
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`}>
                        {item.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="text-center text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Ready to Transform
                <span className="block text-secondary">Your Business?</span>
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who trust JAYAA IT Solution for their digital transformation journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4">
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
