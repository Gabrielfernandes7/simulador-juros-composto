import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Termos de Uso",
  description:
    "Leia os termos de uso aplicáveis ao Simulador de Juros Compostos e ao conteúdo educacional do site.",
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">Termos de Uso</h1>
        <p className="mt-3 text-sm text-slate-500">Última atualização: 31 de março de 2026.</p>

        <p className="mt-6 leading-8 text-slate-700">
          Ao acessar este site, você concorda em utilizar as ferramentas e os
          conteúdos de forma responsável e compatível com a legislação
          aplicável.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Uso informativo e educacional</h2>
        <p className="mt-6 leading-8 text-slate-700">
          As calculadoras e os textos publicados têm finalidade educacional. Os
          resultados apresentados dependem dos dados inseridos pelo usuário e
          não representam promessa de rentabilidade, recomendação de compra,
          venda ou manutenção de ativos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Responsabilidade do usuário</h2>
        <p className="mt-6 leading-8 text-slate-700">
          O usuário é responsável por validar entradas e interpretar os
          resultados conforme seu contexto financeiro. Antes de tomar decisões
          de investimento, deve considerar seu perfil, objetivos e, se
          necessário, buscar orientação profissional.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Monetização e publicidade</h2>
        <p className="mt-6 leading-8 text-slate-700">
          O site pode exibir publicidade de terceiros para sustentar a operação
          do projeto. A presença de anúncios não configura endosso automático
          do produto anunciado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Atualizações</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Estes termos podem ser atualizados para refletir mudanças legais,
          técnicas ou editoriais. O uso continuado do site após alterações
          representa concordância com a versão vigente.
        </p>
      </section>
    </main>
  )
}
