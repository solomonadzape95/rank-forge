import { createFileRoute } from '@tanstack/react-router'
import Log from '@/pages/Dashboard/Log'

export const Route = createFileRoute('/log')({
  component: Log,
})
