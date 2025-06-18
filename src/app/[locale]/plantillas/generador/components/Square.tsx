"use client"
import { useTemplateContext } from "./TemplateContext"

export default function Square() {
  const { squareSize } = useTemplateContext()

  const styles = {
    width: `${squareSize}mm`,
    height: `${squareSize}mm`,
  }

  return (
    <div className={`inline-block`} style={styles}>
      <svg className="w-full h-full border border-solid border-black">
        <line x1={0} y1={`${50}%`} x2={`${100}%`} y2={`${50}%`} stroke="#DDD" />
        <line x1={`${50}%`} y1={0} x2={`${50}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={0} x2={`${100}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={`${100}%`} x2={`${100}%`} y2={0} stroke="#DDD" />
      </svg>
    </div>
  )
}