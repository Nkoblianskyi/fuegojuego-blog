"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Vote } from "lucide-react"

interface TopGamesSectionClientProps {
  gameId: string
}

export default function TopGamesSectionClient({ gameId }: TopGamesSectionClientProps) {
  const [votedGames, setVotedGames] = useState<Set<string>>(new Set())

  // Функція для голосування
  const handleVote = (id: string) => {
    if (votedGames.has(id)) return
    setVotedGames((prev) => new Set([...prev, id]))
  }

  const isVoted = votedGames.has(gameId)

  return (
    <Button
      onClick={() => handleVote(gameId)}
      disabled={isVoted}
      size="sm"
      className={`${
        isVoted ? "bg-green-600 hover:bg-green-600 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-700"
      } transition-all duration-300`}
    >
      <Vote className="h-3 w-3 mr-1" />
      {isVoted ? "¡Votado!" : "Votar"}
    </Button>
  )
}
