"use client"
import { useContext, useState } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
import styled, { keyframes } from "styled-components"
import SlideHand from "../assets/SlideHand.svg"
import Image from "next/image"

export default function LanguageFilter() {
  const { FetchedLanguages, setSelectedLanguage } = useContext(FilterContext)
  const [showAnimation, setShowAnimation] = useState(true)

  return (
    <>
      <Title>Idiomas</Title>
      <FilterContainer onTouchStart={() => setShowAnimation(() => false)}>
        { showAnimation && <Instruction alt="" src={SlideHand} width={20} height={20} /> }
        {
          FetchedLanguages.map((language, index) => (
            <FilterButton 
              key={index} 
              id={language.id} 
              filter={setSelectedLanguage}
            >
              { language.name }
            </FilterButton>
          ))
        }
      </FilterContainer>
    </>
  )
}

const Title = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const FilterContainer = styled.div`
  width: fit-content;
  position: relative;
  isolation: isolate;
  overflow: auto;
`

const slide = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(100%)
  }
`

const Instruction = styled(Image)`
  position: absolute;
  top: 50%;
  left: calc(50% - 10px);
  margin-left: 10px;
  animation: ${slide} 1000ms ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media (min-width: 768px) {
    display: none;
  }
`