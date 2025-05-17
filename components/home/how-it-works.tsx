"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect",
      description: "Plug-and-play connection to your vehicle's existing systems.",
      time: "10 minutes",
    },
    {
      number: 2,
      title: "Calibrate",
      description: "Quick automated calibration for optimal performance.",
      time: "5 minutes",
    },
    {
      number: 3,
      title: "Attach",
      description: "Mount the LiDAR and camera systems for environmental awareness.",
      time: "5 minutes",
    },
    {
      number: 4,
      title: "Drive",
      description: "Enjoy autonomous driving with safety and confidence.",
      time: "Immediately",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our simple 30-minute installation process makes any vehicle autonomous without permanent modifications.
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-sm font-medium text-primary">{step.time}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <Image
            src="/installation-process.png"
            alt="Installation Process"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
