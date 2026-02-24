import { Metadata } from "next"
import { Simulator } from "@/components/Simulator"

export const metadata: Metadata = {
  title: "Simulador de Juros Compostos Online com Aporte Mensal",
  description:
    "Calcule juros compostos com aporte mensal, visualize o crescimento do seu investimento ao longo do tempo e entenda o impacto da inflação.",
  keywords: [
    "simulador juros compostos",
    "calculadora juros compostos",
    "juros compostos com aporte mensal",
    "simulador investimento",
    "fórmula juros compostos"
  ]
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Juros Compostos Online com Aporte Mensal
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Visualize o crescimento do seu patrimônio ao longo do tempo.
          Simule investimentos com capital inicial, aportes mensais e ajuste pela inflação.
        </p>
      </section>

      {/* SIMULADOR */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seu investimento
        </h2>

        <Simulator />
      </section>

      {/* EXPLICAÇÃO */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">
          Como funcionam os juros compostos?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são calculados sobre o valor acumulado do investimento.
          Isso significa que os juros gerados em um período passam a render novos juros
          nos períodos seguintes, criando um efeito de crescimento exponencial.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-4">
          Fórmula utilizada
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          A taxa mensal equivalente é calculada a partir da taxa anual usando a fórmula:
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm">
          taxa_mensal = (1 + taxa_anual)^(1/12) − 1
        </div>

        <p className="text-slate-700 leading-relaxed mt-6">
          O saldo é atualizado mês a mês aplicando a taxa mensal e somando o aporte:
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mt-4">
          saldo = saldo × (1 + taxa_mensal) + aporte_mensal
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">
          Perguntas frequentes
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Qual a diferença entre juros simples e compostos?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Juros simples são calculados apenas sobre o valor inicial.
              Juros compostos incidem sobre o valor acumulado, gerando crescimento exponencial ao longo do tempo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Como calcular juros compostos com aporte mensal?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              É necessário converter a taxa anual para taxa mensal equivalente e aplicar o cálculo mês a mês,
              adicionando o aporte ao saldo acumulado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Ajustar pela inflação é importante?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Sim. A inflação reduz o poder de compra do dinheiro ao longo do tempo.
              Ajustar a taxa permite visualizar o crescimento real do patrimônio.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}