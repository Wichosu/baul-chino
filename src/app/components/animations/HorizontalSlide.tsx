'use client'
import Image from "next/image"
import SlideHand from "./assets/SlideHand.svg"
import { useTranslations } from "next-intl"

type Props = {
  width?: number,
  height?: number
}

export default function HorizontalSlide({ width = 20, height = 20 }: Props) {
  const t = useTranslations('Components')

  return (
    <Image
      alt={t('HorizontalSlideAlt')}
      src={SlideHand}
      width={width}
      height={height} 
      className="absolute top-1/2 left-1/2 ml-2.5 animate-horizontal-slide lg:hidden motion-reduce:hidden"
    />
  )
}