import TestimonialsHero from "@/components/testimonials/testimonials-hero"
import VoiceOfFans from "@/components/testimonials/voice-of-fans"
import EarlyBelievers from "@/components/testimonials/early-believers"
import CustomerDemand from "@/components/testimonials/customer-demand"

export const metadata = {
  title: "Testimonials | Omar Autonomous",
  description: "Hear what our customers and supporters say about Omar Autonomous technology.",
}

export default function TestimonialsPage() {
  return (
    <main className="pt-16">
      <TestimonialsHero />
      <VoiceOfFans />
      <EarlyBelievers />
      <CustomerDemand />
    </main>
  )
}
