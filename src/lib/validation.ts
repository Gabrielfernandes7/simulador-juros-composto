import { SimulationInput } from "@/types/simulation"

export type SimulationErrors = Partial<
  Record<keyof SimulationInput | "inflationRate", string>
>

export function validateSimulation(
  input: SimulationInput,
  inflationRate: number,
  useInflation: boolean
): SimulationErrors {
  const errors: SimulationErrors = {}

  if (input.initialAmount < 0) {
    errors.initialAmount = "Capital não pode ser negativo"
  }

  if (input.monthlyContribution < 0) {
    errors.monthlyContribution = "Aporte não pode ser negativo"
  }

  if (input.annualRate < 0 || input.annualRate > 1000) {
    errors.annualRate = "Taxa anual deve estar entre 0% e 1000%"
  }

  if (input.years <= 0 || input.years > 100) {
    errors.years = "Tempo deve estar entre 1 e 100 anos"
  }

  if (typeof input.targetAmount === "number") {
    if (input.targetAmount <= 0) {
      errors.targetAmount = "Meta deve ser maior que zero"
    }

    if (input.targetAmount <= input.initialAmount) {
      errors.targetAmount = "Meta deve ser maior que o capital inicial"
    }
  }

  if (useInflation) {
    if (inflationRate < 0 || inflationRate > 100) {
      errors.inflationRate = "Inflação deve estar entre 0% e 100%"
    }
  }

  return errors
}