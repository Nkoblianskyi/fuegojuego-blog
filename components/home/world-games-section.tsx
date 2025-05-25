"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { worldGames, continents } from "@/data/world-games"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WorldGamesSection() {
  const [selectedContinent, setSelectedContinent] = useState("all")
  const [currentGameIndex, setCurrentGameIndex] = useState(0)

  // Filtrar juegos por continente
  const filteredGames =
    selectedContinent === "all" ? worldGames : worldGames.filter((game) => game.continent === selectedContinent)

  // Navegación del carrusel
  const nextGame = () => {
    setCurrentGameIndex((prev) => (prev + 1) % filteredGames.length)
  }

  const prevGame = () => {
    setCurrentGameIndex((prev) => (prev - 1 + filteredGames.length) % filteredGames.length)
  }

  const handleContinentChange = (continentId: string) => {
    setSelectedContinent(continentId)
    setCurrentGameIndex(0)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Juegos del Mundo</h2>
          <p className="text-xl text-gray-600">Descubre juegos tradicionales de diferentes culturas</p>
        </div>

        {/* Filtros por continente */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {continents.map((continent) => (
            <Button
              key={continent.id}
              variant={selectedContinent === continent.id ? "default" : "outline"}
              onClick={() => handleContinentChange(continent.id)}
              className={`text-sm ${selectedContinent === continent.id
                  ? "bg-brand-600 hover:bg-brand-700"
                  : "hover:bg-brand-50 hover:text-brand-600"
                }`}
            >
              {continent.name}
            </Button>
          ))}
        </div>

        {/* Carrusel de juegos */}
        {filteredGames.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={filteredGames[currentGameIndex].image || "/placeholder.svg"}
                      alt={filteredGames[currentGameIndex].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">{filteredGames[currentGameIndex].flag}</span>
                      <Badge variant="outline">{filteredGames[currentGameIndex].country}</Badge>
                      <Badge className="bg-accent-600">{filteredGames[currentGameIndex].continent}</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{filteredGames[currentGameIndex].title}</h3>

                    <p className="text-gray-600 mb-4">{filteredGames[currentGameIndex].description}</p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">💡 Dato curioso:</h4>
                      <p className="text-blue-700 text-sm">{filteredGames[currentGameIndex].funFact}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        
                        <span>{filteredGames[currentGameIndex].players}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        
                        <span>{filteredGames[currentGameIndex].age}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        
                        <span>
                          {filteredGames[currentGameIndex].type === "traditional" ? "Tradicional" : "Moderno"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        
                        <span>{filteredGames[currentGameIndex].continent}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Controles del carrusel */}
              {filteredGames.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                    onClick={prevGame}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                    onClick={nextGame}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Indicadores */}
            {filteredGames.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {filteredGames.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentGameIndex ? "bg-brand-600" : "bg-gray-300"
                      }`}
                    onClick={() => setCurrentGameIndex(index)}
                  />
                ))}
              </div>
            )}

            {/* Информация о количестве игр */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                {currentGameIndex + 1} de {filteredGames.length} juegos
                {selectedContinent !== "all" && ` en ${continents.find((c) => c.id === selectedContinent)?.name}`}
              </p>
            </div>
          </div>
        )}

        {/* Сообщение если нет игр */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay juegos disponibles para este continente.</p>
            <Button variant="outline" onClick={() => handleContinentChange("all")} className="mt-4">
              Ver todos los juegos
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
