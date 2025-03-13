import { ForwardedRef, Ref } from "react"

interface Props {
  ref: Ref<SVGSVGElement>
}

export default function CanvasSvg({ ref }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" ref={ref}>

    </svg>
  )
}