import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Database, Clock, Users, FileText, Mail } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy Rights",
  description: "JAYAA IT Solution's comprehensive privacy policy. Learn how we collect, use, and protect your personal information. GDPR compliant with transparent data practices and user control.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal information",
    "data security",
    "privacy rights",
    "information security",
    "data collection",
    "user privacy",
    "data usage",
    "privacy practices",
    "data retention"
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Data Protection & Privacy Rights | JAYAA IT",
    description: "JAYAA IT Solution's comprehensive privacy policy. Learn how we collect, use, and protect your personal information with GDPR compliant practices.",
    url: "https://www.jayaaitsolution.com/privacy-policy",
    type: "website",
    images: [
      {
        url: "/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - JAYAA IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Data Protection & Privacy Rights | JAYAA IT",
    description: "JAYAA IT Solution's comprehensive privacy policy. Learn how we collect, use, and protect your personal information with GDPR compliant practices.",
    images: ["/og-privacy-policy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      icon: <FileText className="h-6 w-6" />,
      content: "Welcome to JAYAA IT Solution Pvt. Ltd. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at sanjayj@jayaaitsolution.com.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6" />,
      content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; and other similar information.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6" />,
      content: "We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
      uses: [
        "To send administrative information to you.",
        "To protect our Services.",
        "To respond to legal requests and prevent harm.",
        "To manage user accounts.",
        "To deliver and facilitate delivery of services to the user."
      ],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Information Sharing",
      icon: <Users className="h-6 w-6" />,
      content: "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Data Retention",
      icon: <Clock className="h-6 w-6" />,
      content: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Information Security",
      icon: <Shield className="h-6 w-6" />,
      content: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Policy Updates",
      icon: <Lock className="h-6 w-6" />,
      content: "Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible.",
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
                <Shield className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Privacy & Data Protection</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Privacy
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Understanding how we collect, use, and protect your personal information. Your privacy is fundamental to our relationship, and we&apos;re committed to maintaining the highest standards of data protection.
              </p>
            </AnimatedDiv>
          </div>

          {/* Key Privacy Features */}
          <AnimatedDiv className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16" delay={0.2}>
            {[
              { icon: <Lock className="h-6 w-6" />, title: "Secure by Design", description: "End-to-end encryption", color: "from-blue-500 to-cyan-500" },
              { icon: <Shield className="h-6 w-6" />, title: "GDPR Compliant", description: "Full regulatory compliance", color: "from-green-500 to-emerald-500" },
              { icon: <Eye className="h-6 w-6" />, title: "Transparent Practices", description: "Clear data usage policies", color: "from-purple-500 to-violet-500" },
              { icon: <Users className="h-6 w-6" />, title: "User Control", description: "You own your data", color: "from-orange-500 to-red-500" }
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

      {/* Privacy Policy Content Section */}
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
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                      {section.content}
                    </p>
                    
                    {section.uses && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-3">We use your information to:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {section.uses.map((use, useIndex) => (
                            <li key={useIndex} className="flex items-start space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient} mt-2 flex-shrink-0`}></div>
                              <span className="text-muted-foreground text-sm">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                  Questions About Your Privacy?
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  If you have questions or comments about this privacy notice, or need clarification about our data practices, we&apos;re here to help. Your privacy concerns are our priority.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:sanjayj@jayaaitsolution.com" className="text-primary hover:text-secondary transition-colors font-semibold">
                      sanjayj@jayaaitsolution.com
                    </a>
                  </div>
                  
                  <div className="text-muted-foreground">
                    <p className="mb-1">Office Address:</p>
                    <p className="text-sm">803/8, Ekatva Onyx, Wagle Estate Thane West-400604</p>
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
                      Contact Privacy Team
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
