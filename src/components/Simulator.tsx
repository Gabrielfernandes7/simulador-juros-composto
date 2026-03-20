"use client"

import dynamic from "next/dynamic"
import { useSimulation } from "@/hooks/useSimulation"
import { ResultCard } from "./ResultCard"
import { MoneyInput } from "./MoneyInput"
import { PercentInput } from "./PercentInput"
import { GrowthBadge } from "./GrowthBadge"
import { SimulationInput } from "@/types/simulation"

type SimulatorProps = {
  showInitialAmount?: boolean
  showMonthlyContribution?: boolean
  showInflation?: boolean
  initialValues?: Partial<SimulationInput>
}

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

export function Simulator({
  showInitialAmount = true,
  showMonthlyContribution = true,
  showInflation = true,
  initialValues
}: SimulatorProps) {

  const {
    input,
    result,
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation,
    errors,
    isValid
  } = useSimulation(initialValues)

  const SimulationChart = dynamic(
    () => import("./SimulationChart").then(mod => mod.SimulationChart),
    { ssr: false }
  )

  const inputStyle = (error?: string) =>
    `w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-slate-300 focus:ring-[#16A34A]"
    }`

  return (
    <div className="grid lg:grid-cols-2 gap-12">

      {/* INPUTS */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simulação de Investimento
        </h2>

        <div className="space-y-6">

          {/* CAPITAL INICIAL */}
          {showInitialAmount && (
            <div>
              <label className="block text-sm mb-2">Capital Inicial</label>

              <MoneyInput
                value={input.initialAmount}
                onChange={(value) => updateField("initialAmount", value)}
                className={inputStyle(errors.initialAmount)}
              />

              {errors.initialAmount && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.initialAmount}
                </p>
              )}
            </div>
          )}

          {/* TAXA ANUAL */}
          <div>
            <label className="block text-sm mb-2">Taxa Anual (%)</label>

            <PercentInput
              value={input.annualRate}
              onChange={(value) => updateField("annualRate", value)}
              className={inputStyle(errors.annualRate)}
            />

            {errors.annualRate && (
              <p className="text-sm text-red-500 mt-1">
                {errors.annualRate}
              </p>
            )}
          </div>

          {/* APORTE MENSAL */}
          {showMonthlyContribution && (
            <div>
              <label className="block text-sm mb-2">Aporte Mensal</label>

              <MoneyInput
                value={input.monthlyContribution}
                onChange={(value) => updateField("monthlyContribution", value)}
                className={inputStyle(errors.monthlyContribution)}
              />

              {errors.monthlyContribution && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.monthlyContribution}
                </p>
              )}
            </div>
          )}

          {/* TEMPO */}
          <div>
            <label className="block text-sm mb-2">Tempo (anos)</label>

            <input
              type="number"
              value={input.years}
              onChange={e =>
                updateField("years", Number(e.target.value))
              }
              className={inputStyle(errors.years)}
            />

            {errors.years && (
              <p className="text-sm text-red-500 mt-1">
                {errors.years}
              </p>
            )}
          </div>

          {/* INFLAÇÃO */}
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
                    onChange={(e) => setUseInflation(e.target.checked)}
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
                    onChange={(value) => setInflationRate(value)}
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

      {/* RESULTADOS */}
      <div className="grid gap-6">

        <ResultCard
          label="Valor Final"
          value={currency(result.finalAmount)}
          extra={<GrowthBadge value={result.growthPercent} />}
        />

        <ResultCard
          label="Total Investido"
          value={currency(result.totalInvested)}
        />

        <ResultCard
          label="Total em Juros"
          value={currency(result.totalInterest)}
        />

        <ResultCard
          label="Taxa Mensal Equivalente"
          value={(result.monthlyRate * 100).toFixed(4) + "%"}
        />

        {isValid && result.history.length > 0 && (
          <div className="lg:col-span-2 mt-8">
            <SimulationChart data={result.history} />
          </div>
        )}

      </div>

    </div>
  )
}