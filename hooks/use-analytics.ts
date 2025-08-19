'use client'

import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const useAnalytics = () => {
  const searchParams = useSearchParams()

  // Track referrer on component mount
  useEffect(() => {
    const ref = searchParams.get('ref')
    const utm_source = searchParams.get('utm_source')
    const utm_medium = searchParams.get('utm_medium')
    const utm_campaign = searchParams.get('utm_campaign')
    const utm_term = searchParams.get('utm_term')
    const utm_content = searchParams.get('utm_content')

    if (ref || utm_source) {
      // Track referrer source
      const referrerSource = ref || utm_source
      if (referrerSource) {
        trackReferrer(referrerSource, {
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          ref_param: ref,
          utm_source_param: utm_source
        })

        // Store referrer in session storage for future tracking
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('jayaa_referrer', JSON.stringify({
            source: referrerSource,
            timestamp: new Date().toISOString(),
            utm_data: {
              utm_source,
              utm_medium,
              utm_campaign,
              utm_term,
              utm_content
            }
          }))
        }
      }
    }
  }, [searchParams])

  const trackReferrer = useCallback((
    source: string,
    additionalParams?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track referrer as a custom event
      window.gtag('event', 'referrer_tracking', {
        referrer_source: source,
        referrer_type: 'external',
        page_url: window.location.href,
        ...additionalParams
      })

      // Set custom dimensions using the correct gtag syntax
      window.gtag('config', 'G-432LMKNTQ7', {
        custom_map: {
          'referrer_source': 'referrer_source',
          'referrer_type': 'referrer_type'
        },
        referrer_source: source,
        referrer_type: 'external'
      })
    }
  }, [])

  const getStoredReferrer = useCallback(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('jayaa_referrer')
      return stored ? JSON.parse(stored) : null
    }
    return null
  }, [])

  const trackEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const referrerData = getStoredReferrer()
      
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        referrer_source: referrerData?.source || 'direct',
        referrer_type: referrerData?.source ? 'external' : 'direct'
      })
    }
  }, [getStoredReferrer])

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const referrerData = getStoredReferrer()
      
      window.gtag('config', 'G-432LMKNTQ7', {
        page_path: url,
        referrer_source: referrerData?.source || 'direct',
        referrer_type: referrerData?.source ? 'external' : 'direct'
      })
    }
  }, [getStoredReferrer])

  const trackCustomEvent = useCallback((
    eventName: string,
    parameters: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const referrerData = getStoredReferrer()
      
      window.gtag('event', eventName, {
        ...parameters,
        referrer_source: referrerData?.source || 'direct',
        referrer_type: referrerData?.source ? 'external' : 'direct'
      })
    }
  }, [getStoredReferrer])

  const trackConversion = useCallback((conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const referrerData = getStoredReferrer()
      
      window.gtag('event', 'conversion', {
        send_to: `AW-${conversionId}/default`,
        value: value,
        referrer_source: referrerData?.source || 'direct',
        referrer_type: referrerData?.source ? 'external' : 'direct'
      })
    }
  }, [getStoredReferrer])

  const trackReferrerEvent = useCallback((
    eventName: string,
    eventValue?: number
  ) => {
    const referrerData = getStoredReferrer()
    
    if (referrerData?.source) {
      trackCustomEvent(eventName, {
        referrer_source: referrerData.source,
        referrer_type: 'external',
        utm_data: referrerData.utm_data,
        event_value: eventValue
      })
    }
  }, [getStoredReferrer, trackCustomEvent])

  return {
    trackEvent,
    trackPageView,
    trackCustomEvent,
    trackConversion,
    trackReferrer,
    getStoredReferrer,
    trackReferrerEvent
  }
}
