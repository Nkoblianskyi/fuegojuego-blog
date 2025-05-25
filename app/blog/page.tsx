import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts, categories } from "@/data/posts"
import { Clock, User } from "lucide-react"

export const metadata = {
  title: "Blog - FuegoJuego Blog",
  description:
    "Descubre artículos sobre estrategias de juego, reseñas y consejos para mejorar tu experiencia con juegos de mesa y digitales.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog de FuegoJuego</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre estrategias, reseñas y consejos para mejorar tu experiencia con juegos de mesa y digitales
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Filtrar por tema:</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Todos
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
                className={`cursor-pointer hover:bg-gray-100 ${category.color} text-white border-transparent`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Lista de artículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const category = categories.find((cat) => cat.id === post.category)

            return (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  {category && (
                    <Badge className={`absolute top-4 left-4 ${category.color} text-white border-transparent`}>
                      {category.name}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-red-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.preview}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/blog/${post.id}`}>Leer más</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
