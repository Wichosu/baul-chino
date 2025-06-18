"use client"
import { useContext } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
import { useTranslations } from "next-intl"

export default function LanguageFilter() {
  const t = useTranslations('Channels.Filter.LanguageFilter')
  const { FetchedLanguages, selectedLanguage, setSelectedLanguage } = useContext(FilterContext)

  return (
    <>
      <h3 className="text-2xl text-black font-medium mb-2.5">
        {t('Title')} 
        { selectedLanguage.length > 0 && <span className="text-lg text-black font-normal ml-2.5">({ selectedLanguage.length })</span> }
      </h3>
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