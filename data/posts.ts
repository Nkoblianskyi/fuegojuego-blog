export interface Post {
  id: string
  title: string
  preview: string
  content: PostContent[]
  category: string
  date: string
  image: string
  author: string
}

export interface PostContent {
  type: "heading2" | "heading3" | "paragraph" | "list" | "blockquote"
  content: string | string[]
}

export const posts: Post[] = [
  {
    id: "juego-carta-estrategia",
    title: "Estrategia en los juegos de cartas modernos",
    preview:
      "Descubre cómo los juegos de cartas pueden mejorar tu toma de decisiones y desarrollar habilidades estratégicas fundamentales.",
    content: [
      {
        type: "heading2",
        content: "La evolución de los juegos de cartas",
      },
      {
        type: "paragraph",
        content:
          "Los juegos de cartas han evolucionado significativamente en las últimas décadas, incorporando mecánicas complejas que desafían nuestra capacidad de planificación y adaptación.",
      },
      {
        type: "heading3",
        content: "Elementos clave de la estrategia",
      },
      {
        type: "list",
        content: [
          "Gestión de recursos limitados",
          "Lectura de patrones del oponente",
          "Planificación a corto y largo plazo",
          "Adaptabilidad ante situaciones imprevistas",
        ],
      },
      {
        type: "blockquote",
        content: "Un buen estratega no solo planifica sus movimientos, sino que anticipa los de su oponente - Sun Tzu",
      },
      {
        type: "heading3",
        content: "Beneficios cognitivos",
      },
      {
        type: "paragraph",
        content:
          "La práctica regular de juegos de cartas estratégicos puede mejorar significativamente nuestras habilidades de toma de decisiones en la vida real.",
      },
    ],
    category: "estrategia",
    date: "2025-05-15",
    image: "/f414823213c78ce9a4389ea3ea31de54.jpg",
    author: "Lucía Martínez",
  },
  {
    id: "beneficios-juegos-mesa",
    title: "Los beneficios ocultos de los juegos de mesa",
    preview:
      "Más allá de la diversión, los juegos de mesa ofrecen ventajas cognitivas y sociales que impactan positivamente en nuestro desarrollo.",
    content: [
      {
        type: "heading2",
        content: "Desarrollo de habilidades sociales",
      },
      {
        type: "paragraph",
        content:
          "Los juegos de mesa son una herramienta excepcional para desarrollar habilidades interpersonales y de comunicación.",
      },
      {
        type: "heading3",
        content: "Beneficios principales",
      },
      {
        type: "list",
        content: [
          "Mejora de la comunicación verbal y no verbal",
          "Desarrollo de la paciencia y tolerancia",
          "Fortalecimiento de vínculos familiares",
          "Aprendizaje de trabajo en equipo",
        ],
      },
      {
        type: "paragraph",
        content:
          "Estudios recientes demuestran que las familias que juegan juntas regularmente tienen vínculos más fuertes y mejor comunicación.",
      },
    ],
    category: "familia",
    date: "2025-05-10",
    image: "/dc5e3e181c82a0b05f7995f46dc003f7.jpg",
    author: "Carlos Rodríguez",
  },
  {
    id: "juegos-digitales-creatividad",
    title: "Cómo los juegos digitales potencian la creatividad",
    preview:
      "Exploramos el impacto positivo de los videojuegos en el desarrollo del pensamiento creativo y la resolución de problemas.",
    content: [
      {
        type: "heading2",
        content: "La creatividad en el mundo digital",
      },
      {
        type: "paragraph",
        content:
          "Los juegos digitales modernos ofrecen espacios únicos para la expresión creativa y el desarrollo de habilidades innovadoras.",
      },
      {
        type: "heading3",
        content: "Mecánicas que fomentan la creatividad",
      },
      {
        type: "list",
        content: [
          "Construcción y diseño libre",
          "Resolución de puzzles complejos",
          "Narrativas interactivas",
          "Personalización de personajes y mundos",
        ],
      },
      {
        type: "paragraph",
        content:
          "Los juegos sandbox como Minecraft han demostrado ser herramientas educativas poderosas para el desarrollo de la creatividad arquitectónica y espacial.",
      },
    ],
    category: "digital",
    date: "2025-05-05",
    image: "/6c6b5b498815e8e3c90c490f0df4b71b.jpg",
    author: "Ana García",
  },
  {
    id: "historia-juegos-rol",
    title: "La evolución de los juegos de rol: de mesa a digital",
    preview:
      "Un viaje a través de la historia de los RPG, desde sus orígenes en papel hasta las experiencias digitales inmersivas actuales.",
    content: [
      {
        type: "heading2",
        content: "Los orígenes del rol",
      },
      {
        type: "paragraph",
        content:
          "Los juegos de rol nacieron en los años 70 como una evolución natural de los juegos de guerra, incorporando elementos narrativos y de interpretación.",
      },
      {
        type: "heading3",
        content: "Hitos importantes",
      },
      {
        type: "list",
        content: [
          "1974: Dungeons & Dragons revoluciona el gaming",
          "1980s: Expansión a diferentes géneros y sistemas",
          "1990s: Primeros RPG digitales",
          "2000s: MMORPGs y mundos persistentes",
          "2010s: Resurgimiento de los RPG de mesa",
        ],
      },
      {
        type: "blockquote",
        content:
          "Los juegos de rol nos permiten explorar identidades y narrativas que van más allá de nuestra experiencia cotidiana",
      },
    ],
    category: "historia",
    date: "2025-04-28",
    image: "/1ac3428c4f7a16d1b95a9fb22de3df75.jpg",
    author: "Miguel Torres",
  },
  {
    id: "resena-wingspan",
    title: "Reseña: Wingspan - El juego de aves que conquistó el mundo",
    preview:
      "Análisis completo de Wingspan, el juego de mesa que combina estrategia, educación y hermoso arte para crear una experiencia única.",
    content: [
      {
        type: "heading2",
        content: "Una obra maestra del diseño moderno",
      },
      {
        type: "paragraph",
        content:
          "Wingspan, diseñado por Elizabeth Hargrave, ha revolucionado el mundo de los juegos de mesa desde su lanzamiento en 2019. Este juego de construcción de motores nos invita a crear el mejor hábitat para aves en nuestros aviarios personales.",
      },
      {
        type: "heading3",
        content: "Mecánicas de juego",
      },
      {
        type: "list",
        content: [
          "Construcción de motores con cartas de aves",
          "Gestión de recursos (comida, huevos, cartas)",
          "Múltiples estrategias viables",
          "Interacción indirecta entre jugadores",
        ],
      },
      {
        type: "heading3",
        content: "Componentes y arte",
      },
      {
        type: "paragraph",
        content:
          "Los componentes de Wingspan son excepcionales. Las ilustraciones de Natalia Rojas, Ana Maria Martinez Jaramillo y Beth Sobel crean un mundo visualmente stunning que complementa perfectamente la temática.",
      },
      {
        type: "blockquote",
        content:
          "Wingspan demuestra que los juegos pueden ser educativos sin sacrificar la diversión o la profundidad estratégica",
      },
      {
        type: "heading3",
        content: "Veredicto final",
      },
      {
        type: "paragraph",
        content:
          "Con una puntuación de 9/10, Wingspan es un must-have para cualquier colección. Su combinación de mecánicas sólidas, componentes hermosos y valor educativo lo convierte en una experiencia única.",
      },
    ],
    category: "reseñas",
    date: "2025-04-20",
    image: "/483077e5dd52815aa007763ecca88282.jpg",
    author: "Carlos Rodríguez",
  },
  {
    id: "tutorial-primeros-pasos-dnd",
    title: "Tutorial: Primeros pasos en Dungeons & Dragons para principiantes",
    preview:
      "Guía completa para nuevos jugadores que quieren adentrarse en el mundo de D&D. Todo lo que necesitas saber para tu primera aventura.",
    content: [
      {
        type: "heading2",
        content: "Bienvenido al mundo de D&D",
      },
      {
        type: "paragraph",
        content:
          "Dungeons & Dragons puede parecer intimidante al principio, pero con esta guía paso a paso, estarás listo para tu primera aventura en poco tiempo.",
      },
      {
        type: "heading3",
        content: "¿Qué necesitas para empezar?",
      },
      {
        type: "list",
        content: [
          "Set básico de dados poliédricos (d4, d6, d8, d10, d12, d20)",
          "Hoja de personaje (disponible gratis online)",
          "Lápiz y papel",
          "Un grupo de 3-6 jugadores",
          "Un Dungeon Master (DM)",
        ],
      },
      {
        type: "heading3",
        content: "Creando tu primer personaje",
      },
      {
        type: "paragraph",
        content: "El proceso de creación de personaje en D&D 5e es más simple de lo que parece:",
      },
      {
        type: "list",
        content: [
          "Elige una raza (humano, elfo, enano, etc.)",
          "Selecciona una clase (guerrero, mago, pícaro, etc.)",
          "Determina tus estadísticas",
          "Escoge habilidades y equipo inicial",
          "Desarrolla la personalidad de tu personaje",
        ],
      },
      {
        type: "heading3",
        content: "Mecánicas básicas",
      },
      {
        type: "paragraph",
        content: "D&D usa principalmente un dado de 20 caras (d20) para resolver acciones. La fórmula básica es:",
      },
      {
        type: "blockquote",
        content: "d20 + modificador de habilidad + bonificador de competencia = resultado total",
      },
      {
        type: "heading3",
        content: "Consejos para nuevos jugadores",
      },
      {
        type: "list",
        content: [
          "No tengas miedo de hacer preguntas",
          "La interpretación es más importante que las reglas perfectas",
          "Colabora con tu equipo",
          "¡Diviértete y sé creativo!",
        ],
      },
      {
        type: "paragraph",
        content:
          "Recuerda: el objetivo principal es pasar un buen rato con amigos mientras creas historias épicas juntos.",
      },
    ],
    category: "tutoriales",
    date: "2025-04-15",
    image: "/dfaae8e1ab5150d1ad7dfc2e08f9f824.jpg",
    author: "Ana García",
  },
]

export const categories = [
  { id: "estrategia", name: "Estrategia", color: "bg-brand-500" },
  { id: "familia", name: "Familia", color: "bg-blue-500" },
  { id: "digital", name: "Digital", color: "bg-accent-500" },
  { id: "historia", name: "Historia", color: "bg-green-500" },
  { id: "reseñas", name: "Reseñas", color: "bg-purple-500" },
  { id: "tutoriales", name: "Tutoriales", color: "bg-indigo-500" },
]
