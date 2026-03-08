import { Simulator } from "@/components/Simulator"

export const metadata = {
  title: "Simulador de Aporte Mensal | Calcule seus Investimentos com Juros Compostos",
  description:
    "Descubra quanto seus aportes mensais podem crescer ao longo do tempo utilizando juros compostos. Simule investimentos com capital inicial, aportes mensais e taxa anual.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

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
          em um investimento. Esse hábito é uma das formas mais eficientes de
          construir patrimônio ao longo do tempo.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Quando os aportes mensais são combinados com juros compostos,
          o crescimento do patrimônio se torna exponencial. Isso acontece
          porque os rendimentos passam a gerar novos rendimentos ao longo
          do tempo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Por que investir mensalmente?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Investir todos os meses cria disciplina financeira e permite
          aproveitar o poder dos juros compostos. Mesmo valores pequenos,
          quando investidos regularmente, podem gerar um patrimônio
          significativo no longo prazo.
        </p>

        <p className="text-slate-700 leading-relaxed">
          O simulador acima permite visualizar exatamente quanto seu
          patrimônio pode crescer com diferentes valores de aporte
          mensal e taxas de rendimento.
        </p>

      </section>

      {/* LINKS INTERNOS */}
      <section className="max-w-3xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Outros simuladores de investimento
        </h2>

        <ul className="space-y-3 text-green-700 font-medium">

          <li>
            <a href="/simulador-juros-compostos" className="hover:underline">
              Simulador de Juros Compostos
            </a>
          </li>

          <li>
            <a href="/simulador-inflacao-investimentos" className="hover:underline">
              Simulador de Investimentos com Inflação
            </a>
          </li>

          <li>
            <a href="/calculadora-renda-passiva" className="hover:underline">
              Calculadora de Renda Passiva
            </a>
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
              Sim. O mais importante é a constância. Investimentos
              regulares permitem aproveitar o crescimento exponencial
              dos juros compostos ao longo do tempo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Aportes mensais aceleram o crescimento do patrimônio?
            </h3>

            <p className="text-slate-600 mt-2 leading-relaxed">
              Sim. Cada novo aporte aumenta o capital investido,
              permitindo que os juros compostos atuem sobre
              um valor maior a cada mês.
            </p>
          </div>

        </div>

      </section>

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
                  "text": "O valor ideal depende da renda e dos objetivos financeiros. Muitos especialistas sugerem investir entre 10% e 20% da renda mensal."
                }
              },
              {
                "@type": "Question",
                "name": "Vale a pena investir pequenos valores mensalmente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Mesmo valores pequenos podem gerar crescimento significativo quando investidos regularmente ao longo do tempo."
                }
              }
            ]
          })
        }}
      />

    </main>
  )
}