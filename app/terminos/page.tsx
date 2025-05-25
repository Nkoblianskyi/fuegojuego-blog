import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertCircle, Users, Gavel, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Términos y Condiciones - FuegoJuego Blog",
  description: "Términos y condiciones de uso del sitio web FuegoJuego Blog. Lee nuestras políticas y normas.",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Scale className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Normas y condiciones que rigen el uso de FuegoJuego Blog
          </p>
          <div className="mt-4 text-sm text-gray-500">Última actualización: 25 de mayo de 2025</div>
        </div>

        <div className="space-y-8">
          {/* Aceptación de términos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span>Aceptación de los Términos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Al acceder y utilizar FuegoJuego Blog, aceptas estar sujeto a estos términos y condiciones. Si no estás
                de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>Importante:</strong> Estos términos pueden actualizarse periódicamente. Te recomendamos
                  revisarlos regularmente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Uso del sitio web */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-brand-600" />
                <span>Uso del Sitio Web</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uso Permitido</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Leer y compartir nuestro contenido para uso personal</li>
                  <li>Participar en discusiones de manera respetuosa</li>
                  <li>Suscribirte a nuestros boletines informativos</li>
                  <li>Contactarnos para consultas legítimas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uso Prohibido</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Copiar contenido sin autorización</li>
                    <li>Usar el sitio para actividades ilegales</li>
                    <li>Intentar hackear o dañar el sitio</li>
                    <li>Enviar spam o contenido malicioso</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Suplantar identidades</li>
                    <li>Violar derechos de propiedad intelectual</li>
                    <li>Distribuir malware o virus</li>
                    <li>Realizar ingeniería inversa</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Propiedad intelectual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-purple-600" />
                <span>Propiedad Intelectual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Todo el contenido de FuegoJuego Blog, incluyendo textos, imágenes, logos, y diseño, está protegido por
                derechos de autor y otras leyes de propiedad intelectual.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Nuestros Derechos</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Artículos y reseñas originales</li>
                    <li>• Diseño y estructura del sitio</li>
                    <li>• Logo y marca FuegoJuego</li>
                    <li>• Compilación de contenido</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Uso Justo</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Citas con atribución adecuada</li>
                    <li>• Compartir en redes sociales</li>
                    <li>• Uso educativo no comercial</li>
                    <li>• Crítica y comentario</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilidades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Gavel className="h-6 w-6 text-orange-600" />
                <span>Responsabilidades y Limitaciones</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestras Responsabilidades</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Mantener el sitio web funcionando de manera razonable</li>
                  <li>Proteger tu información personal según nuestra política de privacidad</li>
                  <li>Proporcionar contenido de calidad sobre juegos</li>
                  <li>Responder a consultas de manera oportuna</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitaciones de Responsabilidad</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 text-sm">
                    FuegoJuego Blog no se hace responsable de daños indirectos, pérdida de datos, o interrupciones del
                    servicio. El contenido se proporciona "tal como está" sin garantías expresas o implícitas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comentarios y contenido del usuario */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-green-600" />
                <span>Comentarios y Contenido del Usuario</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Al enviar comentarios, mensajes o cualquier contenido a nuestro sitio, aceptas las siguientes
                condiciones:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Contenido Aceptable:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Comentarios constructivos sobre juegos</li>
                    <li>Preguntas y sugerencias relevantes</li>
                    <li>Experiencias personales con juegos</li>
                    <li>Críticas respetuosas y fundamentadas</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Contenido Prohibido:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Lenguaje ofensivo o discriminatorio</li>
                    <li>Spam o contenido promocional</li>
                    <li>Información falsa o engañosa</li>
                    <li>Violación de derechos de terceros</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modificaciones y terminación */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <span>Modificaciones y Terminación</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modificaciones de los Términos</h3>
                <p className="text-gray-600">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                  vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Terminación del Servicio</h3>
                <p className="text-gray-600">
                  Podemos suspender o terminar tu acceso al sitio web si violas estos términos, sin previo aviso y sin
                  responsabilidad hacia ti.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ley aplicable */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Scale className="h-6 w-6 text-blue-600" />
                <span>Ley Aplicable y Jurisdicción</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta en los tribunales
                competentes de Madrid, España.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Contacto Legal:</strong> Para cuestiones legales, contacta con nosotros en
                  info@fuegojuegoblog.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
