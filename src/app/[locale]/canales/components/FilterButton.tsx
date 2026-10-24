"use client"
import { useContext, ReactNode } from "react"
import { FilterContext } from "./Filter"

interface Props {
  children: string | ReactNode
  id: number
  filter: "language" | "category"
}

export default function FilterButton({
  children,
  id,
  filter
}: Props) {
  const { selectedLanguage, setSelectedLanguage, selectedCategory, setSelectedCategory } = useContext(FilterContext)

  const selected = filter === "language" ? selectedLanguage : selectedCategory
  const setSelected = filter === "language" ? setSelectedLanguage : setSelectedCategory
  const isActive = selected.includes(id)

  const onClickFilter = () => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <button
      onClick={onClickFilter}
      aria-pressed={isActive}
      className={`
        cursor-pointer text-lg font-normal inline py-1 px-2 my-2 mx-1
        border-none rounded-md transition whitespace-nowrap snap-start
        ${!isActive && "text-black bg-gray-300"}
        ${isActive && "text-white bg-blue-600"}
      `}
    >
      { children }
    </button>
  )
}
