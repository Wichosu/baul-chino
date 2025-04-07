"use client"
import styled from "styled-components"
import Card from "./Card"
import ankiHsk from "../images/anki-menu.png"
import hskBooks from "../images/hsk-books.png"
import chineseChannels from "../images/chinese-channels-image.png"
import hanzi from "../images/hanzi.png"
import Template from "../images/template20mm.png"
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
  },
  {
    title: 'Canales de Chino',
    imgAlt: 'Colección de 4 imágenes mostrando canales de YouTube en donde se enseña Chino Mandarín de diferentes formas',
    img: chineseChannels,
    description: 'Lista de canales de YouTube con contenido en Chino para practicar o aprender.',
    linkHref: '/canales',
    linkName: 'Lista de Canales'
  },
  {
    title: 'Escritura de Hanzi 汉字',
    imgAlt: 'Aprende a escribir chino, conoce el orden de los trazos y sus radicales',
    img: hanzi,
    description: 'Aprende a escribir chino, conoce el orden de los trazos y sus radicales',
    linkHref: '/hanzi',
    linkName: 'Escritura de Hanzi'
  },
  {
    title: 'Plantillas de caligrafía de 汉字',
    imgAlt: 'Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada',
    img: Template,
    description: 'Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada',
    linkHref: '/plantillas',
    linkName: 'Plantillas'
  }
]

export default function CardsContainer() {
  return (
    <Container>
      {
        cardsList.map((e, index) => (
          <Card key={index}>
            <Card.Title>{ e.title }</Card.Title>
            <Card.CardImage img={e.img} imgAlt={e.imgAlt}  />
            <Card.Description>{ e.description }</Card.Description>
            <Card.Button linkRef={e.linkHref}>Ir a { e.linkName }</Card.Button>
          </Card>
        ))
      }
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
  }
`;