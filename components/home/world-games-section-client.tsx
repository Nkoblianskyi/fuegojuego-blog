"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface WorldGamesSectionClientProps {
  totalGames: number
  onContinentChange: (continent: string) => void
  onGameChange: (index: number) => void
}

export default function WorldGamesSectionClient({
  totalGames,
  onContinentChange,
  onGameChange,
}: WorldGamesSectionClientProps) {
  const [selectedContinent, setSelectedContinent] = useState("all")
  const [currentGameIndex, setCurrentGameIndex] = useState(0)

  const continents = [
    { id: "all", name: "Todos" },
    { id: "Asia", name: "Asia" },
    { id: "África", name: "África" },
    { id: "América", name: "América" },
    { id: "Europa", name: "Europa" },
    { id: "Oceanía", name: "Oceanía" },
  ]

  const handleContinentChange = (continentId: string) => {
    setSelectedContinent(continentId)
    setCurrentGameIndex(0)
    onContinentChange(continentId)
  }

  const nextGame = () => {
    const newIndex = (currentGameIndex + 1) % totalGames
    setCurrentGameIndex(newIndex)
    onGameChange(newIndex)
  }

  const prevGame = () => {
    const newIndex = (currentGameIndex - 1 + totalGames) % totalGames
    setCurrentGameIndex(newIndex)
    onGameChange(newIndex)
  }

  return (
    <>
      {/* Filtros por continente */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {continents.map((continent) => (
          <Button
            key={continent.id}
            variant={selectedContinent === continent.id ? "default" : "outline"}
            onClick={() => handleContinentChange(continent.id)}
            className={`text-sm ${
              selectedContinent === continent.id
                ? "bg-brand-600 hover:bg-brand-700"
                : "hover:bg-brand-50 hover:text-brand-600"
            }`}
          >
            {continent.name}
          </Button>
        ))}
      </div>

      {/* Controles del carrusel */}
      {totalGames > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevGame}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextGame}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Indicadores */}
      {totalGames > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalGames)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentGameIndex ? "bg-brand-600" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentGameIndex(index)
                onGameChange(index)
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}
