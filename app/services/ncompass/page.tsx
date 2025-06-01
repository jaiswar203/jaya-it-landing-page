import PageHeader from "@/components/ui/page-header"
import AnimatedDiv from "@/components/ui/animated-div"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Compass } from "lucide-react"

const ncompassServices = [
  "Virtual CISO (vCISO) Services",
  "DPDP Act Consulting & Compliance",
  "ISO 27001 Consulting & Certification Assistance",
  "RBI Master Direction Compliance (BFSI)",
  "SEBI CSCRF Framework Consulting",
  "SEBI Cloud Adoption Framework Consulting",
  "Cybersecurity Staffing & Talent Acquisition",
  "Security Awareness Training Programs",
  "IT Governance, Risk & Compliance (GRC) Framework Implementation",
]

export default function NCompassPage() {
  return (
    <>
      <PageHeader
        title="nCompass: Consulting & Compliance"
        description="Navigate the complex landscape of IT governance, risk management, and regulatory compliance with our expert consulting services."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Strategic Guidance with nCompass</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                nCompass offers specialized consulting services to help your organization establish robust IT
                governance, manage risks effectively, and achieve regulatory compliance. Our experienced consultants
                provide strategic advice and practical solutions tailored to your industry and business needs.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                From developing cybersecurity strategies to implementing compliance frameworks like ISO 27001 and DPDP
                Act, we guide you every step of the way, ensuring your IT practices align with your business objectives
                and legal obligations.
              </p>
            </div>
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-medium bg-primary/10 flex items-center justify-center">
              <Compass size={128} className="text-primary opacity-50" />
            </div>
          </AnimatedDiv>

          <AnimatedDiv className="mt-16 sm:mt-24">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-10">Key Services under nCompass</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ncompassServices.map((service, index) => (
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
                        Detailed description for {service.toLowerCase()} emphasizing strategic advice and compliance
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
