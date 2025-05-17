"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

export default function ProductDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="product" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product Demo</h2>
          <p className="text-lg text-muted-foreground">
            See how our autonomous technology transforms any vehicle in just 30 minutes, providing safety and
            convenience for drivers worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
        >
          <Image
            src="/product-demo.jpg"
            alt="Omar Autonomous Product Demo"
            width={1200}
            height={675}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="rounded-full w-16 h-16 flex items-center justify-center" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect System</h3>
            <p className="text-muted-foreground">Simple plug-and-play connection to your vehicle's existing systems.</p>
            <p className="text-sm font-medium text-primary mt-2">10 minutes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Attach Sensors</h3>
            <p className="text-muted-foreground">
              Mount the LiDAR and camera systems for comprehensive environmental awareness.
            </p>
            <p className="text-sm font-medium text-primary mt-2">5 minutes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Calibration</h3>
            <p className="text-muted-foreground">
              Quick automated calibration to ensure optimal performance in all conditions.
            </p>
            <p className="text-sm font-medium text-primary mt-2">5 minutes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">System Check</h3>
            <p className="text-muted-foreground">Final verification to ensure all systems are functioning properly.</p>
            <p className="text-sm font-medium text-primary mt-2">10 minutes</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
