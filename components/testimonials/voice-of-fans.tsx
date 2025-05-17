"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function VoiceOfFans() {
  const testimonials = [
    {
      quote:
        "I drive 911 Porsche 4s and sometimes I am sitting in traffic for 6 hours in Washington metro (area). I would install your system in a heartbeat to save that time by working on something while your system drives the car.",
      name: "ANUPA",
      car: "911 Porsche 4s",
    },
    {
      quote: "Rush hour makes me feel like I live in a real-life Mario Kart level, but not fun.",
      name: "ISAAC",
      car: "Chevy Malibu",
    },
    {
      quote:
        "If my car could handle the road, I'd finally have time to eat my breakfast instead of watching it roll onto the floor.",
      name: "NINA",
      car: "Mercedes-Benz C-Class",
    },
    {
      quote:
        "If my car could drive itself, maybe I'd finally stop showing up late because I was mentally preparing for parallel parking.",
      name: "CARLOS",
      car: "Toyota Corolla",
    },
    {
      quote:
        "Red lights make me contemplate message life. I want a car that does the driving so I can disassociate in peace.",
      name: "BAILEY",
      car: "Volkswagen Jetta",
    },
    {
      quote: "Every time I drive to work I feel like I age five years. Please let the car handle it.",
      name: "BRITTANY",
      car: "Commuter",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Voice of Our Fans</h2>
          <p className="text-lg text-muted-foreground">
            Real people sharing their thoughts on how autonomous driving would change their lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/40 mb-4" />
                  <p className="text-lg mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">—{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.car}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
