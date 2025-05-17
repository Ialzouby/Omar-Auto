"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  expertise: string[]
  image: string
  linkedin?: string
}

export default function LeadershipTeam() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Omar Mukhtar",
      role: "CEO & Founder",
      expertise: [
        "AI Pioneer since 2004",
        "20+ years before mainstream AI",
        "Proven autonomous product safer than Tesla",
        "Built & tested prototypes personally",
      ],
      image: "/omar-mukhtar.png",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Zachariah Ngan",
      role: "Technical Lead",
      expertise: [
        "Masters in Nuclear Engineering @ UC Berkeley",
        "Fusion + plasma simulations, nanotech expertise",
        "Co-led AI meta study submitted to Nature",
        "Systems Engineering",
      ],
      image: "/zachariah-ngan.png",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Marcus Tang",
      role: "Venture Partner",
      expertise: [
        "Finance, University of Toronto",
        "2× VC experience (BlackSkies)",
        "AI race-cars expert",
        "Fundraising",
      ],
      image: "/marcus-tang.png",
      linkedin: "https://linkedin.com",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the exceptional individuals behind Omar Autonomous. Our team combines decades of expertise in AI,
            engineering, finance, design, and legal to revolutionize autonomous vehicle technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <ul className="mt-4 space-y-1">
                    {member.expertise.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
