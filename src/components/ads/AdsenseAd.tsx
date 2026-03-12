"use client"

import { useEffect } from "react"

export default function AdsenseAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7761165566694488"
      data-ad-slot="9722816732"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}