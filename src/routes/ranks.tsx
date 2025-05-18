import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ranks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ranks"!</div>
}
