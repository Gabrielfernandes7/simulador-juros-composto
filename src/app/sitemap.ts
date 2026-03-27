import { MetadataRoute } from "next"

const baseUrl = "https://simulador-juros-composto.vercel.app"

type RouteConfig = {
  route: string
  lastModified: string
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority?: number
}

const routes: RouteConfig[] = [
  {
    route: "",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    route: "/simulador-juros-compostos",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/simulador-aporte-mensal",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/simulador-renda-passiva",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/simulador-meta-financeira",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/simulador-valor-futuro",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    route: "/blog",
    lastModified: "2026-03-27",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    route: "/blog/o-que-sao-juros-compostos",
    lastModified: "2026-03-27",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/blog/juros-simples-vs-compostos",
    lastModified: "2026-03-27",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  // Quando publicar novos artigos pilares, inclua as rotas aqui com data real de atualização.
  {
    route: "/sobre",
    lastModified: "2026-03-27",
  },
  {
    route: "/privacidade",
    lastModified: "2026-03-27",
  },
  {
    route: "/termos",
    lastModified: "2026-03-27",
  },
  {
    route: "/contato",
    lastModified: "2026-03-27",
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ route, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(`${lastModified}T00:00:00.000Z`),
    changeFrequency,
    priority,
  }))
}
