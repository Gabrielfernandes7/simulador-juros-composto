"use client"

import { useState, useEffect } from "react"

type Props = {
  value: number
  onChange: (value: number) => void
  className?: string
}

export function PercentInput({ value, onChange, className }: Props) {
  // Criamos um estado de string para o que o usuário vê
  const [displayValue, setDisplayValue] = useState(value.toString())

  // Sincroniza o display se o valor vier de fora (ex: reset do form)
  useEffect(() => {
    const numericDisplay = Number(displayValue.replace(",", "."))
    if (value !== numericDisplay) {
      setDisplayValue(value.toString().replace(".", ","))
    }
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    
    // 1. Permitir que o usuário digite apenas números, pontos e vírgulas
    // Isso evita que o estado de string aceite letras
    const sanitizedValue = inputValue
        .replace(/[^0-9.,]/g, "")
        .replace(/(\..*)\./g, "$1")
        .replace(/(,.*),/g, "$1")
    
    // Atualiza o que o usuário vê imediatamente (permite o ponto/vírgula pendente)
    setDisplayValue(sanitizedValue)

    // 2. Tenta converter para número para avisar o componente pai
    const numericValue = Number(sanitizedValue.replace(",", "."))

    // 3. Só dispara o onChange se for um número válido
    if (!isNaN(numericValue) && sanitizedValue !== "") {
      onChange(numericValue)
    } else if (sanitizedValue === "") {
      onChange(0)
    }
  }

  return (
    <input
      type="text"
      inputMode="decimal"
      value={displayValue} // O input agora é controlado pela String, não pelo Number
      onChange={handleChange}
      className={className}
      placeholder="0,00"
    />
  )
}