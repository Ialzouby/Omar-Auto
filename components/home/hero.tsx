"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
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
                Affordable. Safe. Human-centered autonomy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-md" asChild>
                <Link href="/waitlist">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-md" onClick={() => setVideoOpen(true)}>
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/autonomous-vehicle-hero.png"
              alt="Omar Autonomous Vehicle Technology"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-medium">Retrofitting any vehicle with autonomous capabilities</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
