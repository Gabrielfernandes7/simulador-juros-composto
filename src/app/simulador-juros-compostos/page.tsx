import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import Link from "next/link"
import AdsenseAd from "@/components/ads/AdsenseAd"

export const metadata = {
  title: "Simulador de Juros Compostos | Calculadora de Investimentos",
  description:
    "Calcule juros compostos com aportes mensais e visualize o crescimento do seu investimento ao longo do tempo.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      <Navbar />

      <AdsenseAd />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Juros Compostos
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Utilize nosso simulador de juros compostos para calcular o crescimento
          do seu investimento ao longo do tempo. Insira capital inicial,
          aportes mensais, taxa de rendimento anual e prazo do investimento.
        </p>

      </section>

      {/* SIMULADOR */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Calcule seus juros compostos
        </h2>

        <Simulator />

      </section>

      {/* CONTEÚDO SEO */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-6">
          Como funcionam os juros compostos
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são os juros calculados sobre o valor acumulado
          de um investimento. Isso significa que os rendimentos de cada período
          passam a gerar novos rendimentos nos períodos seguintes.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Esse mecanismo cria um crescimento exponencial ao longo do tempo,
          sendo um dos principais fatores para a construção de patrimônio
          no longo prazo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Fórmula dos juros compostos
        </h2>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm">
          taxa_mensal = (1 + taxa_anual)^(1/12) − 1
        </div>

        <p className="text-slate-700 leading-relaxed mt-6">
          Após calcular a taxa mensal equivalente, o saldo é atualizado
          mês a mês aplicando os juros e adicionando os aportes:
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mt-4">
          saldo = saldo × (1 + taxa_mensal) + aporte_mensal
        </div>

      </section>

      {/* LINKS INTERNOS */}
      <section className="max-w-3xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Outros simuladores de investimento
        </h2>

        <ul className="space-y-3 text-green-700 font-medium">

          <li>
            <Link href="/simulador-aporte-mensal">
              Simulador de Aporte Mensal
            </Link>
          </li>

          <li>
            <Link href="/simulador-renda-passiva">
              Calculadora de Renda Passiva
            </Link>
          </li>

          <li>
            <Link href="/simulador-valor-futuro">
              Simulador de Valor Futuro
            </Link>
          </li>

        </ul>

      </section>

    </main>
  )
}