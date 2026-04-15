import type { MetadataRoute } from "next"
import blogPosts from "@/lib/blog-posts"

export const SITE_CONTENT_LAST_MODIFIED = "2026-04-06"

export type IndexableRouteType =
  | "home"
  | "simulator"
  | "blog-index"
  | "blog-article"
  | "institutional"

export type SiteRoute = {
  path: string
  type: IndexableRouteType
  priority?: number
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const staticIndexableRoutes: SiteRoute[] = [
  {
    path: "/",
    type: "home",
    changeFrequency: "weekly",
    priority: 1
  },
  {
    path: "/simulador-juros-compostos",
    type: "simulator",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/simulador-aporte-mensal",
    type: "simulator",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/simulador-renda-passiva",
    type: "simulator",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/simulador-meta-financeira",
    type: "simulator",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/simulador-valor-futuro",
    type: "simulator",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/blog",
    type: "blog-index",
    changeFrequency: "weekly",
    priority: 0.8
  },
  {
    path: "/sobre",
    type: "institutional"
  },
  {
    path: "/privacidade",
    type: "institutional"
  },
  {
    path: "/termos",
    type: "institutional"
  },
  {
    path: "/contato",
    type: "institutional"
  }
]

const blogIndexableRoutes: SiteRoute[] = blogPosts.map((post) => ({
  path: post.path,
  type: "blog-article",
  changeFrequency: "monthly",
  priority: 0.7
}))

export const indexableRoutes: SiteRoute[] = [...staticIndexableRoutes, ...blogIndexableRoutes]
