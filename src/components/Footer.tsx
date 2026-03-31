import Link from "next/link"
import { institutionalNavLinks } from "@/config/navigation"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className="text-base font-semibold text-slate-900">
            Simulador de Juros Compostos
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Ferramenta educacional para simular investimentos, entender juros
            compostos, calcular aportes mensais e apoiar decisões financeiras
            com mais clareza.
          </p>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Conteúdo com finalidade informativa e educacional. Não constitui
            recomendação de investimento.
          </p>
        </div>

        <nav aria-label="Links institucionais">
          <p className="text-sm font-semibold text-slate-900">Links úteis</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {institutionalNavLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-green-600" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
