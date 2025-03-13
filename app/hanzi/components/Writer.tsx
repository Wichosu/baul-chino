"use client"
import HanziWriter from "hanzi-writer"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import CanvasSvg from "./CanvasSvg"

export default function Writer() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const canvasSvgRef = useRef<HTMLElement>(null)
  const [hanzi, setHanzi] = useState<string>('')

  const renderHanzi = () => {
    if (canvasRef.current === null) return
    //if (canvasRef.current.childNodes.length > 0) return
    //Cleanup previous hanzi
    const childNodes = Object.values(canvasRef.current.childNodes)

    childNodes.map((child) => child.remove())

    //Create hanzi
    const hanziArray = hanzi.split('')

    hanziArray.map((hanzi) => {
      if (canvasRef.current === null) return

      const svg = canvasRef.current.appendChild(document.createElement('svg'))
      
      const horizontalLine = svg.appendChild(document.createElement('line'))
      horizontalLine.setAttribute('x1', '0')
      horizontalLine.setAttribute('y1', '0')
      horizontalLine.setAttribute('x2', '100')
      horizontalLine.setAttribute('y2', '100')
      horizontalLine.setAttribute('stroke', '#DDD')

      const verticalLine = svg.appendChild(document.createElement('line'))
      verticalLine.setAttribute('x1', '100')
      verticalLine.setAttribute('y1', '0')
      verticalLine.setAttribute('x2', '0')
      verticalLine.setAttribute('y2', '100')
      verticalLine.setAttribute('stroke', '#DDD')

      const diagonalLine = svg.appendChild(document.createElement('line'))
      diagonalLine.setAttribute('x1', '50')
      diagonalLine.setAttribute('y1', '0')
      diagonalLine.setAttribute('x2', '50')
      diagonalLine.setAttribute('y2', '100')
      diagonalLine.setAttribute('stroke', '#DDD')

      const diagonalLine2 = svg.appendChild(document.createElement('line'))
      diagonalLine2.setAttribute('x1', '0')
      diagonalLine2.setAttribute('y1', '50')
      diagonalLine2.setAttribute('x2', '100')
      diagonalLine2.setAttribute('y2', '50')
      diagonalLine2.setAttribute('stroke', '#DDD')

      HanziWriter.create(canvasRef.current?? '', hanzi, {
        width: 150,
        height: 150,
        padding: 5
      })
      .loopCharacterAnimation()

      // HanziWriter.create(canvasRef.current?? '', hanzi, {
      //   width: 150,
      //   height: 150,
      //   padding: 5
      // })
      // .loopCharacterAnimation()
    })
  }

  useEffect(() => {
    renderHanzi()

    return () => {
      canvasRef.current?.remove()
    }
  }, [canvasRef])

  return (
    <>
      <Container>
        <CanvasSvg ref={canvasSvgRef} />
        <CanvasDiv ref={canvasRef} />
        <Input type='text' onChange={(e) => setHanzi(e.target.value)} />
        <Button onClick={() => renderHanzi()}>Escribir Hanzi</Button>
      </Container>
    </>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CanvasDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  border: solid 1px #333333;

  &:focus {
    border: none;
  }
`

const Button = styled.button`
  width: fit-content;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  border: none;
  background-color: hsl(213, 98%, 57%);
  color: #fafafa;
  cursor: pointer;
`