"use client"

import { useMemo, useState } from "react"
import { simulateCompoundInterest } from "@/lib/compound"
import { SimulationInput, SimulationResult } from "@/types/simulation"

const defaultInput: SimulationInput = {
  initialAmount: 1000,
  annualRate: 12,
  monthlyContribution: 500,
  years: 5
}

export function useSimulation(initialValues?: Partial<SimulationInput>) {
  const [input, setInput] = useState<SimulationInput>({
    ...defaultInput,
    ...initialValues
  })

  const result: SimulationResult = useMemo(() => {
    return simulateCompoundInterest(input)
  }, [input])

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
    updateField
  }
}