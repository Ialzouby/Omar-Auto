"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export default function ComparisonChart() {
  const features = [
    {
      feature: "Vehicle Compatibility",
      omar: "Any Vehicle",
      tesla: "Tesla Only",
      waymo: "Custom-built only",
    },
    {
      feature: "Install Time",
      omar: "30 minutes",
      tesla: "—",
      waymo: "Months",
    },
    {
      feature: "Sensor Suite",
      omar: "LiDAR + AI",
      tesla: "Cameras",
      waymo: "Full Stack",
    },
    {
      feature: "Cost per Vehicle",
      omar: "$20K",
      tesla: "$50K+",
      waymo: "$500K+",
    },
    {
      feature: "Works in Darkness",
      omar: true,
      tesla: false,
      waymo: true,
    },
    {
      feature: "Works in Glare",
      omar: true,
      tesla: false,
      waymo: true,
    },
    {
      feature: "Removable",
      omar: true,
      tesla: false,
      waymo: false,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comparison Chart</h2>
          <p className="text-lg text-muted-foreground">
            See how Omar Autonomous technology compares to other autonomous driving solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border shadow-sm overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5">
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead className="text-center">Omar</TableHead>
                <TableHead className="text-center">Tesla</TableHead>
                <TableHead className="text-center">Waymo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    {typeof item.omar === "boolean" ? (
                      item.omar ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-primary">{item.omar}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.tesla === "boolean" ? (
                      item.tesla ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      item.tesla
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.waymo === "boolean" ? (
                      item.waymo ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      item.waymo
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}
