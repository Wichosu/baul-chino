"use client"
import React, { useCallback, useRef } from "react"
import { cleanUpCanvas, createHanziBackground } from "../utils/renderHanziUtils"
import InputWriter from "./InputWriter"
import Ime from "./Ime"
import LoadingCanvasSkeleton from "./LoadingCanvasSkeleton"

//TODO: POSSIBLE IMPROVEMENTS FOR PERFORMANCE, WEB VITAL
//IMPLEMENT LAZY LOADING OR DYNAMIC FOR HANZIWRITER AND SIMPLE IME
export default function Writer() {
  const canvasRef = useRef<HTMLDivElement>(null!)
  const [loadingCanvas, setLoadingCanvas] = React.useState(true)

  const renderHanzi = useCallback(async (hanzi: string) => {
    //Cleanup previous hanzi
    cleanUpCanvas(canvasRef.current.childNodes)

    //Create hanzi
    const hanziArray = hanzi.split('')

    const HanziWriter = (await import('hanzi-writer')).default

    hanziArray.map((hanzi) => {
      //Filter Roman letters and Punctuation simbols
      const romanRegex = /[A-Z]|[a-z]/
      const punctRegex = /[^\p{Script=Han}\p{L}]/u

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

    setLoadingCanvas(false);
  }, [])

  return (
    <section>
      {loadingCanvas && <LoadingCanvasSkeleton />}
      <div ref={canvasRef} className="w-fit mx-auto mb-5 flex flex-wrap gap-5" />
      <InputWriter renderHanzi={renderHanzi} />
      <Ime />
    </section>
  )
}