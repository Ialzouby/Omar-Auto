"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStory() {
  const timeline = [
    {
      year: "2023",
      title: "Founding",
      description: "Omar Autonomous was founded with a vision to make autonomous driving accessible to everyone.",
    },
    {
      year: "2024",
      title: "Prototypes",
      description: "Development of first working prototypes and successful test drives.",
    },
    {
      year: "2025",
      title: "Launch",
      description: "Commercial launch of Omar Autonomous technology to the public.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Omar Autonomous was founded by Omar Mukhtar, an AI pioneer who built his first AI product in 2004, decades
              before mainstream adoption. His vision was to create an autonomous driving solution that could work with
              any vehicle, making this life-saving technology accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground">
              After years of development and testing, Omar has created a proven working autonomous product that's safer
              than existing solutions, with the ability to be installed in just 30 minutes on any vehicle.
            </p>

            <div className="mt-12 space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
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
            <Image src="/omar-founder.png" alt="Omar Mukhtar, Founder" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
