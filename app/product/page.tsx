import ProductHero from "@/components/product/product-hero"
import ProductFeatures from "@/components/product/product-features"
import HowItWorks from "@/components/product/how-it-works"
import Technology from "@/components/product/technology"
import ProductFAQ from "@/components/product/product-faq"

export const metadata = {
  title: "Product | Omar Autonomous",
  description: "Discover how Omar Autonomous technology can make any vehicle autonomous in just 30 minutes.",
}

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <HowItWorks />
      <Technology />
      <ProductFeatures />
      <ProductFAQ />
    </main>
  )
}
