"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Users, Clock } from "lucide-react"

export default function Statistics() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Numbers</h2>
          <p className="text-lg text-muted-foreground">
            Understanding the scale of the challenge and opportunity in autonomous vehicle technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">1.6 Billion</h3>
                <h4 className="text-xl font-semibold mb-4">Vehicles Worldwide</h4>
                <p className="text-muted-foreground">
                  There are 1.6 Billion vehicles in the World. In the USA, there are 283 million vehicles, including
                  pickup trucks, and vans. OmarAI works seamlessly to convert these stock vehicles into safe autonomous
                  vehicles.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">1 Million</h3>
                <h4 className="text-xl font-semibold mb-4">Annual Fatalities</h4>
                <p className="text-muted-foreground">
                  According to WHO, every year 1 million humans lose their lives in accidents, and 50 million are
                  injured. Omar helps prevents crashes and accidents from happening in the first place on the vehicles
                  already on the road.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">12.5 Years</h3>
                <h4 className="text-xl font-semibold mb-4">Average Vehicle Age in USA</h4>
                <p className="text-muted-foreground">
                  Average age of vehicle in USA is 12.5 years, in Europe 13.5 years. We are keeping vehicles for longer
                  and longer. OmarAI works on old and new vehicles and trucks, extending their useful life.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
