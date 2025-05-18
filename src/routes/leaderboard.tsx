import { createFileRoute } from '@tanstack/react-router'
import Leaderboard from '@/pages/Dashboard/Leaderboard'

export const Route = createFileRoute('/leaderboard')({
  component: Leaderboard,
})