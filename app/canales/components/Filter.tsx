"use client"
import styled from "styled-components"
import { useState } from "react";
import Image from "next/image";
import FilterButton from "./FilterButton";
import Channel from "./Channel";

interface IMenuStyles {
  translateX: string
}

interface IChannel {
  name: string,
  description: string,
  url: string,
  categories: string[],
  languages: string[]
}

const languages = [
  {
    name: 'Español'
  },
  {
    name: 'Inglés'
  }
]

const categories = [
  {
    name: 'Vida Cotidiana'
  },
  {
    name: 'Lecciones de Chino'
  },
  {
    name: 'Películas y Series Completas'
  },
  {
    name: 'Resumenes de Películas y Series'
  },
  {
    name: 'Ciencia y Tecnología'
  },
  {
    name: 'Literatura y Poesía'
  },
  {
    name: 'Cuentos Infantiles'
  },
]

const channels: IChannel[] = [
  {
    name: 'Clases de Chino Mandarín',
    description: 'En este canal te enseñaremos CHINO MANDARÍN en castellano, para que puedas tener un dialogo comercial, turístico o simplemente una charla cotidiana con personas que hablan en Chino.',
    url: 'https://www.youtube.com/@clasesdechinomandarin',
    categories: ['Lecciones de Chino'],
    languages: ['Español']
  },
  {
    name: 'Nininterprete',
    description: 'Soy Nini, intérprete de chino-español, apasionada por enseñar mi cultura e idioma. Bienvenidos a mi canal',
    url: 'https://www.youtube.com/@nininterprete',
    categories: ['Lecciones de Chino', 'Vida Cotidiana'],
    languages: ['Español']
  },
  {
    name: 'Aprende Chino con Marco',
    description: 'Aprende chino mandarín de una forma sencilla, cada video que publicamos está basado en el uso cotidiano del idioma en China. Así que aprenderás las cosas más importantes y más usadas.',
    url: 'https://www.youtube.com/@AprendeChinoConMarco',
    categories: ['Lecciones de Chino'],
    languages: ['Español']
  }
]

export default function Filter() {
  //Open Filter Menu
  const [openFilter, setOpenFilter] = useState(false);

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

  //Filter Array
//  const currentFilters = []

  //function to filter array with all content and create a new array with the filter content

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
              languages.map((language, index) => (
                <FilterButton key={index}>{ language.name }</FilterButton>
              ))
            }
          </div>
          <div>
            <SidebarTitle>Categorías</SidebarTitle>
            {
              categories.map((category, index) => (
                <FilterButton key={index}>{ category.name }</FilterButton>
              ))
            }
          </div>
          <ActionButtonContainer>
            <ActionButton $backgroundColor="#dc2626">Reiniciar Filtros</ActionButton>
            <ActionButton>Aplicar Filtros</ActionButton>
          </ActionButtonContainer>
        </SideBarContainer>
      </SideBar>
      <Container>
        <Title>Filtros</Title>
        <FilterMenuButton onClick={onClickFilter}>Abrir Menu de Filtros</FilterMenuButton>
        {
          channels.map((channel, index) => (
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
    display: block;
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

const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const ActionButton = styled.button<{ $backgroundColor?: string}>`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$backgroundColor || '#2687fd'};
  color: #fafafa;
`
const ActionButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

/*
const FilterButtonContainer = styled.div`
  column-count: auto;
  overflow: auto;
`

const FilterButton = styled.button`
  display: inline;
  width: max-content;
  break-inside: avoid;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
`
/**
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  row-gap: 20px;
  column-gap: 10px;
  width: 100%;
  overflow: auto;
* 
 */