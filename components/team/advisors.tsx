"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"

interface Advisor {
  id: number
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
  linkedin?: string
}

export default function Advisors() {
  const advisors: Advisor[] = [
    {
      id: 1,
      name: "Christina Noren",
      role: "Strategic Product Advisor",
      bio: "Christina brings 4× IPO experience as the first CPO/VP at Splunk, CloudBees, and Zuora. Her deep product expertise helps guide our product strategy and go-to-market approach.",
      expertise: ["Product Strategy", "Go-to-Market", "IPO Experience"],
      image: "/christina-noren.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "AI Research Advisor",
      bio: "Dr. Chen is a leading researcher in autonomous systems with over 15 years of experience in computer vision and machine learning. He provides critical insights on our AI development roadmap.",
      expertise: ["Computer Vision", "Machine Learning", "Autonomous Systems"],
      image: "/michael-chen.png",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Automotive Industry Advisor",
      bio: "With 20+ years in the automotive industry, Sarah has held executive positions at major manufacturers. She provides invaluable industry connections and insights on market trends.",
      expertise: ["Automotive Industry", "Manufacturing", "Supply Chain"],
      image: "/sarah-johnson.png",
      linkedin: "https://linkedin.com",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Advisory Board</h2>
          <p className="text-lg text-muted-foreground">
            Our advisors provide strategic guidance and industry expertise to help us navigate the complex autonomous
            vehicle landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{advisor.name}</h3>
                      <p className="text-primary font-medium">{advisor.role}</p>
                    </div>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{advisor.bio}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {advisor.expertise.map((item, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
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
