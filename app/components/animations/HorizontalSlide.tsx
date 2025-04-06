"use client"
import styled, { keyframes } from "styled-components"
import Image from "next/image"
import SlideHand from "./assets/SlideHand.svg"

type Props = {
  width?: number,
  height?: number
}

export default function HorizontalSlide({ width = 20, height = 20 }: Props) {
  return (
    <Hand alt="Scroll horizontally with your finger" src={SlideHand} width={width} height={height} />
  )
}

const slide = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(100%)
  }
`

const Hand = styled(Image)`
  position: absolute;
  top: 50%;
  left: calc(50% - 10px);
  margin-left: 10px;
  animation: ${slide} 1000ms ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media (min-width: 768px) {
    display: none;
  }
`