export type BlogPostMetadata = {
  slug: string
  path: `/blog/${string}`
  title: string
  description: string
  publishedAt: `${number}-${number}-${number}`
  updatedAt: `${number}-${number}-${number}`
}

const blogPosts: BlogPostMetadata[] = [
  {
    slug: "o-que-sao-juros-compostos",
    path: "/blog/o-que-sao-juros-compostos",
    title: "O que são juros compostos e como funcionam",
    description:
      "Aprenda o conceito de juros compostos, veja exemplos práticos e entenda por que eles são essenciais para investimentos de longo prazo.",
    publishedAt: "2026-03-27",
    updatedAt: "2026-04-06"
  },
  {
    slug: "juros-simples-vs-compostos",
    path: "/blog/juros-simples-vs-compostos",
    title: "Juros simples vs juros compostos: qual a diferença",
    description:
      "Entenda a diferença entre juros simples e compostos, veja exemplos práticos e descubra qual regime tende a gerar maior rendimento no longo prazo.",
    publishedAt: "2026-03-27",
    updatedAt: "2026-04-06"
  },
  {
    slug: "tabela-regressiva-ir-renda-fixa",
    path: "/blog/tabela-regressiva-ir-renda-fixa",
    title: "Tabela regressiva de IR em renda fixa: guia prático",
    description:
      "Entenda como funciona a tabela regressiva de IR em CDB, Tesouro e outros títulos, com cálculo completo de alíquota e rendimento líquido.",
    publishedAt: "2026-03-27",
    updatedAt: "2026-04-06"
  },
  {
    slug: "come-cotas-na-pratica",
    path: "/blog/come-cotas-na-pratica",
    title: "Come-cotas na prática: impacto real nos fundos",
    description:
      "Veja o que é come-cotas, quando ele acontece e como esse adiantamento de IR afeta o crescimento do seu patrimônio em fundos de investimento.",
    publishedAt: "2026-03-27",
    updatedAt: "2026-04-06"
  }
]

export default blogPosts

export function getBlogPostBySlug(slug: string): BlogPostMetadata {
  const blogPost = blogPosts.find((post) => post.slug === slug)

  if (!blogPost) {
    throw new Error(`Blog post metadata not found for slug: ${slug}`)
  }

  return blogPost
}
