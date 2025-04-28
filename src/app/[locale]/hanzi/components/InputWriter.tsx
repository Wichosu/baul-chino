"use client"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

type Props = {
  renderHanzi: (hanzi: string) => Promise<void>
}

export default function InputWriter({ renderHanzi }: Props) {
  const t = useTranslations('Hanzi.Writer.InputWriter')

  const [hanzi, setHanzi] = useState<string>('汉字')

  useEffect(() => {
    renderHanzi(hanzi)
  }, [renderHanzi, hanzi])

  return (
    <>
      <Input 
        type='text' 
        onInput={(e) => {
          setHanzi(e.currentTarget.value)
        }}
        placeholder={t('Placeholder')}
      />
    </>
  )
}

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