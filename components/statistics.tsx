import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "One Billion Vehicles",
    description:
      "There are 1.6 Billion vehicles in the World. In the USA, there are 283 million vehicles, including pickup trucks, and vans. OmarAI works seamlessly to convert these stock vehicles into safe autonomous vehicles.",
  },
  {
    title: "Fatalities",
    description:
      "According to WHO, every year 1 million humans lose their lives in accidents, and 50 million are injured. Omar helps prevents crashes and accidents from happening in the first place on the vehicles already on the road.",
  },
  {
    title: "Average Vehicle Age in the USA is 12.5 Years",
    description:
      "Average age of vehicle in USA is 12.5 years, in Europe 13.5 years. We are keeping vehicles for longer and longer. OmarAI works on old and new vehicles and trucks.",
  },
]

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Statistics</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
