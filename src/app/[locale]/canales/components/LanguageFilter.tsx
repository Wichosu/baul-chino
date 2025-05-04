"use client"
import { useContext } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
import styled from "styled-components"
import { useTranslations } from "next-intl"

export default function LanguageFilter() {
  const t = useTranslations('Channels.Filter.LanguageFilter')
  const { FetchedLanguages, selectedLanguage, setSelectedLanguage } = useContext(FilterContext)

  return (
    <>
      <Title>
        {t('Title')} 
        { selectedLanguage.length > 0 && <Counter>({ selectedLanguage.length })</Counter> }
      </Title>
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