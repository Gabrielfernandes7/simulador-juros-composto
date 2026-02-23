"use client"

import { useMemo, useState } from "react"
import { simulateCompoundInterest } from "@/lib/compound"
import { calculateRealRate } from "@/lib/inflation"
import { SimulationInput, SimulationResult } from "@/types/simulation"

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

  const result: SimulationResult = useMemo(() => {
    const adjustedRate = useInflation
      ? calculateRealRate(input.annualRate, inflationRate)
      : input.annualRate

    return simulateCompoundInterest({
      ...input,
      annualRate: adjustedRate
    })

  }, [input, inflationRate, useInflation])

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