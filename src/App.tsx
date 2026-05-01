import Hero from './components/layout/Hero'
import {
  ReviewsSection,
  PricingSection,
  CaseStudiesSection,
  PartnersSection,
} from './components/sections'

function App() {
  return (
    <main className="min-h-screen bg-pinewood-sand">
      <Hero />
      <ReviewsSection />
      <CaseStudiesSection />
      <PricingSection />
      <PartnersSection />
    </main>
  )
}

export default App
