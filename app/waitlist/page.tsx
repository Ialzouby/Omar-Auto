import WaitlistHero from "@/components/waitlist/waitlist-hero"
import WaitlistForm from "@/components/waitlist/waitlist-form"

export const metadata = {
  title: "Join Waitlist | Omar Autonomous",
  description: "Join the waitlist to be among the first to experience Omar Autonomous technology.",
}

export default function WaitlistPage() {
  return (
    <main className="pt-16">
      <WaitlistHero />
      <WaitlistForm />
    </main>
  )
}
