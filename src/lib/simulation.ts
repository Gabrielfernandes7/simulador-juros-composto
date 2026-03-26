import { simulateCompoundInterest } from "@/lib/compound"
import { calculateRequiredMonthlyContribution } from "@/lib/goal"
import { applyTaxToSimulation } from "@/lib/tax"
import {
  CalculatorMetric,
  CalculatorType,
  PassiveIncomeProjection,
  SimulationComposedResult,
  SimulationInput,
  SimulationOptions,
  SimulationResult,
  SimulationScenario,
  TaxSimulationOptions
} from "@/types/simulation"
import { calculateRealRate } from "@/lib/inflation"

export const emptySimulationResult: SimulationResult = {
  finalAmount: 0,
  totalInvested: 0,
  totalInterest: 0,
  growthPercent: 0,
  monthlyRate: 0,
  history: []
}

const DEFAULT_PASSIVE_INCOME_RATE = 4

export function buildSimulationScenario(
  input: SimulationInput,
  options?: SimulationOptions
): SimulationScenario {
  const inflationRate = options?.inflationRate ?? 0
  const useInflation = options?.useInflation ?? false

  const effectiveAnnualRate = useInflation
    ? calculateRealRate(input.annualRate, inflationRate)
    : input.annualRate

  return {
    input,
    inflationRate,
    useInflation,
    effectiveAnnualRate
  }
}

export function buildSimulationResult(
  scenario: SimulationScenario,
  taxOptions?: TaxSimulationOptions
): SimulationComposedResult {
  const normalizedInput = scenario.input.targetAmount && scenario.input.targetAmount > 0
    ? {
        ...scenario.input,
        annualRate: scenario.effectiveAnnualRate,
        monthlyContribution: calculateRequiredMonthlyContribution({
          initialAmount: scenario.input.initialAmount,
          annualRate: scenario.effectiveAnnualRate,
          years: scenario.input.years,
          targetAmount: scenario.input.targetAmount
        })
      }
    : {
        ...scenario.input,
        annualRate: scenario.effectiveAnnualRate
      }

  const grossResult = simulateCompoundInterest(normalizedInput)

  const taxedResult = applyTaxToSimulation(grossResult, taxOptions)

  return {
    scenario,
    grossResult,
    result: taxedResult.netResult,
    taxes: taxedResult.taxes,
    taxOptions: taxedResult.taxOptions
  }
}

export function calculatePassiveIncomeProjection(
  amount: number,
  annualWithdrawalRate = DEFAULT_PASSIVE_INCOME_RATE
): PassiveIncomeProjection {
  const normalizedWithdrawalRate = Math.max(annualWithdrawalRate, 0)
  const annualRateDecimal = normalizedWithdrawalRate / 100
  const estimatedAnnualIncome = amount * annualRateDecimal
  const estimatedMonthlyIncome = estimatedAnnualIncome / 12

  return {
    annualWithdrawalRate: normalizedWithdrawalRate,
    estimatedAnnualIncome,
    estimatedMonthlyIncome
  }
}

export function buildCalculatorMetrics(
  calculatorType: CalculatorType,
  result: SimulationResult,
  options?: {
    passiveIncomeRate?: number
    monthlyContribution?: number
    targetAmount?: number
  }
): CalculatorMetric[] {
  const passiveIncomeProjection = calculatePassiveIncomeProjection(
    result.finalAmount,
    options?.passiveIncomeRate ?? DEFAULT_PASSIVE_INCOME_RATE
  )

  switch (calculatorType) {
    case "monthly_contribution":
      return [
        {
          key: "finalAmount",
          label: "Patrimônio Projetado",
          value: result.finalAmount,
          format: "currency",
          highlightGrowth: true
        },
        {
          key: "monthlyContribution",
          label: "Aporte Mensal",
          value: 0,
          format: "currency",
          description: "Valor recorrente que acelera a formação de patrimônio."
        },
        {
          key: "interestShare",
          label: "Juros Acumulados",
          value: result.totalInterest,
          format: "currency",
          description: "Parcela do resultado vinda do efeito da capitalização."
        },
        {
          key: "monthlyRate",
          label: "Taxa Mensal Equivalente",
          value: result.monthlyRate,
          format: "percent_decimal_4"
        }
      ]
    case "future_value":
      return [
        {
          key: "finalAmount",
          label: "Valor Futuro Estimado",
          value: result.finalAmount,
          format: "currency",
          highlightGrowth: true
        },
        {
          key: "initialCapital",
          label: "Capital Inicial Preservado",
          value: 0,
          format: "currency",
          description: "Base que foi deixada render sem novos aportes."
        },
        {
          key: "totalInterest",
          label: "Ganho do Período",
          value: result.totalInterest,
          format: "currency",
          description: "Crescimento obtido apenas pelos rendimentos compostos."
        },
        {
          key: "growthPercent",
          label: "Crescimento Total",
          value: result.growthPercent,
          format: "percent_2"
        }
      ]
    case "passive_income":
      return [
        {
          key: "finalAmount",
          label: "Patrimônio Final Projetado",
          value: result.finalAmount,
          format: "currency",
          highlightGrowth: true
        },
        {
          key: "estimatedMonthlyIncome",
          label: "Renda Mensal Estimada",
          value: passiveIncomeProjection.estimatedMonthlyIncome,
          format: "currency",
          description: `Considera uma taxa anual de retirada/rendimento de ${passiveIncomeProjection.annualWithdrawalRate.toFixed(2)}%.`
        },
        {
          key: "estimatedAnnualIncome",
          label: "Renda Anual Estimada",
          value: passiveIncomeProjection.estimatedAnnualIncome,
          format: "currency"
        },
        {
          key: "totalInvested",
          label: "Capital Aportado",
          value: result.totalInvested,
          format: "currency"
        }
      ]
    case "financial_goal":
      return [
        {
          key: "requiredMonthlyContribution",
          label: "Aporte Mensal Necessário",
          value: options?.monthlyContribution ?? 0,
          format: "currency",
          description: "Valor mensal estimado para buscar a meta no prazo informado.",
          highlightGrowth: true
        },
        {
          key: "targetAmount",
          label: "Meta de Patrimônio",
          value: options?.targetAmount ?? result.finalAmount,
          format: "currency",
          description: "Objetivo financeiro usado como referência para calcular o aporte."
        },
        {
          key: "totalInvested",
          label: "Capital Total Aportado",
          value: result.totalInvested,
          format: "currency"
        },
        {
          key: "totalInterest",
          label: "Parcela Projetada em Juros",
          value: result.totalInterest,
          format: "currency"
        }
      ]
    case "compound_interest":
    default:
      return [
        {
          key: "finalAmount",
          label: "Valor Final",
          value: result.finalAmount,
          format: "currency",
          highlightGrowth: true
        },
        {
          key: "totalInvested",
          label: "Total Investido",
          value: result.totalInvested,
          format: "currency"
        },
        {
          key: "totalInterest",
          label: "Total em Juros",
          value: result.totalInterest,
          format: "currency"
        },
        {
          key: "monthlyRate",
          label: "Taxa Mensal Equivalente",
          value: result.monthlyRate,
          format: "percent_decimal_4"
        }
      ]
  }
}
