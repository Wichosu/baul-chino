'use client'
import React from 'react'
import { SimpleImeInstance } from "simple-ime/dist/src/types"
import { createSimpleIme } from "simple-ime"

interface ISimpleImeInstanceExtended extends SimpleImeInstance {
  chiMode?: boolean
}

export default function ImeInstance() {
  React.useEffect(() => {
    const ime: ISimpleImeInstanceExtended = createSimpleIme()

    ime.turnOn()

    ime.chiMode = true

    return () => {
      ime.dispose()
    }
  }, [])

  return (
    <>
    </>
  )
}