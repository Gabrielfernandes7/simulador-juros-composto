"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { useSimulation } from "@/hooks/useSimulation"
import { ResultCard } from "./ResultCard"
import { MoneyInput } from "./MoneyInput"
import { PercentInput } from "./PercentInput"
import { GrowthBadge } from "./GrowthBadge"
import { CalculatorType, SimulationInput } from "@/types/simulation"
import { analyticsEvents, trackEvent } from "@/lib/analytics"

type SimulatorProps = {
  showInitialAmount?: boolean
  showMonthlyContribution?: boolean
  showInflation?: boolean
  initialValues?: Partial<SimulationInput>
  calculatorType?: CalculatorType
  formTitle?: string
}

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

function formatMetricValue(value: number, format: "currency" | "percent_2" | "percent_decimal_4") {
  switch (format) {
    case "percent_2":
      return `${value.toFixed(2)}%`
    case "percent_decimal_4":
      return `${(value * 100).toFixed(4)}%`
    case "currency":
    default:
      return currency(value)
  }
}

export function Simulator({
  showInitialAmount = true,
  showMonthlyContribution = true,
  showInflation = true,
  initialValues,
  calculatorType = "compound_interest",
  formTitle = "Simulação de Investimento"
}: SimulatorProps) {
  const pathname = usePathname()
  const hasTrackedStartRef = useRef(false)
  const hasTrackedCompletionRef = useRef(false)
  const previousInflationRef = useRef(false)

  const {
    input,
    result,
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation,
    passiveIncomeRate,
    setPassiveIncomeRate,
    passiveIncomeProjection,
    calculatorMetrics,
    errors,
    isValid
  } = useSimulation({ initialValues, calculatorType })

  const SimulationChart = dynamic(
    () => import("./SimulationChart").then(mod => mod.SimulationChart),
    { ssr: false }
  )

  useEffect(() => {
    if (!previousInflationRef.current && useInflation) {
      trackEvent(analyticsEvents.inflationEnabled, {
        calculator_type: calculatorType,
        path: pathname,
        inflation_rate: inflationRate
      })
    }

    previousInflationRef.current = useInflation
  }, [calculatorType, inflationRate, pathname, useInflation])

  useEffect(() => {
    if (!hasTrackedCompletionRef.current && hasTrackedStartRef.current && isValid) {
      hasTrackedCompletionRef.current = true
      trackEvent(analyticsEvents.simulationCompleted, {
        calculator_type: calculatorType,
        path: pathname,
        years: input.years,
        annual_rate: input.annualRate,
        uses_inflation: useInflation
      })
    }

    if (!isValid) {
      hasTrackedCompletionRef.current = false
    }
  }, [calculatorType, input.annualRate, input.years, isValid, pathname, useInflation])

  const inputStyle = (error?: string) =>
    `w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-slate-300 focus:ring-[#16A34A]"
    }`

  function trackSimulationStart(field: string) {
    if (hasTrackedStartRef.current) {
      return
    }

    hasTrackedStartRef.current = true
    trackEvent(analyticsEvents.simulationStarted, {
      calculator_type: calculatorType,
      path: pathname,
      trigger_field: field
    })
  }

  function handleFieldUpdate<K extends keyof SimulationInput>(
    field: K,
    value: SimulationInput[K]
  ) {
    trackSimulationStart(field)
    updateField(field, value)
  }

  function handleInflationToggle(checked: boolean) {
    trackSimulationStart("inflation_toggle")
    setUseInflation(checked)
  }

  function handleInflationRateChange(value: number) {
    trackSimulationStart("inflation_rate")
    setInflationRate(value)
  }

  function handlePassiveIncomeRateChange(value: number) {
    trackSimulationStart("passive_income_rate")
    setPassiveIncomeRate(Math.max(value, 0))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          {formTitle}
        </h2>

        <div className="space-y-6">
          {showInitialAmount && (
            <div>
              <label className="block text-sm mb-2">Capital Inicial</label>

              <MoneyInput
                value={input.initialAmount}
                onChange={(value) => handleFieldUpdate("initialAmount", value)}
                className={inputStyle(errors.initialAmount)}
              />

              {errors.initialAmount && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.initialAmount}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Taxa Anual (%)</label>

            <PercentInput
              value={input.annualRate}
              onChange={(value) => handleFieldUpdate("annualRate", value)}
              className={inputStyle(errors.annualRate)}
            />

            {errors.annualRate && (
              <p className="text-sm text-red-500 mt-1">
                {errors.annualRate}
              </p>
            )}
          </div>

          {showMonthlyContribution && (
            <div>
              <label className="block text-sm mb-2">Aporte Mensal</label>

              <MoneyInput
                value={input.monthlyContribution}
                onChange={(value) => handleFieldUpdate("monthlyContribution", value)}
                className={inputStyle(errors.monthlyContribution)}
              />

              {errors.monthlyContribution && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.monthlyContribution}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Tempo (anos)</label>

            <input
              type="number"
              value={input.years}
              onChange={e =>
                handleFieldUpdate("years", Number(e.target.value))
              }
              className={inputStyle(errors.years)}
            />

            {errors.years && (
              <p className="text-sm text-red-500 mt-1">
                {errors.years}
              </p>
            )}
          </div>

          {calculatorType === "passive_income" && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
              <label className="block text-sm mb-2 text-slate-700">
                Taxa de retirada ou rendimento alvo (% ao ano)
              </label>

              <PercentInput
                value={passiveIncomeRate}
                onChange={(value) => handlePassiveIncomeRateChange(value)}
                className={inputStyle()}
              />

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Usamos essa taxa para converter o patrimônio final projetado em uma estimativa de renda mensal.
                No cenário atual, isso corresponde a {currency(passiveIncomeProjection.estimatedMonthlyIncome)} por mês.
              </p>
            </div>
          )}

          {showInflation && (
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">
                  Ajustar pela inflação
                </span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useInflation}
                    onChange={(e) => handleInflationToggle(e.target.checked)}
                  />

                  <div className="w-11 h-6 bg-slate-200 rounded-full peer
                    peer-checked:after:translate-x-full
                    after:content-[''] after:absolute after:top-[2px]
                    after:left-[2px] after:bg-white after:border
                    after:border-slate-300 after:rounded-full
                    after:h-5 after:w-5 after:transition-all
                    peer-checked:bg-[#16A34A]" />
                </label>
              </div>

              {useInflation && (
                <div className="mt-4">
                  <label className="block text-sm mb-2 text-slate-600">
                    Inflação anual (%)
                  </label>

                  <PercentInput
                    value={inflationRate}
                    onChange={(value) => handleInflationRateChange(value)}
                    className={inputStyle(errors.inflationRate)}
                  />

                  {errors.inflationRate && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.inflationRate}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {calculatorMetrics.map((metric) => (
          <ResultCard
            key={metric.key}
            label={metric.label}
            value={formatMetricValue(metric.value, metric.format)}
            extra={metric.highlightGrowth ? <GrowthBadge value={result.growthPercent} /> : undefined}
            description={metric.description}
          />
        ))}

        {isValid && result.history.length > 0 && (
          <div className="lg:col-span-2 mt-8">
            <SimulationChart data={result.history} />
          </div>
        )}
      </div>
    </div>
  )
}
