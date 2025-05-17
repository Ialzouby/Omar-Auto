"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Car, DollarSign, BarChart, Zap, Cpu, Navigation, Shield, Map, Clock } from "lucide-react"

export default function Benefits() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="benefits" className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Unique Benefits</h2>
          <p className="text-lg text-muted-foreground">
            Omar Autonomous offers unparalleled advantages that set our technology apart from traditional autonomous
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fits on Stock Vehicle</h3>
                <p className="text-muted-foreground">
                  Installs on passenger cars, vans, and heavy-duty pickup trucks without any permanent modifications to
                  your vehicle.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Puts Cash Back in Your Pocket</h3>
                <p className="text-muted-foreground">
                  Reduces cost of ownership by removing the cause of crashes - inattentiveness or speed, leading to
                  lower insurance premiums.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fleet Management</h3>
                <p className="text-muted-foreground">
                  Telemetry to see where your fleet is and how it is being used. No need for "Call this number to report
                  my driving."
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LiDAR</h3>
                <p className="text-muted-foreground">
                  Maths is good, but Physics is great. LiDAR ensures safety for you and your loved ones with precise
                  environmental mapping.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground">
                  AI to augment and add to the experience, continuously learning and improving to handle complex driving
                  scenarios.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Navigation className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">GNSS + INS</h3>
                <p className="text-muted-foreground">
                  GPS helps localize and augments the system. Redundancies across classes of system for reliable
                  operation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety</h3>
                <p className="text-muted-foreground">
                  LiDAR ensures safety for you and your loved ones with superior object detection in all lighting and
                  weather conditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">On / Off Road</h3>
                <p className="text-muted-foreground">
                  Works on and off road through use of innovative data sensor integration, adapting to various terrains
                  and conditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.9 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Installs in 30 Minutes</h3>
                <p className="text-muted-foreground">
                  Installs in 30 minutes without special tools, making it accessible to everyone without requiring
                  technical expertise.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
