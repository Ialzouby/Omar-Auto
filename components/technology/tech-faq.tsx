"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TechFAQ() {
  const faqs = [
    {
      question: "What vehicles are supported?",
      answer:
        "Our technology works with any vehicle type, including passenger cars, SUVs, vans, and heavy-duty pickup trucks, regardless of age or model. If it has a steering wheel and pedals, our system can make it autonomous.",
    },
    {
      question: "Can I remove the system?",
      answer:
        "Yes, our system is designed to be completely removable without leaving any trace. The entire installation process is reversible, allowing you to return your vehicle to its original state whenever you want.",
    },
    {
      question: "How does it perform off-road?",
      answer:
        "Our system is designed to work both on and off-road. The LiDAR and AI technologies adapt to various terrains and conditions, providing reliable autonomous driving capabilities even in challenging off-road environments.",
    },
    {
      question: "Is the system weather-resistant?",
      answer:
        "Yes, our system is designed to operate in various weather conditions. The LiDAR technology maintains functionality in rain, fog, and snow, providing reliable performance year-round.",
    },
    {
      question: "How is the system powered?",
      answer:
        "The system connects to your vehicle's existing power system with minimal power draw. It's designed to be energy-efficient and won't significantly impact your vehicle's fuel economy or battery life.",
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
