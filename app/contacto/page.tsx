"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Симуляція відправки форми
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccessDialog(true)

    // Очищення форми
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }

  const contactFaqs = [
    {
      question: "¿Cuánto tiempo tardan en responder?",
      answer: "Normalmente respondemos a todos los mensajes en un plazo de 24-48 horas durante días laborables.",
    },
    {
      question: "¿Puedo enviar propuestas de colaboración?",
      answer:
        "¡Por supuesto! Nos encanta colaborar con desarrolladores, tiendas especializadas y creadores de contenido. Envíanos tu propuesta detallada.",
    },
    {
      question: "¿Aceptan juegos para reseñar?",
      answer:
        "Sí, evaluamos propuestas de reseñas. Envía información sobre tu juego, incluyendo descripción, mecánicas y materiales de prensa.",
    },
    {
      question: "¿Ofrecen servicios de consultoría?",
      answer:
        "Ofrecemos consultoría especializada en diseño de juegos, estrategias de marketing para juegos y análisis de mercado. Contacta para más detalles.",
    },
    {
      question: "¿Puedo sugerir temas para artículos?",
      answer:
        "¡Absolutamente! Valoramos las sugerencias de nuestra comunidad. Envíanos tus ideas y las consideraremos para futuros artículos.",
    },
  ]

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contacta con Nosotros</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes alguna pregunta sobre juegos? ¿Quieres colaborar con nosotros? Estamos aquí para ayudarte.
            </p>
          </div>

          {/* Contact Form and Contact Info - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
            {/* Formulario de contacto */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required
                      disabled={isSubmitting}
                      className="resize-none h-32"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de contacto */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@fuegojuegoblog.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24-48 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+34 671 166 892</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      Calle de Alcalá, 75
                      <br />
                      28009 Madrid, Spain
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario de atención</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 10:00 - 14:00
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section - Full Width Below */}
          <Card>
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>
                Respuestas rápidas a las consultas más comunes sobre contacto y colaboraciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-semibold text-gray-900">¡Mensaje enviado!</DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible, normalmente en
              24-48 horas.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full bg-brand-600 hover:bg-brand-700">
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
