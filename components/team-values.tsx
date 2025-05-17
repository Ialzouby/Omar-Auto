"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Shield, Wrench } from "lucide-react"

export default function TeamValues() {
  const values = [
    {
      icon: DollarSign,
      title: "Affordable",
      description:
        "OmarAI puts money back into your pocket by reducing insurance costs for both people and businesses - no crash, no premium increases.",
    },
    {
      icon: Users,
      title: "For Humans By Humans",
      description: "Everything we do is for Humans. We operate from our most important principle - For Humans.",
    },
    {
      icon: Shield,
      title: "Safe",
      description:
        "Safety first. Crashes are preventable. Our technology is designed with multiple redundancies to ensure the highest level of safety.",
    },
    {
      icon: Wrench,
      title: "Easy to Install",
      description:
        "Great technology is useless if it can't be used. OmarAI works without the need of special tools or skillset.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            These principles guide everything we do, from product development to how we work together as a team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
