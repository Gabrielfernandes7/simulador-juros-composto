import Link from "next/link"
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
    "Descubra o impacto de aportes recorrentes no patrimônio acumulado com uma calculadora focada em disciplina de investimento.",
  path: "/simulador-aporte-mensal",
  keywords: ["simulador de aporte mensal", "aporte mensal com juros compostos", "quanto investir por mês"]
})

const faqItems = [
  {
    question: "Quanto os aportes recorrentes mudam o resultado final?",
    answer:
      "Mesmo valores mensais moderados podem aumentar bastante o patrimônio ao longo dos anos porque ampliam a base que continua rendendo."
  },
  {
    question: "É melhor aportar mais cedo ou aumentar o valor depois?",
    answer:
      "Em geral, começar antes tende a ser mais eficiente, já que cada aporte ganha mais tempo para se capitalizar."
  },
  {
    question: "Quando esta calculadora faz mais sentido?",
    answer:
      "Ela é ideal para quem quer entender o peso da constância dos depósitos mensais, sem depender tanto do capital inicial."
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
          Use esta rota para medir o impacto dos aportes recorrentes no seu patrimônio e visualizar
          como a consistência mensal pode pesar mais do que tentar acertar o melhor momento do mercado.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Descubra o efeito dos seus aportes mensais no longo prazo
        </h2>

        <Simulator
          showInitialAmount={false}
          showInflation={false}
          initialValues={{ initialAmount: 0 }}
          calculatorType="monthly_contribution"
          formTitle="Planeje seus aportes recorrentes"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Por que olhar para o aporte mensal separadamente?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Quando o foco está no aporte recorrente, a principal pergunta deixa de ser “quanto meu dinheiro atual pode render?” e passa a ser “quanto patrimônio consigo construir se mantiver este hábito?”.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Por isso, os cards desta página destacam o patrimônio projetado, o valor mensal comprometido e a parcela construída pelos juros ao longo do tempo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como interpretar a simulação</h2>
        <p className="text-slate-700 leading-relaxed">
          Faça testes com prazos e taxas diferentes para descobrir se o seu plano depende mais de aumentar a contribuição mensal, investir por mais tempo ou buscar maior eficiência de retorno.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Próximo passo</h2>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700 leading-7">
            Se você já sabe quanto consegue investir por mês, avance para o simulador de renda passiva e veja como esse patrimônio pode virar fluxo mensal no futuro.
          </p>
          <TrackedLink
            href="/simulador-renda-passiva"
            source="monthly_contribution_cta"
            label="Ver renda passiva a partir do patrimônio"
            className="mt-4 inline-flex font-medium text-green-700 hover:text-green-800"
          >
            Ver renda passiva a partir do patrimônio →
          </TrackedLink>
        </div>
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

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Intenção desta rota</p>
          <p className="mt-3 leading-7 text-slate-700">
            Esta página existe para responder buscas ligadas ao impacto de <strong>aportes recorrentes</strong>, sem duplicar a experiência do simulador focado em capital inicial.
          </p>
          <Link href="/" className="mt-4 inline-flex font-medium text-green-700 hover:text-green-800">
            Voltar ao hub de calculadoras →
          </Link>
        </div>
      </section>

      <AdSlot pageType="calculator" />

      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: "Simulador de Aporte Mensal",
            description:
              "Ferramenta para projetar patrimônio com foco em contribuições mensais recorrentes.",
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
