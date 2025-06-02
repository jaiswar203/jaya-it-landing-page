import AnimatedDiv from "@/components/ui/animated-div"
import { Award, Users, Clock, TrendingUp } from "lucide-react"

interface StatItem {
  number: string
  label: string
  icon: React.ReactNode
}

interface StatsSectionProps {
  stats?: StatItem[]
  className?: string
}

const defaultStats: StatItem[] = [
  { number: "250+", label: "Projects Delivered", icon: <Award className="h-6 w-6" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="h-6 w-6" /> },
]

export default function StatsSection({ stats = defaultStats, className = "" }: StatsSectionProps) {
  return (
    <section className={`py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedDiv key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  )
} 