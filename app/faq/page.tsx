import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Preguntas Frecuentes - FuegoJuego Blog",
  description: "Encuentra respuestas a las preguntas más comunes sobre juegos de mesa y digitales en nuestro FAQ.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "¿Cómo elegir el juego de mesa perfecto para mi familia?",
      answer:
        "Considera la edad de los jugadores, el número de participantes, la duración deseada y los intereses del grupo. Para familias con niños pequeños, recomendamos juegos cooperativos o de mecánicas simples. Para grupos más experimentados, los juegos de estrategia pueden ser ideales.",
    },
    {
      question: "¿Los videojuegos son realmente beneficiosos para los niños?",
      answer:
        "Sí, cuando se usan de manera equilibrada. Los videojuegos pueden mejorar la coordinación, el pensamiento estratégico, la resolución de problemas y las habilidades sociales. La clave está en elegir juegos apropiados para la edad y establecer límites de tiempo saludables.",
    },
    {
      question: "¿Cuánto tiempo debería dedicar a los juegos?",
      answer:
        "No hay una respuesta única, pero recomendamos equilibrio. Para niños, 1-2 horas diarias de videojuegos es razonable. Los juegos de mesa pueden jugarse sin límites estrictos ya que fomentan la interacción social directa.",
    },
    {
      question: "¿Dónde puedo comprar los juegos que reseñan?",
      answer:
        "Recomendamos tiendas especializadas locales para juegos de mesa, ya que ofrecen asesoramiento personalizado. Para videojuegos, plataformas digitales como Steam, PlayStation Store o Nintendo eShop son opciones confiables.",
    },
    {
      question: "¿Organizan eventos o torneos?",
      answer:
        "Actualmente no organizamos eventos propios, pero colaboramos con tiendas y comunidades locales. Síguenos en nuestras redes sociales para estar al tanto de eventos recomendados en tu área.",
    },
    {
      question: "¿Puedo enviar mi juego para que lo reseñen?",
      answer:
        "Sí, aceptamos propuestas de desarrolladores y editores. Envía un email a info@fuegojuegoblog.com con información sobre tu juego. Evaluamos cada propuesta, aunque no podemos garantizar una reseña.",
    },
    {
      question: "¿Cómo puedo colaborar con el blog?",
      answer:
        "Buscamos colaboradores apasionados por los juegos. Si tienes experiencia escribiendo sobre gaming, diseño de juegos o eres un jugador experimentado, contáctanos. Valoramos tanto la experiencia como la pasión genuina.",
    },
    {
      question: "¿Sus reseñas son imparciales?",
      answer:
        "Absolutamente. Mantenemos total independencia editorial. Nunca aceptamos pagos por reseñas positivas y siempre declaramos si hemos recibido una copia gratuita del juego. Nuestro compromiso es con nuestros lectores, no con las empresas.",
    },
    {
      question: "¿Qué diferencia a FuegoJuego de otros blogs de gaming?",
      answer:
        "Nos enfocamos tanto en juegos de mesa como digitales, ofreciendo una perspectiva integral del gaming. Además, todo nuestro contenido está en español y adaptado a la cultura hispanohablante, con recomendaciones específicas para nuestro mercado.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las dudas más comunes sobre juegos y nuestro blog
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>¿Tienes alguna pregunta?</CardTitle>
            <CardDescription>
              Aquí encontrarás respuestas a las consultas más frecuentes de nuestra comunidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-gray-600 mb-6">
                Si tienes alguna pregunta que no está en esta lista, no dudes en contactarnos. Estaremos encantados de
                ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Contactar
                </a>
                <a
                  href="mailto:info@fuegojuegoblog.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Enviar Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
