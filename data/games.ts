export interface FeaturedGame {
  title: string
  genre: string
  image: string
  description: string
  players?: string
  duration?: string
}

export const featuredGames = {
  board: {
    title: "Reinos de Papel",
    genre: "Fantasía estratégica",
    image: "/9d8a8fd319b167112148ee5641975739.jpg",
    description:
      "Un juego de conquista y diplomacia para 2-5 jugadores donde cada decisión puede cambiar el destino de tu reino.",
    players: "2-5 jugadores",
    duration: "90-120 min",
  },
  digital: {
    title: "CyberMaze X",
    genre: "Aventura táctica",
    image: "/721fc107f5802857089178e845fe5b4a.jpg",
    description:
      "Explora laberintos virtuales en este título independiente lleno de suspenso y decisiones estratégicas.",
    players: "1 jugador",
    duration: "15-30 horas",
  },
}

export const boardGamesBenefits = [
  {
    icon: "🧠",
    title: "Desarrollo cognitivo",
    description: "Mejoran la memoria, concentración y habilidades de resolución de problemas.",
  },
  {
    icon: "👥",
    title: "Interacción social",
    description: "Fortalecen vínculos familiares y desarrollan habilidades de comunicación.",
  },
  {
    icon: "🎯",
    title: "Pensamiento estratégico",
    description: "Enseñan planificación, toma de decisiones y gestión de recursos.",
  },
]

export const digitalGamesBenefits = [
  {
    icon: "⚡",
    title: "Reflejos y coordinación",
    description: "Mejoran la coordinación mano-ojo y los tiempos de reacción.",
  },
  {
    icon: "🎨",
    title: "Creatividad",
    description: "Fomentan la imaginación y el pensamiento creativo a través de mundos virtuales.",
  },
  {
    icon: "🌐",
    title: "Conexión global",
    description: "Permiten conectar con jugadores de todo el mundo y aprender sobre otras culturas.",
  },
]

export const funFacts = [
  {
    title: "¿Sabías que el ajedrez tiene más de 1,500 años?",
    description:
      "Originado en India como Chaturanga, el ajedrez ha evolucionado hasta convertirse en el juego de estrategia más popular del mundo.",
  },
  {
    title: "Los videojuegos pueden mejorar la visión",
    description:
      "Estudios demuestran que ciertos videojuegos pueden mejorar la agudeza visual y la percepción de contrastes.",
  },
  {
    title: "Monopoly fue creado para enseñar sobre capitalismo",
    description:
      'Elizabeth Magie creó "The Landlord\'s Game" en 1903 para demostrar los efectos negativos de la concentración de tierras.',
  },
]
