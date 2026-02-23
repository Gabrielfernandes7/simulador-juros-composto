import { SimulationInput, SimulationResult, SimulationMonth } from "@/types/simulation"

export function convertAnnualToMonthlyRate(annualRate: number): number {
  const annualDecimal = annualRate / 100
  return Math.pow(1 + annualDecimal, 1 / 12) - 1
}

export function simulateCompoundInterest(input: SimulationInput): SimulationResult {

  const { initialAmount, annualRate, monthlyContribution, years } = input


  const totalMonths = years * 12
  const monthlyRate = convertAnnualToMonthlyRate(annualRate)

  let totalAmount = initialAmount
  let totalInvested = initialAmount
  const history: SimulationMonth[] = []

  for (let month = 1; month <= totalMonths; month++) {
    const interest = totalAmount * monthlyRate
    totalAmount = totalAmount + interest + monthlyContribution
    totalInvested += monthlyContribution

    history.push({
      month,
      investedAmount: totalInvested,
      totalAmount,
      interestAmount: totalAmount - totalInvested
    })
  }

  return {
    finalAmount: totalAmount,
    totalInvested,
    totalInterest: totalAmount - totalInvested,
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