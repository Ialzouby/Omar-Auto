"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Vision() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Affordable autonomous capabilities for every vehicle will extend independence and empowerment to every
              person, shaping brighter futures.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that autonomous technology should not be limited to new, expensive vehicles. By making our
              solution compatible with existing vehicles, we can democratize access to this life-saving technology and
              make roads safer for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/vision-image.jpg" alt="Omar Autonomous Vision" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
