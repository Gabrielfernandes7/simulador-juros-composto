import { Simulator } from "@/components/Simulator"
import Link from "next/link"

export const metadata = {
  title: "Calculadora de Renda Passiva | Simulador de Investimentos",
  description:
    "Descubra quanto patrimônio você precisa para gerar renda passiva mensal a partir dos seus investimentos.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

          <span className="font-semibold">
            Calculadora de Investimentos
          </span>

          <div className="flex gap-6 text-sm">

            <Link href="/simulador-juros-compostos">
              Juros Compostos
            </Link>

            <Link href="/simulador-aporte-mensal">
              Aporte Mensal
            </Link>

            <Link href="/simulador-renda-passiva">
              Renda Passiva
            </Link>

            <Link href="/simulador-valor-futuro">
              Valor Futuro
            </Link>

          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Calculadora de Renda Passiva
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Descubra quanto patrimônio você pode acumular e qual renda passiva
          mensal ele pode gerar.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seu patrimônio para renda passiva
        </h2>

        <Simulator />

      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-6">
          O que é renda passiva?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Renda passiva é o dinheiro recebido regularmente a partir de
          investimentos, sem necessidade de trabalho ativo.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Investimentos como ações, fundos imobiliários e títulos de renda fixa
          podem gerar renda recorrente ao longo do tempo.
        </p>

      </section>

    </main>
  )
}