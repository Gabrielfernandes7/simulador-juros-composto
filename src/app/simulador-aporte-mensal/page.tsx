import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildWebApplicationSchema
} from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Simulador de aporte mensal",
  description:
    "Descubra quanto investir por mês e acompanhe a evolução do patrimônio com uma calculadora focada em aportes recorrentes.",
  path: "/simulador-aporte-mensal",
  keywords: ["simulador de aporte mensal", "aporte mensal com juros compostos", "quanto investir por mês"]
})

const faqItems = [
  {
    question: "Quanto devo investir por mês?",
    answer:
      "O valor depende da renda, do prazo e da meta financeira. A calculadora ajuda a visualizar cenários antes de definir um plano mensal."
  },
  {
    question: "Vale a pena investir pequenos valores mensalmente?",
    answer:
      "Sim. A disciplina de aportes recorrentes pode gerar crescimento relevante no longo prazo, especialmente com reinvestimento dos rendimentos."
  },
  {
    question: "Os aportes mensais aceleram o crescimento do patrimônio?",
    answer:
      "Sim. Cada novo aporte amplia a base investida e aumenta o potencial de capitalização futura."
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Aporte Mensal
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Página especializada para descobrir quanto investir todos os meses e como a constância
          dos aportes influencia o patrimônio acumulado.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seus aportes mensais
        </h2>

        <Simulator
          showInitialAmount={false}
          showInflation={false}
          initialValues={{ initialAmount: 0 }}
          calculatorType="monthly_contribution"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">O que é um aporte mensal?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Aporte mensal é o valor investido regularmente todos os meses. Essa prática ajuda a
          transformar objetivos financeiros em um plano recorrente e mensurável.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Ao focar nessa variável, a calculadora responde melhor a perguntas como “quanto preciso
          guardar por mês?” em vez de repetir a proposta genérica da rota principal.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como os juros compostos potencializam os aportes</h2>
        <p className="text-slate-700 leading-relaxed">
          Quanto mais cedo os aportes começam, maior tende a ser o efeito cumulativo dos
          rendimentos sobre uma base crescente de capital.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Outros simuladores de investimento</h2>

        <ul className="space-y-3 text-green-700 font-medium">
          <li>
            <TrackedLink href="/simulador-juros-compostos" source="monthly_contribution_related" label="Simulador de Juros Compostos">
              Simulador de Juros Compostos
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-valor-futuro" source="monthly_contribution_related" label="Simulador de Valor Futuro">
              Simulador de Valor Futuro
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-renda-passiva" source="monthly_contribution_related" label="Calculadora de Renda Passiva">
              Calculadora de Renda Passiva
            </TrackedLink>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">Perguntas frequentes sobre aportes mensais</h2>

        <div className="space-y-8">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot pageType="calculator" />

      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: "Simulador de Aporte Mensal",
            description:
              "Ferramenta para projetar o patrimônio com foco em contribuições mensais recorrentes.",
            path: "/simulador-aporte-mensal"
          }),
          buildFaqSchema(faqItems),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Simulador de Aporte Mensal", path: "/simulador-aporte-mensal" }
          ])
        ]}
      />
    </main>
  )
}
