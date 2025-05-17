"use client"

import { motion } from "framer-motion"

export default function WaitlistHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Waitlist</h1>
          <p className="text-lg text-muted-foreground">
            Be among the first to experience Omar Autonomous technology. Join our waitlist to stay informed about our
            launch and get priority access when we're ready.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
