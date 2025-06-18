"use client"
import { useContext, useState } from "react"
import { FilterContext } from "./Filter"
import FilterButton from "./FilterButton"
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
      <h3 className="text-2xl text-black font-medium mb-2.5">
        {t('Title')}
        { selectedCategory.length > 0 && <span className="text-lg text-black font-normal ml-2.5">({ selectedCategory.length })</span> }
      </h3>
      <div className="hidden lg:block">
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
      </div>
      <div onTouchStart={() => setShowAnimation(() => false)} className="relative isolate lg:hidden">
        { showAnimation && <HorizontalSlide /> }
        <div className="overflow-auto scroll-smooth snap-mandatory snap-x" style={{scrollbarWidth: "none"}}>
          <div className="flex">
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
          </div>
          <div className="flex">
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
          </div>
        </div>
      </div>
    </>
  )
}