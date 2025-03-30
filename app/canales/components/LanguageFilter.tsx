"use client"
import { useContext } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"

export default function LanguageFilter() {
  const { FetchedLanguages, setSelectedLanguage } = useContext(FilterContext)

  return (
    <>
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