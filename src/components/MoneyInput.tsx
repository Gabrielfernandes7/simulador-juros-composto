"use client"

import { useState } from "react"

type Props = {
  value: number
  onChange: (value: number) => void
  className?: string
}

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

function parseBRL(value: string) {
  const cleaned = value
    .replace(/\s/g, "")
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, "")

  return Number(cleaned) || 0
}

export function MoneyInput({ value, onChange, className }: Props) {
  const [display, setDisplay] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const displayedValue = isFocused ? display : formatBRL(value)

  function handleFocus() {
    setIsFocused(true)
    setDisplay(value ? value.toString().replace(".", ",") : "")
  }

  function handleBlur() {
    setIsFocused(false)
    setDisplay("")
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    setDisplay(raw)

    const numeric = parseBRL(raw)
    onChange(numeric)
  }

  return (
    <input
      type="text"
      inputMode="decimal"
      value={displayedValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      className={className}
    />
  )
}
