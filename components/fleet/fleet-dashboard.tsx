"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FleetDashboard() {
  const dashboardFeatures = [
    {
      id: "location",
      title: "Location Tracking",
      description:
        "Real-time location tracking for your entire fleet, with historical route data and geofencing capabilities.",
      image: "/dashboard-location.png",
    },
    {
      id: "analytics",
      title: "Performance Analytics",
      description:
        "Comprehensive analytics on vehicle performance, fuel efficiency, and driver behavior to optimize operations.",
      image: "/dashboard-analytics.png",
    },
    {
      id: "maintenance",
      title: "Maintenance Scheduling",
      description:
        "Automated maintenance scheduling based on vehicle usage and predictive analytics to prevent breakdowns.",
      image: "/dashboard-maintenance.png",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Management Dashboard Preview</h2>
          <p className="text-lg text-muted-foreground">
            Our intuitive dashboard provides comprehensive fleet management capabilities, from real-time tracking to
            performance analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="location" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {dashboardFeatures.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id}>
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {dashboardFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
