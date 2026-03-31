import Link from "next/link"
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
        <p className="mt-3 text-sm text-slate-500">Última atualização: 31 de março de 2026.</p>

        <p className="mt-6 leading-8 text-slate-700">
          Esta política descreve como o Simulador de Juros Compostos lida com
          dados de navegação, cookies e tecnologias de terceiros. Ao utilizar o
          site, você concorda com os termos descritos abaixo.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Coleta de informações</h2>
        <p className="mt-6 leading-8 text-slate-700">
          O site pode coletar informações técnicas como endereço IP, tipo de
          navegador, páginas acessadas, tempo de navegação e interações básicas
          para fins de segurança, desempenho e melhoria da experiência. Não
          solicitamos dados bancários nem dados sensíveis para uso das
          calculadoras.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Cookies, AdSense e fornecedores</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Este site pode utilizar cookies próprios e de terceiros para medir
          audiência, personalizar a experiência e exibir anúncios. O Google,
          como fornecedor terceirizado, pode usar cookies para veicular
          anúncios com base em visitas anteriores do usuário a este ou a outros
          sites.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          Usuários podem gerenciar preferências de publicidade nas configurações
          de anúncios do Google e conhecer mais detalhes em suas políticas de
          privacidade e termos de uso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Finalidade e retenção dos dados</h2>
        <p className="mt-6 leading-8 text-slate-700">
          As informações coletadas são utilizadas para manter o funcionamento do
          site, entender o uso das calculadoras, melhorar conteúdo editorial e
          cumprir obrigações legais quando aplicável. Mantemos dados apenas pelo
          período necessário para essas finalidades.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Seus direitos</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Você pode solicitar esclarecimentos, correções ou remoção de dados
          pessoais eventualmente coletados por canais de contato do projeto,
          respeitando os limites técnicos e legais aplicáveis.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Contato</h2>
        <p className="mt-6 leading-8 text-slate-700">
          Em caso de dúvidas sobre esta política, utilize a nossa
          <Link className="font-medium text-green-700 hover:underline" href="/contato"> página de contato</Link>.
        </p>
      </section>
    </main>
  )
}
