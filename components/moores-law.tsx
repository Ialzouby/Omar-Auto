"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function MooresLaw() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Moore's Law in Autonomous Vehicles</h2>
          <p className="text-lg text-muted-foreground">Exponentially improving performance at decreasing costs</p>
        </motion.div>

        <Tabs defaultValue="nextgen" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="first">First Generation</TabsTrigger>
            <TabsTrigger value="current">Current State</TabsTrigger>
            <TabsTrigger value="nextgen">Next Generation</TabsTrigger>
          </TabsList>
          <TabsContent value="first" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">First Generation (2015-2022)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Camera-based systems</li>
                      <li>Heavy compute requirements</li>
                      <li>Limited environment perception</li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-medium">Key Players:</h4>
                      <p>Tesla, Ghost Autonomy, Apple, Comma</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src="/first-gen-av.jpg"
                        alt="First Generation Autonomous Vehicle"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold">Variable Cost</h4>
                      <p className="text-2xl font-bold text-primary mt-2">$100,000+ per vehicle</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="current" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Current State of Art (2022-2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Camera arrays</li>
                      <li>LiDAR sensors</li>
                      <li>Remote operator backup</li>
                      <li>Complex hardware integration</li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-medium">Key Players:</h4>
                      <p>Waymo, Zoox, Wayve</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src="/current-gen-av.jpg"
                        alt="Current Generation Autonomous Vehicle"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold">Variable Cost</h4>
                      <p className="text-2xl font-bold text-primary mt-2">$500,000+ per vehicle</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nextgen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Next Generation (2025+)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Advanced AI models</li>
                      <li>LiDAR + AI + INS/GNSS</li>
                      <li>Low-power COTS hardware</li>
                      <li>Unique IP in Decision Engine</li>
                      <li>Performs in dark, glare, low-light</li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-medium">Key Players:</h4>
                      <p className="font-bold text-primary">Omar Autonomous</p>
                      <div className="mt-4 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        YOU ARE HERE
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src="/next-gen-av.jpg"
                        alt="Next Generation Autonomous Vehicle"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold">Variable Cost</h4>
                      <p className="text-2xl font-bold text-primary mt-2">$20,000 per vehicle</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-xl font-semibold mb-4">Key Advantages of Next Gen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium">Universal</h4>
                      <p className="text-sm text-muted-foreground">Works on any vehicle, any year, any brand</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium">Fast</h4>
                      <p className="text-sm text-muted-foreground">30-minute installation & removal</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium">Moore's Law</h4>
                      <p className="text-sm text-muted-foreground">Rapidly improving price/performance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
