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

interface IButton {
  backgroundColor: string;
  color: string;
}

export default function FilterButton({ 
  children,
  id,
  filter
}: Props) {
  const { addIdToFilter, removeIdFromFilter, resetTrigger, setUpTrigger } = useContext(FilterContext)
  //Toggle Filter Buttons
  const [toggleFilter, setToggleFilter] = useState(false);
  let buttonStyles: IButton

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

  if(toggleFilter) {
    buttonStyles = {
      backgroundColor: '#2687fd',
      color: '#fafafa'
    }
  } else {
    buttonStyles = {
      backgroundColor: '#e5e5e5',
      color: '#404040'
    }
  }

  return (
    <Button onClick={onClickFilter} $styles={buttonStyles}>
      { children }
    </Button>
  )
}

const Button = styled.button<{ $styles?: IButton}>`
  cursor: pointer;
  font-size: 1rem;
  display: inline;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: ${props => props.$styles?.backgroundColor};
  color: ${props => props.$styles?.color};
  border: none;
  border-radius: 4px;
  transition: 200ms ease;
  white-space: nowrap;
  scroll-snap-align: start;
`