import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import { buildBreadcrumbSchema, buildMetadata, buildWebApplicationSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Calculadoras de investimentos e juros compostos",
  description:
    "Compare calculadoras de juros compostos, aporte mensal, valor futuro e renda passiva em um hub único para planejar decisões financeiras.",
  path: "/",
  keywords: [
    "calculadora de investimentos",
    "simulador de juros compostos",
    "simulador de aporte mensal",
    "calculadora de valor futuro",
    "calculadora de renda passiva",
    "simulador de meta financeira"
  ]
})

const calculatorCards = [
  {
    href: "/simulador-juros-compostos",
    title: "Simulador de Juros Compostos",
    description:
      "Ferramenta principal para projetar capital inicial, aportes mensais, taxa anual e impacto da inflação."
  },
  {
    href: "/simulador-aporte-mensal",
    title: "Simulador de Aporte Mensal",
    description:
      "Foque em quanto investir por mês para acumular patrimônio ao longo do tempo."
  },
  {
    href: "/simulador-valor-futuro",
    title: "Simulador de Valor Futuro",
    description:
      "Projete quanto um capital inicial pode valer no futuro sem duplicar a proposta da calculadora principal."
  },
  {
    href: "/simulador-renda-passiva",
    title: "Calculadora de Renda Passiva",
    description:
      "Converta o patrimônio acumulado em estimativa de renda mensal recorrente."
  },
  {
    href: "/simulador-meta-financeira",
    title: "Simulador de Meta Financeira",
    description:
      "Descubra quanto investir por mês para atingir uma meta patrimonial em um prazo definido."
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Hub de calculadoras para planejar investimentos com mais clareza
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Esta página funciona como ponto de entrada para comparar cenários, descobrir a
          calculadora certa para cada objetivo e iniciar uma simulação rápida antes de aprofundar
          em páginas especializadas.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {calculatorCards.map((card) => (
            <article key={card.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
              <TrackedLink
                href={card.href}
                source="home_calculator_grid"
                label={card.title}
                className="mt-5 inline-flex font-medium text-green-700 hover:text-green-800"
              >
                Abrir calculadora →
              </TrackedLink>
            </article>
          ))}
        </div>
      </section>


      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Transparência e políticas do projeto</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Para manter conformidade com boas práticas de monetização e melhorar a avaliação do site,
            disponibilizamos páginas institucionais com informações de privacidade, termos de uso, contato
            e escopo editorial.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <TrackedLink className="text-green-700 hover:text-green-800" href="/sobre" source="home_compliance" label="Sobre">Sobre o projeto</TrackedLink>
            <TrackedLink className="text-green-700 hover:text-green-800" href="/privacidade" source="home_compliance" label="Privacidade">Política de Privacidade</TrackedLink>
            <TrackedLink className="text-green-700 hover:text-green-800" href="/termos" source="home_compliance" label="Termos">Termos de Uso</TrackedLink>
            <TrackedLink className="text-green-700 hover:text-green-800" href="/contato" source="home_compliance" label="Contato">Contato</TrackedLink>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Simulação rápida para explorar cenários
            </h2>
            <p className="mt-2 max-w-3xl text-slate-600 leading-relaxed">
              Use a experiência abaixo para validar uma hipótese inicial. Se precisar de contexto
              mais profundo sobre juros compostos, inflação e fórmulas, siga para a rota dedicada.
            </p>
          </div>

          <TrackedLink
            href="/simulador-juros-compostos"
            source="home_quick_simulation"
            label="Simulador de Juros Compostos"
            className="font-medium text-green-700 hover:text-green-800"
          >
            Ver página completa da calculadora
          </TrackedLink>
        </div>

        <Simulator calculatorType="compound_interest" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Como usar este hub de calculadoras</h2>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            A home deixa de disputar intenção de busca com a rota
            <strong> /simulador-juros-compostos </strong>
            e assume um papel mais amplo: orientar a navegação entre calculadoras e consolidar a
            proposta do site.
          </p>
          <p>
            Para buscas focadas em cálculo detalhado de juros compostos, a página especializada
            concentra a explicação da fórmula, FAQ, schema de aplicação e links relacionados.
          </p>
          <p>
            O blog permanece enxuto enquanto as calculadoras especializadas amadurecem. Assim, o
            site prioriza páginas com intenção transacional e utilidade imediata antes de ampliar a
            cobertura editorial.
          </p>
        </div>
      </section>

      <AdSlot pageType="calculator" />

      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: "Hub de Calculadoras de Investimentos",
            description:
              "Página inicial para comparar simuladores de juros compostos, aportes, valor futuro e renda passiva.",
            path: "/"
          }),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" }
          ])
        ]}
      />
    </main>
  )
}
