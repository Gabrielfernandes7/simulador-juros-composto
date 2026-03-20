import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Contato",
  description:
    "Entre em contato com o projeto Simulador de Juros Compostos para dúvidas, sugestões e correções editoriais.",
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">Contato</h1>

        <p className="mt-6 leading-8 text-slate-700">
          Se você encontrou um erro, deseja sugerir uma melhoria nas
          calculadoras ou quer enviar feedback editorial, entre em contato pelo
          canal abaixo.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            E-mail de contato
          </p>
          <a
            className="mt-3 inline-block text-lg font-semibold text-green-700 hover:underline"
            href="mailto:contato@simulador-juros-composto.vercel.app"
          >
            contato@simulador-juros-composto.vercel.app
          </a>

          <p className="mt-6 leading-7 text-slate-600">
            Você também pode navegar pelo{" "}
            <Link className="font-medium text-green-700 hover:underline" href="/blog">
              blog
            </Link>{" "}
            ou voltar para a{" "}
            <Link className="font-medium text-green-700 hover:underline" href="/">
              página inicial
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
