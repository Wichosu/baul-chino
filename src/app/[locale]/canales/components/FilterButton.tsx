"use client"
import styled from "styled-components"
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
    <Button onClick={onClickFilter}  $isActive={toggleFilter}>
      { children }
    </Button>
  )
}

const Button = styled.button<{ $isActive?: boolean}>`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.$isActive ? props.theme.colors.white : props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};
  background-color: ${props => props.$isActive? props.theme.colors.blue : props.theme.colors.grayBackground};
  display: inline;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  transition: 200ms ease;
  white-space: nowrap;
  scroll-snap-align: start;
`