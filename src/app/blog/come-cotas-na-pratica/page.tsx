import type { Metadata } from "next"
import Link from "next/link"
import AdSlot from "@/components/ads/AdSlot"
import { TrackedLink } from "@/components/TrackedLink"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"

const title = "Come-cotas na prática: impacto real nos fundos"
const description =
  "Veja o que é come-cotas, quando ele acontece e como esse adiantamento de IR afeta o crescimento do seu patrimônio em fundos de investimento."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blog/come-cotas-na-pratica",
  keywords: [
    "come-cotas",
    "come-cotas fundos",
    "imposto de renda fundos de investimento",
    "rendimento líquido fundo"
  ],
  category: "article"
})

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <h1 className="text-4xl font-bold mb-8">Come-cotas na prática</h1>

        <p className="text-slate-700 leading-relaxed mb-6">
          Come-cotas é a antecipação semestral do Imposto de Renda em muitos fundos de renda fixa e
          multimercado. Em vez de pagar todo o imposto apenas no resgate, parte dele é recolhida em
          maio e novembro, reduzindo a quantidade de cotas do investidor.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Por que isso importa</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Como o imposto sai antes do resgate, o capital que permanece investido fica menor. Na
          prática, isso pode reduzir o efeito dos juros compostos no longo prazo, quando comparado a
          produtos sem come-cotas.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Exemplo numérico completo</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Imagine R$ 50.000 em um fundo com retorno de 10% ao ano, por 1 ano, com come-cotas de 15%
          sobre o rendimento no semestre.
        </p>

        <ol className="list-decimal pl-6 text-slate-700 leading-relaxed space-y-2 mb-6">
          <li>Após 6 meses, rendimento aproximado: R$ 2.500</li>
          <li>Come-cotas no semestre: 15% de R$ 2.500 = R$ 375</li>
          <li>Base para o 2º semestre: R$ 52.500 - R$ 375 = R$ 52.125</li>
          <li>Rendimento no 2º semestre (aprox. 5%): R$ 2.606,25</li>
          <li>Patrimônio ao fim de 12 meses (antes de ajuste final): R$ 54.731,25</li>
        </ol>

        <p className="text-slate-700 leading-relaxed mb-6">
          Se não houvesse antecipação, o capital do segundo semestre seria maior. Esse detalhe parece
          pequeno no curto prazo, mas se acumula com o tempo.
        </p>

        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Compare cenários com e sem antecipação de IR</h3>

          <TrackedLink
            href="/simulador-aporte-mensal?utm_source=blog&utm_medium=artigo&utm_campaign=come_cotas"
            source="blog_come_cotas_cta"
            label="Simulador de Aporte Mensal"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Abrir Simulador de Aporte Mensal
          </TrackedLink>
        </div>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Leituras e ferramentas relacionadas</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>
              <Link href="/blog/tabela-regressiva-ir-renda-fixa">Tabela regressiva de IR em renda fixa</Link>
            </li>
            <li>
              <Link href="/blog/juros-simples-vs-compostos">Juros simples vs juros compostos</Link>
            </li>
            <li>
              <TrackedLink
                href="/simulador-renda-passiva?utm_source=blog&utm_medium=interlink&utm_campaign=come_cotas"
                source="blog_come_cotas_related"
                label="Calculadora de Renda Passiva"
              >
                Calculadora de Renda Passiva
              </TrackedLink>
            </li>
          </ul>
        </section>
      </article>

      <AdSlot pageType="content" />

      <JsonLd
        data={[
          buildArticleSchema({ title, description, path: "/blog/come-cotas-na-pratica" }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Come-cotas na prática", path: "/blog/come-cotas-na-pratica" }
          ])
        ]}
      />
    </main>
  )
}
