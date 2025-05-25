import type React from "react"
import type { Metadata } from "next"
import { Cabin } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { JsonLd } from "@/components/seo/json-ld"

const inter = Cabin({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://fuegojuegoblog.com"),
  title: {
    default: "FuegoJuego Blog - Pasión por los Juegos de Mesa y Digitales",
    template: "%s | FuegoJuego Blog",
  },
  description:
    "Descubre el fascinante mundo de los juegos de mesa y digitales. Estrategias, reseñas, tutoriales y mucho más en FuegoJuego Blog.",
  keywords: [
    "juegos de mesa",
    "videojuegos",
    "estrategia",
    "familia",
    "reseñas",
    "tutoriales",
    "gaming",
    "board games",
    "digital games",
    "entretenimiento",
    "ocio",
    "diversión",
  ],
  authors: [{ name: "FuegoJuego Blog", url: "https://fuegojuegoblog.com" }],
  creator: "FuegoJuego Blog",
  publisher: "FuegoJuego Blog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://fuegojuegoblog.com",
    siteName: "FuegoJuego Blog",
    title: "FuegoJuego Blog - Pasión por los Juegos",
    description: "Tu fuente definitiva de información sobre juegos de mesa y digitales",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&query=gaming blog header with dice and controllers",
        width: 1200,
        height: 630,
        alt: "FuegoJuego Blog - Juegos de Mesa y Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuegoJuego Blog",
    description: "Pasión por los juegos de mesa y digitales",
    images: ["/placeholder.svg?height=630&width=1200&query=gaming blog social media card"],
    creator: "@fuegojuegoblog",
    site: "@fuegojuegoblog",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://fuegojuegoblog.com",
    languages: {
      "es-ES": "https://fuegojuegoblog.com",
    },
  },
  category: "entertainment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr">
      <head>
        {/* Google Ads Compliance */}
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <meta name="ads.txt" content="/ads.txt" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
