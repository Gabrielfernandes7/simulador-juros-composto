"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { analyticsEvents, trackEvent } from "@/lib/analytics"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

const ADSENSE_TEST_MODE = process.env.NEXT_PUBLIC_ADSENSE_TEST_MODE === "true"

export default function AdsenseAd() {
  const adRef = useRef<HTMLModElement | null>(null)
  const pathname = usePathname()
  const trackedStatusByRouteRef = useRef<Record<string, { filled: boolean; unfilled: boolean }>>({})

  useEffect(() => {
    const adElement = adRef.current

    if (!adElement) {
      return
    }

    const routeStatus =
      trackedStatusByRouteRef.current[pathname] ||
      (trackedStatusByRouteRef.current[pathname] = { filled: false, unfilled: false })

    const trackAdStatus = (status: string | null) => {
      if (status === "filled" && !routeStatus.filled) {
        routeStatus.filled = true
        trackEvent(analyticsEvents.adSlotFilled, {
          path: pathname,
          ad_slot: "9722816732"
        })
      }

      if (status === "unfilled" && !routeStatus.unfilled) {
        routeStatus.unfilled = true
        trackEvent(analyticsEvents.adSlotUnfilled, {
          path: pathname,
          ad_slot: "9722816732"
        })
      }
    }

    const connectAdStatusObserver = () => {
      const adStatusObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes" && mutation.attributeName === "data-ad-status") {
            trackAdStatus(adElement.getAttribute("data-ad-status"))
          }
        }
      })

      adStatusObserver.observe(adElement, {
        attributes: true,
        attributeFilter: ["data-ad-status"]
      })

      return adStatusObserver
    }

    const adStatus = adElement.getAttribute("data-ad-status")
    const hasRequestedAd = adElement.getAttribute("data-ad-requested") === "true"

    trackAdStatus(adStatus)

    if (adStatus === "filled" || adStatus === "unfilled") {
      return
    }

    if (hasRequestedAd) {
      const adStatusObserver = connectAdStatusObserver()
      return () => {
        adStatusObserver.disconnect()
      }
    }

    const scriptReady = !!document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    )

    if (!scriptReady) {
      trackEvent(analyticsEvents.adScriptMissing, {
        path: pathname,
        ad_slot: "9722816732"
      })
      return
    }

    let adStatusObserver: MutationObserver | null = null

    try {
      adElement.setAttribute("data-ad-requested", "true")
      trackEvent(analyticsEvents.adPushAttempt, {
        path: pathname,
        ad_slot: "9722816732"
      })
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})

      adStatusObserver = connectAdStatusObserver()
      trackAdStatus(adElement.getAttribute("data-ad-status"))
    } catch (err) {
      console.error("Falha ao solicitar anúncio do AdSense:", err)
      adElement.removeAttribute("data-ad-requested")
      trackEvent(analyticsEvents.adPushError, {
        path: pathname,
        ad_slot: "9722816732"
      })
    }

    return () => {
      adStatusObserver?.disconnect()
    }
  }, [pathname])

  return (
    <div className="mx-auto mt-8 w-full max-w-5xl px-6">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: 280 }}
        data-ad-client="ca-pub-7761165566694488"
        data-ad-slot="9722816732"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest={ADSENSE_TEST_MODE ? "on" : undefined}
      />
    </div>
  )
}
