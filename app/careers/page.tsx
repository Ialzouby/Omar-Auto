import CareersHero from "@/components/careers/careers-hero"
import WhyWorkHere from "@/components/careers/why-work-here"
import OpenRoles from "@/components/careers/open-roles"
import CultureCode from "@/components/careers/culture-code"

export const metadata = {
  title: "Careers | Omar Autonomous",
  description: "Join the Omar Autonomous team and help shape the future of autonomous driving.",
}

export default function CareersPage() {
  return (
    <main className="pt-16">
      <CareersHero />
      <WhyWorkHere />
      <OpenRoles />
      <CultureCode />
    </main>
  )
}
