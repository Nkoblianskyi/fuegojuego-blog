import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Award } from "lucide-react"

export const metadata = {
  title: "Sobre Nosotros - FuegoJuego Blog",
  description: "Conoce al equipo detrás de FuegoJuego Blog y nuestra pasión por los juegos de mesa y digitales.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Lucía Martínez",
      role: "Editora Principal",
      image: "/placeholder.svg?height=300&width=300&query=professional woman editor",
      description: "Especialista en juegos de estrategia con más de 10 años de experiencia en el sector.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Experto en Juegos de Mesa",
      image: "/placeholder.svg?height=300&width=300&query=professional man board games expert",
      description: "Diseñador de juegos y consultor, apasionado por las mecánicas innovadoras.",
    },
    {
      name: "Ana García",
      role: "Especialista en Gaming Digital",
      image: "/placeholder.svg?height=300&width=300&query=professional woman gaming specialist",
      description: "Desarrolladora de videojuegos indie y crítica especializada en narrativa interactiva.",
    },
    {
      name: "Miguel Torres",
      role: "Historiador de Juegos",
      image: "/placeholder.svg?height=300&width=300&query=professional man game historian",
      description: "Investigador especializado en la evolución histórica de los juegos y su impacto cultural.",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Pasión",
      description: "Amamos genuinamente los juegos y queremos compartir esa pasión contigo.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Comunidad",
      description: "Creemos en el poder de los juegos para unir a las personas y crear vínculos.",
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-600" />,
      title: "Calidad",
      description: "Nos comprometemos a ofrecer contenido de alta calidad, bien investigado y útil.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Experiencia",
      description: "Nuestro equipo combina años de experiencia en diseño, desarrollo y crítica de juegos.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Sobre FuegoJuego Blog</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos un equipo de apasionados por los juegos que cree firmemente en su poder para educar, entretener y
            conectar a las personas. Desde 2020, hemos estado compartiendo nuestro conocimiento y amor por los juegos de
            mesa y digitales con una comunidad creciente de jugadores de todas las edades.
          </p>
        </div>

        {/* Nuestra Historia */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FuegoJuego Blog nació de una simple observación: los juegos tienen el poder único de transformar
                  momentos ordinarios en experiencias extraordinarias. Ya sea una noche familiar jugando al Monopoly o
                  una sesión épica de un RPG digital, los juegos crean recuerdos que duran toda la vida.
                </p>
                <p>
                  Fundado en Madrid en 2020, comenzamos como un pequeño blog personal que documentaba nuestras
                  experiencias con diferentes juegos. Con el tiempo, nos dimos cuenta de que había una necesidad real de
                  contenido de calidad en español sobre el mundo del gaming.
                </p>
                <p>
                  Hoy, somos una referencia en el mundo hispanohablante para todo lo relacionado con juegos de mesa y
                  digitales, con miles de lectores que confían en nuestras reseñas, guías y consejos.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/cb959599654ea89f0d9b1b4875e09447.jpg"
                alt="Equipo de FuegoJuego trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Conoce a Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Democratizar el acceso al conocimiento sobre juegos, ayudando a las personas a descubrir nuevas formas de
              diversión, aprendizaje y conexión social. Creemos que cada persona merece encontrar el juego perfecto para
              ella, y estamos aquí para hacer que ese descubrimiento sea más fácil y emocionante.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
