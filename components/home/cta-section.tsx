"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-lg opacity-80 mb-8">
            Join our waiting list to be among the first to experience the future of autonomous driving. By signing up,
            you'll help bring this life-saving technology to market faster.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/contact">
              Join Our Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
