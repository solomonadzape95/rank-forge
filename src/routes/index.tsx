import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/landing/Hero'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="sora">
      <Hero />
    </div>
  )
}
