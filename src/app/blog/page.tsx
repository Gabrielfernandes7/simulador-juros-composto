import Link from "next/link"
import type { Metadata } from "next"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Blog de educação financeira e juros compostos",
  description:
    "Guia editorial enxuto com conteúdos de apoio às calculadoras, priorizando artigos diretamente ligados ao uso das ferramentas.",
  path: "/blog",
  keywords: ["blog de investimentos", "educação financeira", "juros compostos"]
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
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl font-bold mb-6">
          Blog de apoio às calculadoras
        </h1>

        <p className="max-w-3xl text-slate-600 mb-8 leading-relaxed">
          O blog permanece intencionalmente focado em conteúdos que ajudam o usuário a interpretar
          melhor as simulações. A expansão editorial fica para depois da consolidação das
          calculadoras especializadas.
        </p>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
          <h2 className="text-lg font-semibold">Prioridade editorial atual</h2>
          <p className="mt-2 leading-7">
            Antes de ampliar a cobertura do blog, a estratégia prioriza páginas de cálculo com
            proposta clara e intenção de busca mais específica.
          </p>
        </div>

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
            title: "Blog de educação financeira e juros compostos",
            description:
              "Página índice com artigos de apoio diretamente relacionados ao uso das calculadoras do site.",
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
