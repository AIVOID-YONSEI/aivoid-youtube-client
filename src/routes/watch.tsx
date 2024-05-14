import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/watch')({
  component: () => <div>Hello /watch!</div>
})