import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Серверный компонент - рендерится на сервере
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-blue-600 to-accent-500 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Bienvenido a <span className="text-blue-200">FuegoJuego</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-100">
            Tu fuente definitiva de información sobre juegos de mesa y digitales. Descubre estrategias, reseñas y
            consejos para mejorar tu experiencia de juego.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
            <Link href="/sobre-nosotros">
              Conócenos mejor <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
