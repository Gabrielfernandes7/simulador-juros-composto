export interface SimulationInput {
  initialAmount: number
  annualRate: number
  monthlyContribution: number
  years: number
  inflationRate?: number // opcional (% anual)
  targetAmount?: number
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

export interface TaxSimulationOptions {
  enabled: boolean
  regime?: "simplified_income_tax"
  productRule?: "generic_investment"
  taxRate?: number
}

export interface TaxBreakdown {
  regime: "simplified_income_tax"
  productRule: "generic_investment"
  educationalDisclaimer: string
  taxRate: number
  taxableIncome: number
  incomeTaxAmount: number
  grossFinalAmount: number
  netFinalAmount: number
  grossInterest: number
  netInterest: number
}

export interface TaxComposedResult {
  grossResult: SimulationResult
  netResult: SimulationResult
  taxes: TaxBreakdown | null
  taxOptions: Required<TaxSimulationOptions>
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
  grossResult: SimulationResult
  result: SimulationResult
  taxes: TaxBreakdown | null
  taxOptions: Required<TaxSimulationOptions>
}

export type CalculatorType =
  | "compound_interest"
  | "monthly_contribution"
  | "future_value"
  | "passive_income"
  | "financial_goal"

export interface PassiveIncomeProjection {
  annualWithdrawalRate: number
  estimatedAnnualIncome: number
  estimatedMonthlyIncome: number
}

export interface CalculatorMetric {
  key: string
  label: string
  value: number
  format: "currency" | "percent_2" | "percent_decimal_4"
  description?: string
  highlightGrowth?: boolean
}
