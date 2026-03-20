import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Sobre o projeto",
  description:
    "Conheça a proposta do Simulador de Juros Compostos e como o projeto ajuda usuários a entender investimentos.",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">Sobre o projeto</h1>

        <p className="mt-6 leading-8 text-slate-700">
          O Simulador de Juros Compostos foi criado para transformar conceitos
          financeiros em decisões mais claras. A proposta é oferecer
          calculadoras simples, conteúdo educativo e exemplos práticos para
          quem deseja planejar patrimônio, aposentadoria e renda passiva.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">O que você encontra aqui</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-700">
          <li>Simuladores para juros compostos, aportes mensais e valor futuro.</li>
          <li>Explicações didáticas sobre fórmulas, inflação e metas financeiras.</li>
          <li>Artigos com foco em educação financeira e planejamento de longo prazo.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">Compromisso editorial</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Todo o conteúdo publicado tem finalidade educacional. Os cálculos
          apresentados ajudam na comparação de cenários, mas não substituem a
          análise individual de produtos financeiros nem recomendação
          profissional personalizada.
        </p>
      </section>
    </main>
  )
}
