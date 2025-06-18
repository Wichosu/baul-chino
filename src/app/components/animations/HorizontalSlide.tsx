import Image from "next/image"
import SlideHand from "./assets/SlideHand.svg"

type Props = {
  width?: number,
  height?: number
}

export default function HorizontalSlide({ width = 20, height = 20 }: Props) {
  return (
    <Image
      alt="Scroll horizontally with your finger"
      src={SlideHand}
      width={width}
      height={height} 
      className="absolute top-1/2 left-1/2 ml-2.5 animate-horizontal-slide lg:hidden"
    />
  )
}