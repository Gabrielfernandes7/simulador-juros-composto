import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import { buildBreadcrumbSchema, buildMetadata, buildWebApplicationSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Simulador de valor futuro",
  description:
    "Projete quanto um capital inicial pode valer no futuro com foco em crescimento patrimonial sem aportes recorrentes.",
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
          Esta calculadora foi desenhada para quem quer descobrir quanto um capital inicial pode crescer sozinho ao longo do tempo, sem novos aportes mensais.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Projete o futuro do seu capital inicial
        </h2>

        <Simulator
          showMonthlyContribution={false}
          initialValues={{ monthlyContribution: 0 }}
          calculatorType="future_value"
          formTitle="Simule o valor futuro sem aportes"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Quando usar um simulador de valor futuro?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Este cenário é útil quando você já tem um valor disponível para investir agora e quer medir apenas o efeito do tempo e da taxa de retorno sobre esse montante inicial.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Por isso, os resultados destacam o valor futuro estimado, o capital preservado e o ganho acumulado sem misturar o efeito de novos aportes mensais.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como comparar cenários</h2>
        <p className="text-slate-700 leading-relaxed">
          Teste diferentes combinações de prazo, taxa e inflação para avaliar se o crescimento esperado vem principalmente do tempo de exposição ou da taxa de retorno projetada.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Próximo passo</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700 leading-7">
            Se quiser comparar esse capital inicial com uma estratégia de depósitos recorrentes, avance para o simulador de aporte mensal.
          </p>
          <TrackedLink
            href="/simulador-aporte-mensal"
            source="future_value_cta"
            label="Comparar com aportes mensais"
            className="mt-4 inline-flex font-medium text-green-700 hover:text-green-800"
          >
            Comparar com aportes mensais →
          </TrackedLink>
        </div>
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
            <TrackedLink href="/simulador-renda-passiva" source="future_value_related" label="Calculadora de Renda Passiva">
              Calculadora de Renda Passiva
            </TrackedLink>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Intenção desta rota</p>
          <p className="mt-3 leading-7 text-slate-700">
            A proposta aqui é responder buscas sobre <strong>valor futuro de um capital inicial</strong>, mantendo separado o caso de uso de aportes recorrentes e o objetivo de renda passiva.
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
