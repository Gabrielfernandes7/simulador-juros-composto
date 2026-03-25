export const analyticsEvents = {
  simulationStarted: "simulation_started",
  simulationCompleted: "simulation_completed",
  inflationEnabled: "inflation_enabled",
  calculatorNavigationClick: "calculator_navigation_click",
  adScriptMissing: "ad_script_missing",
  adPushAttempt: "ad_push_attempt",
  adPushError: "ad_push_error",
  adSlotFilled: "ad_slot_filled",
  adSlotUnfilled: "ad_slot_unfilled"
} as const

type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents]

type AnalyticsPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {}
) {
  if (typeof window === "undefined") {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...payload })

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload)
  }
}
