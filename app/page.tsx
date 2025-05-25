import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import BattleSection from "@/components/home/battle-section"
import BenefitsSection from "@/components/home/benefits-section"
import WorldGamesSection from "@/components/home/world-games-section"
import FunFactsSection from "@/components/home/fun-facts-section"
import FeaturedGamesSection from "@/components/home/featured-games-section"
import LatestPostsSection from "@/components/home/latest-posts-section"
import TopGamesSection from "@/components/home/top-games-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FuegoJuego Blog - Pasión por los Juegos de Mesa y Digitales",
  description:
    "Descubre el fascinante mundo de los juegos de mesa y digitales. Estrategias, reseñas, tutoriales y mucho más en FuegoJuego Blog.",
  openGraph: {
    title: "FuegoJuego Blog - Tu fuente de información sobre gaming",
    description: "Descubre estrategias, reseñas y consejos sobre juegos de mesa y digitales",
    url: "https://fuegojuegoblog.com",
    type: "website",
  },
  alternates: {
    canonical: "https://fuegojuegoblog.com",
  },
}

// Генерируем структурированные данные на сервере
function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FuegoJuego Blog - Inicio",
    description: "Descubre el fascinante mundo de los juegos de mesa y digitales",
    url: "https://fuegojuegoblog.com",
    mainEntity: {
      "@type": "Blog",
      name: "FuegoJuego Blog",
      description: "Blog especializado en juegos de mesa y digitales",
      url: "https://fuegojuegoblog.com/blog",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://fuegojuegoblog.com",
        },
      ],
    },
  }
}

export default function HomePage() {
  const homePageSchema = generateHomePageSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />

      <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="FuegoJuego Blog - Inicio" />
        <meta itemProp="description" content="Descubre el fascinante mundo de los juegos de mesa y digitales" />
        <meta itemProp="url" content="https://fuegojuegoblog.com" />

        <HeroSection />
        <AboutSection />
        <BattleSection />
        <TopGamesSection />
        <BenefitsSection />
        <WorldGamesSection />
        <FunFactsSection />
        <FeaturedGamesSection />
        <LatestPostsSection />
      </div>
    </>
  )
}
