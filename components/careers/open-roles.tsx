"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OpenRoles() {
  const roles = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Berkeley, CA (Hybrid)",
      description:
        "Join our AI team to develop and improve our autonomous driving algorithms. Experience with computer vision and machine learning required.",
    },
    {
      title: "Hardware Integration Specialist",
      department: "Engineering",
      location: "Berkeley, CA (On-site)",
      description:
        "Work on integrating our LiDAR and sensor systems with various vehicle types. Experience with automotive systems preferred.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      description:
        "Lead product development for our autonomous driving solutions. Experience in automotive or technology products required.",
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Berkeley, CA (Hybrid)",
      description:
        "Coordinate installation and testing operations. Experience in logistics or operations management preferred.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Roles</h2>
          <p className="text-lg text-muted-foreground">
            Join our team and help shape the future of autonomous driving. We're looking for talented individuals in
            engineering, operations, and product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {role.department}
                        </span>
                        <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                          {role.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-6">{role.description}</p>
                    </div>
                    <div className="mt-auto">
                      <Button asChild>
                        <Link href="mailto:careers@omarautonomous.com?subject=Application for {role.title}">
                          Apply Now
                        </Link>
                      </Button>
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
