import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact | Omar Autonomous",
  description: "Get in touch with Omar Autonomous and join our waitlist.",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="container py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}
