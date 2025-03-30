"use client"
import { createClient } from "@/app/utils/supabase/client";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import styled from "styled-components"
import { useState, useEffect } from "react";
import Image from "next/image";
import FilterButton from "./FilterButton";
import ChannelsList from "./ChannelsList";

interface IMenuStyles {
  translateX: string
}

type Props = {
  FetchedLanguages: ILanguage[],
  FetchedCategories: ICategory[],
  FetchedChannels: IChannel[]
}

export default function Filter({ FetchedLanguages, FetchedCategories, FetchedChannels }: Props) {
  //Open Filter Menu
  const [openFilter, setOpenFilter] = useState(false)

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

      console.log("Fetching with languages:", languages)
      console.log("Fetching with categories:", categories)

      try {
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

        console.log("Data Channel Filtered:", data)
        setDataChannel(data as IChannel[])
      } catch (err) {
        console.error("Exception when fetching data:", err)
      }
    }

    fetchFilteredChannel()
  }, [selectedCategory, selectedLanguage, FetchedCategories, FetchedLanguages, supabase])

  //Toggle Filter SideBar
  const onClickFilter = () => {
    setOpenFilter((bool) => !bool)
  }

  let menuStyles: IMenuStyles

  if(openFilter) {
    menuStyles = {
      translateX: "100%",
    }
  } else {
    menuStyles = {
      translateX: "0",
    }
  }

  //Filter Arrays
  const addIdToCategoryFilter = (id: number) => {
    setSelectedCategory(prev => {
      // Only add if not already in the array
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev
    })
  }

  const addIdToLanguageFilter = (id: number) => {
    setSelectedLanguage(prev => {
      // Only add if not already in the array
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev
    })
  }

  const removeIdFromCategoryFilter = (id: number) => {
    setSelectedCategory(prev => prev.filter(item => item !== id))
  } 

  const removeIdFromLanguageFilter = (id: number) => {
    setSelectedLanguage(prev => prev.filter(item => item !== id))
  }

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

  return (
    <>
      <SideBar $styles={menuStyles}>
        <SideBarContainer>
          <Figure onClick={onClickFilter}>
            <Image alt="close button" src={'/x.svg'} width={30} height={30} />
          </Figure>
          <div>
            <SidebarTitle>Idiomas</SidebarTitle>
            {
              FetchedLanguages.map((language, index) => (
                <FilterButton 
                  key={index} 
                  id={language.id} 
                  addIdToFilter={addIdToLanguageFilter}
                  removeIdFromFilter={removeIdFromLanguageFilter}
                  resetTrigger={resetTrigger}
                  setUpTrigger={setUpTrigger}
                >
                  { language.name }
                </FilterButton>
              ))
            }
          </div>
          <div>
            <SidebarTitle>Categorías</SidebarTitle>
            {
              FetchedCategories.map((category, index) => (
                <FilterButton 
                  key={index}
                  id={category.id}
                  addIdToFilter={addIdToCategoryFilter}
                  removeIdFromFilter={removeIdFromCategoryFilter}
                  resetTrigger={resetTrigger}
                  setUpTrigger={setUpTrigger}
                >
                  { category.name }
                </FilterButton>
              ))
            }
          </div>
          <ActionButtonContainer>
            <ActionButton 
              onClick={() => {
                cleanFilters()
                onClickFilter()
              }} 
              $backgroundColor="#dc2626"
            >
              Reiniciar Filtros
            </ActionButton>
          </ActionButtonContainer>
        </SideBarContainer>
      </SideBar>
      <Container>
        <Title>Filtros</Title>
          <ActionButtonContainer>
            <ActionButton onClick={cleanFilters} $backgroundColor="#dc2626">Reiniciar Filtros</ActionButton>
          </ActionButtonContainer>
        <FilterContainer>
          <SidebarTitle>Idiomas</SidebarTitle>
          {
            FetchedLanguages.map((language, index) => (
              <FilterButton 
                key={index}
                id={language.id}
                addIdToFilter={addIdToLanguageFilter}
                removeIdFromFilter={removeIdFromLanguageFilter}
                resetTrigger={resetTrigger}
                setUpTrigger={setUpTrigger}
              >
                { language.name }
              </FilterButton>
            ))
          }
        </FilterContainer>
        <FilterContainer>
          <SidebarTitle>Categorías</SidebarTitle>
          {
            FetchedCategories.map((category, index) => (
              <FilterButton 
                key={index}
                id={category.id}
                addIdToFilter={addIdToCategoryFilter}
                removeIdFromFilter={removeIdFromCategoryFilter}
                resetTrigger={resetTrigger}
                setUpTrigger={setUpTrigger}
              >
                { category.name }
              </FilterButton>
            ))
          }
        </FilterContainer>
        <FilterMenuButton onClick={onClickFilter}>Abrir Menu de Filtros</FilterMenuButton>
        <ChannelsList dataChannel={dataChannel} />
      </Container>
    </>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  display: none;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 40px;
  }
`;

const SideBar = styled.div<{ $styles?: IMenuStyles; }>`
  position: fixed;
  overflow: auto;
  top: 0;
  left: -100%;
  background-color: #f5f5f5;
  transform: translateX(${props => props.$styles?.translateX});
  transition: 500ms ease;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const FilterMenuButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  border: none;
  background-color: hsl(213, 98%, 57%);
  color: #fafafa;

  @media (min-width: 768px) {
    display: none;
  }
`

const Figure = styled.figure`
  margin-left: auto;
`;

const SidebarTitle = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

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
const ActionButtonContainer = styled.div`
  display: none;
  
  ${SideBarContainer} & {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const FilterContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`