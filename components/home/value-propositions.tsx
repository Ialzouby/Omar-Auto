"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Car, Zap, Users } from "lucide-react"

export default function ValuePropositions() {
  const values = [
    {
      icon: Clock,
      title: "30-Min Install",
      description: "Quick installation without special tools or permanent modifications to your vehicle.",
    },
    {
      icon: Car,
      title: "Works on Any Vehicle",
      description: "Compatible with cars, trucks, vans, and SUVs of any age or model.",
    },
    {
      icon: Zap,
      title: "LiDAR + AI Stack",
      description: "Advanced technology that sees in darkness, glare, and all weather conditions.",
    },
    {
      icon: Users,
      title: "For Humans, By Humans",
      description: "Designed with human needs at the center, enhancing independence and safety.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Omar?</h2>
          <p className="text-lg text-muted-foreground">
            Our revolutionary technology makes autonomous driving accessible to everyone, regardless of vehicle type or
            age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
