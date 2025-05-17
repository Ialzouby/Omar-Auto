"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technology</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Omar Autonomous combines cutting-edge technologies to create a safe, reliable autonomous driving
              experience that works with any vehicle, regardless of age or model.
            </p>
            <p className="text-lg text-muted-foreground">
              Our unique approach uses LiDAR, AI, and GPS technology to provide superior perception and decision-making
              capabilities in all driving conditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/tech-hero.png" alt="Omar Autonomous Technology" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
