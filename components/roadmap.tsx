"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Roadmap() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Plan: Path to $1B</h2>
          <p className="text-lg text-muted-foreground">Strategic roadmap for growth & investment opportunity</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Investment Ask</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">$5M - $7M</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium">Equity Offered:</p>
                    <p className="text-lg font-semibold">15-20%</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium">Runway:</p>
                    <p className="text-lg font-semibold">16-24 months</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Use of Funds</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">California Permit</p>
                      <p className="text-sm text-muted-foreground">$500K for regulatory approval</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">New Zealand License</p>
                      <p className="text-sm text-muted-foreground">International expansion foothold</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Team Growth</p>
                      <p className="text-sm text-muted-foreground">Engineering & operations talent</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">2030 Target Valuation</h4>
                <p className="text-3xl font-bold text-primary mb-2">$1 Billion+</p>
                <p className="text-muted-foreground">Based on market penetration & TAM</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-lg font-semibold mb-4">Initial Target Markets:</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-medium">USA</p>
                    <p className="text-lg font-semibold text-primary">35M vehicles</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-medium">New Zealand</p>
                    <p className="text-lg font-semibold text-primary">4.5M vehicles</p>
                  </div>
                </div>
                <p className="text-muted-foreground">First fleet customers identified</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Growth Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-primary/30 pl-6 pb-1 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="font-semibold">California Permit</h4>
                    <p className="text-sm text-muted-foreground">Regulatory approval for operations</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/70"></div>
                    <h4 className="font-semibold">Initial Fleet Deployments</h4>
                    <p className="text-sm text-muted-foreground">First commercial installations</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/70"></div>
                    <h4 className="font-semibold">NZ License</h4>
                    <p className="text-sm text-muted-foreground">International market entry</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/50"></div>
                    <h4 className="font-semibold">Consumer Rollout</h4>
                    <p className="text-sm text-muted-foreground">Direct-to-consumer availability</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/50"></div>
                    <h4 className="font-semibold">Series A</h4>
                    <p className="text-sm text-muted-foreground">Growth capital raise</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
                    <h4 className="font-semibold">Scale Operations</h4>
                    <p className="text-sm text-muted-foreground">Manufacturing and distribution expansion</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
                    <h4 className="font-semibold">Series B</h4>
                    <p className="text-sm text-muted-foreground">International expansion capital</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                    <h4 className="font-semibold">$1B Valuation</h4>
                    <p className="text-sm text-muted-foreground">Unicorn status achievement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#waitlist">Join Our Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
