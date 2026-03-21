"use client"

import { useMemo, useState } from "react"
import { SimulationInput } from "@/types/simulation"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { validateSimulation } from "@/lib/validation"
import {
  buildSimulationResult,
  buildSimulationScenario,
  emptySimulationResult
} from "@/lib/simulation"

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
  const debouncedInflationRate = useDebouncedValue(inflationRate, 300)

  const errors = useMemo(() => {
    return validateSimulation(input, inflationRate, useInflation)
  }, [input, inflationRate, useInflation])

  const isValid = Object.keys(errors).length === 0

  const scenario = useMemo(() => {
    return buildSimulationScenario(debouncedInput, {
      inflationRate: debouncedInflationRate,
      useInflation
    })
  }, [debouncedInput, debouncedInflationRate, useInflation])

  const result = useMemo(() => {
    if (!isValid) return emptySimulationResult

    return buildSimulationResult(scenario).result
  }, [isValid, scenario])

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
    errors,
    isValid,
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation
  }
}
