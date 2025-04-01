"use client"
import { createClient } from "@/app/utils/supabase/client";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import styled from "styled-components"
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import ChannelsList from "./ChannelsList";
import LanguageFilters from "./LanguageFilter";
import CategoriesFilter from "./CategoriesFilter";

interface IMenuStyles {
  translateX: string
}

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
      <Container>
        <Title>Filtros</Title>
        <ActionButton onClick={cleanFilters} $backgroundColor="#dc2626">Reiniciar Filtros</ActionButton>
        <LanguageFilters />
        <CategoriesFilter />
        <ChannelsList dataChannel={dataChannel} />
      </Container>
    </FilterContext.Provider>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 40px;
  }
`;

const ActionButton = styled.button<{ $backgroundColor?: string}>`
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$backgroundColor || '#2687fd'};
  color: #fafafa;

  @media (min-width: 768px) {
    margin-right: 20px
  }
`