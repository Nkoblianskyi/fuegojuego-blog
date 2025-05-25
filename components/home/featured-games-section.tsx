import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { featuredGames } from "@/data/games"

export default function FeaturedGamesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">Juegos Destacados del Mes</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Juego de mesa del mes */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image
                src={featuredGames.board.image || "/placeholder.svg"}
                alt={featuredGames.board.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Juego de Mesa del Mes
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">{featuredGames.board.title}</h3>
              <p className="text-brand-600 font-semibold mb-2">{featuredGames.board.genre}</p>
              <p className="text-gray-600 mb-4">{featuredGames.board.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>👥 {featuredGames.board.players}</span>
                <span>⏱️ {featuredGames.board.duration}</span>
              </div>
              <Button className="w-full bg-brand-600 hover:bg-brand-700">Descubrir más</Button>
            </CardContent>
          </Card>

          {/* Juego digital del mes */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image
                src={featuredGames.digital.image || "/placeholder.svg"}
                alt={featuredGames.digital.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Juego Digital del Mes
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">{featuredGames.digital.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{featuredGames.digital.genre}</p>
              <p className="text-gray-600 mb-4">{featuredGames.digital.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>👤 {featuredGames.digital.players}</span>
                <span>⏱️ {featuredGames.digital.duration}</span>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Descubrir más</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
