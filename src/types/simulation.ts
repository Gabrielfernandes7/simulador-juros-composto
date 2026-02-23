export interface SimulationInput {
  initialAmount: number
  annualRate: number
  monthlyContribution: number
  years: number
}

export interface SimulationMonth {
  month: number
  investedAmount: number
  totalAmount: number
  interestAmount: number
}

export interface SimulationResult {
  finalAmount: number
  totalInvested: number
  totalInterest: number
  monthlyRate: number
  history: SimulationMonth[]
}