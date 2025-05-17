"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Shield, Wrench } from "lucide-react"

export default function Values() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Omar's Values</h2>
          <p className="text-lg text-muted-foreground">
            Our core principles guide everything we do, from product development to customer relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable</h3>
                <p className="text-muted-foreground">
                  OmarAI puts money back into your pocket by reducing insurance costs for both people and businesses -
                  no crash, no premium increases.
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
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">For Humans By Humans</h3>
                <p className="text-muted-foreground">
                  Everything we do is for Humans. We operate from our most important principle - For Humans.
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
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe</h3>
                <p className="text-muted-foreground">
                  Safety first. Crashes are preventable. Our technology is designed with multiple redundancies to ensure
                  the highest level of safety.
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
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy to Install</h3>
                <p className="text-muted-foreground">
                  Great technology is useless if it can't be used. OmarAI works without the need of special tools or
                  skillset.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
