"use client"

import { useMemo, useState } from "react"
import { simulateCompoundInterest } from "@/lib/compound"
import { calculateRealRate } from "@/lib/inflation"
import { SimulationInput, SimulationResult } from "@/types/simulation"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"

const defaultInput: SimulationInput = {
  initialAmount: 1000.0,
  annualRate: 12.0,
  monthlyContribution: 500.0,
  years: 5
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

  const result: SimulationResult = useMemo(() => {
    const adjustedRate = useInflation
      ? calculateRealRate(debouncedInput.annualRate, debouncedInflation)
      : debouncedInput.annualRate

    return simulateCompoundInterest({
      ...debouncedInput,
      annualRate: adjustedRate
    })

  }, [debouncedInput, debouncedInflation, useInflation])

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
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation
  }
}