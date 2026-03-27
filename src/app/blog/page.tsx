import Link from "next/link"
import type { Metadata } from "next"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Blog de educação financeira e simuladores",
  description:
    "Artigos práticos sobre juros compostos, imposto de renda e planejamento financeiro com links diretos para simuladores e calculadoras.",
  path: "/blog",
  keywords: ["blog de investimentos", "educação financeira", "simuladores financeiros", "renda fixa"]
})

const posts = [
  {
    href: "/blog/o-que-sao-juros-compostos",
    title: "O que são juros compostos?",
    description:
      "Entenda o conceito de crescimento exponencial e como ele impacta investimentos de longo prazo."
  },
  {
    href: "/blog/juros-simples-vs-compostos",
    title: "Juros Simples vs Juros Compostos",
    description:
      "Compare os regimes de capitalização e veja quando a diferença se torna relevante."
  },
  {
    href: "/blog/tabela-regressiva-ir-renda-fixa",
    title: "Tabela regressiva de IR em renda fixa",
    description:
      "Aprenda as faixas de alíquota do IR, calcule rendimento líquido e compare cenários por prazo."
  },
  {
    href: "/blog/come-cotas-na-pratica",
    title: "Come-cotas na prática",
    description:
      "Veja como a antecipação semestral de IR em fundos impacta seu patrimônio ao longo do tempo."
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold mb-6">Blog de apoio às calculadoras</h1>

        <p className="max-w-3xl text-slate-600 mb-8 leading-relaxed">
          Conteúdos didáticos para ajudar você a interpretar resultados de simulação, comparar
          cenários e tomar decisões financeiras com mais contexto.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <article key={post.href} className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-slate-600 mb-4 leading-7">{post.description}</p>
              <Link href={post.href} className="text-blue-600 font-medium">
                Ler artigo completo →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <AdSlot pageType="content" />

      <JsonLd
        data={[
          buildCollectionPageSchema({
            title: "Blog de educação financeira e simuladores",
            description:
              "Página índice com artigos práticos conectados às calculadoras financeiras do site.",
            path: "/blog"
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" }
          ])
        ]}
      />
    </main>
  )
}
