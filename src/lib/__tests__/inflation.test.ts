import { calculateRealRate } from '@/lib/inflation'

describe('inflation domain', () => {
  it('returns a positive real rate when inflation is lower than the nominal rate', () => {
    expect(calculateRealRate(10, 4)).toBeCloseTo(5.769230769230775, 12)
  })

  it('returns zero real rate when inflation matches the nominal rate', () => {
    expect(calculateRealRate(7, 7)).toBeCloseTo(0, 12)
  })

  it('returns a negative real rate when inflation is higher than the nominal rate', () => {
    expect(calculateRealRate(6, 8)).toBeCloseTo(-1.8518518518518499, 12)
  })
})
