"use client"
import { createClient } from "@/src/app/utils/supabase/client";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import ChannelsList from "./ChannelsList";
import LanguageFilters from "./LanguageFilter";
import CategoriesFilter from "./CategoriesFilter";
import { useTranslations } from "next-intl";

type Props = {
  FetchedLanguages: ILanguage[],
  FetchedCategories: ICategory[],
  FetchedChannels: IChannel[]
}

type FilterContext = {
  FetchedLanguages: ILanguage[],
  FetchedCategories: ICategory[],
  addIdToFilter: (id: number, filter: Dispatch<SetStateAction<number[]>>) => void,
  removeIdFromFilter: (id: number, filter: Dispatch<SetStateAction<number[]>>) => void,
  resetTrigger: boolean,
  setUpTrigger: () => void,
  selectedLanguage: number[],
  setSelectedLanguage: Dispatch<SetStateAction<number[]>>,
  selectedCategory: number[],
  setSelectedCategory: Dispatch<SetStateAction<number[]>>,
}

export const FilterContext = createContext({
  FetchedLanguages: [],
  FetchedCategories: [],
  addIdToFilter: () => {},
  removeIdFromFilter: () => {},
  resetTrigger: false,
  setUpTrigger: () => {},
  selectedLanguage: [],
  setSelectedLanguage: () => {},
  selectedCategory: [],
  setSelectedCategory: () => {},
} as FilterContext)

export default function Filter({ FetchedLanguages, FetchedCategories, FetchedChannels }: Props) {
  const t = useTranslations('Channels.Filter')
  // Start with empty selection arrays instead of all items selected
  const [selectedLanguage, setSelectedLanguage] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number[]>([])

  const [dataChannel, setDataChannel] = useState<IChannel[]>(FetchedChannels)

  const [resetTrigger, setResetTrigger] = useState(false)

  const supabase = createClient()

  // This effect will run whenever filter selections change
  useEffect(() => {
    const fetchFilteredChannel = async () => {
      // Use all options if nothing is selected
      const languages = selectedLanguage.length === 0 
        ? FetchedLanguages.map(language => language.id) 
        : selectedLanguage
        
      const categories = selectedCategory.length === 0
        ? FetchedCategories.map(category => category.id)
        : selectedCategory

      const { data, error } = await supabase
        .from('channel')
        .select(`
          *,
          channel_category!inner (
            category!inner (
              id,
              name
            )
          ),
          channel_language!inner (
            language!inner (
              id,
              name
            )
          )
        `)
        .in('channel_category.category.id', categories)
        .in('channel_language.language.id', languages)

      if (error) {
        console.error("Error fetching filtered data:", error)
        return
      }

      setDataChannel(data as IChannel[])
    }

    fetchFilteredChannel()
  }, [selectedCategory, selectedLanguage, FetchedCategories, FetchedLanguages, supabase])

  //Clean Filters
  const cleanFilters = () => {
    setSelectedLanguage([])
    setSelectedCategory([])
    setResetTrigger(true)
  }

  //Restart Trigger after reseting filter buttons
  const setUpTrigger = () => {
    setResetTrigger(false)
  }

  const addIdToFilter = (id: number, filter: Dispatch<SetStateAction<number[]>>) => {
    filter(prev => {
      // Only add if not already in the array
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev
    })
  }

  const removeIdFromFilter = (id: number, filter: Dispatch<SetStateAction<number[]>>) => {
    filter(prev => prev.filter(item => item !== id))
  }

  return (
    <FilterContext.Provider value={{ 
      FetchedLanguages,
      FetchedCategories,
      addIdToFilter,
      removeIdFromFilter,
      resetTrigger,
      setUpTrigger,
      selectedLanguage,
      setSelectedLanguage,
      selectedCategory,
      setSelectedCategory,
    }}>
      <section>
        <h1 className="inline-block text-3xl text-black font-medium my-2.5 lg:mr-10">{t('Title')}</h1>
        <button onClick={cleanFilters} className="cursor-pointer py-1 px-2.5 border-none rounded-lg bg-red-600 text-xl text-white font-medium lg:mr-5">
          {t('ActionButton')}
        </button>
        <LanguageFilters />
        <CategoriesFilter />
        <ChannelsList dataChannel={dataChannel} />
      </section>
    </FilterContext.Provider>
  )
}