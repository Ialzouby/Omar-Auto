"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, AlertTriangle, Car } from "lucide-react"
import Image from "next/image"

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem: Vehicle Safety Crisis</h2>
          <p className="text-lg text-muted-foreground">Avoidable accidents claim lives & create economic burden</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold text-destructive mb-2">1.3 Million</h3>
                  <p className="text-muted-foreground">Annual deaths from avoidable collisions worldwide</p>
                </CardContent>
              </Card>
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold text-destructive mb-2">24 seconds</h3>
                  <p className="text-muted-foreground">On average, another road user will die every 24 seconds</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Economic Impact</h3>
                <p className="text-3xl font-bold text-primary mb-2">$3 trillion</p>
                <p className="text-muted-foreground">Vehicle collisions cost the global economy $3 trillion annually</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Why Current AV Solutions Fail</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-destructive/10 p-2 mt-1">
                  <DollarSign className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold">Too Expensive</h4>
                  <p className="text-muted-foreground">$500k+ per vehicle makes mass adoption impossible</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-destructive/10 p-2 mt-1">
                  <Clock className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold">Too Slow</h4>
                  <p className="text-muted-foreground">Development cycles take years with minimal progress</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-destructive/10 p-2 mt-1">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold">Not Safe Enough</h4>
                  <p className="text-muted-foreground">Camera-only systems struggle in poor visibility conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-destructive/10 p-2 mt-1">
                  <Car className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold">New Vehicles Only</h4>
                  <p className="text-muted-foreground">Can't upgrade the existing 1.6B vehicles on roads today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution: Universal Autonomy</h2>
          <p className="text-lg text-muted-foreground">Make any vehicle autonomous in 30 minutes</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Universal Compatibility</h4>
                  <p className="text-muted-foreground">Works on any vehicle, any brand, any year, gas or electric</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66-1-1.73" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Advanced Sensor Stack</h4>
                  <p className="text-muted-foreground">LiDAR + AI + INS/GNSS solution for superior perception</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m8 22 4-10 4 10" />
                    <path d="M12 22v-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">All Conditions Performance</h4>
                  <p className="text-muted-foreground">LiDAR sees in darkness, glare, and low-light conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Quick Installation</h4>
                  <p className="text-muted-foreground">30 minute installation time, easily removable with no trace</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/solution-image.jpg" alt="Omar Autonomous Solution" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-primary mb-2">$20k</h3>
              <p className="text-muted-foreground">Price point</p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-primary mb-2">1.6B+</h3>
              <p className="text-muted-foreground">Compatible vehicles</p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-primary mb-2">$70k</h3>
              <p className="text-muted-foreground">Fleet savings per crash</p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-primary mb-2">1M+</h3>
              <p className="text-muted-foreground">Lives saved yearly</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
