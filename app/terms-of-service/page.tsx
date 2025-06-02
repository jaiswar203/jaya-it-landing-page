import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Users, Mail, Calendar } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"
import Link from "next/link"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Agreement to Terms",
      icon: <FileText className="h-6 w-6" />,
      content: "By using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Description of Service",
      icon: <Shield className="h-6 w-6" />,
      content: "JAYAA IT Solution Pvt. Ltd. provides various IT services including but not limited to IT security, infrastructure management, consultancy, and support as detailed on our website.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "User Responsibilities",
      icon: <Users className="h-6 w-6" />,
      content: "You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="h-6 w-6" />,
      content: "The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of JAYAA IT Solution Pvt. Ltd. and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of JAYAA IT Solution Pvt. Ltd.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Termination",
      icon: <FileText className="h-6 w-6" />,
      content: "We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Limitation of Liability",
      icon: <Shield className="h-6 w-6" />,
      content: "In no event shall JAYAA IT Solution Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Changes to Terms",
      icon: <Calendar className="h-6 w-6" />,
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      gradient: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-primary/20">
                <FileText className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Legal Framework</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Terms of
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Service
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Please read these terms and conditions carefully before using our services. These terms govern your use of JAYAA IT Solution's services and establish the legal framework for our professional relationship.
              </p>
            </AnimatedDiv>
          </div>

          {/* Key Information Cards */}
          <AnimatedDiv className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" delay={0.2}>
            {[
              { icon: <Shield className="h-6 w-6" />, title: "Secure & Compliant", description: "Our terms ensure data protection", color: "from-blue-500 to-cyan-500" },
              { icon: <Users className="h-6 w-6" />, title: "Fair & Transparent", description: "Clear responsibilities for all parties", color: "from-green-500 to-emerald-500" },
              { icon: <FileText className="h-6 w-6" />, title: "Regularly Updated", description: "Terms reflect current best practices", color: "from-purple-500 to-violet-500" }
            ].map((item, index) => (
              <AnimatedDiv key={item.title} delay={0.3 + index * 0.1}>
                <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="relative z-10 pt-6 pb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 mx-auto mb-3`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <AnimatedDiv key={section.title} delay={index * 0.1}>
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${section.gradient} text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        {section.icon}
                      </div>
                      <span className="font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                        {index + 1}. {section.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv delay={0.2}>
            <Card className="bg-gradient-to-br from-white/90 to-primary/5 dark:from-gray-900/90 dark:to-primary/10 border-0 shadow-2xl backdrop-blur-sm p-8 md:p-16 relative overflow-hidden max-w-4xl mx-auto">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              
              <CardContent className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg mx-auto mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Questions About Our Terms?
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please don't hesitate to contact us. Our legal team is here to help clarify any concerns you may have.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:sanjayj@jayaaitsolution.com" className="text-primary hover:text-secondary transition-colors font-semibold">
                      sanjayj@jayaaitsolution.com
                    </a>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
                
                <div className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Link href="/contact">
                      Contact Legal Team
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
