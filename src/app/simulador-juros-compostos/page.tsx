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
  title: "Simulador de juros compostos com aporte mensal",
  description:
    "Calcule juros compostos com capital inicial, aportes mensais, taxa anual e ajuste por inflação em uma calculadora dedicada.",
  path: "/simulador-juros-compostos",
  keywords: [
    "simulador de juros compostos",
    "calculadora de investimentos",
    "juros compostos com aporte mensal",
    "juros compostos com inflação"
  ]
})

const faqItems = [
  {
    question: "Como calcular juros compostos com aporte mensal?",
    answer:
      "Converta a taxa anual para a taxa mensal equivalente, atualize o saldo mês a mês e some o aporte mensal ao capital acumulado."
  },
  {
    question: "Por que considerar a inflação na simulação?",
    answer:
      "A inflação reduz o poder de compra. Ajustar o resultado ajuda a comparar crescimento nominal e crescimento real do patrimônio."
  },
  {
    question: "Quando usar esta calculadora em vez da home?",
    answer:
      "Use esta página quando quiser um contexto mais específico sobre juros compostos, fórmulas, inflação e comparações relacionadas ao cálculo principal."
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Juros Compostos
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Página especializada para calcular o crescimento do investimento com capital inicial,
          aportes mensais, taxa anual, prazo e opção de ajuste pela inflação.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Calcule seus juros compostos com contexto completo
        </h2>

        <Simulator calculatorType="compound_interest" />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Como funcionam os juros compostos</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são aplicados sobre o valor acumulado do investimento. Isso faz com que
          cada período gere rendimento sobre o capital original e também sobre os juros já
          incorporados.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Ao incluir aportes mensais, o saldo cresce não apenas pela taxa de retorno, mas também
          pelo aumento recorrente da base investida.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Fórmulas usadas na projeção</h2>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm">
          taxa_mensal = (1 + taxa_anual)^(1/12) − 1
        </div>

        <p className="text-slate-700 leading-relaxed mt-6">
          Depois da conversão, o saldo é recalculado mês a mês com o rendimento e os novos aportes.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mt-4">
          saldo = saldo × (1 + taxa_mensal) + aporte_mensal
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Crescimento nominal vs crescimento real</h2>

        <p className="text-slate-700 leading-relaxed">
          O ajuste por inflação ajuda a entender se o patrimônio projetado realmente aumenta o poder
          de compra ou apenas acompanha a elevação dos preços ao longo do tempo.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Outras calculadoras relacionadas</h2>

        <ul className="space-y-3 text-green-700 font-medium">
          <li>
            <TrackedLink href="/simulador-aporte-mensal" source="compound_interest_related" label="Simulador de Aporte Mensal">
              Simulador de Aporte Mensal
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-renda-passiva" source="compound_interest_related" label="Calculadora de Renda Passiva">
              Calculadora de Renda Passiva
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href="/simulador-valor-futuro" source="compound_interest_related" label="Simulador de Valor Futuro">
              Simulador de Valor Futuro
            </TrackedLink>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">
          Perguntas frequentes sobre juros compostos
        </h2>

        <div className="space-y-8">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Papel desta rota</p>
          <p className="mt-3 leading-7 text-slate-700">
            Diferente da home, esta página concentra a intenção de busca específica por
            <strong> simulador de juros compostos </strong>
            e reúne explicação detalhada, FAQ e contexto técnico.
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
            name: "Simulador de Juros Compostos",
            description:
              "Ferramenta online para calcular juros compostos com aportes mensais e ajuste por inflação.",
            path: "/simulador-juros-compostos"
          }),
          buildFaqSchema(faqItems),
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Simulador de Juros Compostos", path: "/simulador-juros-compostos" }
          ])
        ]}
      />
    </main>
  )
}
