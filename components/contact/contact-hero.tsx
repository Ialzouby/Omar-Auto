"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about Omar Autonomous technology? Get in touch with our team and we'll be happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
