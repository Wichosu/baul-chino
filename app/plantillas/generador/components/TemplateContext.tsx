"use client"
import { createContext, useContext, useState, useRef, Dispatch, SetStateAction, ReactNode, RefObject } from "react"

type Props = {
  children: ReactNode
}

export type Title = {
  uuid: string
  name: string
  marginRight: number
}

type TemplateContext = {
  filename: RefObject<string>
  gridGap: number
  squareCount: number
  squareSize: number
  titles: Array<Title>
  setGridGap: Dispatch<SetStateAction<number>>
  setSquareCount: Dispatch<SetStateAction<number>>
  setSquareSize: Dispatch<SetStateAction<number>>
  setTitles: Dispatch<SetStateAction<Array<Title>>>
}

const TemplateContext = createContext<TemplateContext | null>(null)

export default function TemplateContextProvider({ children }: Props) {
  const [gridGap, setGridGap] = useState(0)

  const [squareCount, setSquareCount] = useState(330)
  const [squareSize, setSquareSize] = useState(12)

  const filename = useRef('')

  const [titles, setTitles] = useState<Title[]>([])

  console.log(titles)

  return (
    <TemplateContext.Provider 
      value={{
        filename,
        gridGap,
        squareCount,
        squareSize,
        titles,
        setGridGap,
        setSquareCount,
        setSquareSize,
        setTitles
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}

export function useTemplateContext() {
  const context = useContext(TemplateContext)

  if (!context) {
    throw new Error("useTemplateContext must be used within a TemplateContextProvider")
  }

  return context
}