import Link from "next/link"
import type { Metadata } from "next"
import AdSlot from "@/components/ads/AdSlot"
import { TrackedLink } from "@/components/TrackedLink"
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

          <TrackedLink
            href="/simulador-juros-compostos?utm_source=blog&utm_medium=artigo&utm_campaign=juros_simples_vs_compostos"
            source="blog_juros_simples_vs_compostos_cta"
            label="Simulador de Juros Compostos"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Acessar Simulador de Juros Compostos
          </TrackedLink>
        </div>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Leituras e ferramentas relacionadas</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>
              <Link href="/blog/o-que-sao-juros-compostos">O que são juros compostos?</Link>
            </li>
            <li>
              <Link href="/blog/come-cotas-na-pratica">Come-cotas na prática</Link>
            </li>
            <li>
              <TrackedLink
                href="/simulador-valor-futuro?utm_source=blog&utm_medium=interlink&utm_campaign=juros_simples_vs_compostos"
                source="blog_juros_simples_vs_compostos_related"
                label="Simulador de Valor Futuro"
              >
                Simulador de Valor Futuro
              </TrackedLink>
            </li>
          </ul>
        </section>
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
