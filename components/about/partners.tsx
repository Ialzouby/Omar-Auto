"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    { id: 1, name: "University Partner", logo: "/university-logo.png" },
    { id: 2, name: "Tech Company", logo: "/tech-company-logo.png" },
    { id: 3, name: "Automotive Partner", logo: "/automotive-logo.png" },
    { id: 4, name: "Research Institution", logo: "/research-logo.png" },
    { id: 5, name: "Investment Partner", logo: "/investment-logo.png" },
  ]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Built By Alumni Of</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
