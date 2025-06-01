import PageHeader from "@/components/ui/page-header"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShieldCheck, SearchCheck, CloudCog, ListChecks, BarChart2, Zap } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"

const serviceCategories = [
  {
    name: "Peregrine",
    title: "Managed Detection & Response",
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    description: "Proactive threat detection and response services to safeguard your digital assets.",
    href: "/services/peregrine",
    items: ["Threat Intelligence Services", "Digital Forensics Services", "Brand Risk & Dark Web Monitoring"],
  },
  {
    name: "Pinpoint",
    title: "Assessment & Simulation",
    icon: <SearchCheck className="h-10 w-10 text-primary mb-4" />,
    description: "Comprehensive security assessments and simulations to identify and mitigate vulnerabilities.",
    href: "/services/pinpoint",
    items: ["Cloud Security Assessment", "Phishing Simulation Services", "Red Teaming Services"],
  },
  {
    name: "MSP247",
    title: "Managed Cloud & Security",
    icon: <CloudCog className="h-10 w-10 text-primary mb-4" />,
    description: "Round-the-clock managed services for cloud infrastructure and security.",
    href: "/services/msp247",
    items: ["24 X 7 Managed Cloud Services", "Cloud Security Implementation", "Disaster Recovery Consulting"],
  },
  {
    name: "nCompass",
    title: "Consulting & Compliance",
    icon: <ListChecks className="h-10 w-10 text-primary mb-4" />,
    description: "Expert consulting for IT governance, risk management, and regulatory compliance.",
    href: "/services/ncompass",
    items: ["Virtual CISO Services", "DPDP Act Consulting", "ISO 27001 Consulting"],
  },
]

const generalOfferings = {
  "IT Security Solutions": ["Firewalls", "DLP", "DRM"],
  "Infrastructure Management": [
    "Audit Tool (Compliance Mitigation)",
    "Data Classification",
    "Privilege Access Management (PAM/PIM)",
    "Endpoint Protection",
    "Zero Trust services",
    "Virtual Desktop Infrastructure (VDI)",
    "Application Performance Monitoring (APM)",
  ],
  "Cyber Security Services": [
    "Vulnerability Assessment and Penetration Testing (VAPT)",
    "Security Compliance and Risk Management",
    "Incident Response and Forensic Analysis",
  ],
  "Managed Services": ["24/7 IT Support and Monitoring", "Managed Security Services (MSS)", "Endpoint Management"],
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Comprehensive IT Services"
        description="Explore our wide range of IT solutions designed to empower organizations and enhance operational efficiency, security, and compliance."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Specialized Service Suites" subtitle="Our Expertise" />
          <AnimatedDiv className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <AnimatedDiv key={category.name} delay={index * 0.1}>
                <Card className="h-full flex flex-col shadow-subtle hover:shadow-medium transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center">
                    {category.icon}
                    <CardTitle className="text-2xl text-primary">{category.name}</CardTitle>
                    <CardDescription className="text-lg font-medium">{category.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80 mb-4 text-center">{category.description}</p>
                    <ul className="space-y-2 text-sm">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <Zap className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link href={category.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Core Capabilities" subtitle="Broad Spectrum Solutions" />
          <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Object.entries(generalOfferings).map(([category, items], index) => (
              <AnimatedDiv key={category} delay={index * 0.1}>
                <Card className="shadow-subtle h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm columns-1 sm:columns-2">
                      {items.map((item: string) => (
                        <li key={item} className="flex items-center text-foreground/70 mb-1 break-inside-avoid">
                          <BarChart2 className="h-3.5 w-3.5 text-secondary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
