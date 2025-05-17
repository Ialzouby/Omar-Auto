import TechHero from "@/components/technology/tech-hero"
import CoreStack from "@/components/technology/core-stack"
import ComparisonChart from "@/components/technology/comparison-chart"
import WhyLidar from "@/components/technology/why-lidar"
import TechFAQ from "@/components/technology/tech-faq"

export const metadata = {
  title: "Technology | Omar Autonomous",
  description: "Discover the technology behind Omar Autonomous and how we make any vehicle autonomous in 30 minutes.",
}

export default function TechnologyPage() {
  return (
    <main className="pt-16">
      <TechHero />
      <CoreStack />
      <ComparisonChart />
      <WhyLidar />
      <TechFAQ />
    </main>
  )
}
