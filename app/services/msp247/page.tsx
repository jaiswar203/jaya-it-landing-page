import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ServerCog } from "lucide-react"

const msp247Services = [
  "24 X 7 Managed Cloud Services (AWS, Azure, GCP)",
  "Cloud Security Implementation & Management",
  "Disaster Recovery & Business Continuity Planning",
  "Security Patching & Vulnerability Management",
  "Web Application Firewall (WAF) Services",
  "Cloud Cost Optimization",
  "DevOps & Infrastructure as Code (IaC) Management",
  "Managed Backup & Recovery",
]

export default function MSP247Page() {
  return (
    <>
      <PageHeader
        title="MSP247: Managed Cloud & Security"
        description="Reliable 24/7 managed services for your cloud infrastructure and security, ensuring optimal performance and protection."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Always-On Cloud Management with MSP247</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                MSP247 provides comprehensive managed services for your cloud environments, offering round-the-clock
                monitoring, management, and support. We help you harness the full potential of the cloud while ensuring
                security, compliance, and cost-efficiency.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Our team of certified cloud experts works proactively to maintain the health, performance, and security
                of your cloud infrastructure, allowing you to focus on your core business objectives.
              </p>
            </div>
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-medium bg-primary/10 flex items-center justify-center">
              <ServerCog size={128} className="text-primary opacity-50" />
            </div>
          </AnimatedDiv>

          <AnimatedDiv className="mt-16 sm:mt-24">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-10">Key Services under MSP247</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {msp247Services.map((service, index) => (
                <AnimatedDiv key={service} delay={index * 0.05}>
                  <Card className="h-full shadow-subtle hover:shadow-medium transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        {service}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">
                        Detailed description for {service.toLowerCase()} highlighting 24/7 support and cloud platform
                        expertise.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
