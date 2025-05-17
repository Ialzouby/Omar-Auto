import Hero from "@/components/home/hero"
import ValuePropositions from "@/components/home/value-propositions"
import HowItWorks from "@/components/home/how-it-works"
import ImpactAtScale from "@/components/home/impact-at-scale"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/home/call-to-action"

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuePropositions />
      <HowItWorks />
      <ImpactAtScale />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
