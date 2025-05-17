"use client"

import { motion } from "framer-motion"
import { Zap, Cpu, Navigation, Shield } from "lucide-react"
import Image from "next/image"

export default function CoreStack() {
  const technologies = [
    {
      icon: Zap,
      title: "LiDAR",
      description:
        "Our advanced LiDAR system provides precise environmental mapping in all lighting and weather conditions.",
    },
    {
      icon: Cpu,
      title: "AI Decision Engine",
      description: "Cutting-edge AI continuously learns and adapts to different driving conditions and environments.",
    },
    {
      icon: Navigation,
      title: "GNSS/INS",
      description:
        "GPS helps localize and augments the system with redundancies across classes of systems for reliable operation.",
    },
    {
      icon: Shield,
      title: "Off-Road Readiness",
      description:
        "Our technology works on and off road through innovative data sensor integration, adapting to various terrains.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Stack</h2>
          <p className="text-lg text-muted-foreground">
            Our technology stack combines the best of hardware and software to create a comprehensive autonomous driving
            solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/tech-stack.png" alt="Technology Stack" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center shrink-0">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
