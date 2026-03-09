import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import Link from "next/link"

export const metadata = {
  title: "Simulador de Valor Futuro | Calculadora de Investimentos",
  description:
    "Calcule o valor futuro de um investimento considerando capital inicial, taxa de rendimento e prazo.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simulador de Valor Futuro
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Descubra quanto um investimento inicial pode crescer ao longo do tempo
          utilizando juros compostos.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Calcule o valor futuro do seu investimento
        </h2>

        <Simulator
          showMonthlyContribution={false}
          initialValues={{ monthlyContribution: 0 }}
        />

      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-6">
          O que é valor futuro de um investimento?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Valor futuro representa quanto um investimento atual pode valer
          após um determinado período considerando uma taxa de rendimento.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Esse cálculo é amplamente utilizado para planejar investimentos
          e estimar o crescimento do patrimônio ao longo do tempo.
        </p>

      </section>

    </main>
  )
}