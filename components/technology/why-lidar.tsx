"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function WhyLidar() {
  const benefits = [
    {
      title: "Superior Night Vision",
      description: "LiDAR works perfectly in complete darkness, unlike camera-only systems.",
    },
    {
      title: "Glare Resistance",
      description: "Unaffected by sun glare, headlights, or other bright light sources.",
    },
    {
      title: "Precise Distance Measurement",
      description: "Physics-based measurement provides exact distance to objects in real-time.",
    },
    {
      title: "Weather Performance",
      description: "Maintains functionality in rain, fog, and snow conditions.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why LiDAR Wins</h2>
            <blockquote className="text-2xl font-light italic text-muted-foreground mb-8">
              "Math is good. Physics is better."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-6">
              While camera-based systems rely on AI to interpret 2D images, LiDAR directly measures the physical world
              in 3D. This fundamental difference provides superior safety and reliability in all conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/lidar-visualization.png" alt="LiDAR Visualization" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
