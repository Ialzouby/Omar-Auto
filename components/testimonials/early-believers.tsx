"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function EarlyBelievers() {
  const believers = [
    {
      name: "Jay",
      role: "Musician",
      quote:
        "That is awesome about your autonomous vehicle! Your ideas are the kind that actually help mankind without sacrificing environment or ethics.",
      image: "/jay-musician.png",
    },
    {
      name: "Anupa",
      role: "Attorney",
      quote:
        "I would install your system in a heartbeat to save that time by working on something while your system drives the car.",
      image: "/anupa-attorney.png",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Early Believers</h2>
          <p className="text-lg text-muted-foreground">
            Meet some of our early supporters who recognize the potential of Omar Autonomous technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {believers.map((believer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={believer.image || "/placeholder.svg"}
                        alt={believer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{believer.name}</h3>
                      <p className="text-primary font-medium mb-4">{believer.role}</p>
                      <p className="text-muted-foreground italic">"{believer.quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
