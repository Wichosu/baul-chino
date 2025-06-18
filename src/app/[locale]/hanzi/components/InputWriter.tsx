"use client"
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
    <input
      type="text"
      onInput={(e) => {
        setHanzi(e.currentTarget.value)
      }}
      placeholder={t('Placeholder')}
      className="w-full mb-5 py-1 px-2.5 rounded-lg border border-gray-600 focus:border-gray-900"
    />
  )
}