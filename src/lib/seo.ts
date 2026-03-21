import type { Metadata } from "next"
import { getCanonicalUrl, siteConfig } from "@/lib/site"

type PageCategory = "website" | "article"

type MetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  imagePath?: string
  category?: PageCategory
}

const defaultImage = "/og-default.png"

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  imagePath = defaultImage,
  category = "website"
}: MetadataInput): Metadata {
  const canonical = getCanonicalUrl(path)
  const image = getCanonicalUrl(imagePath)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: category,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  }
}

type Question = {
  question: string
  answer: string
}

export function buildFaqSchema(questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  }
}

type WebAppSchemaInput = {
  name: string
  description: string
  path: string
}

export function buildWebApplicationSchema({
  name,
  description,
  path
}: WebAppSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: getCanonicalUrl(path),
    description
  }
}

type BreadcrumbItem = {
  name: string
  path: string
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path)
    }))
  }
}

type ArticleSchemaInput = {
  title: string
  description: string
  path: string
}

export function buildArticleSchema({
  title,
  description,
  path
}: ArticleSchemaInput) {
  const url = getCanonicalUrl(path)

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    url
  }
}

export function buildCollectionPageSchema({
  title,
  description,
  path
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: getCanonicalUrl(path)
  }
}
