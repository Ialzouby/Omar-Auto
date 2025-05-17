"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect System",
      description: "Simple plug-and-play connection to your vehicle's existing systems.",
      time: "10 minutes",
    },
    {
      number: 2,
      title: "Attach Sensors",
      description: "Mount the LiDAR and camera systems for comprehensive environmental awareness.",
      time: "5 minutes",
    },
    {
      number: 3,
      title: "Calibration",
      description: "Quick automated calibration to ensure optimal performance in all conditions.",
      time: "5 minutes",
    },
    {
      number: 4,
      title: "System Check",
      description: "Final verification to ensure all systems are functioning properly.",
      time: "10 minutes",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our simple 30-minute installation process makes any vehicle autonomous without permanent modifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/installation-process.jpg" alt="Installation Process" fill className="object-cover" />
          </div>

          <div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-sm font-medium text-primary">{step.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium">
            Total Installation Time: <span className="text-primary font-bold">30 minutes</span>
          </p>
        </div>
      </div>
    </section>
  )
}
