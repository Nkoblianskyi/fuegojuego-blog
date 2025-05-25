import { Card, CardContent } from "@/components/ui/card"
import { boardGamesBenefits, digitalGamesBenefits } from "@/data/games"
import { Brain, Users, Target, Zap, Palette, Globe } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">¿Por qué amamos los juegos?</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Juegos de mesa */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-600">Juegos de Mesa</h3>
            <div className="space-y-4">
              {boardGamesBenefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-brand-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {index === 0 && <Brain className="h-6 w-6 text-brand-600" />}
                        {index === 1 && <Users className="h-6 w-6 text-brand-600" />}
                        {index === 2 && <Target className="h-6 w-6 text-brand-600" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Juegos digitales */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Juegos Digitales</h3>
            <div className="space-y-4">
              {digitalGamesBenefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {index === 0 && <Zap className="h-6 w-6 text-blue-600" />}
                        {index === 1 && <Palette className="h-6 w-6 text-blue-600" />}
                        {index === 2 && <Globe className="h-6 w-6 text-blue-600" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
