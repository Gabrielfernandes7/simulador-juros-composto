import { MetadataRoute } from "next"
import blogPosts from "@/lib/blog-posts"
import { indexableRoutes, SITE_CONTENT_LAST_MODIFIED, type SiteRoute } from "@/lib/site-routes"

const baseUrl = "https://simulador-juros-composto.vercel.app"

const blogLastModifiedByPath = new Map(
  blogPosts.map((post) => [post.path, post.updatedAt ?? post.publishedAt])
)

const latestBlogUpdate = blogPosts.reduce(
  (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
  "1970-01-01"
)

function getLastModified(route: SiteRoute): string {
  if (route.type === "blog-article") {
    return blogLastModifiedByPath.get(route.path) ?? SITE_CONTENT_LAST_MODIFIED
  }

  if (route.type === "blog-index") {
    return latestBlogUpdate || SITE_CONTENT_LAST_MODIFIED
  }

  return SITE_CONTENT_LAST_MODIFIED
}

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map(({ path, changeFrequency, priority, type }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(`${getLastModified({ path, changeFrequency, priority, type })}T00:00:00.000Z`),
    changeFrequency,
    priority
  }))
}
