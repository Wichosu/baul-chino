"use client"
import HanziWriter from "hanzi-writer"
import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { cleanUpCanvas, createHanziBackground } from "../utils/renderHanziUtils"
import { createSimpleIme } from "simple-ime"
import InputWriter from "./InputWriter"
import { SimpleImeInstance } from "simple-ime/dist/src/types"

interface ISimpleImeInstanceExtended extends SimpleImeInstance {
  chiMode?: boolean
}

export default function Writer() {
  const canvasRef = useRef<HTMLDivElement>(null!)

  const renderHanzi = useCallback(async (hanzi: string) => {
    //Cleanup previous hanzi
    cleanUpCanvas(canvasRef.current.childNodes)

    //Create hanzi
    const hanziArray = hanzi.split('')

    hanziArray.map((hanzi) => {
      //Filter Roman letters and Punctuation simbols
      const romanRegex = /[A-Z]|[a-z]/
      const punctRegex = /[^\p{Script=Han}\p{L}\p{N}]/u

      if (hanzi.match(romanRegex)) return
      if (hanzi.match(punctRegex)) return

      //Create Hanzi background
      const background = createHanziBackground(canvasRef.current)

      HanziWriter.create(background as unknown as HTMLElement, hanzi, {
        width: 100,
        height: 100,
        padding: 5
      })
        .loopCharacterAnimation()
    })
  }, [])

  useEffect(() => {
    const ime: ISimpleImeInstanceExtended = createSimpleIme()

    ime.turnOn()

    ime.chiMode = true

    return () => {
      ime.dispose()
    }
  }, [])

  return (
    <>
      <Container>
        <CanvasDiv ref={canvasRef} />
        <InputWriter renderHanzi={renderHanzi} />
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

