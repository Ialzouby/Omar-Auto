import TeamHero from "@/components/team/team-hero"
import Leadership from "@/components/team/leadership"
import Advisors from "@/components/team/advisors"
import TeamCTA from "@/components/team/team-cta"

export const metadata = {
  title: "Team | Omar Autonomous",
  description: "Meet the exceptional team behind Omar Autonomous.",
}

export default function TeamPage() {
  return (
    <main>
      <TeamHero />
      <Leadership />
      <Advisors />
      <TeamCTA />
    </main>
  )
}
