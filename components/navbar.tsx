"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl">OMAR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#product" className="text-sm font-medium hover:text-primary transition-colors">
            Product
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
            Benefits
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#waitlist">
            <Button>Join Wait List</Button>
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container-custom py-4 space-y-4">
            <Link
              href="#about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#product"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#benefits"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#team"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link href="#waitlist" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Join Wait List</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
