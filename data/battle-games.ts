export interface BattleGame {
  id: string
  title: string
  type: "board" | "digital"
  genre: string
  image: string
  duration: string
  complexity: string
  description: string
  votes: number
}

export interface GameBattle {
  id: string
  month: string
  year: number
  boardGame: BattleGame
  digitalGame: BattleGame
  totalVotes: number
}

export const currentBattle: GameBattle = {
  id: "mayo-2025",
  month: "Mayo",
  year: 2025,
  boardGame: {
    id: "azul",
    title: "Azul",
    type: "board",
    genre: "Estrategia abstracta",
    image: "/bffbd69b0b7818a0aff862a56bdc2a82.jpg",
    duration: "30-45 min",
    complexity: "Medio",
    description: "Un hermoso juego de colocación de azulejos inspirado en los mosaicos portugueses.",
    votes: 1247,
  },
  digitalGame: {
    id: "hades",
    title: "Hades",
    type: "digital",
    genre: "Roguelike de acción",
    image: "/aab2d5d5c73dac3fedcb7523168e2a52.jpg",
    duration: "20-30 horas",
    complexity: "Alto",
    description: "Escapa del inframundo en este roguelike con narrativa excepcional y combate fluido.",
    votes: 1583,
  },
  totalVotes: 2830,
}
