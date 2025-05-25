// Анімований кубик для настільних ігор
export function AnimatedDice() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-orange-100">
      <svg width="120" height="120" viewBox="0 0 120 120" className="animate-bounce">
        <defs>
          <linearGradient id="diceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <g className="animate-spin" style={{ transformOrigin: "60px 60px", animationDuration: "3s" }}>
          <rect x="30" y="30" width="60" height="60" rx="8" fill="url(#diceGradient)" />
          <circle cx="45" cy="45" r="4" fill="white" />
          <circle cx="75" cy="45" r="4" fill="white" />
          <circle cx="45" cy="60" r="4" fill="white" />
          <circle cx="75" cy="60" r="4" fill="white" />
          <circle cx="45" cy="75" r="4" fill="white" />
          <circle cx="75" cy="75" r="4" fill="white" />
        </g>
      </svg>
    </div>
  )
}

// Анімовані карти для карткових ігор
export function AnimatedCards() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <g className="animate-pulse">
          <rect
            x="20"
            y="25"
            width="35"
            height="50"
            rx="4"
            fill="url(#cardGradient1)"
            className="animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "2s" }}
          />
          <rect
            x="40"
            y="35"
            width="35"
            height="50"
            rx="4"
            fill="url(#cardGradient2)"
            className="animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
          />
          <rect
            x="60"
            y="45"
            width="35"
            height="50"
            rx="4"
            fill="url(#cardGradient1)"
            className="animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "2s" }}
          />
        </g>
      </svg>
    </div>
  )
}

// Анімований контролер для цифрових ігор
export function AnimatedController() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="controllerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <g className="animate-pulse">
          <ellipse cx="60" cy="60" rx="45" ry="25" fill="url(#controllerGradient)" />
          <circle cx="45" cy="55" r="6" fill="#374151" className="animate-ping" style={{ animationDuration: "2s" }} />
          <circle
            cx="75"
            cy="55"
            r="6"
            fill="#374151"
            className="animate-ping"
            style={{ animationDuration: "2s", animationDelay: "1s" }}
          />
          <rect x="35" y="65" width="8" height="3" fill="#374151" />
          <rect x="77" y="65" width="8" height="3" fill="#374151" />
        </g>
      </svg>
    </div>
  )
}

// Анімовані пікселі для ретро ігор
export function AnimatedPixels() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-red-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="pixelGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="pixelGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <g>
          {[...Array(25)].map((_, i) => {
            const x = (i % 5) * 20 + 20
            const y = Math.floor(i / 5) * 20 + 20
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="15"
                height="15"
                fill={i % 2 === 0 ? "url(#pixelGradient1)" : "url(#pixelGradient2)"}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

// Анімоване колесо фортуни для стратегічних ігор
export function AnimatedChips() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="wheelGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="wheelGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          <linearGradient id="wheelGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <g className="animate-spin" style={{ transformOrigin: "60px 60px", animationDuration: "4s" }}>
          <circle cx="60" cy="60" r="45" fill="url(#wheelGradient1)" />
          <path d="M 60 15 A 45 45 0 0 1 105 60 L 60 60 Z" fill="url(#wheelGradient2)" />
          <path d="M 105 60 A 45 45 0 0 1 60 105 L 60 60 Z" fill="url(#wheelGradient3)" />
          <path d="M 60 105 A 45 45 0 0 1 15 60 L 60 60 Z" fill="url(#wheelGradient1)" />
          <circle cx="60" cy="60" r="8" fill="white" className="animate-pulse" />
        </g>
        <polygon
          points="60,5 65,15 55,15"
          fill="#374151"
          className="animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </svg>
    </div>
  )
}

// Анімовані зірки для рейтингу
export function AnimatedStars() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <g>
          {[...Array(5)].map((_, i) => (
            <polygon
              key={i}
              points="60,20 65,40 85,40 70,55 75,75 60,65 45,75 50,55 35,40 55,40"
              fill="url(#starGradient)"
              className="animate-pulse"
              style={{
                transformOrigin: "60px 60px",
                animationDelay: `${i * 0.2}s`,
                transform: `scale(${0.3 + i * 0.15}) translate(${(i - 2) * 15}px, ${(i - 2) * 10}px)`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

// Анімовані птахи для Wingspan
export function AnimatedBirds() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="birdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M30 40 Q40 30 50 40 Q60 50 70 40 Q80 30 90 40"
            stroke="url(#birdGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <path
            d="M25 60 Q35 50 45 60 Q55 70 65 60 Q75 50 85 60"
            stroke="url(#birdGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          />
          <path
            d="M35 80 Q45 70 55 80 Q65 90 75 80 Q85 70 95 80"
            stroke="url(#birdGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: "2s", animationDelay: "1s" }}
          />
        </g>
      </svg>
    </div>
  )
}

// Анімований меч для Hades
export function AnimatedSword() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-purple-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <g className="animate-spin" style={{ transformOrigin: "60px 60px", animationDuration: "3s" }}>
          <rect x="58" y="20" width="4" height="60" fill="url(#swordGradient)" />
          <rect x="50" y="80" width="20" height="8" fill="#8b5cf6" />
          <circle cx="60" cy="25" r="8" fill="#fbbf24" className="animate-ping" />
        </g>
      </svg>
    </div>
  )
}

// Анімовані азулежу для Azul
export function AnimatedTiles() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="tileGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="tileGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <g>
          {[...Array(16)].map((_, i) => {
            const x = (i % 4) * 25 + 20
            const y = Math.floor(i / 4) * 25 + 20
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="20"
                height="20"
                rx="3"
                fill={i % 2 === 0 ? "url(#tileGradient1)" : "url(#tileGradient2)"}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

// Анімована гора для Celeste
export function AnimatedMountain() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <g>
          <polygon points="60,20 90,80 30,80" fill="url(#mountainGradient)" className="animate-pulse" />
          <circle cx="60" cy="40" r="3" fill="white" className="animate-bounce" style={{ animationDuration: "1.5s" }} />
          <circle
            cx="55"
            cy="50"
            r="2"
            fill="white"
            className="animate-bounce"
            style={{ animationDuration: "1.5s", animationDelay: "0.3s" }}
          />
          <circle
            cx="65"
            cy="55"
            r="2"
            fill="white"
            className="animate-bounce"
            style={{ animationDuration: "1.5s", animationDelay: "0.6s" }}
          />
        </g>
      </svg>
    </div>
  )
}

// Анімований дракон для Gloomhaven
export function AnimatedDragon() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <g className="animate-pulse">
          <ellipse cx="60" cy="60" rx="30" ry="20" fill="url(#dragonGradient)" />
          <polygon
            points="30,50 20,40 25,60"
            fill="url(#dragonGradient)"
            className="animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <polygon
            points="90,50 100,40 95,60"
            fill="url(#dragonGradient)"
            className="animate-bounce"
            style={{ animationDuration: "2s", animationDelay: "1s" }}
          />
          <circle cx="50" cy="55" r="3" fill="#fbbf24" className="animate-ping" />
          <circle cx="70" cy="55" r="3" fill="#fbbf24" className="animate-ping" />
        </g>
      </svg>
    </div>
  )
}

// Анімований лицар для Hollow Knight
export function AnimatedKnight() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-slate-200">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="knightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
        </defs>
        <g className="animate-bounce" style={{ animationDuration: "2s" }}>
          <ellipse cx="60" cy="70" rx="15" ry="25" fill="url(#knightGradient)" />
          <circle cx="60" cy="45" r="18" fill="url(#knightGradient)" />
          <polygon points="60,25 55,35 65,35" fill="#60a5fa" className="animate-pulse" />
          <circle cx="55" cy="40" r="2" fill="#60a5fa" />
          <circle cx="65" cy="40" r="2" fill="#60a5fa" />
        </g>
      </svg>
    </div>
  )
}

// Анімований поїзд для Ticket to Ride
export function AnimatedTrain() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="trainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <g className="animate-pulse">
          <rect x="20" y="50" width="80" height="20" rx="10" fill="url(#trainGradient)" />
          <circle cx="35" cy="75" r="8" fill="#374151" className="animate-spin" style={{ animationDuration: "1s" }} />
          <circle cx="60" cy="75" r="8" fill="#374151" className="animate-spin" style={{ animationDuration: "1s" }} />
          <circle cx="85" cy="75" r="8" fill="#374151" className="animate-spin" style={{ animationDuration: "1s" }} />
          <rect x="15" y="45" width="15" height="15" fill="#dc2626" />
          <polygon points="15,45 10,50 15,55" fill="#dc2626" />
        </g>
      </svg>
    </div>
  )
}

// Анімована ферма для Stardew Valley
export function AnimatedFarm() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-yellow-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="farmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        <g>
          <rect x="40" y="60" width="40" height="30" fill="#8b4513" />
          <polygon points="40,60 60,40 80,60" fill="#dc2626" />
          <rect x="55" y="70" width="10" height="20" fill="#654321" />
          <circle
            cx="30"
            cy="85"
            r="8"
            fill="url(#farmGradient)"
            className="animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <circle
            cx="90"
            cy="85"
            r="8"
            fill="url(#farmGradient)"
            className="animate-bounce"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          />
          <circle cx="60" cy="25" r="12" fill="#fbbf24" className="animate-pulse" />
        </g>
      </svg>
    </div>
  )
}

// Анімовані чудеса для 7 Wonders
export function AnimatedWonders() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="wonderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <g>
          <rect
            x="20"
            y="70"
            width="15"
            height="30"
            fill="url(#wonderGradient)"
            className="animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <rect
            x="40"
            y="60"
            width="15"
            height="40"
            fill="url(#wonderGradient)"
            className="animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <rect
            x="60"
            y="50"
            width="15"
            height="50"
            fill="url(#wonderGradient)"
            className="animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <rect
            x="80"
            y="65"
            width="15"
            height="35"
            fill="url(#wonderGradient)"
            className="animate-pulse"
            style={{ animationDelay: "0.9s" }}
          />
          <polygon points="60,20 70,40 50,40" fill="#fbbf24" className="animate-bounce" />
        </g>
      </svg>
    </div>
  )
}

// Анімоване дерево для Ori
export function AnimatedTree() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <g>
          <rect x="55" y="60" width="10" height="30" fill="#8b4513" />
          <circle cx="60" cy="50" r="20" fill="url(#treeGradient)" className="animate-pulse" />
          <circle cx="45" cy="40" r="8" fill="#60a5fa" className="animate-ping" style={{ animationDuration: "3s" }} />
          <circle
            cx="75"
            cy="45"
            r="6"
            fill="#60a5fa"
            className="animate-ping"
            style={{ animationDuration: "3s", animationDelay: "1s" }}
          />
          <circle
            cx="60"
            cy="35"
            r="4"
            fill="#60a5fa"
            className="animate-ping"
            style={{ animationDuration: "3s", animationDelay: "2s" }}
          />
        </g>
      </svg>
    </div>
  )
}

// Функція для вибору анімації залежно від типу гри
export function getAnimatedIcon(gameId: string, category: "mesa" | "digital") {
  switch (gameId) {
    case "wingspan":
      return <AnimatedBirds />
    case "hades":
      return <AnimatedSword />
    case "azul":
      return <AnimatedTiles />
    case "celeste":
      return <AnimatedMountain />
    case "gloomhaven":
      return <AnimatedDragon />
    case "hollow-knight":
      return <AnimatedKnight />
    case "ticket-to-ride":
      return <AnimatedTrain />
    case "stardew-valley":
      return <AnimatedFarm />
    case "7-wonders":
      return <AnimatedWonders />
    case "ori-blind-forest":
      return <AnimatedTree />
    default:
      return category === "mesa" ? <AnimatedCards /> : <AnimatedController />
  }
}
