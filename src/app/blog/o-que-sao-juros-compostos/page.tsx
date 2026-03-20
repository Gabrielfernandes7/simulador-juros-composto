import Link from "next/link"
import type { Metadata } from "next"
import AdsenseAd from "@/components/ads/AdsenseAd"

export const metadata: Metadata = {
  title: "O que são Juros Compostos e Como Funcionam",
  description:
    "Aprenda o que são juros compostos, veja exemplos práticos e entenda por que eles são essenciais para investimentos de longo prazo."
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">

        <h1 className="text-4xl font-bold mb-8">
          O que são Juros Compostos?
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são juros calculados sobre o valor acumulado
          de um investimento. Isso significa que, a cada período,
          os juros gerados passam a fazer parte do capital,
          criando um efeito de crescimento exponencial.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Diferença entre juros simples e compostos
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros simples, a taxa incide apenas sobre o capital inicial.
          Já nos juros compostos, a taxa incide sobre o montante acumulado,
          aumentando progressivamente o rendimento ao longo do tempo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Exemplo prático
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Se você investir R$ 1.000 a uma taxa de 10% ao ano,
          no primeiro ano terá R$ 1.100.
          No segundo ano, os 10% incidirão sobre R$ 1.100,
          resultando em R$ 1.210.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Por que são importantes?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          No longo prazo, os juros compostos potencializam investimentos
          e podem transformar pequenos aportes mensais em grandes patrimônios.
          Por isso são considerados a base do crescimento financeiro.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Quer simular seus próprios resultados?
          </h3>

          <Link
            href="/"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Usar Simulador de Juros Compostos
          </Link>
        </div>

      </article>

      <AdsenseAd />

    </main>
  )
}
