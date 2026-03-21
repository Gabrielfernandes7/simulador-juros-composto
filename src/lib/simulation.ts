import { simulateCompoundInterest } from "@/lib/compound"
import {
  SimulationComposedResult,
  SimulationInput,
  SimulationOptions,
  SimulationResult,
  SimulationScenario
} from "@/types/simulation"
import { calculateRealRate } from "@/lib/inflation"

export const emptySimulationResult: SimulationResult = {
  finalAmount: 0,
  totalInvested: 0,
  totalInterest: 0,
  growthPercent: 0,
  monthlyRate: 0,
  history: []
}

export function buildSimulationScenario(
  input: SimulationInput,
  options?: SimulationOptions
): SimulationScenario {
  const inflationRate = options?.inflationRate ?? 0
  const useInflation = options?.useInflation ?? false

  const effectiveAnnualRate = useInflation
    ? calculateRealRate(input.annualRate, inflationRate)
    : input.annualRate

  return {
    input,
    inflationRate,
    useInflation,
    effectiveAnnualRate
  }
}

export function buildSimulationResult(
  scenario: SimulationScenario
): SimulationComposedResult {
  const result = simulateCompoundInterest({
    ...scenario.input,
    annualRate: scenario.effectiveAnnualRate
  })

  return {
    scenario,
    result
  }
}
