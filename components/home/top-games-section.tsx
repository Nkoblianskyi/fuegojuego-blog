import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ratedGames } from "@/data/rated-games"
import { getAnimatedIcon } from "@/components/animated-game-icons"
import { Star, Trophy, ArrowRight, Users, Clock } from "lucide-react"
import TopGamesSectionClient from "./top-games-section-client"

// Серверный компонент с предвычисленными данными
export default function TopGamesSection() {
  // Получаем топ-3 игры на сервере
  const topGames = [...ratedGames].sort((a, b) => b.rating - a.rating).slice(0, 3)

  // Функция для получения цвета рейтинга
  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return "text-green-600 bg-green-100"
    if (rating >= 8.5) return "text-blue-600 bg-blue-100"
    return "text-purple-600 bg-purple-100"
  }

  // Функция для получения позиции
  const getPosition = (index: number) => {
    if (index === 0) return { icon: "🥇", color: "text-yellow-600", bg: "bg-yellow-100" }
    if (index === 1) return { icon: "🥈", color: "text-gray-600", bg: "bg-gray-100" }
    if (index === 2) return { icon: "🥉", color: "text-orange-600", bg: "bg-orange-100" }
    return { icon: `#${index + 1}`, color: "text-gray-600", bg: "bg-gray-100" }
  }

  // Предвычисленная статистика
  const totalGames = ratedGames.length
  const totalVotes = ratedGames.reduce((sum, game) => sum + game.totalVotes, 0)
  const averageRating = (ratedGames.reduce((sum, game) => sum + game.rating, 0) / ratedGames.length).toFixed(1)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top 3 Mejores Juegos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los juegos mejor valorados por nuestra comunidad. ¡Vota por tus favoritos!
          </p>
        </div>

        {/* Топ-3 игры */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {topGames.map((game, index) => {
            const position = getPosition(index)

            return (
              <Card
                key={game.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index === 0 ? "lg:scale-105 border-2 border-yellow-300" : ""
                }`}
              >
                {/* Анимированная иллюстрация */}
                <div className="relative h-48">
                  {getAnimatedIcon(game.id, game.category)}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`${position.color} ${position.bg} text-2xl font-bold px-3 py-1 rounded-full shadow-lg`}
                    >
                      {position.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={game.category === "mesa" ? "bg-brand-600" : "bg-blue-600"}>
                      {game.category === "mesa" ? "Mesa" : "Digital"}
                    </Badge>
                  </div>
                  {/* Overlay градиент */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{game.title}</h3>
                      <p className="text-brand-600 font-semibold text-sm">{game.genre}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full ${getRatingColor(game.rating)}`}>
                        <Star className="h-3 w-3 mr-1" />
                        <span className="font-bold text-sm">{game.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{game.description}</p>

                  {/* Detalles */}
                  <div className="space-y-2 mb-4 text-xs text-gray-500">
                    {game.players && (
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{game.players}</span>
                      </div>
                    )}
                    {game.duration && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{game.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Votos y botón */}
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">{game.totalVotes} votos</div>
                    <TopGamesSectionClient gameId={game.id} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Estadísticas y CTA */}
        <div className="text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-brand-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">{totalGames}</div>
                  <div className="text-sm text-gray-600">Juegos totales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{totalVotes.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Votos totales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{averageRating}</div>
                  <div className="text-sm text-gray-600">Rating promedio</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Quieres ver el ranking completo?</h3>
              <p className="text-gray-600 mb-6">
                Descubre todos los juegos valorados por nuestra comunidad y participa en las votaciones.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white shadow-lg"
              >
                <Link href="/temas">
                  Ver Ranking Completo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
