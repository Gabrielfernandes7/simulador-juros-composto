export interface SimulationInput {
  initialAmount: number
  annualRate: number
  monthlyContribution: number
  years: number
  inflationRate?: number // opcional (% anual)
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
  realFinalAmount?: number
  realTotalInterest?: number
  history: SimulationMonth[]
}

export interface SimulationOptions {
  inflationRate?: number
  useInflation?: boolean
}