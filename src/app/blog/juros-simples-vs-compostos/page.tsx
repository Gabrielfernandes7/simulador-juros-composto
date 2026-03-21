import Link from "next/link"
import type { Metadata } from "next"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"

const title = "Juros simples vs juros compostos: qual a diferença"
const description =
  "Entenda a diferença entre juros simples e compostos, veja exemplos práticos e descubra qual regime tende a gerar maior rendimento no longo prazo."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blog/juros-simples-vs-compostos",
  keywords: ["juros simples vs compostos", "diferença entre juros simples e compostos"],
  category: "article"
})

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <h1 className="text-4xl font-bold mb-8">Juros Simples vs Juros Compostos: Qual a Diferença?</h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          A principal diferença entre os dois regimes está na base de cálculo. Juros simples usam
          sempre o capital inicial, enquanto juros compostos usam o valor acumulado.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como funcionam os juros simples</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros simples, o crescimento é linear e previsível, porque a taxa não se aplica sobre
          os rendimentos já obtidos.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mb-6">
          M = C × (1 + i × t)
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como funcionam os juros compostos</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros compostos, os rendimentos são incorporados ao capital. Isso cria aceleração do
          crescimento financeiro ao longo do tempo.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mb-6">
          M = C × (1 + i)^t
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Qual faz mais sentido para planejamento</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Para investimentos de longo prazo, os juros compostos costumam representar melhor a forma
          como o patrimônio evolui em aplicações com reinvestimento dos rendimentos.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Compare você mesmo no simulador</h3>

          <Link
            href="/simulador-juros-compostos"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Acessar Simulador de Juros Compostos
          </Link>
        </div>
      </article>

      <AdSlot pageType="content" />

      <JsonLd
        data={[
          buildArticleSchema({ title, description, path: "/blog/juros-simples-vs-compostos" }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Juros simples vs compostos", path: "/blog/juros-simples-vs-compostos" }
          ])
        ]}
      />
    </main>
  )
}
