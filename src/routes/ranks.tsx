import { createFileRoute } from '@tanstack/react-router'
import Ranks from '@/pages/Dashboard/Ranks'

export const Route = createFileRoute('/ranks')({
  component: Ranks,
})

