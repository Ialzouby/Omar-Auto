"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
  linkedin?: string
}

export default function TeamMembers() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Omar Mukhtar",
      role: "CEO & Founder",
      bio: "Omar is an AI pioneer who built his first AI product in 2004, decades before mainstream adoption. He has created a proven working autonomous product that's safer than Tesla and has personally built and tested prototypes, including a U-Haul conversion. His foresight allows him to identify trends years before they happen.",
      expertise: ["AI Development", "Autonomous Systems", "Hardware Engineering"],
      image: "/omar-founder.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Zachariah Ngan",
      role: "Technical Lead",
      bio: "Zachariah holds a Masters in Nuclear Engineering from UC Berkeley with expertise in fusion and plasma simulations and nanotechnology. He co-led an AI meta study submitted to Nature and brings deep technical knowledge to the team.",
      expertise: ["Systems Engineering", "AI Research", "Digital Twins"],
      image: "/zachariah-ngan.jpeg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Marcus Tang",
      role: "Venture Partner",
      bio: "Marcus has a background in Finance from the University of Toronto and brings twice the VC experience through his work with BlackSkies. He's an expert in AI race-cars and leads our fundraising efforts.",
      expertise: ["Fundraising", "Financial Strategy", "Investor Relations"],
      image: "/marcus-tang.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Issam Alzouby",
      role: "Industrial Designer",
      bio: "Issam brings extensive product design expertise with a focus on automotive design. His user-centered approach ensures our technology is not only functional but also intuitive and aesthetically pleasing.",
      expertise: ["Design", "Prototyping", "User Experience"],
      image: "/josh-levine.png",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Robert Hulse",
      role: "Legal Counsel",
      bio: "Robert comes from Fenwick & West with deep regulatory expertise and IP protection experience. He ensures our technology is properly protected and compliant with all relevant regulations.",
      expertise: ["Legal", "Regulatory Compliance", "IP Protection"],
      image: "/robert-hulse.webp",
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
            Our leadership team brings together diverse expertise to drive innovation in autonomous vehicle technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold">{member.name}</h3>
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
                    <p className="mt-4 text-muted-foreground">{member.bio}</p>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((item, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
