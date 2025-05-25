import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts, categories, type PostContent } from "@/data/posts"
import { Clock, User, ArrowLeft } from "lucide-react"
import { ArticleSchema } from "@/components/seo/article-schema"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado - FuegoJuego Blog",
    }
  }

  const category = categories.find((cat) => cat.id === post.category)
  const url = `https://fuegojuegoblog.com/blog/${post.id}`

  return {
    title: post.title,
    description: post.preview,
    keywords: [post.category, "juegos", "gaming", "estrategia", "reseñas", "tutoriales", category?.name || ""],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.preview,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: category?.name,
      url: url,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.preview,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }))
}

// Компонент для безопасного рендеринга контента блога
function BlogContent({ content }: { content: PostContent[] }) {
  return (
    <div className="text-gray-700 leading-relaxed">
      {content.map((item, index) => {
        switch (item.type) {
          case "heading2":
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {item.content as string}
              </h2>
            )

          case "heading3":
            return (
              <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {item.content as string}
              </h3>
            )

          case "paragraph":
            return (
              <p key={index} className="mb-4 text-gray-700">
                {item.content as string}
              </p>
            )

          case "list":
            return (
              <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                {(item.content as string[]).map((listItem, listIndex) => (
                  <li key={listIndex} className="text-gray-700">
                    {listItem}
                  </li>
                ))}
              </ul>
            )

          case "blockquote":
            return (
              <blockquote key={index} className="border-l-4 border-brand-500 pl-4 italic text-gray-600 my-6">
                {item.content as string}
              </blockquote>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const category = categories.find((cat) => cat.id === post.category)
  const relatedPosts = posts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)
  const url = `https://fuegojuegoblog.com/blog/${post.id}`

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.preview}
        author={post.author}
        datePublished={post.date}
        image={post.image}
        url={url}
        category={category?.name || post.category}
      />

      <article className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navegación */}
          <nav className="mb-8" aria-label="Navegación del artículo">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </Button>
          </nav>

          {/* Imagen principal */}
          <div className="relative h-64 lg:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Metadatos del artículo */}
          <header className="mb-8">
            {category && (
              <Badge className={`${category.color} text-white border-transparent mb-4`}>{category.name}</Badge>
            )}

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span itemProp="author">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none mb-12" itemProp="articleBody">
            <BlogContent content={post.content} />
          </div>

          {/* Artículos relacionados */}
          {relatedPosts.length > 0 && (
            <aside className="border-t pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Te puede interesar</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-32">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        <Link href={`/blog/${relatedPost.id}`} className="hover:text-brand-600 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.preview}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>
    </>
  )
}
