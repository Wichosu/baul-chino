"use client"
import { useContext, useState } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
import styled from "styled-components"
import HorizontalSlide from "@/src/app/components/animations/HorizontalSlide"
import { useTranslations } from "next-intl"

export default function CategoriesFilter() {
  const t = useTranslations('Channels.Filter.CategoriesFilter')

  const { FetchedCategories, selectedCategory, setSelectedCategory } = useContext(FilterContext)
  const [showAnimation, setShowAnimation] = useState(true)

  const categoriesOnTop = FetchedCategories.slice(0, FetchedCategories.length / 2)
  const categoriesOnBottom = FetchedCategories.slice(FetchedCategories.length / 2, FetchedCategories.length)

  return (
    <>
      <Title>
        {t('Title')}
        { selectedCategory.length > 0 && <Counter>({ selectedCategory.length })</Counter> }
      </Title>
      <FilterDesktopContainer>
        {
          FetchedCategories.map((category, index) => (
            <FilterButton 
              key={index} 
              id={category.id} 
              filter={setSelectedCategory}
            >
              { category.name }
            </FilterButton>
          ))
        }
      </FilterDesktopContainer>
      <FilterContainer onTouchStart={() => setShowAnimation(() => false)}>
        { showAnimation && <HorizontalSlide /> }
        <FilterScrollWrapper>
          <FilterFlexContainer>
            {
              categoriesOnTop.map((category, index) => (
                <FilterButton 
                  key={index} 
                  id={category.id} 
                  filter={setSelectedCategory}
                >
                  { category.name }
                </FilterButton>
              ))
            }
          </FilterFlexContainer>
          <FilterFlexContainer>
            {
              categoriesOnBottom.map((category, index) => (
                <FilterButton 
                  key={index} 
                  id={category.id} 
                  filter={setSelectedCategory}
                >
                  { category.name }
                </FilterButton>
              ))
            }
          </FilterFlexContainer>
        </FilterScrollWrapper>
      </FilterContainer>
    </>
  )
}

const Title = styled.summary`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 10px;
`

const Counter = styled.span`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-left: 10px;
`

const FilterDesktopContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const FilterContainer = styled.div`
  position: relative;
  isolation: isolate;

  @media (min-width: 768px) {
    display: none;
  }
`

const FilterScrollWrapper = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const FilterFlexContainer = styled.div`
  display: flex;
`