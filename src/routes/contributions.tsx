import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contributions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contributions"!</div>
}
