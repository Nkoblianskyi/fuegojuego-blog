import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { currentBattle } from "@/data/battle-games"
import { Sword, Trophy } from "lucide-react"
import BattleSectionClient from "./battle-section-client"

// Серверный компонент с клиентской интерактивностью
export default function BattleSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Batalla de Juegos - {currentBattle.month} {currentBattle.year}
          </h2>
          <p className="text-xl text-gray-600">¡Vota por tu juego favorito en el duelo del mes!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Juego de Mesa */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={currentBattle.boardGame.image || "/placeholder.svg"}
                  alt={currentBattle.boardGame.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Badge className="absolute top-4 left-4 bg-brand-600 text-white">Mesa</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{currentBattle.boardGame.title}</h3>
                <p className="text-brand-600 font-semibold mb-2">{currentBattle.boardGame.genre}</p>
                <p className="text-gray-600 text-sm mb-4">{currentBattle.boardGame.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div>⏱️ {currentBattle.boardGame.duration}</div>
                  <div>🎯 Complejidad: {currentBattle.boardGame.complexity}</div>
                </div>
              </CardContent>
            </Card>

            {/* VS Section */}
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                <Sword className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">VS</h3>
              <Trophy className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            </div>

            {/* Juego Digital */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={currentBattle.digitalGame.image || "/placeholder.svg"}
                  alt={currentBattle.digitalGame.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Digital</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{currentBattle.digitalGame.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{currentBattle.digitalGame.genre}</p>
                <p className="text-gray-600 text-sm mb-4">{currentBattle.digitalGame.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div>⏱️ {currentBattle.digitalGame.duration}</div>
                  <div>🎯 Complejidad: {currentBattle.digitalGame.complexity}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Клиентская интерактивность */}
          <div className="grid lg:grid-cols-3 gap-8 items-center mt-4">
            <BattleSectionClient battle={currentBattle} />
          </div>
        </div>
      </div>
    </section>
  )
}
