"use client"

import { motion } from "framer-motion"

export default function TestimonialsHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-lg text-muted-foreground">
            Hear what our customers and supporters say about Omar Autonomous technology and how it's changing the way
            they think about driving.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
