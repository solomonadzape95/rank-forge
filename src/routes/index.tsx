import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/landing/Hero'
import Navbar from '@/components/landing/Navbar'
import HowItWorks from '@/components/landing/HowItWorks'
import Features from '@/components/landing/Features'
import FAQ from '@/components/landing/FAQ'
import Footer from '@/components/landing/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="inter ">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}
