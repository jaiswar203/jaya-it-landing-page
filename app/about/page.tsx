import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Target, Zap, ArrowRight, Building2, Award, Globe, Shield } from "lucide-react"
import Image from "next/image"
import AnimatedDiv from "@/components/ui/animated-div"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Main About Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg border border-primary/20">
                  <Building2 className="h-5 w-5 text-white" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">Premier IT Service Provider</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transforming Businesses
                  <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                    Through Innovation
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Jayaa IT Solution is a premier IT service provider, renowned for delivering innovative, cutting-edge
                  technology solutions to businesses globally. With a strong focus on IT security, infrastructure
                  management, consultancy, and support, we empower organizations to meet their operational and strategic
                  goals with precision, efficiency, and innovation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Commitment to excellence and innovation.",
                  "Partnerships with leading Original Equipment Manufacturers (OEMs).",
                  "Enabling businesses from start-ups to enterprises to thrive.",
                ].map((item, index) => (
                  <AnimatedDiv key={index} delay={index * 0.1}>
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link href="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-8 py-4 text-lg"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 group">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Professional IT team collaborating on technology solutions"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "250+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
                    { value: "24/7", label: "Support Available", color: "from-green-500 to-emerald-500" },
                    { value: "50+", label: "Happy Clients", color: "from-purple-500 to-violet-500" },
                    { value: "99.9%", label: "Uptime SLA", color: "from-orange-500 to-red-500" }
                  ].map((stat, index) => (
                    <AnimatedDiv key={stat.label} delay={0.5 + index * 0.1}>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
                <Award className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Core Values</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Guiding
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Principles
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our core values shape every decision we make and guide us in delivering exceptional IT solutions that drive your business forward.
              </p>
            </AnimatedDiv>
          </div>

          <AnimatedDiv className="grid md:grid-cols-3 gap-8" delay={0.2}>
            {[
              {
                icon: <Users className="h-12 w-12" />,
                title: "Client-Centricity",
                description: "Understanding and exceeding client expectations is at the heart of everything we do.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Innovation",
                description: "Continuously exploring and implementing cutting-edge technologies for optimal solutions.",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Integrity & Excellence",
                description: "Upholding the highest standards of integrity and striving for excellence in all our endeavors.",
                gradient: "from-green-500 to-emerald-500"
              },
            ].map((value, index) => (
              <AnimatedDiv key={value.title} delay={0.3 + index * 0.1}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10 text-center pt-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto mb-6`}>
                      {value.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center px-6 pb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv delay={0.2}>
            <Card className="bg-gradient-to-br from-white/90 to-primary/5 dark:from-gray-900/90 dark:to-primary/10 border-0 shadow-2xl backdrop-blur-sm p-8 md:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              
              <CardHeader className="relative z-10 text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-6 border border-primary/20">
                  <Globe className="h-5 w-5 text-white" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Identity</span>
                </div>
                <CardTitle className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Who We Are
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At Jayaa IT Solution, we are a team of dedicated IT professionals driven by a passion for leveraging
                  technology to transform businesses. Our blend of deep technical expertise and a client-first approach
                  ensures that we deliver solutions tailored to the unique needs of our partners.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We take pride in empowering organizations to stay ahead in an ever-evolving digital landscape by
                  providing innovative, secure, and scalable IT solutions. With a commitment to excellence, we strive to
                  be a trusted partner in your journey toward growth and technological advancement.
                </p>

                <div className="flex items-center justify-center pt-8">
                  <div className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg border border-primary/20">
                    <Shield className="h-5 w-5 text-white" />
                    <span className="font-semibold text-white">ISO Certified & Industry Compliant</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/team">
                      Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
