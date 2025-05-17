"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Omar Autonomous has developed revolutionary technology that can make any vehicle autonomous in just 30
              minutes, without special tools or permanent modifications.
            </p>
            <p className="text-lg text-muted-foreground">
              Our system combines advanced LiDAR, AI, and GPS technology to create a safe, reliable autonomous driving
              experience that works with any vehicle, regardless of age or model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/product-hero.jpg" alt="Omar Autonomous Product" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
