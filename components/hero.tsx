"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>

      {/* Content */}
      <div className="container relative z-10 pt-10 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Make Any Vehicle <br />
                <span className="text-primary">Autonomous</span> In <br />
                30 Minutes
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Affordable autonomous capabilities for every vehicle will extend independence and empowerment to every
                person, shaping brighter futures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-md" asChild>
                <Link href="#waitlist">
                  Join Wait List <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-md" asChild>
                <Link href="#product">See Product Demo</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">1.6B+</h3>
                <p className="text-sm text-muted-foreground">Vehicles Compatible</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">1M+</h3>
                <p className="text-sm text-muted-foreground">Lives Saved Annually</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">$3T</h3>
                <p className="text-sm text-muted-foreground">Accident Cost Reduction</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">30 min</h3>
                <p className="text-sm text-muted-foreground">Quick Installation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/autonomous-vehicle-hero.jpg"
              alt="Omar Autonomous Vehicle Technology"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Saving Lives, Saving Money</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
