"use client"
import styled from "styled-components"

//mm units
const SquareSize = 12

export default function Square() {
  return (
    <SquareContainer $size={SquareSize}>
      <SquareSvg>
        <line x1={0} y1={`${50}%`} x2={`${100}%`} y2={`${50}%`} stroke="#DDD" />
        <line x1={`${50}%`} y1={0} x2={`${50}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={0} x2={`${100}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={`${100}%`} x2={`${100}%`} y2={0} stroke="#DDD" />
      </SquareSvg>
    </SquareContainer>
  )
}

const SquareContainer = styled.div<{ $size?: number }>`
  display: inline-block;
  width: ${props => props.$size ? `${props.$size}mm` : "20mm"};
  height: ${props => props.$size ? `${props.$size}mm` : "20mm"};
`

const SquareSvg = styled.svg`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`