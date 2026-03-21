import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Simulator } from "@/components/Simulator"
import AdSlot from "@/components/ads/AdSlot"
import { JsonLd } from "@/components/seo/JsonLd"
import { TrackedLink } from "@/components/TrackedLink"
import { buildBreadcrumbSchema, buildMetadata, buildWebApplicationSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Calculadora de renda passiva",
  description:
    "Converta o patrimônio projetado em uma estimativa de renda mensal usando uma taxa de retirada ou rendimento alvo.",
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
          Converta o patrimônio que você projeta acumular em uma estimativa de renda mensal, usando uma taxa de retirada ou rendimento alvo compatível com o seu plano.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Transforme patrimônio acumulado em renda mensal estimada
        </h2>

        <Simulator
          calculatorType="passive_income"
          formTitle="Projete patrimônio e renda passiva"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">O que esta calculadora faz de diferente?</h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Em vez de parar no patrimônio final, esta rota traduz o montante acumulado em uma renda mensal estimada. Isso ajuda a conectar a fase de acumulação com a fase de uso do capital.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Você pode ajustar a taxa de retirada ou rendimento alvo para ver como uma premissa mais conservadora ou mais agressiva altera a renda mensal projetada.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Como interpretar a taxa de retirada</h2>
        <p className="text-slate-700 leading-relaxed">
          A taxa não é garantia de retorno. Ela funciona como uma hipótese de uso do patrimônio para estimar quanto poderia ser retirado ou gerado por ano e, em seguida, convertido em média mensal.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Próximo passo</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700 leading-7">
            Se a renda mensal estimada ainda estiver abaixo da sua meta, refine a fase de acumulação no simulador de aporte mensal para testar novos ritmos de investimento.
          </p>
          <TrackedLink
            href="/simulador-aporte-mensal"
            source="passive_income_cta"
            label="Ajustar fase de acumulação"
            className="mt-4 inline-flex font-medium text-green-700 hover:text-green-800"
          >
            Ajustar fase de acumulação →
          </TrackedLink>
        </div>
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
            <TrackedLink href="/simulador-valor-futuro" source="passive_income_related" label="Simulador de Valor Futuro">
              Simulador de Valor Futuro
            </TrackedLink>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Intenção desta rota</p>
          <p className="mt-3 leading-7 text-slate-700">
            Esta página atende a busca por <strong>converter patrimônio final em renda mensal estimada</strong>, em vez de repetir a lógica de projeção patrimonial pura das outras rotas.
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
            name: "Calculadora de Renda Passiva",
            description:
              "Ferramenta para estimar patrimônio acumulado e convertê-lo em renda mensal potencial.",
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
