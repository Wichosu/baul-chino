import { ReactNode } from "react"

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-5/6 max-w-6xl mx-auto py-6">
      { children }
    </div>
  )
}