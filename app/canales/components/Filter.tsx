"use client"
import { createClient } from "@/app/utils/supabase/client";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import styled from "styled-components"
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import FilterButton from "./FilterButton";
import Channel from "./Channel";

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

  const filterLanguage = useRef<number[]>([])
  const filterCategory = useRef<number[]>([])

  const [dataChannel, setDataChannel] = useState<IChannel[]>(FetchedChannels)

  const [resetTrigger, setResetTrigger] = useState(false)

  const supabase = createClient()

  //Fetch Filtered Data
  const fetchFilteredChannel = async () => {
    const languages = [...filterLanguage.current]
    const categories = [...filterCategory.current]

    if (languages.length === 0) {
      FetchedLanguages.map((language) => languages.push(language.id))
    }
    if (categories.length === 0) {
      FetchedCategories.map((category) => categories.push(category.id))
    }

    console.log("State Filter Language")
    console.log(filterLanguage)
    console.log("Props filter lang")
    console.log(languages)

    console.log("State Filter Categories")
    console.log(filterCategory)
    console.log("Props filter Categories")
    console.log(categories)

    const { data } = await supabase
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

    setDataChannel(data as IChannel[])
    console.log("Data Channel Filtered")
    console.log(data)
  }

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
    filterCategory.current.push(id)
    console.log("ADDED to category")
    console.log(filterCategory)
  }

  const addIdToLanguageFilter = (id: number) => {
    filterLanguage.current.push(id)
    console.log("ADDED to language")
    console.log(filterLanguage)
  }

  const removeIdFromCategoryFilter = (id: number) => {
    filterCategory.current.splice(filterCategory.current.indexOf(id), 1)
    console.log("REMOVE to category")
    console.log(filterCategory)
  } 

  const removeIdFromLanguageFilter = (id: number) => {
    filterLanguage.current.splice(filterLanguage.current.indexOf(id), 1)
    console.log("REMOVE to language")
    console.log(filterLanguage)
  }

  //Clean Filters with Reniciar Filtros Button
  const cleanFilters = () => {
    filterLanguage.current.splice(0, filterLanguage.current.length)
    filterCategory.current.splice(0, filterCategory.current.length)
    console.log("Filter Language")
    console.log(filterLanguage)
    console.log("Filter Category")
    console.log(filterCategory)
    setResetTrigger(true)
    fetchFilteredChannel()
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
            <ActionButton 
              onClick={() => {
                fetchFilteredChannel()
                onClickFilter()
              }}
            >
              Aplicar Filtros
            </ActionButton>
          </ActionButtonContainer>
        </SideBarContainer>
      </SideBar>
      <Container>
        <Title>Filtros</Title>
          <ActionButtonContainer>
            <ActionButton onClick={cleanFilters} $backgroundColor="#dc2626">Reiniciar Filtros</ActionButton>
            <ActionButton onClick={fetchFilteredChannel}>Aplicar Filtros</ActionButton>
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
        {
          dataChannel.map((channel, index) => (
            <Channel key={index} channel={channel} />
          ))
        }
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