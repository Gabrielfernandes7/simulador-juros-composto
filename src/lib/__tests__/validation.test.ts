import { validateSimulation } from '@/lib/validation'

describe('validation domain', () => {
  it('returns errors for invalid simulation inputs', () => {
    const errors = validateSimulation(
      {
        initialAmount: -1,
        annualRate: 1001,
        monthlyContribution: -10,
        years: 0,
      },
      101,
      true,
    )

    expect(errors).toEqual({
      initialAmount: 'Capital não pode ser negativo',
      annualRate: 'Taxa anual deve estar entre 0% e 1000%',
      monthlyContribution: 'Aporte não pode ser negativo',
      years: 'Tempo deve estar entre 1 e 100 anos',
      inflationRate: 'Inflação deve estar entre 0% e 100%',
    })
  })

  it('accepts valid boundary values', () => {
    const errors = validateSimulation(
      {
        initialAmount: 0,
        annualRate: 1000,
        monthlyContribution: 0,
        years: 100,
      },
      100,
      true,
    )

    expect(errors).toEqual({})
  })

  it('ignores inflation validation when inflation is disabled', () => {
    const errors = validateSimulation(
      {
        initialAmount: 100,
        annualRate: 10,
        monthlyContribution: 50,
        years: 10,
      },
      150,
      false,
    )

    expect(errors).toEqual({})
  })

  it('accepts a fully valid scenario with inflation enabled', () => {
    const errors = validateSimulation(
      {
        initialAmount: 1000,
        annualRate: 12,
        monthlyContribution: 200,
        years: 25,
      },
      4,
      true,
    )

    expect(errors).toEqual({})
  })
})
