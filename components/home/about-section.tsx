import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Серверный компонент с предзагруженными данными
export default function AboutSection() {
  // Данные генерируются на сервере
  const stats = {
    articles: 500,
    readers: 50000,
    experience: 5,
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-brand-600">FuegoJuego</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Somos un equipo apasionado por los juegos que cree firmemente en su poder para educar, entretener y
                conectar a las personas. Desde 2020, compartimos nuestro conocimiento y amor por los juegos de mesa y
                digitales con una comunidad creciente.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro objetivo es democratizar el acceso al conocimiento sobre juegos, ayudando a las personas a
                descubrir nuevas formas de diversión, aprendizaje y conexión social. Creemos que cada persona merece
                encontrar el juego perfecto para ella.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">{stats.articles}+</div>
                  <div className="text-sm text-gray-600">Artículos publicados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{(stats.readers / 1000).toFixed(0)}K+</div>
                  <div className="text-sm text-gray-600">Lectores mensuales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">{stats.experience}</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link href="/sobre-nosotros">
                  Conoce nuestro equipo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Imagen */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/cb959599654ea89f0d9b1b4875e09447.jpg"
                  alt="Equipo de FuegoJuego trabajando"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
