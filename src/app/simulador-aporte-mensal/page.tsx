import { Simulator } from "@/components/Simulator"
import Link from "next/link"

export const metadata = {
  title: "Simulador de Aporte Mensal | Calcule seus Investimentos com Juros Compostos",
  description:
    "Simule quanto seus aportes mensais podem crescer com juros compostos. Descubra quanto investir por mês e veja a evolução do seu patrimônio ao longo do tempo.",
  alternates: {
    canonical: "https://simulador-juros-composto.vercel.app/simulador-aporte-mensal",
  },
  openGraph: {
    title: "Simulador de Aporte Mensal",
    description:
      "Calcule quanto seus aportes mensais podem render ao longo do tempo com juros compostos.",
    url: "https://simulador-juros-composto.vercel.app/simulador-aporte-mensal",
    siteName: "Simulador de Juros",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

          <span className="font-semibold">
            Calculadora de Investimentos
          </span>

          <div className="flex gap-6 text-sm">

            <Link href="/simulador-juros-compostos">
              Juros Compostos
            </Link>

            <Link href="/simulador-aporte-mensal">
              Aporte Mensal
            </Link>

            <Link href="/simulador-renda-passiva">
              Renda Passiva
            </Link>

            <Link href="/simulador-valor-futuro">
              Valor Futuro
            </Link>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Aporte Mensal
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Descubra quanto investir por mês para alcançar seus objetivos financeiros.
          Utilize nosso simulador de aporte mensal com juros compostos para calcular
          o crescimento do seu patrimônio ao longo do tempo.
        </p>

      </section>

      {/* SIMULADOR */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seus aportes mensais
        </h2>

        <Simulator
          showInitialAmount={false}
          showInflation={false}
          initialValues={{ initialAmount: 0 }}
        />

      </section>

      {/* CONTEÚDO EDUCATIVO */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-6">
          O que é um aporte mensal?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Aporte mensal é o valor que você investe regularmente todos os meses
          em um investimento. Esse hábito é uma das estratégias mais eficientes
          para construir patrimônio no longo prazo.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Ao investir mensalmente, você aumenta seu capital gradualmente,
          permitindo que os rendimentos se acumulem ao longo do tempo.
          Essa estratégia é amplamente utilizada por investidores que
          buscam crescimento consistente.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Como os juros compostos ajudam no crescimento do investimento?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são os rendimentos gerados não apenas sobre o
          capital inicial, mas também sobre os rendimentos acumulados
          ao longo do tempo.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Quando combinados com aportes mensais, os juros compostos criam
          um efeito de crescimento exponencial. Quanto maior o tempo de
          investimento, maior tende a ser o crescimento do patrimônio.
        </p>

      </section>

      {/* LINKS INTERNOS */}
      <section className="max-w-3xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Outros simuladores de investimento
        </h2>

        <ul className="space-y-3 text-green-700 font-medium">

          <li>
            <Link href="/simulador-juros-compostos" className="hover:underline">
              Simulador de Juros Compostos
            </Link>
          </li>

          <li>
            <Link href="/simulador-inflacao-investimentos" className="hover:underline">
              Simulador de Investimentos com Inflação
            </Link>
          </li>

          <li>
            <Link href="/calculadora-renda-passiva" className="hover:underline">
              Calculadora de Renda Passiva
            </Link>
          </li>

        </ul>

      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">

        <h2 className="text-2xl font-semibold mb-8">
          Perguntas frequentes sobre aportes mensais
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Quanto devo investir por mês?
            </h3>

            <p className="text-slate-600 mt-2 leading-relaxed">
              O valor ideal depende da sua renda, objetivos financeiros
              e prazo de investimento. Muitos especialistas recomendam
              investir entre 10% e 20% da renda mensal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Vale a pena investir pequenos valores mensalmente?
            </h3>

            <p className="text-slate-600 mt-2 leading-relaxed">
              Sim. Mesmo valores pequenos podem gerar crescimento
              significativo quando investidos regularmente ao longo
              de vários anos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Aportes mensais aceleram o crescimento do patrimônio?
            </h3>

            <p className="text-slate-600 mt-2 leading-relaxed">
              Sim. Cada novo aporte aumenta o capital investido,
              permitindo que os juros compostos atuem sobre
              um valor maior ao longo do tempo.
            </p>
          </div>

        </div>

      </section>

      {/* SCHEMA WEB APPLICATION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Simulador de Aporte Mensal",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web",
            "url": "https://simulador-juros-composto.vercel.app/simulador-aporte-mensal",
            "description":
              "Ferramenta online para simular investimentos com aportes mensais e juros compostos."
          })
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto devo investir por mês?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O valor depende da renda e dos objetivos financeiros. Muitos especialistas sugerem investir entre 10% e 20% da renda mensal."
                }
              },
              {
                "@type": "Question",
                "name": "Vale a pena investir pequenos valores mensalmente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Investimentos pequenos, quando feitos regularmente, podem crescer significativamente ao longo do tempo."
                }
              },
              {
                "@type": "Question",
                "name": "O que são juros compostos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Juros compostos são rendimentos calculados sobre o capital inicial e também sobre os rendimentos acumulados ao longo do tempo."
                }
              }
            ]
          })
        }}
      />

    </main>
  )
}