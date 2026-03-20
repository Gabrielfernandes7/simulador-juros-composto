import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://simulador-juros-composto.vercel.app";

  const routes = [
    "",
    "/simulador-juros-compostos",
    "/simulador-aporte-mensal",
    "/simulador-renda-passiva",
    "/simulador-valor-futuro",
    "/blog",
    "/blog/o-que-sao-juros-compostos",
    "/blog/juros-simples-vs-compostos",
    "/sobre",
    "/privacidade",
    "/termos",
    "/contato",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
