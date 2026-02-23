"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

import { SimulationMonth } from "@/types/simulation"

interface SimulationChartProps {
  data: SimulationMonth[]
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value)
}

export function SimulationChart({ data }: SimulationChartProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-[400px]">
      <h2 className="text-lg font-semibold mb-6">Evolução Patrimonial</h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tickFormatter={formatCurrency}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(value: number | undefined) => formatCurrency(value ?? 0)}
            labelFormatter={(label) => `Mês ${label}`}
          />

          <Line
            type="monotone"
            dataKey="totalAmount"
            stroke="#14532D"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="investedAmount"
            stroke="#94A3B8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}