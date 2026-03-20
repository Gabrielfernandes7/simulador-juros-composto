"use client"

import { useState } from "react"

type Props = {
  value: number
  onChange: (value: number) => void
  className?: string
}

export function PercentInput({ value, onChange, className }: Props) {
  const [displayValue, setDisplayValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const resolvedValue = isFocused
    ? displayValue
    : value.toString().replace(".", ",")

  function handleFocus() {
    setIsFocused(true)
    setDisplayValue(value.toString().replace(".", ","))
  }

  function handleBlur() {
    setIsFocused(false)
    setDisplayValue("")
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    const sanitizedValue = inputValue
      .replace(/[^0-9.,]/g, "")
      .replace(/(\..*)\./g, "$1")
      .replace(/(,.*),/g, "$1")

    setDisplayValue(sanitizedValue)

    const numericValue = Number(sanitizedValue.replace(",", "."))

    if (!Number.isNaN(numericValue) && sanitizedValue !== "") {
      onChange(numericValue)
    } else if (sanitizedValue === "") {
      onChange(0)
    }
  }

  return (
    <input
      type="text"
      inputMode="decimal"
      value={resolvedValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      className={className}
      placeholder="0,00"
    />
  )
}
