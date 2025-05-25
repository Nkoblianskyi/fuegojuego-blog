import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad - FuegoJuego Blog",
  description:
    "Información sobre cómo recopilamos, utilizamos y protegemos tu información personal en FuegoJuego Blog.",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-brand-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En FuegoJuego Blog respetamos tu privacidad y nos comprometemos a proteger tu información personal
          </p>
          <div className="mt-4 text-sm text-gray-500">Última actualización: 25 de mayo de 2025</div>
        </div>

        <div className="space-y-8">
          {/* Información que recopilamos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-brand-600" />
                <span>Información que Recopilamos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Información proporcionada voluntariamente</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Nombre y dirección de correo electrónico cuando nos contactas</li>
                  <li>Comentarios y mensajes que envías a través de nuestros formularios</li>
                  <li>Suscripciones a nuestro boletín informativo</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Información recopilada automáticamente</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                  <li>Tipo de navegador y dispositivo utilizado</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cómo utilizamos la información */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Eye className="h-6 w-6 text-blue-600" />
                <span>Cómo Utilizamos tu Información</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Propósitos principales:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Responder a tus consultas y comentarios</li>
                    <li>Enviar boletines informativos (si te suscribes)</li>
                    <li>Mejorar nuestro contenido y servicios</li>
                    <li>Analizar el tráfico del sitio web</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Nunca utilizamos tu información para:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Vender o alquilar a terceros</li>
                    <li>Spam o marketing no solicitado</li>
                    <li>Perfilado comercial invasivo</li>
                    <li>Compartir sin tu consentimiento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protección de datos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Lock className="h-6 w-6 text-green-600" />
                <span>Protección de tus Datos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Cifrado SSL</h4>
                  <p className="text-sm text-green-700">Todas las comunicaciones están cifradas</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Acceso Limitado</h4>
                  <p className="text-sm text-blue-700">Solo personal autorizado accede a los datos</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Copias de Seguridad</h4>
                  <p className="text-sm text-purple-700">Respaldos seguros y regulares</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tus derechos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <UserCheck className="h-6 w-6 text-accent-600" />
                <span>Tus Derechos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Bajo el Reglamento General de Protección de Datos (RGPD), tienes los siguientes derechos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de acceso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de rectificación</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de supresión</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de portabilidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de oposición</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">Derecho de limitación</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="bg-gradient-to-r from-brand-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <span>Contacto sobre Privacidad</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> info@fuegojuegoblog.com
                  </p>
                  <p>
                    <strong>Dirección:</strong> Calle de Alcalá, 75, 28009 Madrid, Spain
                  </p>
                  <p>
                    <strong>Responsable:</strong> FuegoJuego Blog
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
