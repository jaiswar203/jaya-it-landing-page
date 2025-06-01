import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target } from "lucide-react"

const pinpointServices = [
  "Cloud Security Assessment",
  "Phishing Simulation Services",
  "Red Teaming Services",
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "Secure Code Review Services",
  "Breach and Attack Simulation (BAS) Services",
  "IoT/OT Security Assessment",
  "Application Security Testing (SAST/DAST)",
]

export default function PinpointPage() {
  return (
    <>
      <PageHeader
        title="Pinpoint: Assessment & Simulation"
        description="Identify vulnerabilities and strengthen your defenses with our comprehensive security assessment and simulation services."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Precision Security Insights with Pinpoint</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Pinpoint offers a suite of specialized assessment and simulation services designed to rigorously test
                your security posture. We help you uncover hidden vulnerabilities, understand potential attack vectors,
                and evaluate the effectiveness of your existing defenses.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Our expert team uses industry-leading methodologies and tools to provide actionable insights, enabling
                you to prioritize remediation efforts and enhance your overall cyber resilience.
              </p>
            </div>
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-medium bg-primary/10 flex items-center justify-center">
              <Target size={128} className="text-primary opacity-50" />
            </div>
          </AnimatedDiv>

          <AnimatedDiv className="mt-16 sm:mt-24">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-10">Key Services under Pinpoint</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinpointServices.map((service, index) => (
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
                        Detailed description for {service.toLowerCase()} focusing on assessment methodologies and
                        outcomes.
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
