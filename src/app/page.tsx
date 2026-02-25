import { Simulator } from "@/components/Simulator"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Simulador de Juros Compostos Online com Aporte Mensal
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Calcule juros compostos de forma precisa. Simule investimentos com capital inicial,
          aportes mensais, taxa anual e visualize o crescimento nominal e real do seu patrimônio.
        </p>
      </section>

      {/* SIMULADOR */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-800">
          Simule seu investimento agora
        </h2>

        <Simulator />
      </section>

      {/* CONTEÚDO EDUCATIVO */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">
          O que são juros compostos?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Juros compostos são calculados sobre o valor acumulado do investimento.
          Diferente dos juros simples, onde a taxa incide apenas sobre o capital inicial,
          nos juros compostos o rendimento é aplicado sobre o montante total acumulado,
          gerando crescimento exponencial ao longo do tempo.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Fórmula dos juros compostos
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          A taxa mensal equivalente é calculada a partir da taxa anual usando:
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm">
          taxa_mensal = (1 + taxa_anual)^(1/12) − 1
        </div>

        <p className="text-slate-700 leading-relaxed mt-6">
          O saldo é atualizado mês a mês aplicando a taxa mensal e adicionando o aporte:
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center font-mono text-sm mt-4">
          saldo = saldo × (1 + taxa_mensal) + aporte_mensal
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Por que considerar a inflação?
        </h2>

        <p className="text-slate-700 leading-relaxed">
          A inflação reduz o poder de compra ao longo do tempo.
          Ao ajustar a taxa nominal pela inflação, você visualiza o crescimento real
          do seu patrimônio, permitindo decisões financeiras mais conscientes.
        </p>

      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">
          Perguntas frequentes sobre juros compostos (FAQ)
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Qual a diferença entre juros simples e compostos?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Juros simples são calculados apenas sobre o valor inicial.
              Juros compostos incidem sobre o valor acumulado, gerando crescimento exponencial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Como calcular juros compostos com aporte mensal?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Converta a taxa anual para mensal equivalente e aplique o cálculo mês a mês,
              somando o aporte ao saldo acumulado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Juros compostos realmente fazem tanta diferença?
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Sim. No longo prazo, o efeito exponencial gera crescimento significativamente maior
              em comparação aos juros simples.
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
                "name": "Qual a diferença entre juros simples e compostos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Juros simples incidem apenas sobre o valor inicial. Juros compostos incidem sobre o valor acumulado."
                }
              },
              {
                "@type": "Question",
                "name": "Como calcular juros compostos com aporte mensal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Converta a taxa anual para mensal equivalente e aplique o cálculo mês a mês adicionando o aporte."
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}