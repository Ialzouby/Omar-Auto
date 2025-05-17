"use client"

import { motion } from "framer-motion"

export default function CareersHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
          <p className="text-lg text-muted-foreground">
            Join the Omar Autonomous team and help shape the future of autonomous driving. We're looking for passionate
            individuals who want to make a difference in the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
