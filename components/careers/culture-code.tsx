"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Zap } from "lucide-react"

export default function CultureCode() {
  const values = [
    {
      icon: Users,
      title: "Human-First",
      description: "We put people at the center of everything we do, from our technology to our workplace culture.",
    },
    {
      icon: Shield,
      title: "Fail Fast, Learn Faster",
      description: "We embrace failure as a learning opportunity and move quickly to iterate and improve.",
    },
    {
      icon: Zap,
      title: "Obsess Over Safety",
      description: "Safety is our top priority in everything we build and every decision we make.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Culture Code</h2>
          <p className="text-lg text-muted-foreground">
            Our values guide everything we do, from how we build our technology to how we work together as a team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
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
