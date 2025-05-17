"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Cpu, Navigation, Shield } from "lucide-react"

export default function Technology() {
  const technologies = [
    {
      icon: Zap,
      title: "LiDAR Technology",
      description:
        "Our advanced LiDAR system provides precise environmental mapping in all lighting and weather conditions, ensuring safety through physics-based detection rather than just camera-based systems.",
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description:
        "Cutting-edge AI continuously learns and adapts to different driving conditions and environments, making split-second decisions based on comprehensive data analysis.",
    },
    {
      icon: Navigation,
      title: "GNSS + INS",
      description:
        "GPS helps localize and augments the system with redundancies across classes of systems for reliable operation in all conditions.",
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description:
        "Multiple redundant safety systems ensure the highest level of protection, with fail-safes and continuous monitoring to prevent accidents.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
          <p className="text-lg text-muted-foreground">
            Omar Autonomous combines cutting-edge technologies to create a safe, reliable autonomous driving experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
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
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
