"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Car, DollarSign, BarChart, Map, Clock } from "lucide-react"

export default function ProductFeatures() {
  const features = [
    {
      icon: Car,
      title: "Universal Compatibility",
      description:
        "Works with any vehicle type, from passenger cars to vans and heavy-duty pickup trucks, regardless of age.",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description:
        "Reduces cost of ownership by removing the cause of crashes - inattentiveness or speed, leading to lower insurance premiums.",
    },
    {
      icon: BarChart,
      title: "Fleet Management",
      description:
        "Telemetry to see where your fleet is and how it is being used, improving operational efficiency and safety.",
    },
    {
      icon: Map,
      title: "On/Off Road Capability",
      description:
        "Works on and off road through innovative data sensor integration, adapting to various terrains and conditions.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description:
        "Installs in 30 minutes without special tools, making it accessible to everyone without requiring technical expertise.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
          <p className="text-lg text-muted-foreground">
            Omar Autonomous offers unique features that set our technology apart from traditional autonomous solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
