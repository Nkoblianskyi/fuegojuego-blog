export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FuegoJuego Blog",
    url: "https://fuegojuegoblog.com",
    logo: "https://fuegojuegoblog.com/logo.png",
    description: "Tu fuente definitiva de información sobre juegos de mesa y digitales",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Equipo FuegoJuego",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle de Alcalá, 75",
      addressLocality: "Madrid",
      postalCode: "28009",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-671-166-892",
      contactType: "customer service",
      email: "info@fuegojuegoblog.com",
      availableLanguage: "Spanish",
    },
    sameAs: [
      "https://twitter.com/fuegojuegoblog",
      "https://facebook.com/fuegojuegoblog",
      "https://instagram.com/fuegojuegoblog",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FuegoJuego Blog",
    url: "https://fuegojuegoblog.com",
    description: "Descubre el fascinante mundo de los juegos de mesa y digitales",
    publisher: {
      "@type": "Organization",
      name: "FuegoJuego Blog",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://fuegojuegoblog.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-ES",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
