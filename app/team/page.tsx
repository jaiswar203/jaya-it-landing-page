import PageHeader from "@/components/ui/page-header"
import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import AnimatedDiv from "@/components/ui/animated-div"

const teamMembers = [
  {
    name: "Mr. Ramesh Kumar",
    role: "Ex. ICICI Bank IT Leader",
    description:
      "A technology leader with 35+ years of experience, including 20+ years in BFSI. Expert in technology adoption and enablement.",
    image: "/placeholder.svg?width=200&height=200&text=RK",
    linkedin: "#",
  },
  {
    name: "Mr. Anwar Sadat",
    role: "Business Development – IT",
    company: "Oman Computer Services (OCS Infotech)",
    description:
      "18+ years in international markets. Strong knowledge of technology solutions and business processes. A technology enabler for customers.",
    image: "/placeholder.svg?width=200&height=200&text=AS",
    linkedin: "#",
  },
  {
    name: "Mr. Shinaj Karuwath",
    role: "Founder – Director",
    company: "Principle Business Consultants",
    description: "20+ years in compliance and audits. A mentor with excellent knowledge of compliance and ISO audits.",
    image: "/placeholder.svg?width=200&height=200&text=SK",
    linkedin: "#",
  },
  // Add more team members if available
]

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Expert Team"
        description="Our strength lies in our experienced and dedicated professionals who drive our success and yours."
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Leadership & Expertise" subtitle="The Minds Behind JAYAA IT" />
          <AnimatedDiv className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedDiv key={member.name} delay={index * 0.1}>
                <Card className="text-center h-full shadow-subtle hover:shadow-medium transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader className="items-center pt-8">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mb-6 border-4 border-primary/20 shadow-md"
                    />
                    <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {member.role}
                    </CardDescription>
                    {member.company && <p className="text-sm text-muted-foreground mt-1">{member.company}</p>}
                  </CardHeader>
                  <CardContent className="pb-8">
                    <p className="text-sm text-foreground/70 mb-6 px-2">{member.description}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                      className="inline-block text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-7 w-7 mx-auto" />
                    </a>
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
