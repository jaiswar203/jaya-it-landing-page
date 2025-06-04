"use client"
import { useState, useEffect } from "react"
import StrategicPartnersSectionMobile from "./StrategicPartnersSectionMobile"
import StrategicPartnersSectionDesktop from "./StrategicPartnersSectionDesktop"

interface Partner {
  id: number
  name: string
  logo: string
}

interface StrategicPartnersSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  partners?: Partner[]
  className?: string
}

const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/partners/strategic/page10_img26.png"
  },
  {
    id: 2,
    name: "Amazon Web Services",
    logo: "/partners/strategic/page10_img25.png"
  },
  {
    id: 3,
    name: "Google Cloud",
    logo: "/partners/strategic/page10_img24.png"
  },
  {
    id: 4,
    name: "Cisco",
    logo: "/partners/strategic/page10_img23.png"
  },
  {
    id: 5,
    name: "VMware",
    logo: "/partners/strategic/page10_img22.png"
  },
  {
    id: 6,
    name: "Oracle",
    logo: "/partners/strategic/page10_img21.png"
  },
  {
    id: 7,
    name: "IBM",
    logo: "/partners/strategic/page10_img20.png"
  },
  {
    id: 8,
    name: "Salesforce",
    logo: "/partners/strategic/page10_img19.png"
  },
  {
    id: 9,
    name: "ServiceNow",
    logo: "/partners/strategic/page10_img18.jpeg"
  },
  {
    id: 10,
    name: "Atlassian",
    logo: "/partners/strategic/page10_img16.jpeg"
  },
  {
    id: 11,
    name: "Adobe",
    logo: "/partners/strategic/page10_img14.png"
  },
  {
    id: 12,
    name: "Slack",
    logo: "/partners/strategic/page10_img12.png"
  }
]

const managedServices = [
  "License Management & Renewals",
  "Tool Setup & Technical Configuration",
  "24/7 Monitoring & Incident Handling", 
  "Performance & Uptime Optimization",
  "Regular Security Patches & Feature Updates",
  "User Enablement & Technical Support",
  "Custom Integration & Interoperability",
  "Security & Compliance Reporting",
  "Fast-track Issue Resolution"
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener)
    } else {
      media.addListener(listener)
    }
    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [matches, query])

  return matches
}

export default function StrategicPartnersSection(props: StrategicPartnersSectionProps) {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1023px)')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent hydration mismatch by showing nothing on server side
  if (!isMounted) {
    return <div className="py-20 sm:py-28" /> // Placeholder with same height
  }

  if (isMobile) {
    return <StrategicPartnersSectionMobile {...props} />
  }

  return <StrategicPartnersSectionDesktop {...props} />
} 