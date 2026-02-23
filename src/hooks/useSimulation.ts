"use client"

import { useMemo, useState } from "react"
import { simulateCompoundInterest } from "@/lib/compound"
import { calculateRealRate } from "@/lib/inflation"
import { SimulationInput, SimulationResult } from "@/types/simulation"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { validateSimulation } from "@/lib/validation"

const defaultInput: SimulationInput = {
  initialAmount: 1000.0,
  annualRate: 12.0,
  monthlyContribution: 500.0,
  years: 5
}

const emptyResult: SimulationResult = {
  finalAmount: 0,
  totalInvested: 0,
  totalInterest: 0,
  monthlyRate: 0,
  history: []
}

export function useSimulation(initialValues?: Partial<SimulationInput>) {
  const [input, setInput] = useState<SimulationInput>({
    ...defaultInput,
    ...initialValues
  })

  const [inflationRate, setInflationRate] = useState(4)
  const [useInflation, setUseInflation] = useState(false)

  const debouncedInput = useDebouncedValue(input, 300)
  const debouncedInflation = useDebouncedValue(inflationRate, 300)

  // 1️⃣ Validação sempre roda com valores atuais (não debounced)
  const errors = useMemo(() => {
    return validateSimulation(input, inflationRate, useInflation)
  }, [input, inflationRate, useInflation])

  const isValid = Object.keys(errors).length === 0

  // 2️⃣ Cálculo só roda se for válido
  const result: SimulationResult = useMemo(() => {
    if (!isValid) return emptyResult

    const adjustedRate = useInflation
      ? calculateRealRate(debouncedInput.annualRate, debouncedInflation)
      : debouncedInput.annualRate

    return simulateCompoundInterest({
      ...debouncedInput,
      annualRate: adjustedRate
    })
  }, [debouncedInput, debouncedInflation, useInflation, isValid])

  const totalGrowthPercent = useMemo(() => {
    if (!isValid || result.totalInvested === 0) return 0
    return ((result.finalAmount / result.totalInvested) - 1) * 100
  }, [result, isValid])

  function updateField<K extends keyof SimulationInput>(
    field: K,
    value: SimulationInput[K]
  ) {
    setInput(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return {
    input,
    result,
    totalGrowthPercent,
    errors,
    isValid,
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation
  }
}