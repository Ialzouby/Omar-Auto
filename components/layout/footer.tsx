import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Omar Autonomous</h3>
            <p className="mb-4 text-secondary/80">
              Make any vehicle autonomous in 30 minutes. Affordable. Safe. Human-centered autonomy.
            </p>
            <div className="flex items-center space-x-2 text-secondary/80">
              <MapPin className="h-5 w-5" />
              <p>Berkeley, CA. USA</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary/80 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-secondary/80 hover:text-secondary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/fleet-solutions" className="text-secondary/80 hover:text-secondary transition-colors">
                  Fleet Solutions
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-secondary/80 hover:text-secondary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-secondary/80 hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-secondary/80 hover:text-secondary transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/20 hover:bg-secondary/30 p-3 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:info@omarautonomous.com"
                className="bg-secondary/20 hover:bg-secondary/30 p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-secondary/80">Click to connect through LinkedIn or send us an email.</p>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary/80 text-sm mb-4 md:mb-0">© Omar 2023-2025. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-secondary/80 hover:text-secondary transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm text-secondary/80 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/press-kit" className="text-sm text-secondary/80 hover:text-secondary transition-colors">
              Press Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
