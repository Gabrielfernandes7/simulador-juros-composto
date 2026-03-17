"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

const ADSENSE_TEST_MODE = process.env.NEXT_PUBLIC_ADSENSE_TEST_MODE === "true"

export default function AdsenseAd() {
  const adRef = useRef<HTMLModElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const adElement = adRef.current

    if (!adElement) {
      return
    }

    const adStatus = adElement.getAttribute("data-adsbygoogle-status")

    if (adStatus === "done") {
      return
    }

    const scriptReady = !!document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    )

    if (!scriptReady) {
      return
    }

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("Falha ao solicitar anúncio do AdSense:", err)
    }
  }, [pathname])

  return (
    <div className="mx-auto my-8 w-full max-w-5xl px-6">
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
