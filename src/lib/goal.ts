import { SimulationInput } from "@/types/simulation"
import { convertAnnualToMonthlyRate, simulateCompoundInterest } from "@/lib/compound"

export type FinancialGoalInput = Pick<SimulationInput, "initialAmount" | "annualRate" | "years"> & {
  targetAmount: number
}

export function calculateRequiredMonthlyContribution({
  initialAmount,
  annualRate,
  years,
  targetAmount
}: FinancialGoalInput) {
  const totalMonths = years * 12

  if (totalMonths <= 0) {
    return 0
  }

  const monthlyRate = convertAnnualToMonthlyRate(annualRate)
  const futureValueFromInitial = initialAmount * Math.pow(1 + monthlyRate, totalMonths)
  const missingAmount = targetAmount - futureValueFromInitial

  if (missingAmount <= 0) {
    return 0
  }

  if (monthlyRate === 0) {
    return missingAmount / totalMonths
  }

  const contributionFactor = (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate

  return missingAmount / contributionFactor
}

export function simulateFinancialGoal(input: FinancialGoalInput) {
  const requiredMonthlyContribution = calculateRequiredMonthlyContribution(input)
  const result = simulateCompoundInterest({
    initialAmount: input.initialAmount,
    annualRate: input.annualRate,
    monthlyContribution: requiredMonthlyContribution,
    years: input.years,
    targetAmount: input.targetAmount
  })

  return {
    requiredMonthlyContribution,
    targetAmount: input.targetAmount,
    gapToGoal: result.finalAmount - input.targetAmount,
    result
  }
}
