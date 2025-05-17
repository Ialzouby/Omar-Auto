"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Brain, Car } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductOverview() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product</h2>
          <p className="text-lg text-muted-foreground">
            Omar Autonomous offers revolutionary technology that can make any vehicle autonomous in just 30 minutes,
            without special tools or permanent modifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
                <p className="text-muted-foreground">
                  Our technology prevents accidents by eliminating human error from driving, potentially saving over 1
                  million lives annually.
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
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Installation</h3>
                <p className="text-muted-foreground">
                  Transform any vehicle into an autonomous one in just 30 minutes, without special tools or permanent
                  modifications.
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
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
                <p className="text-muted-foreground">
                  Cutting-edge artificial intelligence that learns and adapts to different driving conditions and
                  environments.
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
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Universal Compatibility</h3>
                <p className="text-muted-foreground">
                  Works with any vehicle type, from passenger cars to vans and heavy-duty pickup trucks, regardless of
                  age.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/product">Learn More About Our Product</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
