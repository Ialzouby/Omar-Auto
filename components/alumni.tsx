import Image from "next/image"

export default function Alumni() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built By Alumni Of</h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Placeholder logos for universities/companies */}
          <div className="relative w-40 h-20">
            <Image
              src="/placeholder.svg?height=100&width=200&query=university logo"
              alt="University Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20">
            <Image
              src="/placeholder.svg?height=100&width=200&query=tech company logo"
              alt="Tech Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20">
            <Image
              src="/placeholder.svg?height=100&width=200&query=automotive company logo"
              alt="Automotive Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20">
            <Image
              src="/placeholder.svg?height=100&width=200&query=research institution logo"
              alt="Research Institution Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
