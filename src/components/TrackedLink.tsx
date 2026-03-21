"use client"

import Link, { type LinkProps } from "next/link"
import { trackEvent, analyticsEvents } from "@/lib/analytics"
import { PropsWithChildren } from "react"

type TrackedLinkProps = PropsWithChildren<
  LinkProps & {
    className?: string
    source: string
    label: string
  }
>

export function TrackedLink({
  children,
  source,
  label,
  href,
  className,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={className}
      onClick={(event) => {
        trackEvent(analyticsEvents.calculatorNavigationClick, {
          source,
          destination: typeof href === "string" ? href : href.toString(),
          label
        })

        props.onClick?.(event)
      }}
    >
      {children}
    </Link>
  )
}
