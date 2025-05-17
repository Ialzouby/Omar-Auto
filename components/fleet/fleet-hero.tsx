"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FleetHero() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fleet Solutions</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your fleet with Omar Autonomous technology. Reduce costs, improve safety, and increase
              efficiency with our 30-minute installation solution.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our technology works with any vehicle in your fleet, regardless of age or model, making it the perfect
              solution for mixed fleets.
            </p>
            <Button size="lg" asChild>
              <Link href="#fleet-contact">
                Book a Fleet Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/fleet-hero.png" alt="Fleet of Autonomous Vehicles" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
