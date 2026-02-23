export function calculateRealRate(
  nominalAnnualRate: number,
  annualInflation: number
): number {
  const nominal = nominalAnnualRate / 100
  const inflation = annualInflation / 100

  const real = (1 + nominal) / (1 + inflation) - 1
  return real * 100
}