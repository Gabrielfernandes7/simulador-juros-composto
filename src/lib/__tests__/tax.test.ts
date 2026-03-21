import {
  applySimplifiedTaxToSimulation,
  calculateSimplifiedIncomeTax,
  DEFAULT_SIMPLIFIED_INCOME_TAX_RATE,
  EDUCATIONAL_TAX_DISCLAIMER
} from '@/lib/tax'
import { buildSimulationResult, buildSimulationScenario } from '@/lib/simulation'

const grossResult = {
  finalAmount: 15000,
  totalInvested: 12000,
  totalInterest: 3000,
  growthPercent: 25,
  monthlyRate: 0.01,
  history: []
}

describe('tax domain', () => {
  it('calculates simplified income tax only over earnings', () => {
    const taxes = calculateSimplifiedIncomeTax(grossResult)

    expect(taxes.taxRate).toBe(DEFAULT_SIMPLIFIED_INCOME_TAX_RATE)
    expect(taxes.taxableIncome).toBe(3000)
    expect(taxes.incomeTaxAmount).toBe(450)
    expect(taxes.netFinalAmount).toBe(14550)
    expect(taxes.netInterest).toBe(2550)
    expect(taxes.educationalDisclaimer).toBe(EDUCATIONAL_TAX_DISCLAIMER)
  })

  it('returns the gross result unchanged when taxation is disabled', () => {
    const composed = applySimplifiedTaxToSimulation(grossResult, {
      enabled: false,
      regime: 'simplified_income_tax',
      productRule: 'generic_investment'
    })

    expect(composed.netResult).toEqual(grossResult)
    expect(composed.taxes).toBeNull()
    expect(composed.taxOptions.enabled).toBe(false)
  })

  it('builds a net result when taxation is enabled in the simulation pipeline', () => {
    const scenario = buildSimulationScenario({
      initialAmount: 1000,
      annualRate: 12,
      monthlyContribution: 100,
      years: 1
    })

    const composed = buildSimulationResult(scenario, {
      enabled: true,
      regime: 'simplified_income_tax',
      productRule: 'generic_investment',
      taxRate: 0.15
    })

    expect(composed.grossResult.finalAmount).toBeCloseTo(2384.64979083532, 10)
    expect(composed.result.finalAmount).toBeCloseTo(2356.952322210022, 10)
    expect(composed.result.totalInterest).toBeCloseTo(156.95232221002194, 10)
    expect(composed.taxes?.incomeTaxAmount).toBeCloseTo(27.697468625297983, 10)
    expect(composed.taxes?.educationalDisclaimer).toContain('Simulação educacional simplificada')
  })
})
