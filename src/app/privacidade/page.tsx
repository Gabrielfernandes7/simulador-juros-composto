import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o Simulador de Juros Compostos trata dados, cookies e tecnologias de anúncios.",
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">
          Política de Privacidade
        </h1>

        <p className="mt-6 leading-8 text-slate-700">
          Esta política descreve como o Simulador de Juros Compostos lida com
          dados de navegação, cookies e tecnologias de terceiros. Ao utilizar o
          site, você concorda com esta política.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Coleta de informações</h2>
        <p className="mt-6 leading-8 text-slate-700">
          O site pode coletar informações técnicas como endereço IP, tipo de
          navegador, páginas acessadas, tempo de navegação e interações básicas
          para fins de segurança, desempenho e melhoria da experiência.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Cookies e publicidade</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Este site pode utilizar cookies próprios e de terceiros para medir
          audiência, personalizar a experiência e exibir anúncios. O Google,
          como fornecedor terceirizado, pode usar cookies para veicular
          anúncios com base em visitas anteriores do usuário a este ou a outros
          sites.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          Usuários podem gerenciar preferências de publicidade nas configurações
          do Google e consultar mais detalhes na Política de Privacidade do
          Google.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Finalidade dos dados</h2>
        <p className="mt-6 leading-8 text-slate-700">
          As informações coletadas são utilizadas para manter o funcionamento do
          site, entender o uso das calculadoras, melhorar conteúdo editorial e
          cumprir obrigações legais quando aplicável.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Contato</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Em caso de dúvidas sobre esta política, utilize a página de contato do
          projeto para solicitar esclarecimentos.
        </p>
      </section>
    </main>
  )
}
