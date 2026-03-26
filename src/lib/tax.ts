import { SimulationResult, TaxBreakdown, TaxComposedResult, TaxSimulationOptions } from "@/types/simulation"

export const EDUCATIONAL_TAX_DISCLAIMER =
  "Simulação educacional simplificada. Não substitui regras tributárias reais, come-cotas ou condições específicas de cada produto."

export const DEFAULT_SIMPLIFIED_INCOME_TAX_RATE = 0.15
export const DEFAULT_TAX_CALCULATION_MODE = "simplified"
export const REGRESSIVE_TAX_BRACKETS_BY_DAYS = [
  { minDays: 0, maxDays: 180, taxRate: 0.225 },
  { minDays: 181, maxDays: 360, taxRate: 0.2 },
  { minDays: 361, maxDays: 720, taxRate: 0.175 },
  { minDays: 721, maxDays: null, taxRate: 0.15 }
] as const

function clampRate(rate: number): number {
  if (!Number.isFinite(rate)) {
    return DEFAULT_SIMPLIFIED_INCOME_TAX_RATE
  }

  return Math.min(Math.max(rate, 0), 1)
}

export function calculateSimplifiedIncomeTax(
  grossResult: SimulationResult,
  rate = DEFAULT_SIMPLIFIED_INCOME_TAX_RATE
): TaxBreakdown {
  const normalizedRate = clampRate(rate)
  const taxableIncome = Math.max(grossResult.totalInterest, 0)
  const incomeTaxAmount = taxableIncome * normalizedRate
  const netFinalAmount = Math.max(grossResult.finalAmount - incomeTaxAmount, 0)
  const netInterest = Math.max(grossResult.totalInterest - incomeTaxAmount, 0)

  return {
    regime: "simplified_income_tax",
    productRule: "generic_investment",
    calculationMode: "simplified",
    educationalDisclaimer: EDUCATIONAL_TAX_DISCLAIMER,
    taxRate: normalizedRate,
    holdingDays: null,
    appliedBracket: null,
    taxableIncome,
    incomeTaxAmount,
    grossFinalAmount: grossResult.finalAmount,
    netFinalAmount,
    grossInterest: grossResult.totalInterest,
    netInterest
  }
}

export function resolveRegressiveTaxBracketByDays(holdingDays: number) {
  const normalizedDays = Number.isFinite(holdingDays) ? Math.max(Math.floor(holdingDays), 0) : 0
  const bracket =
    REGRESSIVE_TAX_BRACKETS_BY_DAYS.find(
      item => normalizedDays >= item.minDays && (item.maxDays === null || normalizedDays <= item.maxDays)
    ) ?? REGRESSIVE_TAX_BRACKETS_BY_DAYS[REGRESSIVE_TAX_BRACKETS_BY_DAYS.length - 1]

  return {
    holdingDays: normalizedDays,
    appliedBracket: bracket,
    taxRate: bracket.taxRate
  }
}

export function calculateRegressiveIncomeTaxByDays(
  grossResult: SimulationResult,
  holdingDays = 0
): TaxBreakdown {
  const { holdingDays: normalizedHoldingDays, appliedBracket, taxRate } =
    resolveRegressiveTaxBracketByDays(holdingDays)
  const taxableIncome = Math.max(grossResult.totalInterest, 0)
  const incomeTaxAmount = taxableIncome * taxRate
  const netFinalAmount = Math.max(grossResult.finalAmount - incomeTaxAmount, 0)
  const netInterest = Math.max(grossResult.totalInterest - incomeTaxAmount, 0)

  return {
    regime: "simplified_income_tax",
    productRule: "generic_investment",
    calculationMode: "regressive_by_days",
    educationalDisclaimer: EDUCATIONAL_TAX_DISCLAIMER,
    taxRate,
    holdingDays: normalizedHoldingDays,
    appliedBracket: {
      minDays: appliedBracket.minDays,
      maxDays: appliedBracket.maxDays,
      taxRate: appliedBracket.taxRate
    },
    taxableIncome,
    incomeTaxAmount,
    grossFinalAmount: grossResult.finalAmount,
    netFinalAmount,
    grossInterest: grossResult.totalInterest,
    netInterest
  }
}

export function applyTaxToSimulation(
  grossResult: SimulationResult,
  options?: TaxSimulationOptions
): TaxComposedResult {
  const isEnabled = options?.enabled ?? false
  const taxRate = options?.taxRate ?? DEFAULT_SIMPLIFIED_INCOME_TAX_RATE
  const calculationMode = options?.calculationMode ?? DEFAULT_TAX_CALCULATION_MODE
  const holdingDays =
    options?.holdingDays !== undefined && Number.isFinite(options.holdingDays)
      ? Math.max(Math.floor(options.holdingDays), 0)
      : 0

  if (!isEnabled) {
    return {
      grossResult,
      netResult: grossResult,
      taxes: null,
      taxOptions: {
        enabled: false,
        regime: "simplified_income_tax",
        productRule: options?.productRule ?? "generic_investment",
        calculationMode: "simplified",
        taxRate,
        holdingDays
      }
    }
  }

  const taxes =
    calculationMode === "regressive_by_days"
      ? calculateRegressiveIncomeTaxByDays(grossResult, holdingDays)
      : calculateSimplifiedIncomeTax(grossResult, taxRate)

  return {
    grossResult,
    netResult: {
      ...grossResult,
      finalAmount: taxes.netFinalAmount,
      totalInterest: taxes.netInterest,
      growthPercent:
        grossResult.totalInvested > 0
          ? ((taxes.netFinalAmount - grossResult.totalInvested) / grossResult.totalInvested) * 100
          : 0
    },
    taxes,
    taxOptions: {
      enabled: true,
      regime: "simplified_income_tax",
      productRule: options?.productRule ?? "generic_investment",
      calculationMode: taxes.calculationMode,
      taxRate: taxes.taxRate,
      holdingDays: taxes.holdingDays ?? holdingDays
    }
  }
}

export function applySimplifiedTaxToSimulation(
  grossResult: SimulationResult,
  options?: TaxSimulationOptions
): TaxComposedResult {
  return applyTaxToSimulation(grossResult, options)
}
