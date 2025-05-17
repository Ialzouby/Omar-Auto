"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function ImpactAtScale() {
  const stats = [
    {
      number: "1.6B+",
      label: "Compatible Vehicles",
      description: "Our technology works with any vehicle type, regardless of age or model.",
    },
    {
      number: "$3T",
      label: "Crash Savings",
      description: "Potential global economic impact from reducing vehicle accidents.",
    },
    {
      number: "1M+",
      label: "Lives Saved Yearly",
      description: "Potential annual lives saved by eliminating human error from driving.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact at Scale</h2>
          <p className="text-lg text-muted-foreground">
            Our technology has the potential to transform transportation globally, saving lives and reducing costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <h4 className="text-xl font-semibold mb-4">{stat.label}</h4>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
