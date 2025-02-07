"use client"
import styled from "styled-components"
import Card from "./Card"
import ankiHsk from "../images/anki-menu.png"
import hskBooks from "../images/hsk-books.png"
import { StaticImageData } from "next/image"

interface Card {
  title: string,
  imgAlt: string,
  img: StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
}

const cardsList: Card[] = [
  {
    title: 'Mazos Anki HSK 1-4',
    imgAlt: 'Menú de Anki mostrando una lista de mazos',
    img: ankiHsk,
    description: 'Colección de mazos Anki con vocabulario del HSK 1 al HSK 4',
    linkHref: 'mazos-anki',
    linkName: 'Mazos Anki'
  },
  {
    title: 'Libros HSK',
    imgAlt: 'Libros HSK del HSK 1 al HSK 6, los libros se ven ordenados y apilados',
    img: hskBooks,
    description: 'Descarga los libros HSK del 1 al 6 de manera gratuita',
    linkHref: '/libros-hsk',
    linkName: 'Libros HSK'
  }
]

export default function CardsContainer() {
  return (
    <Container>
      {
        cardsList.map((e, index) => (
          <Card 
            key={index} 
            title={e.title} 
            imgAlt={e.imgAlt}
            img={e.img}
            description={e.description} 
            linkHref={e.linkHref}
            linkName={e.linkName} 
          />
        ))
      }
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
  }
`;