"use client"
import { createContext, useContext, useState } from "react"

type Props = {
  children: React.ReactNode
}

type TemplateContext = {
  gridGap: number
  squareCount: number
  setGridGap: React.Dispatch<React.SetStateAction<number>>
  setSquareCount: React.Dispatch<React.SetStateAction<number>>
}

const TemplateContext = createContext<TemplateContext | null>({ 
  gridGap: 0,
  squareCount: 0,
  setGridGap: () => {},
  setSquareCount: () => {}
})

export default function TemplateContextProvider({ children }: Props) {
  const [gridGap, setGridGap] = useState(0)
  const [squareCount, setSquareCount] = useState(330)

  return (
    <TemplateContext.Provider 
      value={{
        gridGap,
        squareCount,
        setGridGap,
        setSquareCount
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}

export function useTemplateContext() {
  const context = useContext(TemplateContext)

  return context
}