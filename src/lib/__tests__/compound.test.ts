import {
  calculateRealAnnualRate,
  convertAnnualToMonthlyRate,
  simulateCompoundInterest,
} from '@/lib/compound'
import { buildCalculatorMetrics, calculatePassiveIncomeProjection } from '@/lib/simulation'

describe('compound domain', () => {
  it('converts annual rate to equivalent monthly rate', () => {
    expect(convertAnnualToMonthlyRate(12)).toBeCloseTo(0.009488792934583046, 12)
    expect(Math.pow(1 + convertAnnualToMonthlyRate(12), 12) - 1).toBeCloseTo(0.12, 12)
  })

  it('simulates a scenario without monthly contributions', () => {
    const result = simulateCompoundInterest({
      initialAmount: 1000,
      annualRate: 12,
      monthlyContribution: 0,
      years: 1,
    })

    expect(result.finalAmount).toBeCloseTo(1120, 10)
    expect(result.totalInvested).toBe(1000)
    expect(result.totalInterest).toBeCloseTo(120, 10)
    expect(result.growthPercent).toBeCloseTo(12, 10)
    expect(result.history).toHaveLength(12)
    expect(result.history.at(-1)).toMatchObject({
      month: 12,
      totalInvested: 1000,
    })
  })

  it('simulates a scenario with monthly contributions', () => {
    const result = simulateCompoundInterest({
      initialAmount: 1000,
      annualRate: 12,
      monthlyContribution: 100,
      years: 1,
    })

    expect(result.finalAmount).toBeCloseTo(2384.64979083532, 10)
    expect(result.totalInvested).toBe(2200)
    expect(result.totalInterest).toBeCloseTo(184.6497908353199, 10)
    expect(result.growthPercent).toBeCloseTo(8.393172310696359, 10)
    expect(result.history[0]).toMatchObject({
      month: 1,
      totalInvested: 1100,
    })
    expect(result.history.at(-1)?.balance).toBeCloseTo(2384.64979083532, 10)
  })

  it('keeps long-term regression values stable', () => {
    const result = simulateCompoundInterest({
      initialAmount: 10000,
      annualRate: 10,
      monthlyContribution: 500,
      years: 30,
    })

    expect(result.history).toHaveLength(360)
    expect(result.finalAmount).toBeCloseTo(1205915.6797029946, 6)
    expect(result.totalInvested).toBe(190000)
    expect(result.totalInterest).toBeCloseTo(1015915.6797029946, 6)
    expect(result.growthPercent).toBeCloseTo(534.6924629489445, 6)
  })

  it('handles zero rates without creating artificial gains', () => {
    const result = simulateCompoundInterest({
      initialAmount: 5000,
      annualRate: 0,
      monthlyContribution: 250,
      years: 2,
    })

    expect(result.monthlyRate).toBe(0)
    expect(result.finalAmount).toBe(11000)
    expect(result.totalInvested).toBe(11000)
    expect(result.totalInterest).toBe(0)
    expect(result.growthPercent).toBe(0)
  })

  it('supports valid boundary values', () => {
    const result = simulateCompoundInterest({
      initialAmount: 0,
      annualRate: 1000,
      monthlyContribution: 0,
      years: 100,
    })

    expect(result.monthlyRate).toBeCloseTo(0.2211885503119937, 12)
    expect(result.finalAmount).toBe(0)
    expect(result.totalInvested).toBe(0)
    expect(result.totalInterest).toBe(0)
    expect(result.history).toHaveLength(1200)
    expect(result.history.every((month) => Number.isFinite(month.balance))).toBe(true)
  })

  it('calculates the real annual rate from nominal rate and inflation', () => {
    expect(calculateRealAnnualRate(10, 4)).toBeCloseTo(5.769230769230775, 12)
  })

  it('calculates passive income projection from annual withdrawal rate', () => {
    const projection = calculatePassiveIncomeProjection(1200000, 4)

    expect(projection.annualWithdrawalRate).toBe(4)
    expect(projection.estimatedAnnualIncome).toBe(48000)
    expect(projection.estimatedMonthlyIncome).toBe(4000)
  })

  it('builds calculator-specific metrics for passive income', () => {
    const result = simulateCompoundInterest({
      initialAmount: 100000,
      annualRate: 10,
      monthlyContribution: 1000,
      years: 10,
    })

    const metrics = buildCalculatorMetrics('passive_income', result, {
      passiveIncomeRate: 5,
    })

    expect(metrics.map((metric) => metric.label)).toEqual([
      'Patrimônio Final Projetado',
      'Renda Mensal Estimada',
      'Renda Anual Estimada',
      'Capital Aportado',
    ])
    expect(metrics[1].value).toBeCloseTo(result.finalAmount * 0.05 / 12, 10)
  })
})
