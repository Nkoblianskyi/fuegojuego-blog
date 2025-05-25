import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import RatingPageClient from "./RatingPageClient"

export const metadata = {
  title: "Ranking de Juegos - FuegoJuego Blog",
  description: "Descubre los juegos mejor valorados por nuestra comunidad en FuegoJuego Blog.",
}

// Компонент загрузки
function RatingPageSkeleton() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ranking de Juegos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cargando los mejores juegos...</p>
        </div>

        {/* Skeleton для карточек */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="grid md:grid-cols-4 gap-0">
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="md:col-span-3 p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2" />
                  <div className="h-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RatingPage() {
  return (
    <Suspense fallback={<RatingPageSkeleton />}>
      <RatingPageClient />
    </Suspense>
  )
}
