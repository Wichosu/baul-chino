"use client"
import HanziWriter from "hanzi-writer"
import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { cleanUpCanvas, createHanziBackground } from "../utils/renderHanziUtils"

export default function Writer() {
  const canvasRef = useRef<HTMLDivElement>(null!)
  const [hanzi, setHanzi] = useState<string>('汉字')

  const renderHanzi = useCallback(async () => {
    const romanRegex = '[A-Z]|[a-z]'

    if (hanzi.match(romanRegex)) return

    //Cleanup previous hanzi
    cleanUpCanvas(canvasRef.current.childNodes)

    //Create hanzi
    const hanziArray = hanzi.split('')

    hanziArray.map((hanzi) => {
      //Create Hanzi background
      const background = createHanziBackground(canvasRef.current)

      HanziWriter.create(background as unknown as HTMLElement, hanzi, {
        width: 100,
        height: 100,
        padding: 5
      })
        .loopCharacterAnimation()
    })
  }, [hanzi])

  useEffect(() => {
    renderHanzi()
  }, [renderHanzi])

  return (
    <>
      <Container>
        <CanvasDiv ref={canvasRef} />
        <Input 
          type='text' 
          onChange={(e) => setHanzi(e.target.value)} 
          placeholder="Escribe aquí tus hanzi 汉字" 
        />
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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