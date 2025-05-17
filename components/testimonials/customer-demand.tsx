"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CustomerDemand() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Snapshot: Customer Demand</h2>
          <p className="text-lg text-muted-foreground">
            The demand for Omar Autonomous technology is growing rapidly, with interest from across the country.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Growing Interest</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">15+</p>
                    <p className="text-lg font-medium">Inbound inquiries in 7 days</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">83%</p>
                    <p className="text-lg font-medium">Would install immediately</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">92%</p>
                    <p className="text-lg font-medium">Cite traffic as major pain point</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/waitlist-heatmap.png" alt="Waitlist Interest Heatmap" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium">Waitlist interest across the United States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
