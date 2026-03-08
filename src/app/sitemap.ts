import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://SEU-DOMINIO.com";

  const routes = [
    "",
    "/simulador-juros-compostos",
    "/simulador-aporte-mensal",
    "/simulador-renda-passiva",
    "/simulador-valor-futuro",
    "/simulador-aposentadoria",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}