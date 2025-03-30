"use client"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { ReactNode } from "react"

interface Props {
  children: string | ReactNode
  id: number
  resetTrigger: boolean
  addIdToFilter: (id: number) => void
  removeIdFromFilter: (id: number) => void
  setUpTrigger: () => void
}

interface IButton {
  backgroundColor: string;
  color: string;
}

export default function FilterButton({ 
  children,
  id,
  addIdToFilter,
  removeIdFromFilter,
  resetTrigger,
  setUpTrigger
}: Props) {
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
      removeIdFromFilter(id)
    } else {
      addIdToFilter(id)
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
  width: max-content;
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
  scroll-snap-align: start;
`