import type { Metadata } from "next"
import Link from "next/link"
import AdSlot from "@/components/ads/AdSlot"
import { TrackedLink } from "@/components/TrackedLink"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"

const title = "Tabela regressiva de IR em renda fixa: guia prático"
const description =
  "Entenda como funciona a tabela regressiva de IR em CDB, Tesouro e outros títulos, com cálculo completo de alíquota e rendimento líquido."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blog/tabela-regressiva-ir-renda-fixa",
  keywords: [
    "tabela regressiva ir renda fixa",
    "imposto de renda cdb",
    "alíquota ir tesouro direto",
    "rendimento líquido renda fixa"
  ],
  category: "article"
})

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <h1 className="text-4xl font-bold mb-8">Tabela regressiva de IR em renda fixa</h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Em boa parte da renda fixa (como CDB, Tesouro Selic, Tesouro Prefixado e fundos sem
          isenção), o Imposto de Renda segue uma tabela regressiva: quanto maior o prazo da
          aplicação, menor a alíquota aplicada sobre os rendimentos.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como funciona a tabela regressiva</h2>
        <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mb-6">
          <li>Até 180 dias: 22,5%</li>
          <li>De 181 a 360 dias: 20%</li>
          <li>De 361 a 720 dias: 17,5%</li>
          <li>Acima de 720 dias: 15%</li>
        </ul>

        <p className="text-slate-700 leading-relaxed mb-6">
          A alíquota incide somente sobre o lucro, e não sobre o valor total investido. Por isso,
          para comparar produtos, o ideal é sempre olhar o rendimento líquido.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Exemplo numérico completo</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Suponha um investimento inicial de <strong>R$ 10.000</strong> que, ao final de 2 anos,
          chegou a <strong>R$ 12.400</strong>.
        </p>

        <ol className="list-decimal pl-6 text-slate-700 leading-relaxed space-y-2 mb-6">
          <li>Rendimento bruto: R$ 12.400 - R$ 10.000 = R$ 2.400</li>
          <li>Prazo: 730 dias (acima de 720), alíquota de IR = 15%</li>
          <li>IR devido: 15% de R$ 2.400 = R$ 360</li>
          <li>Rendimento líquido: R$ 2.400 - R$ 360 = R$ 2.040</li>
          <li>Montante líquido: R$ 10.000 + R$ 2.040 = R$ 12.040</li>
        </ol>

        <p className="text-slate-700 leading-relaxed mb-6">
          Nesse cenário, a diferença entre bruto e líquido foi de R$ 360. Esse impacto deve entrar
          no planejamento, especialmente ao comparar renda fixa com prazos diferentes.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Simule o impacto do prazo no seu resultado</h3>

          <TrackedLink
            href="/simulador-valor-futuro?utm_source=blog&utm_medium=artigo&utm_campaign=tabela_regressiva_ir"
            source="blog_tabela_regressiva_ir_cta"
            label="Simulador de Valor Futuro"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Abrir Simulador de Valor Futuro
          </TrackedLink>
        </div>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Leituras e ferramentas relacionadas</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>
              <Link href="/blog/come-cotas-na-pratica">Come-cotas na prática: como afeta fundos</Link>
            </li>
            <li>
              <Link href="/blog/o-que-sao-juros-compostos">O que são juros compostos?</Link>
            </li>
            <li>
              <TrackedLink
                href="/simulador-juros-compostos?utm_source=blog&utm_medium=interlink&utm_campaign=tabela_regressiva_ir"
                source="blog_tabela_regressiva_ir_related"
                label="Simulador de Juros Compostos"
              >
                Simulador de Juros Compostos
              </TrackedLink>
            </li>
          </ul>
        </section>
      </article>

      <AdSlot pageType="content" />

      <JsonLd
        data={[
          buildArticleSchema({ title, description, path: "/blog/tabela-regressiva-ir-renda-fixa" }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Tabela regressiva de IR em renda fixa", path: "/blog/tabela-regressiva-ir-renda-fixa" }
          ])
        ]}
      />
    </main>
  )
}
