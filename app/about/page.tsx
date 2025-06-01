import PageHeader from "@/components/ui/page-header"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import AnimatedDiv from "@/components/ui/animated-div"

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About JAYAA IT Solution"
        description="Learn more about our company, mission, and the dedicated team driving innovation in IT."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Premier IT Service Provider</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Jayaa IT Solution is a premier IT service provider, renowned for delivering innovative, cutting-edge
                technology solutions to businesses globally. With a strong focus on IT security, infrastructure
                management, consultancy, and support, we empower organizations to meet their operational and strategic
                goals with precision, efficiency, and innovation.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Our mission is to transform businesses by providing robust, scalable, and secure IT solutions that
                enhance productivity, ensure regulatory compliance, and enable seamless operations. At Jayaa IT
                Solution, we combine technological expertise with customer-centric approaches to deliver tailored
                solutions that address unique business challenges.
              </p>
              <ul className="space-y-3 text-foreground/80">
                {[
                  "Commitment to excellence and innovation.",
                  "Partnerships with leading Original Equipment Manufacturers (OEMs).",
                  "Enabling businesses from start-ups to enterprises to thrive.",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-medium">
              <Image
                src="/placeholder.svg?width=600&height=450&text=Innovative+Solutions"
                alt="Innovative Solutions"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </AnimatedDiv>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Our Core Values" subtitle="Guiding Principles" />
          <AnimatedDiv className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Client-Centricity",
                description: "Understanding and exceeding client expectations is at the heart of everything we do.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "Continuously exploring and implementing cutting-edge technologies for optimal solutions.",
              },
              {
                icon: <Target className="h-10 w-10 text-primary" />,
                title: "Integrity & Excellence",
                description:
                  "Upholding the highest standards of integrity and striving for excellence in all our endeavors.",
              },
            ].map((value, index) => (
              <AnimatedDiv key={value.title} delay={index * 0.1}>
                <Card className="text-center h-full shadow-subtle hover:shadow-medium transition-shadow duration-300 p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                  <CardContent className="text-sm text-foreground/70 p-0">{value.description}</CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedDiv>
            <Card className="bg-primary/5 border-primary/20 shadow-lg p-8 md:p-12">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl text-primary text-center">Our Identity</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center max-w-3xl mx-auto">
                <p className="text-foreground/80 mb-4 leading-relaxed text-lg">
                  At Jayaa IT Solution, we are a team of dedicated IT professionals driven by a passion for leveraging
                  technology to transform businesses. Our blend of deep technical expertise and a client-first approach
                  ensures that we deliver solutions tailored to the unique needs of our partners.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  We take pride in empowering organizations to stay ahead in an ever-evolving digital landscape by
                  providing innovative, secure, and scalable IT solutions. With a commitment to excellence, we strive to
                  be a trusted partner in your journey toward growth and technological advancement.
                </p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
