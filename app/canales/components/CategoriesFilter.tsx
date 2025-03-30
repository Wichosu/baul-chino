"use client"
import { useContext } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"

export default function CategoriesFilter() {
  const { FetchedCategories, setSelectedCategory } = useContext(FilterContext)

  return (
    <>
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
    </>
  )
}