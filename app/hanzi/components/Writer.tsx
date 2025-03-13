"use client"
import HanziWriter from "hanzi-writer"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

export default function Writer() {
  const canvasRef = useRef<HTMLDivElement>(null)
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
      HanziWriter.create(canvasRef.current?? '', hanzi, {
        width: 150,
        height: 150,
        padding: 5
      })
      .loopCharacterAnimation()
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
        <CanvasDiv id='canvas' ref={canvasRef} />
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