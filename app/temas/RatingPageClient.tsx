"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ratedGames, categories } from "@/data/rated-games"
import { getAnimatedIcon } from "@/components/animated-game-icons"
import { Star, TrendingUp, Users, Clock, Calendar, Trophy, Vote } from "lucide-react"

export default function RatingPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [votedGames, setVotedGames] = useState<Set<string>>(new Set())

  // Filtrar juegos por categoría
  const filteredGames =
    selectedCategory === "all" ? ratedGames : ratedGames.filter((game) => game.category === selectedCategory)

  // Ordenar por rating
  const sortedGames = [...filteredGames].sort((a, b) => b.rating - a.rating)

  // Función para votar
  const handleVote = (gameId: string) => {
    if (votedGames.has(gameId)) return

    setVotedGames((prev) => new Set([...prev, gameId]))
    console.log(`Voted for game: ${gameId}`)
  }

  // Función para obtener el color del rating
  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return "text-green-600 bg-green-100"
    if (rating >= 8.5) return "text-blue-600 bg-blue-100"
    if (rating >= 8.0) return "text-purple-600 bg-purple-100"
    return "text-orange-600 bg-orange-100"
  }

  // Función para obtener la posición
  const getPosition = (index: number) => {
    if (index === 0) return { icon: "🥇", color: "text-yellow-600" }
    if (index === 1) return { icon: "🥈", color: "text-gray-500" }
    if (index === 2) return { icon: "🥉", color: "text-orange-600" }
    return { icon: `#${index + 1}`, color: "text-gray-600" }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ranking de Juegos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los juegos mejor valorados por nuestra comunidad. ¡Vota por tus favoritos!
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-sm ${
                  selectedCategory === category.id
                    ? "bg-brand-600 hover:bg-brand-700"
                    : "hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-brand-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{filteredGames.length}</div>
              <div className="text-sm text-gray-600">Juegos en ranking</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {filteredGames.reduce((sum, game) => sum + game.totalVotes, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Votos totales</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {(filteredGames.reduce((sum, game) => sum + game.rating, 0) / filteredGames.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Rating promedio</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de juegos */}
        <div className="space-y-6">
          {sortedGames.map((game, index) => {
            const position = getPosition(index)
            const isVoted = votedGames.has(game.id)

            return (
              <Card
                key={game.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Анімована ілюстрація */}
                  <div className="relative h-48 md:h-auto">
                    {getAnimatedIcon(game.id, game.category)}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`${position.color} text-2xl font-bold bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full`}
                      >
                        {position.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={game.category === "mesa" ? "bg-brand-600" : "bg-blue-600"}>
                        {game.category === "mesa" ? "Mesa" : "Digital"}
                      </Badge>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{game.title}</h3>
                          <p className="text-brand-600 font-semibold">{game.genre}</p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full ${getRatingColor(game.rating)}`}
                          >
                            <Star className="h-4 w-4 mr-1" />
                            <span className="font-bold">{game.rating}</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">{game.totalVotes} votos</div>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-600 mb-4 flex-1">{game.description}</p>

                      {/* Detalles */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 text-sm text-gray-600">
                          {game.developer && (
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{game.developer}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{game.releaseYear}</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          {game.players && (
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{game.players}</span>
                            </div>
                          )}
                          {game.duration && (
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{game.duration}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Botón de voto */}
                      <div className="flex justify-end">
                        <Button
                          onClick={() => handleVote(game.id)}
                          disabled={isVoted}
                          className={`${
                            isVoted
                              ? "bg-green-600 hover:bg-green-600 cursor-not-allowed"
                              : "bg-brand-600 hover:bg-brand-700"
                          } transition-all duration-300`}
                        >
                          <Vote className="h-4 w-4 mr-2" />
                          {isVoted ? "¡Votado!" : "Votar"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
