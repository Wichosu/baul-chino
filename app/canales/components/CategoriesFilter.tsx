"use client"
import { useContext } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
import styled from "styled-components"

export default function CategoriesFilter() {
  const { FetchedCategories, setSelectedCategory } = useContext(FilterContext)

  return (
    <>
      <SidebarTitle>Categorías</SidebarTitle>
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

const SidebarTitle = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`