import Link from "next/link"
import type { Metadata } from "next"
import AdSlot from "@/components/ads/AdSlot"
import { TrackedLink } from "@/components/TrackedLink"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"

const title = "O que são juros compostos e como funcionam"
const description =
  "Aprenda o conceito de juros compostos, veja exemplos práticos e entenda por que eles são essenciais para investimentos de longo prazo."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blog/o-que-sao-juros-compostos",
  keywords: ["o que são juros compostos", "como funcionam juros compostos"],
  category: "article"
})

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <h1 className="text-4xl font-bold mb-8">O que são Juros Compostos?</h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são juros calculados sobre o valor acumulado de um investimento. A cada
          período, os rendimentos passam a integrar o capital e criam um efeito de crescimento
          exponencial.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Diferença entre juros simples e compostos</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Nos juros simples, a taxa incide apenas sobre o capital inicial. Nos juros compostos, ela
          incide sobre o montante acumulado, elevando progressivamente o rendimento ao longo do
          tempo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Exemplo prático</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Se você investir R$ 1.000 a 10% ao ano, no primeiro ano terá R$ 1.100. No segundo, a taxa
          incidirá sobre R$ 1.100, levando o saldo para R$ 1.210.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Por que esse conceito importa nas calculadoras</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Entender a lógica de capitalização ajuda a interpretar melhor resultados de simuladores de
          aporte mensal, valor futuro e formação de renda passiva.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Quer simular seus próprios resultados?</h3>

          <TrackedLink
            href="/simulador-juros-compostos?utm_source=blog&utm_medium=artigo&utm_campaign=juros_compostos_basico"
            source="blog_juros_compostos_cta"
            label="Simulador de Juros Compostos"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Usar Simulador de Juros Compostos
          </TrackedLink>
        </div>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Leituras e ferramentas relacionadas</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>
              <Link href="/blog/juros-simples-vs-compostos">Juros simples vs juros compostos</Link>
            </li>
            <li>
              <Link href="/blog/tabela-regressiva-ir-renda-fixa">Tabela regressiva de IR em renda fixa</Link>
            </li>
            <li>
              <TrackedLink
                href="/simulador-aporte-mensal?utm_source=blog&utm_medium=interlink&utm_campaign=juros_compostos_basico"
                source="blog_juros_compostos_related"
                label="Simulador de Aporte Mensal"
              >
                Simulador de Aporte Mensal
              </TrackedLink>
            </li>
          </ul>
        </section>
      </article>

      <AdSlot pageType="content" />

      <JsonLd
        data={[
          buildArticleSchema({ title, description, path: "/blog/o-que-sao-juros-compostos" }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "O que são juros compostos", path: "/blog/o-que-sao-juros-compostos" }
          ])
        ]}
      />
    </main>
  )
}
