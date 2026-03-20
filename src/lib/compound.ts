import { SimulationInput, SimulationResult, SimulationMonth } from "@/types/simulation"

export function convertAnnualToMonthlyRate(annualRate: number): number {
  const annualDecimal = annualRate / 100
  return Math.pow(1 + annualDecimal, 1 / 12) - 1
}

function calculateGrowthPercent(balance: number, totalInvested: number): number {
  if (totalInvested <= 0) return 0

  return ((balance - totalInvested) / totalInvested) * 100
}

export function simulateCompoundInterest(input: SimulationInput): SimulationResult {
  const { initialAmount, annualRate, monthlyContribution, years } = input

  const totalMonths = years * 12
  const monthlyRate = convertAnnualToMonthlyRate(annualRate)

  let balance = initialAmount
  let totalInvested = initialAmount
  const history: SimulationMonth[] = []

  for (let month = 1; month <= totalMonths; month++) {
    const interest = balance * monthlyRate
    balance = balance + interest + monthlyContribution
    totalInvested += monthlyContribution

    const totalInterest = balance - totalInvested
    const growthPercent = calculateGrowthPercent(balance, totalInvested)

    history.push({
      month,
      totalInvested,
      balance,
      totalInterest,
      growthPercent
    })
  }

  const totalInterest = balance - totalInvested

  return {
    finalAmount: balance,
    totalInvested,
    totalInterest,
    growthPercent: calculateGrowthPercent(balance, totalInvested),
    monthlyRate,
    history
  }
}

export function calculateRealAnnualRate(
  nominalRate: number,
  inflationRate: number
): number {
  const nominal = nominalRate / 100
  const inflation = inflationRate / 100
  return ((1 + nominal) / (1 + inflation) - 1) * 100
}
