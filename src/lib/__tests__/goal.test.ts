import { calculateRequiredMonthlyContribution, simulateFinancialGoal } from '@/lib/goal'

describe('financial goal domain', () => {
  it('calculates the required monthly contribution for a target amount', () => {
    const monthlyContribution = calculateRequiredMonthlyContribution({
      initialAmount: 10000,
      annualRate: 12,
      years: 10,
      targetAmount: 150000
    })

    expect(monthlyContribution).toBeCloseTo(535.9414939610523, 10)
  })

  it('returns zero monthly contribution when the initial capital alone is enough', () => {
    const monthlyContribution = calculateRequiredMonthlyContribution({
      initialAmount: 100000,
      annualRate: 12,
      years: 10,
      targetAmount: 200000
    })

    expect(monthlyContribution).toBe(0)
  })

  it('simulates the financial goal using the calculated monthly contribution', () => {
    const simulation = simulateFinancialGoal({
      initialAmount: 10000,
      annualRate: 12,
      years: 10,
      targetAmount: 150000
    })

    expect(simulation.requiredMonthlyContribution).toBeCloseTo(535.9414939610523, 10)
    expect(simulation.result.finalAmount).toBeCloseTo(150000, 8)
    expect(simulation.gapToGoal).toBeCloseTo(0, 8)
  })
})
