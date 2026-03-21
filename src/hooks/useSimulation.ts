"use client"

import { useMemo, useState } from "react"
import {
  CalculatorMetric,
  CalculatorType,
  PassiveIncomeProjection,
  SimulationInput
} from "@/types/simulation"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { validateSimulation } from "@/lib/validation"
import {
  buildCalculatorMetrics,
  buildSimulationResult,
  buildSimulationScenario,
  calculatePassiveIncomeProjection,
  emptySimulationResult
} from "@/lib/simulation"

const defaultInput: SimulationInput = {
  initialAmount: 1000.0,
  annualRate: 12.0,
  monthlyContribution: 500.0,
  years: 5
}

interface UseSimulationOptions {
  initialValues?: Partial<SimulationInput>
  calculatorType?: CalculatorType
}

export function useSimulation({
  initialValues,
  calculatorType = "compound_interest"
}: UseSimulationOptions = {}) {
  const [input, setInput] = useState<SimulationInput>({
    ...defaultInput,
    ...initialValues
  })

  const [inflationRate, setInflationRate] = useState(4)
  const [useInflation, setUseInflation] = useState(false)
  const [passiveIncomeRate, setPassiveIncomeRate] = useState(4)

  const debouncedInput = useDebouncedValue(input, 300)
  const debouncedInflationRate = useDebouncedValue(inflationRate, 300)
  const debouncedPassiveIncomeRate = useDebouncedValue(passiveIncomeRate, 300)

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

  const passiveIncomeProjection: PassiveIncomeProjection = useMemo(() => {
    return calculatePassiveIncomeProjection(result.finalAmount, debouncedPassiveIncomeRate)
  }, [debouncedPassiveIncomeRate, result.finalAmount])

  const calculatorMetrics: CalculatorMetric[] = useMemo(() => {
    const metrics = buildCalculatorMetrics(calculatorType, result, {
      passiveIncomeRate: debouncedPassiveIncomeRate
    })

    return metrics.map(metric => {
      if (metric.key === "monthlyContribution") {
        return {
          ...metric,
          value: debouncedInput.monthlyContribution
        }
      }

      if (metric.key === "initialCapital") {
        return {
          ...metric,
          value: debouncedInput.initialAmount
        }
      }

      return metric
    })
  }, [calculatorType, debouncedInput.initialAmount, debouncedInput.monthlyContribution, debouncedPassiveIncomeRate, result])

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
    setUseInflation,
    passiveIncomeRate,
    setPassiveIncomeRate,
    passiveIncomeProjection,
    calculatorMetrics
  }
}
