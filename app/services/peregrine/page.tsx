// Placeholder for /services/peregrine page
// Similar structure can be used for pinpoint, msp247, ncompass
import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ShieldAlert } from "lucide-react"

const peregrineServices = [
  "Managed Detection & Response (MDR)",
  "Threat Intelligence Services",
  "Digital Forensics Services",
  "Brand Risk & Dark Web Monitoring",
  "Elastic Stack Consulting",
  "Threat Hunting Services",
  "Security Orchestration, Automation and Response (SOAR)",
  "Endpoint Detection and Response (EDR) Management",
]

export default function PeregrinePage() {
  return (
    <>
      <PageHeader
        title="Peregrine: Managed Detection & Response"
        description="Proactive threat detection, rapid response, and continuous monitoring to safeguard your critical assets 24/7."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Advanced Threat Protection with Peregrine</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Peregrine is our flagship suite of Managed Detection and Response (MDR) services, designed to provide
                organizations with comprehensive cybersecurity monitoring, threat intelligence, and incident response
                capabilities. We act as an extension of your security team, leveraging cutting-edge technology and
                expert analysts to protect your digital environment around the clock.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Our proactive approach focuses on identifying and neutralizing threats before they can cause significant
                damage, minimizing business disruption and protecting your reputation.
              </p>
            </div>
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-medium bg-primary/10 flex items-center justify-center">
              <ShieldAlert size={128} className="text-primary opacity-50" />
            </div>
          </AnimatedDiv>

          <AnimatedDiv className="mt-16 sm:mt-24">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-10">Key Services under Peregrine</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {peregrineServices.map((service, index) => (
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
                        Detailed description for {service.toLowerCase()} can be added here, explaining its benefits and
                        features.
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
