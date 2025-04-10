"use client"
import { createContext, useContext, useState, useRef, Dispatch, SetStateAction, ReactNode, RefObject } from "react"

type Props = {
  children: ReactNode
}

type TemplateContext = {
  filename: RefObject<string>
  gridGap: number
  squareCount: number
  squareSize: number
  setGridGap: Dispatch<SetStateAction<number>>
  setSquareCount: Dispatch<SetStateAction<number>>
  setSquareSize: Dispatch<SetStateAction<number>>
}

const TemplateContext = createContext<TemplateContext | null>(null)

export default function TemplateContextProvider({ children }: Props) {
  const [gridGap, setGridGap] = useState(0)
  const [squareCount, setSquareCount] = useState(330)
  const [squareSize, setSquareSize] = useState(12)
  const filename = useRef('')

  return (
    <TemplateContext.Provider 
      value={{
        filename,
        gridGap,
        squareCount,
        squareSize,
        setGridGap,
        setSquareCount,
        setSquareSize
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