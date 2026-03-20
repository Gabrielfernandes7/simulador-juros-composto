import Link from "next/link"
import type { Metadata } from "next"
import AdsenseAd from "@/components/ads/AdsenseAd"

export const metadata: Metadata = {
  title: "Juros Simples vs Juros Compostos: Qual a Diferença?",
  description:
    "Entenda a diferença entre juros simples e juros compostos, veja exemplos práticos e descubra qual gera maior rendimento no longo prazo."
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">

        <h1 className="text-4xl font-bold mb-8">
          Juros Simples vs Juros Compostos: Qual a Diferença?
        </h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          A principal diferença entre juros simples e juros compostos
          está na forma como a taxa é aplicada ao longo do tempo.
          Enquanto os juros simples incidem apenas sobre o valor inicial,
          os juros compostos incidem sobre o valor acumulado,
          gerando crescimento exponencial.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Como funcionam os juros simples
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros simples, a taxa é aplicada sempre sobre o capital inicial.
          O crescimento é linear, ou seja, o rendimento aumenta de forma constante.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mb-6">
          M = C × (1 + i × t)
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Como funcionam os juros compostos
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros compostos, os rendimentos são incorporados ao capital,
          fazendo com que os juros do próximo período sejam calculados
          sobre um valor maior.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mb-6">
          M = C × (1 + i)^t
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Exemplo comparativo
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Suponha um investimento de R$ 10.000 a 10% ao ano por 5 anos.
          Nos juros simples, o crescimento será linear.
          Nos juros compostos, o montante final será maior
          devido ao efeito acumulativo dos rendimentos.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Qual é melhor para investimentos?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Para investimentos de longo prazo, os juros compostos
          são significativamente mais vantajosos,
          pois potencializam o crescimento do patrimônio ao longo do tempo.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Compare você mesmo no simulador
          </h3>

          <Link
            href="/"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Acessar Simulador de Juros Compostos
          </Link>
        </div>

      </article>

      <AdsenseAd />

    </main>
  )
}
