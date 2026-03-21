export const siteConfig = {
  name: "Simulador de Juros Compostos",
  shortName: "Simulador de Juros",
  url: "https://simulador-juros-composto.vercel.app",
  description:
    "Ferramentas para simular juros compostos, aportes mensais, valor futuro, renda passiva e crescimento real com inflação.",
  locale: "pt_BR"
} as const

export function getCanonicalUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
