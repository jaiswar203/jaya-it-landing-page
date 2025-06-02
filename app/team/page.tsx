import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Users, Award, ArrowRight, Mail, Star } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"

const teamMembers = [
  {
    name: "Mr. Ramesh Kumar",
    role: "Ex. ICICI Bank IT Leader",
    description:
      "A technology leader with 35+ years of experience, including 20+ years in BFSI. Expert in technology adoption and enablement.",
    image: "/placeholder.svg?width=200&height=200&text=RK",
    linkedin: "#",
    experience: "35+ Years",
    specialization: "BFSI Technology",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Mr. Anwar Sadat",
    role: "Business Development – IT",
    company: "Oman Computer Services (OCS Infotech)",
    description:
      "18+ years in international markets. Strong knowledge of technology solutions and business processes. A technology enabler for customers.",
    image: "/placeholder.svg?width=200&height=200&text=AS",
    linkedin: "#",
    experience: "18+ Years",
    specialization: "International Markets",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Mr. Shinaj Karuwath",
    role: "Founder – Director",
    company: "Principle Business Consultants",
    description: "20+ years in compliance and audits. A mentor with excellent knowledge of compliance and ISO audits.",
    image: "/placeholder.svg?width=200&height=200&text=SK",
    linkedin: "#",
    experience: "20+ Years",
    specialization: "Compliance & Audits",
    gradient: "from-green-500 to-emerald-500"
  },
  // Add more team members if available
]

export default function TeamPage() {
  return (
    <>
      
      {/* Team Introduction Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full mb-8 border border-primary/20">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership & Expertise</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                The Minds Behind
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  JAYAA IT Solution
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our exceptional team combines decades of industry experience with cutting-edge expertise to deliver innovative IT solutions that drive business transformation.
              </p>
            </AnimatedDiv>
          </div>

          {/* Team Stats */}
          <AnimatedDiv delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { icon: <Award className="h-8 w-8" />, value: "4+", label: "Years Combined Experience", color: "from-blue-500 to-cyan-500" },
                { icon: <Star className="h-8 w-8" />, value: "3", label: "Industry Experts", color: "from-purple-500 to-violet-500" },
                { icon: <Users className="h-8 w-8" />, value: "100%", label: "Client Success Rate", color: "from-green-500 to-emerald-500" }
              ].map((stat, index) => (
                <AnimatedDiv key={stat.label} delay={0.4 + index * 0.1}>
                  <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <CardContent className="relative z-10 pt-8 pb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-4`}>
                        {stat.icon}
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedDiv key={member.name} delay={index * 0.2}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-3 relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10 text-center pt-8">
                    <div className="relative mx-auto mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300 mb-2">
                      {member.name}
                    </CardTitle>
                    
                    <CardDescription className="text-lg font-semibold mb-1">
                      {member.role}
                    </CardDescription>
                    
                    {member.company && (
                      <p className="text-sm text-muted-foreground mb-4">{member.company}</p>
                    )}

                    {/* Experience & Specialization Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-xs font-semibold rounded-full shadow-md`}>
                        {member.experience}
                      </div>
                      <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
                        {member.specialization}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center px-6 pb-8">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.description}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <button
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                        aria-label={`Contact ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv delay={0.2}>
            <Card className="bg-gradient-to-br from-white/90 to-primary/5 dark:from-gray-900/90 dark:to-primary/10 border-0 shadow-2xl backdrop-blur-sm p-8 md:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              
              <CardContent className="relative z-10 text-center space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ready to Work with Our Expert Team?
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Let our experienced professionals guide your organization through digital transformation with innovative IT solutions tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-8 py-4 text-lg"
                  >
                    <Link href="/about">Learn About Us</Link>
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
