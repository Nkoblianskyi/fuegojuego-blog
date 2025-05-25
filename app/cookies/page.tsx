import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Settings, BarChart3, Shield, Info, Trash2 } from "lucide-react"

export const metadata = {
  title: "Política de Cookies - FuegoJuego Blog",
  description: "Información sobre el uso de cookies en FuegoJuego Blog y cómo gestionar tus preferencias.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full">
              <Cookie className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información sobre cómo utilizamos las cookies en nuestro sitio web
          </p>
          <div className="mt-4 text-sm text-gray-500">Última actualización: 25 de mayo de 2025</div>
        </div>

        <div className="space-y-8">
          {/* ¿Qué son las cookies? */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Info className="h-6 w-6 text-blue-600" />
                <span>¿Qué son las Cookies?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                web. Nos ayudan a mejorar tu experiencia de navegación recordando tus preferencias y proporcionando
                funcionalidades personalizadas.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">¿Cómo funcionan?</h4>
                <p className="text-blue-700 text-sm">
                  Cuando visitas nuestro sitio, tu navegador descarga estas cookies y las almacena. En visitas
                  posteriores, las cookies permiten que el sitio "recuerde" información sobre ti.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-purple-600" />
                <span>Tipos de Cookies que Utilizamos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Cookies esenciales */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Cookies Esenciales</h3>
                  </div>
                  <p className="text-green-700 text-sm mb-3">
                    Necesarias para el funcionamiento básico del sitio web. No pueden ser desactivadas.
                  </p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Cookies de sesión</li>
                    <li>• Cookies de seguridad</li>
                    <li>• Cookies de funcionalidad básica</li>
                  </ul>
                </div>

                {/* Cookies de rendimiento */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Cookies de Rendimiento</h3>
                  </div>
                  <p className="text-blue-700 text-sm mb-3">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                  </p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Métricas de páginas visitadas</li>
                    <li>• Tiempo de permanencia</li>
                  </ul>
                </div>

                {/* Cookies de funcionalidad */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Settings className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-purple-800">Cookies de Funcionalidad</h3>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    Permiten que el sitio web recuerde las elecciones que haces.
                  </p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Preferencias de idioma</li>
                    <li>• Configuración de región</li>
                    <li>• Preferencias de visualización</li>
                  </ul>
                </div>

                {/* Cookies de marketing */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Cookie className="h-5 w-5 text-orange-600" />
                    <h3 className="font-semibold text-orange-800">Cookies de Marketing</h3>
                  </div>
                  <p className="text-orange-700 text-sm mb-3">
                    Utilizadas para mostrar anuncios relevantes y medir su efectividad.
                  </p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Google Ads</li>
                    <li>• Seguimiento de conversiones</li>
                    <li>• Personalización de anuncios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies de terceros */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-brand-600" />
                <span>Cookies de Terceros</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Nos ayuda a analizar el tráfico del sitio web y entender el comportamiento de los usuarios.
                  </p>
                  <div className="text-xs text-gray-500">Cookies: _ga, _ga_*, _gid, _gat</div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google AdSense</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Permite mostrar anuncios relevantes y generar ingresos para mantener el sitio.
                  </p>
                  <div className="text-xs text-gray-500">Cookies: _gcl_*, ads-id, DSID</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gestión de cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Trash2 className="h-6 w-6 text-red-600" />
                <span>Gestión de Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Puedes controlar y/o eliminar las cookies como desees. Tienes varias opciones:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Configuración del Navegador</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span>Chrome: Configuración → Privacidad y seguridad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span>Firefox: Opciones → Privacidad y seguridad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span>Safari: Preferencias → Privacidad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span>Edge: Configuración → Cookies y permisos</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Herramientas de Exclusión</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Google Analytics Opt-out</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Google Ads Settings</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Your Online Choices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Network Advertising Initiative</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Nota Importante:</strong> Si eliges rechazar o eliminar las cookies, algunas funcionalidades
                  de nuestro sitio web pueden no funcionar correctamente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actualizaciones */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Info className="h-6 w-6 text-orange-600" />
                <span>Actualizaciones de esta Política</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o
                por razones legales y regulatorias.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-2">
                  <p>
                    <strong>Contacto sobre Cookies:</strong> info@fuegojuegoblog.com
                  </p>
                  <p>
                    <strong>Última revisión:</strong> 25 de mayo de 2025
                  </p>
                  <p>
                    <strong>Próxima revisión:</strong> 25 de mayo de 2026
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
