import { SimulationResult, TaxBreakdown, TaxComposedResult, TaxSimulationOptions } from "@/types/simulation"

export const EDUCATIONAL_TAX_DISCLAIMER =
  "Simulação educacional simplificada. Não substitui regras tributárias reais, come-cotas ou condições específicas de cada produto."

export const DEFAULT_SIMPLIFIED_INCOME_TAX_RATE = 0.15

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
    educationalDisclaimer: EDUCATIONAL_TAX_DISCLAIMER,
    taxRate: normalizedRate,
    taxableIncome,
    incomeTaxAmount,
    grossFinalAmount: grossResult.finalAmount,
    netFinalAmount,
    grossInterest: grossResult.totalInterest,
    netInterest
  }
}

export function applySimplifiedTaxToSimulation(
  grossResult: SimulationResult,
  options?: TaxSimulationOptions
): TaxComposedResult {
  const isEnabled = options?.enabled ?? false
  const taxRate = options?.taxRate ?? DEFAULT_SIMPLIFIED_INCOME_TAX_RATE

  if (!isEnabled) {
    return {
      grossResult,
      netResult: grossResult,
      taxes: null,
      taxOptions: {
        enabled: false,
        regime: "simplified_income_tax",
        productRule: options?.productRule ?? "generic_investment",
        taxRate
      }
    }
  }

  const taxes = calculateSimplifiedIncomeTax(grossResult, taxRate)

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
      taxRate: taxes.taxRate
    }
  }
}
