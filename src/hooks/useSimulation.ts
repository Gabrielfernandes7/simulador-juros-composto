"use client"

import { useMemo, useState } from "react"
import {
  CalculatorMetric,
  CalculatorType,
  PassiveIncomeProjection,
  SimulationInput,
  TaxBreakdown,
  TaxSimulationOptions
} from "@/types/simulation"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { validateSimulation } from "@/lib/validation"
import { calculateRequiredMonthlyContribution } from "@/lib/goal"
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
  years: 5,
  targetAmount: undefined
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
  const [useTaxes, setUseTaxes] = useState(false)

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

  const taxOptions: TaxSimulationOptions = useMemo(() => ({
    enabled: useTaxes,
    regime: "simplified_income_tax",
    productRule: "generic_investment"
  }), [useTaxes])

  const composedResult = useMemo(() => {
    if (!isValid) {
      return {
        result: emptySimulationResult,
        taxes: null as TaxBreakdown | null,
        taxOptions: {
          enabled: false,
          regime: "simplified_income_tax" as const,
          productRule: "generic_investment" as const,
          taxRate: 0.15
        }
      }
    }

    return buildSimulationResult(scenario, taxOptions)
  }, [isValid, scenario, taxOptions])

  const result = composedResult.result

  const passiveIncomeProjection: PassiveIncomeProjection = useMemo(() => {
    return calculatePassiveIncomeProjection(result.finalAmount, debouncedPassiveIncomeRate)
  }, [debouncedPassiveIncomeRate, result.finalAmount])

  const requiredContribution = useMemo(() => {
    if (calculatorType !== "financial_goal" || !debouncedInput.targetAmount) {
      return debouncedInput.monthlyContribution
    }

    return calculateRequiredMonthlyContribution({
      initialAmount: debouncedInput.initialAmount,
      annualRate: useInflation ? scenario.effectiveAnnualRate : debouncedInput.annualRate,
      years: debouncedInput.years,
      targetAmount: debouncedInput.targetAmount
    })
  }, [calculatorType, debouncedInput.annualRate, debouncedInput.initialAmount, debouncedInput.monthlyContribution, debouncedInput.targetAmount, debouncedInput.years, scenario.effectiveAnnualRate, useInflation])

  const calculatorMetrics: CalculatorMetric[] = useMemo(() => {
    const metrics = buildCalculatorMetrics(calculatorType, result, {
      passiveIncomeRate: debouncedPassiveIncomeRate,
      monthlyContribution: requiredContribution,
      targetAmount: debouncedInput.targetAmount
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
  }, [calculatorType, debouncedInput.initialAmount, debouncedInput.monthlyContribution, debouncedInput.targetAmount, debouncedPassiveIncomeRate, requiredContribution, result])

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
    taxes: composedResult.taxes,
    taxOptions: composedResult.taxOptions,
    errors,
    isValid,
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation,
    passiveIncomeRate,
    setPassiveIncomeRate,
    useTaxes,
    setUseTaxes,
    passiveIncomeProjection,
    calculatorMetrics
  }
}
