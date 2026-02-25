import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog sobre Juros Compostos e Investimentos",
  description:
    "Artigos educativos sobre juros compostos, investimentos e planejamento financeiro."
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold mb-6">
          Blog sobre Juros Compostos e Investimentos
        </h1>

        <p className="text-slate-600 mb-12">
          Aprenda como funcionam os juros compostos, como calcular rendimentos
          e como tomar decisões financeiras mais inteligentes.
        </p>

        <div className="space-y-6">

          <article className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              O que são juros compostos?
            </h2>

            <p className="text-slate-600 mb-4">
              Entenda o conceito de juros compostos, como funciona o crescimento exponencial
              e por que ele é fundamental para investimentos de longo prazo.
            </p>

            <Link
              href="/blog/o-que-sao-juros-compostos"
              className="text-blue-600 font-medium"
            >
              Ler artigo completo →
            </Link>
          </article>

          <article className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Juros Simples vs Juros Compostos
            </h2>

            <p className="text-slate-600 mb-4">
              Entenda o conceito de juros compostos, como funciona o crescimento exponencial
              e por que ele é fundamental para investimentos de longo prazo.
            </p>

            <Link
              href="/blog/o-que-sao-juros-compostos"
              className="text-blue-600 font-medium"
            >
              Ler artigo completo →
            </Link>
          </article>

        </div>
      </section>
    </main>
  )
}