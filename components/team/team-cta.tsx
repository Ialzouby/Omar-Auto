"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamCTA() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're looking for passionate individuals who want to make a difference in the world of autonomous vehicles.
            If you're excited about our mission to make any vehicle autonomous in 30 minutes, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:careers@omarautonomous.com">Contact Recruiting</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
