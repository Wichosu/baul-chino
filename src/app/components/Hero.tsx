import { ReactNode } from "react"

interface Props {
  title: string
  children: string | ReactNode
}

export function Hero({ title, children }: Props) {
  return (
    <section className="my-6">
      <h1 className="text-4xl font-medium text-neutral-800 mb-4">
        { title }
      </h1>
      <p className="text-xl font-normal text-neutral-800">
        { children }
      </p>
    </section>
  )
}