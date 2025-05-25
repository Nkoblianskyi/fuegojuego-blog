interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
  category: string
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://fuegojuegoblog.com/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "FuegoJuego Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://fuegojuegoblog.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: category,
    inLanguage: "es-ES",
    isAccessibleForFree: true,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  )
}
