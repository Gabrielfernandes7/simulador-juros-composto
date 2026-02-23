"use client"

import { useSimulation } from "@/hooks/useSimulation";
import { ResultCard } from "./ResultCard";
import { MoneyInput } from "./MoneyInput";
import { PercentInput } from "@/components/PercentInput"; // Importando seu componente corrigido
import dynamic from "next/dynamic";

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

export function Simulator() {
  const { 
    input, 
    result, 
    updateField,
    inflationRate,
    setInflationRate,
    useInflation,
    setUseInflation
  } = useSimulation();

  const SimulationChart = dynamic(
    () => import("./SimulationChart").then(mod => mod.SimulationChart),
    { ssr: false }
  )

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Coluna de Inputs */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-semibold mb-8">
          Simulador de Juros Compostos
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block text-sm mb-2">Capital Inicial</label>
            <MoneyInput
              value={input.initialAmount}
              onChange={(value) => updateField("initialAmount", value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </div>

          {/* --- SUBSTITUIÇÃO 1: Taxa Anual --- */}
          <div>
            <label className="block text-sm mb-2 text-slate-700">Taxa Anual (%)</label>
            <PercentInput
              value={input.annualRate}
              onChange={(value) => updateField("annualRate", value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Aporte Mensal</label>
            <MoneyInput
              value={input.monthlyContribution}
              onChange={(value) => updateField("monthlyContribution", value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Tempo (anos)</label>
            <input
              type="number"
              value={input.years}
              onChange={e => updateField("years", Number(e.target.value))}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-700">Ajustar pela inflação</span>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={useInflation}
                  onChange={(e) => setUseInflation(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#16A34A]"></div>
              </label>
            </div>

            {useInflation && (
              <div className="mt-4 transition-all">
                <label className="block text-sm mb-2 text-slate-600">Inflação anual (%)</label>
                {/* --- SUBSTITUIÇÃO 2: Inflação Anual --- */}
                <PercentInput
                  value={inflationRate}
                  onChange={(value) => setInflationRate(value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Coluna de Resultados */}
      <div className="grid gap-6">
        <ResultCard label="Valor Final" value={currency(result.finalAmount)} />
        <ResultCard label="Total Investido" value={currency(result.totalInvested)} />
        <ResultCard label="Total em Juros" value={currency(result.totalInterest)} />
        <ResultCard
          label="Taxa Mensal Equivalente"
          value={(result.monthlyRate * 100).toFixed(4) + "%"}
        />

        <div className="lg:col-span-2 mt-8">
          <SimulationChart data={result.history} />
        </div>
      </div>
    </div>
  )
}