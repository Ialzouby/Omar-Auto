"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: "Berkeley, CA, USA",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@omarautonomous.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 5PM PST",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full"
    >
      <div className="bg-card rounded-lg shadow-sm p-6 md:p-8 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

        <div className="space-y-6 flex-1">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 mt-1">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t">
          <h3 className="font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:info@omarautonomous.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
