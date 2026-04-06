import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://simulador-juros-composto.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Mantém apenas endpoints internos fora do rastreamento
    },
    // Sitemap explícito para acelerar descoberta das páginas públicas
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
