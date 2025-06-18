"use client"
import { useState, useEffect, useContext, Dispatch, SetStateAction } from "react"
import { ReactNode } from "react"
import { FilterContext } from "./Filter"

interface Props {
  children: string | ReactNode
  id: number
  filter: Dispatch<SetStateAction<number[]>>
}

export default function FilterButton({ 
  children,
  id,
  filter
}: Props) {
  const { addIdToFilter, removeIdFromFilter, resetTrigger, setUpTrigger } = useContext(FilterContext)
  //Toggle Filter Buttons
  const [toggleFilter, setToggleFilter] = useState(false);

  useEffect(() => {
    if (resetTrigger) {
      setToggleFilter(false)
      setUpTrigger()
    }
  }, [resetTrigger, setUpTrigger])

  const onClickFilter = () => {
    setToggleFilter((state) => !state)

    if (toggleFilter) {
      removeIdFromFilter(id, filter)
    } else {
      addIdToFilter(id, filter)
    }
  }

  return (
    <button
      onClick={onClickFilter}
      className={`
        cursor-pointer text-lg font-normal inline py-1 px-2 my-2 mx-1
        border-none rounded-md transition whitespace-nowrap snap-start
        ${!toggleFilter && "text-black bg-gray-300"}
        ${toggleFilter && "text-white bg-blue-600"}
      `}
    >
      { children }
    </button>
  )
}