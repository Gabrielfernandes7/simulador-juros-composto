import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://simulador-juros-composto.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"], // Impede o bot de gastar tempo com arquivos internos
    },
    // 🟢 CRÍTICO: O robô usa isso para descobrir todas as suas calculadoras
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}