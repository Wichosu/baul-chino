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
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const Counter = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 10px;
`