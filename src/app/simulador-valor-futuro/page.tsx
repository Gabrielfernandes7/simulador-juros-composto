import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import { buildBreadcrumbSchema, buildMetadata, buildWebApplicationSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Simulador de valor futuro",
  description:
    "Projete quanto um capital inicial pode valer no futuro com uma calculadora focada em crescimento patrimonial sem aportes recorrentes.",
  path: "/simulador-valor-futuro",
  keywords: ["simulador de valor futuro", "valor futuro de investimento"]
})

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simulador de Valor Futuro
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Projete o crescimento de um capital inicial ao longo do tempo com foco em valor futuro,
          sem depender de aportes mensais para explicar a proposta da página.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Calcule o valor futuro do seu investimento
        </h2>

        <Simulator
          showMonthlyContribution={false}
          initialValues={{ monthlyContribution: 0 }}
          calculatorType="future_value"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">O que é valor futuro de um investimento?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Valor futuro representa quanto um investimento atual pode valer após um período definido,
          considerando uma taxa de rendimento esperada.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Esta rota é ideal para perguntas do tipo “quanto meu capital atual pode virar?” e evita
          sobreposição com páginas centradas em aportes mensais ou metas de renda passiva.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Explore outras calculadoras</h2>
        <ul className="space-y-3 text-green-700 font-medium">
          <li>
            <TrackedLink href="/simulador-juros-compostos" source="future_value_related" label="Simulador de Juros Compostos">
              Simulador de Juros Compostos
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-aporte-mensal" source="future_value_related" label="Simulador de Aporte Mensal">
              Simulador de Aporte Mensal
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-renda-passiva" source="future_value_related" label="Calculadora de Renda Passiva">
              Calculadora de Renda Passiva
            </TrackedLink>
          </li>
        </ul>
      </section>

      <AdSlot pageType="calculator" />

      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: "Simulador de Valor Futuro",
            description:
              "Ferramenta para projetar o valor futuro de um capital inicial ao longo do tempo.",
            path: "/simulador-valor-futuro"
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Simulador de Valor Futuro", path: "/simulador-valor-futuro" }
          ])
        ]}
      />
    </main>
  )
}
