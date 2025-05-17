"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

export default function WhyWorkHere() {
  const reasons = [
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description: "Work with the latest in AI, LiDAR, and autonomous vehicle technology.",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Join a diverse team of experts working together to solve complex problems.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Your ideas matter. We encourage creative thinking and novel approaches.",
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Help save lives and make transportation safer for everyone.",
    },
  ]

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at Omar</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a team that's passionate about making autonomous driving accessible to everyone. We're building
              technology that will save lives and transform transportation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <reason.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image src="/team-working.png" alt="Team Working Together" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
