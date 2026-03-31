"use client"

import { useState } from "react"
import { institutionalNavLinks, primaryNavLinks } from "@/config/navigation"
import { TrackedLink } from "./TrackedLink"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-slate-100 transition"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div id="mobile-navigation" className="absolute left-0 top-16 w-full bg-white border-b shadow-sm">
          <div className="flex flex-col px-6 py-6 gap-5 text-sm font-medium">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calculadoras</p>
            {primaryNavLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                source="mobile_menu"
                label={link.label}
                className="text-slate-700 hover:text-green-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </TrackedLink>
            ))}

            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Institucional</p>
            {institutionalNavLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                source="mobile_menu_institutional"
                label={link.label}
                className="text-slate-700 hover:text-green-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
