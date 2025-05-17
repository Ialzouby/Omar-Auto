"use client"

import { motion } from "framer-motion"

export default function VisionStatement() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Omar Autonomous</h1>
          <p className="text-2xl font-light text-muted-foreground">
            "Affordable autonomy for everyone. Empowerment through independence."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
