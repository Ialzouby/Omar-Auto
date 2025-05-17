"use client"

import { motion } from "framer-motion"

export default function TeamHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-lg text-muted-foreground">
            Meet the exceptional individuals behind Omar Autonomous. Our team combines decades of expertise in AI,
            engineering, finance, design, and legal to revolutionize autonomous vehicle technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
