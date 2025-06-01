import PageHeader from "@/components/ui/page-header"
import SectionHeading from "@/components/ui/section-heading"
import Image from "next/image"
import AnimatedDiv from "@/components/ui/animated-div"

const clientLogos = [
  { src: "/placeholder.svg?width=160&height=80&text=Client+1&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 1" },
  { src: "/placeholder.svg?width=160&height=80&text=Client+2&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 2" },
  { src: "/placeholder.svg?width=160&height=80&text=Client+3&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 3" },
  { src: "/placeholder.svg?width=160&height=80&text=Client+4&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 4" },
  { src: "/placeholder.svg?width=160&height=80&text=Client+5&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 5" },
  { src: "/placeholder.svg?width=160&height=80&text=Client+6&bgColor=F0F0F0&textColor=A0A0A0", alt: "Client 6" },
]

const partnerLogos = [
  { src: "/placeholder.svg?width=180&height=90&text=Partner+A&bgColor=E8E8E8&textColor=909090", alt: "Partner A" },
  { src: "/placeholder.svg?width=180&height=90&text=Partner+B&bgColor=E8E8E8&textColor=909090", alt: "Partner B" },
  { src: "/placeholder.svg?width=180&height=90&text=Partner+C&bgColor=E8E8E8&textColor=909090", alt: "Partner C" },
  { src: "/placeholder.svg?width=180&height=90&text=Partner+D&bgColor=E8E8E8&textColor=909090", alt: "Partner D" },
]

export default function ClientsPartnersPage() {
  return (
    <>
      <PageHeader
        title="Our Valued Clients & Strategic Partners"
        description="Building strong relationships based on trust, collaboration, and mutual success."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Trusted By Leading Organizations" subtitle="Our Clients" />
          <AnimatedDiv className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <AnimatedDiv key={index} delay={index * 0.05} className="flex justify-center p-4">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={150}
                  height={75}
                  className="opacity-75 hover:opacity-100 transition-opacity duration-300"
                />
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Collaborating with Industry Leaders" subtitle="Our Strategic Partners" />
          <AnimatedDiv className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <AnimatedDiv key={index} delay={index * 0.05} className="flex justify-center p-4">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={170}
                  height={85}
                  className="opacity-75 hover:opacity-100 transition-opacity duration-300"
                />
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>
    </>
  )
}
