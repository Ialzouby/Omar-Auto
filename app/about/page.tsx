import VisionStatement from "@/components/about/vision-statement"
import OurStory from "@/components/about/our-story"
import Values from "@/components/about/values"
import LeadershipTeam from "@/components/about/leadership-team"
import AdvisoryCouncil from "@/components/about/advisory-council"

export const metadata = {
  title: "About Us | Omar Autonomous",
  description: "Learn about Omar Autonomous, our story, values, and the team behind our revolutionary technology.",
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <VisionStatement />
      <OurStory />
      <Values />
      <LeadershipTeam />
      <AdvisoryCouncil />
    </main>
  )
}
