"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FleetCaseStudies() {
  const caseStudies = [
    {
      title: "Delivery Vans",
      description:
        "A national delivery company retrofitted 50 vans with Omar Autonomous technology, reducing accidents by 85% and insurance costs by 30% in the first year.",
      image: "/case-delivery.png",
    },
    {
      title: "Rideshare Vehicles",
      description:
        "Independent rideshare drivers increased earnings by 20% with autonomous capabilities, allowing them to complete more rides with less fatigue.",
      image: "/case-rideshare.png",
    },
    {
      title: "Utility Trucks",
      description:
        "A utility company equipped their maintenance fleet with Omar technology, improving worker safety and reducing vehicle downtime by 40%.",
      image: "/case-utility.png",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            See how different fleet operators have benefited from Omar Autonomous technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
