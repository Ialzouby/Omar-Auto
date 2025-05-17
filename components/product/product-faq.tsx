"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFAQ() {
  const faqs = [
    {
      question: "How long does installation take?",
      answer:
        "Installation takes just 30 minutes and doesn't require any special tools or technical expertise. The process involves connecting the system, attaching sensors, calibration, and a final system check.",
    },
    {
      question: "Will this work with my vehicle?",
      answer:
        "Yes, our system is designed to work with any vehicle type, including passenger cars, SUVs, vans, and heavy-duty pickup trucks, regardless of age or model. If it has a steering wheel and pedals, our system can make it autonomous.",
    },
    {
      question: "Can I remove the system?",
      answer:
        "Yes, our system is designed to be completely removable without leaving any trace. The entire installation process is reversible, allowing you to return your vehicle to its original state whenever you want.",
    },
    {
      question: "How does it perform in bad weather?",
      answer:
        "Our LiDAR-based system performs exceptionally well in adverse weather conditions, including rain, fog, snow, and darkness. Unlike camera-only systems, LiDAR can see through these conditions to maintain safe operation.",
    },
    {
      question: "What happens if the system fails?",
      answer:
        "Safety is our top priority. Our system includes multiple redundancies and fail-safes. If any component experiences an issue, the system will alert you and safely transition control back to the driver with ample warning time.",
    },
    {
      question: "Is the system legal?",
      answer:
        "We work closely with regulatory bodies to ensure compliance with all applicable laws. Our system is designed to meet or exceed all safety standards, and we provide regular updates to maintain compliance as regulations evolve.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our autonomous driving technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
