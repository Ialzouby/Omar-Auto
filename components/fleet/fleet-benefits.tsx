"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, BarChart, Shield } from "lucide-react"

export default function FleetBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Reduce Crash Downtime",
      description: "Minimize vehicle downtime due to accidents, keeping your fleet operational and productive.",
    },
    {
      icon: BarChart,
      title: "Monitor Vehicle Usage",
      description: "Real-time telemetry provides insights into vehicle usage, location, and performance.",
    },
    {
      icon: DollarSign,
      title: "Lower Insurance Premiums",
      description: "Reduce insurance costs with our proven safety technology that minimizes accident risk.",
    },
    {
      icon: Shield,
      title: "Enhance Driver Safety",
      description: "Protect your drivers and other road users with advanced autonomous safety features.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Fleet Operators Love Omar</h2>
          <p className="text-lg text-muted-foreground">
            Our technology offers unique benefits for fleet operators, improving safety, efficiency, and profitability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
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
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
