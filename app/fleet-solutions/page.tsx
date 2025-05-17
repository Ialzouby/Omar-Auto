import FleetHero from "@/components/fleet/fleet-hero"
import FleetBenefits from "@/components/fleet/fleet-benefits"
import FleetDashboard from "@/components/fleet/fleet-dashboard"
import FleetCaseStudies from "@/components/fleet/fleet-case-studies"
import FleetContact from "@/components/fleet/fleet-contact"

export const metadata = {
  title: "Fleet Solutions | Omar Autonomous",
  description: "Autonomous solutions for fleet operators. Reduce costs, improve safety, and increase efficiency.",
}

export default function FleetSolutionsPage() {
  return (
    <main className="pt-16">
      <FleetHero />
      <FleetBenefits />
      <FleetDashboard />
      <FleetCaseStudies />
      <FleetContact />
    </main>
  )
}
