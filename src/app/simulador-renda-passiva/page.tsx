import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import { buildBreadcrumbSchema, buildMetadata, buildWebApplicationSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Calculadora de renda passiva",
  description:
    "Estime o patrimônio necessário para gerar renda passiva mensal e compare cenários de acumulação.",
  path: "/simulador-renda-passiva",
  keywords: ["calculadora de renda passiva", "quanto preciso para viver de renda"]
})

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Calculadora de Renda Passiva
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Estime quanto patrimônio pode ser acumulado e como esse montante se relaciona com uma
          renda mensal recorrente.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seu patrimônio para renda passiva
        </h2>

        <Simulator calculatorType="passive_income" />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">O que é renda passiva?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Renda passiva é o fluxo recorrente gerado por ativos que continuam produzindo retorno sem
          depender de trabalho ativo contínuo.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Esta calculadora é útil para transformar metas como “quero gerar renda mensal” em uma
          projeção orientada por patrimônio acumulado e prazo de formação de capital.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Explore outras calculadoras</h2>
        <ul className="space-y-3 text-green-700 font-medium">
          <li>
            <TrackedLink href="/simulador-juros-compostos" source="passive_income_related" label="Simulador de Juros Compostos">
              Simulador de Juros Compostos
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-aporte-mensal" source="passive_income_related" label="Simulador de Aporte Mensal">
              Simulador de Aporte Mensal
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-valor-futuro" source="passive_income_related" label="Simulador de Valor Futuro">
              Simulador de Valor Futuro
            </TrackedLink>
          </li>
        </ul>
      </section>

      <AdSlot pageType="calculator" />

      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: "Calculadora de Renda Passiva",
            description:
              "Ferramenta para estimar patrimônio acumulado e apoiar metas de renda passiva mensal.",
            path: "/simulador-renda-passiva"
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Calculadora de Renda Passiva", path: "/simulador-renda-passiva" }
          ])
        ]}
      />
    </main>
  )
}
