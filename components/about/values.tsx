"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Zap, Lightbulb } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Users,
      title: "Human-First",
      description:
        "We design our technology with humans at the center, focusing on enhancing independence and improving quality of life.",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Safety is our top priority. Our technology is designed with multiple redundancies to ensure the highest level of protection.",
    },
    {
      icon: Zap,
      title: "Accessibility",
      description:
        "We believe autonomous technology should be accessible to everyone, regardless of vehicle type or economic status.",
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description:
        "Great technology should be simple to use. Our solution installs in 30 minutes without special tools or expertise.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            These core principles guide everything we do, from product development to customer relationships.
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
                <CardContent className="p-8">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
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
