export interface SimulationInput {
  initialAmount: number
  annualRate: number
  monthlyContribution: number
  years: number
  inflationRate?: number // opcional (% anual)
}

export interface SimulationMonth {
  month: number
  totalInvested: number
  balance: number
  totalInterest: number
  growthPercent: number
}

export interface SimulationResult {
  finalAmount: number
  totalInvested: number
  totalInterest: number
  growthPercent: number
  monthlyRate: number
  history: SimulationMonth[]
}

export interface SimulationOptions {
  inflationRate?: number
  useInflation?: boolean
}

export interface SimulationScenario {
  input: SimulationInput
  inflationRate: number
  useInflation: boolean
  effectiveAnnualRate: number
}

export interface SimulationComposedResult {
  scenario: SimulationScenario
  result: SimulationResult
}
