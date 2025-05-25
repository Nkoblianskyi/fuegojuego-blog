"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Vote } from "lucide-react"
import type { GameBattle } from "@/data/battle-games"

interface BattleSectionClientProps {
  battle: GameBattle
}

export default function BattleSectionClient({ battle }: BattleSectionClientProps) {
  const [userVote, setUserVote] = useState<string | null>(null)

  // Función para votar
  const handleVote = (gameType: "board" | "digital") => {
    if (userVote) return // Ya votó
    setUserVote(gameType)
    // Aquí se enviaría el voto al backend
  }

  // Calcular porcentajes de votos
  const boardPercentage = Math.round((battle.boardGame.votes / battle.totalVotes) * 100)
  const digitalPercentage = Math.round((battle.digitalGame.votes / battle.totalVotes) * 100)

  return (
    <>
      {/* Botones de voto para juego de mesa */}
      <div className="text-center">
        {userVote ? (
          <div>
            <div className="text-2xl font-bold text-brand-600">{boardPercentage}%</div>
            <div className="text-sm text-gray-500">{battle.boardGame.votes} votos</div>
          </div>
        ) : (
          <Button onClick={() => handleVote("board")} className="w-full bg-brand-600 hover:bg-brand-700">
            <Vote className="h-4 w-4 mr-2" />
            Votar por este
          </Button>
        )}
      </div>

      {/* Estado de la batalla */}
      <div className="text-center">
        <p className="text-gray-600">{userVote ? `${battle.totalVotes} votos totales` : "¡Elige tu favorito!"}</p>
        {userVote && (
          <div className="mt-4">
            <p className="text-sm font-semibold">
              {boardPercentage > digitalPercentage ? "Mesa" : "Digital"} va ganando
            </p>
          </div>
        )}
      </div>

      {/* Botones de voto para juego digital */}
      <div className="text-center">
        {userVote ? (
          <div>
            <div className="text-2xl font-bold text-blue-600">{digitalPercentage}%</div>
            <div className="text-sm text-gray-500">{battle.digitalGame.votes} votos</div>
          </div>
        ) : (
          <Button onClick={() => handleVote("digital")} className="w-full bg-blue-600 hover:bg-blue-700">
            <Vote className="h-4 w-4 mr-2" />
            Votar por este
          </Button>
        )}
      </div>
    </>
  )
}
