export interface WorldGame {
  id: string
  title: string
  country: string
  countryCode: string
  flag: string
  continent: string
  description: string
  funFact: string
  image: string
  type: "traditional" | "modern"
  players: string
  age: string
}

export const worldGames: WorldGame[] = [
  {
    id: "go",
    title: "Go (Weiqi)",
    country: "China",
    countryCode: "CN",
    flag: "🇨🇳",
    continent: "Asia",
    description: "Juego de estrategia abstracta con más de 4000 años de historia.",
    funFact: "Tiene más posiciones posibles que átomos en el universo observable",
    image: "/4593e223a41744ab9bb72e5fe722012f.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "8+",
  },
  {
    id: "carrom",
    title: "Carrom",
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    continent: "Asia",
    description: "Juego de habilidad que combina elementos del billar y las damas.",
    funFact: "Es el deporte nacional de Bangladesh y muy popular en el sur de Asia",
    image: "/56a6e09bebd51de4a43eeaa8df04ca81.jpg",
    type: "traditional",
    players: "2-4 jugadores",
    age: "6+",
  },
  {
    id: "mancala",
    title: "Mancala",
    country: "África",
    countryCode: "AF",
    flag: "🌍",
    continent: "África",
    description: "Familia de juegos de estrategia que se juegan en todo el continente africano.",
    funFact: "Es uno de los juegos más antiguos del mundo, con evidencia de 7000 años",
    image: "/7dadbaad15709fe0f24e19f872c491d5.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "6+",
  },
  {
    id: "shogi",
    title: "Shogi",
    country: "Japón",
    countryCode: "JP",
    flag: "🇯🇵",
    continent: "Asia",
    description: "Ajedrez japonés donde las piezas capturadas pueden volver al juego.",
    funFact: "Las piezas no tienen colores diferentes, sino que apuntan hacia el oponente",
    image: "/efb12241b17f67e1c3b58234929b74b4.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "10+",
  },
  {
    id: "backgammon",
    title: "Backgammon",
    country: "Persia",
    countryCode: "IR",
    flag: "🇮🇷",
    continent: "Asia",
    description: "Juego de carreras y estrategia con dados, uno de los más antiguos conocidos.",
    funFact: "Se han encontrado tableros de hace 5000 años en Mesopotamia",
    image: "/1feb69074bcbdbcb33e1839431fe8d5e.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "8+",
  },
  {
    id: "chess",
    title: "Ajedrez",
    country: "Europa",
    countryCode: "EU",
    flag: "♔",
    continent: "Europa",
    description: "El juego de estrategia más popular del mundo, originado en Europa medieval.",
    funFact: "Existen más partidas posibles de ajedrez que estrellas en la galaxia",
    image: "/eba9f4bab0a0eafb208ef430c7878067.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "6+",
  },
  {
    id: "mu-torere",
    title: "Mu Torere",
    country: "Nueva Zelanda",
    countryCode: "NZ",
    flag: "🇳🇿",
    continent: "Oceanía",
    description: "Juego tradicional maorí de estrategia abstracta jugado en un tablero octagonal.",
    funFact: "Es uno de los pocos juegos tradicionales conocidos de los pueblos polinesios",
    image: "/171bea573f979345d8952d3a1b1e5d6d.jpg",
    type: "traditional",
    players: "2 jugadores",
    age: "8+",
  },
]

export const continents = [
  { id: "all", name: "Todos" },
  { id: "Asia", name: "Asia" },
  { id: "África", name: "África"},
  { id: "Europa", name: "Europa" },
  { id: "Oceanía", name: "Oceanía" },
]
