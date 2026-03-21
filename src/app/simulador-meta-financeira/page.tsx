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
  title: "Simulador de meta financeira",
  description:
    "Descubra quanto investir por mês para atingir uma meta patrimonial em um prazo definido, com opção de ajuste por inflação.",
  path: "/simulador-meta-financeira",
  keywords: [
    "simulador de meta financeira",
    "quanto investir por mês para atingir uma meta",
    "quanto investir por mês para juntar dinheiro"
  ]
})

const faqItems = [
  {
    question: "Como descobrir quanto investir por mês para atingir uma meta?",
    answer:
      "Informe a meta desejada, o capital inicial, o prazo e a taxa anual esperada. A calculadora estima o aporte mensal necessário para perseguir esse objetivo."
  },
  {
    question: "O aporte calculado garante que eu vou atingir a meta?",
    answer:
      "Não. O valor calculado depende das premissas usadas na simulação, especialmente taxa de retorno, prazo e inflação."
  },
  {
    question: "Quando usar esta calculadora?",
    answer:
      "Ela faz sentido quando a pergunta principal é quanto investir por mês para chegar a um patrimônio-alvo, em vez de apenas projetar um cenário com aporte já definido."
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Meta Financeira
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Descubra quanto investir por mês para buscar uma meta patrimonial dentro do prazo escolhido, considerando capital inicial, taxa anual e ajuste opcional pela inflação.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Planeje o aporte mensal necessário para atingir seu objetivo
        </h2>

        <Simulator
          showTargetAmount
          showMonthlyContribution={false}
          initialValues={{ targetAmount: 100000 }}
          calculatorType="financial_goal"
          formTitle="Calcule o aporte mensal para sua meta"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Como interpretar esta calculadora</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Esta rota inverte a lógica do simulador tradicional. Em vez de perguntar quanto você terá no futuro com um aporte fixo, ela estima quanto precisará investir por mês para tentar chegar ao patrimônio desejado.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          A resposta depende da taxa usada, do prazo e do capital inicial. Quanto maior o prazo e o valor já acumulado, menor tende a ser o aporte mensal necessário.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como usar o resultado</h2>
        <p className="text-slate-700 leading-relaxed">
          Use o valor sugerido como referência educacional para planejar orçamento, testar cenários e ajustar sua meta caso o aporte estimado fique acima do que cabe no seu fluxo mensal.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Próximo passo</h2>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700 leading-7">
            Se você já souber quanto consegue aportar por mês, compare com o simulador de aporte mensal para entender o patrimônio que esse ritmo pode construir.
          </p>
          <TrackedLink
            href="/simulador-aporte-mensal"
            source="financial_goal_cta"
            label="Comparar com simulador de aporte mensal"
            className="mt-4 inline-flex font-medium text-green-700 hover:text-green-800"
          >
            Comparar com simulador de aporte mensal →
          </TrackedLink>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Outras calculadoras relacionadas</h2>

        <ul className="space-y-3 text-green-700 font-medium">
          <li>
            <TrackedLink href="/simulador-juros-compostos" source="financial_goal_related" label="Simulador de Juros Compostos">
              Simulador de Juros Compostos
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-renda-passiva" source="financial_goal_related" label="Calculadora de Renda Passiva">
              Calculadora de Renda Passiva
            </TrackedLink>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">Perguntas frequentes sobre meta financeira</h2>

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
            Esta página existe para responder buscas como <strong>quanto investir por mês para atingir uma meta</strong>, conectando planejamento e execução em uma única experiência.
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
            name: "Simulador de Meta Financeira",
            description:
              "Ferramenta para estimar o aporte mensal necessário para atingir uma meta patrimonial em um prazo definido.",
            path: "/simulador-meta-financeira"
          }),
          buildFaqSchema(faqItems),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Simulador de Meta Financeira", path: "/simulador-meta-financeira" }
          ])
        ]}
      />
    </main>
  )
}
