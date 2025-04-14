"use client"
import styled from "styled-components"
import Card from "./Card"
import ankiHsk from "../images/anki-menu.png"
import hskBooks from "../images/hsk-books.png"
import chineseChannels from "../images/chinese-channels-image.png"
import hanzi from "../images/hanzi.png"
import Template from "../images/template20mm.png"
import templateGenerator from "../images/templateGenerator.png"
import { StaticImageData } from "next/image"

interface Card {
  title: string,
  imgAlt: string,
  img: StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
}

function createCard(
  title: string,
  imgAlt: string,
  img: StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
): Card {
  return {
    title,
    imgAlt,
    img,
    description,
    linkHref,
    linkName
  }
}

const cardsList: Card[] = [
  createCard(
    'Mazos Anki HSK 1-4',
    'Menú de Anki mostrando una lista de mazos',
    ankiHsk,
    'Colección de mazos Anki con vocabulario del HSK 1 al HSK 4',
    'mazos-anki',
    'Mazos Anki'
  ),
  createCard(
    'Libros HSK',
    'Libros HSK del HSK 1 al HSK 6, los libros se ven ordenados y apilados',
    hskBooks,
    'Descarga los libros HSK del 1 al 6 de manera gratuita',
    '/libros-hsk',
    'Libros HSK'
  ),
  createCard(
    'Canales de Chino',
    'Colección de 4 imágenes mostrando canales de YouTube en donde se enseña Chino Mandarín de diferentes formas',
    chineseChannels,
    'Colección de canales de YouTube en donde se enseña Chino Mandarín de diferentes formas',
    '/canales',
    'Canales de Chino'
  ),
  createCard(
    'Escritura de Hanzi 汉字',
    'Aprende a escribir chino, conoce el orden de los trazos y sus radicales',
    hanzi,
    'Aprende a escribir chino, conoce el orden de los trazos y sus radicales',
    '/hanzi',
    'Escritura de Hanzi'
  ),
  createCard(
    'Plantillas de caligrafía de 汉字',
    'Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada',
    Template,
    'Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada',
    '/plantillas',
    'Plantillas'
  ),
  createCard(
    'Generador de Plantillas',
    'Generador de plantillas para practicar caligrafía de 汉字. Prueba tus habilidades de escritura y practica el orden de los trazos y sus radicales',
    templateGenerator,
    'Generador de plantillas para practicar caligrafía de 汉字. Prueba tus habilidades de escritura y practica el orden de los trazos y sus radicales',
    '/plantillas/generador',
    'Generador de Plantillas'
  )
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