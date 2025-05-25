import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { funFacts } from "@/data/games"

export default function FunFactsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">¿Sabías que...?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-brand-600">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
