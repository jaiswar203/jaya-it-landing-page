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