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
import { useTranslations } from "next-intl"

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

export default function CardsContainer() {
  const t = useTranslations('HomePage.CardsContainer')

  const cardsList: Card[] = [
    createCard(
      t('AnkiDecks.Title'),
      t('AnkiDecks.ImgAlt'),
      ankiHsk,
      t('AnkiDecks.Description'),
      'mazos-anki',
      t('AnkiDecks.LinkName')
    ),
    createCard(
      t('HskBooks.Title'),
      t('HskBooks.ImgAlt'),
      hskBooks,
      t('HskBooks.Description'),
      'libros-hsk',
      t('HskBooks.LinkName')
    ),
    createCard(
      t('Channels.Title'),
      t('Channels.ImgAlt'),
      chineseChannels,
      t('Channels.Description'),
      'canales',
      t('Channels.LinkName'),
    ),
    createCard(
      t('Hanzi.Title'),
      t('Hanzi.ImgAlt'),
      hanzi,
      t('Hanzi.Description'),
      '/hanzi',
      t('Hanzi.LinkName'),
    ),
    createCard(
      t('Templates.Title'),
      t('Templates.ImgAlt'),
      Template,
      t('Templates.Description'),
      '/plantillas',
      t('Templates.LinkName'),
    ),
    createCard(
      t('TemplateGenerator.Title'),
      t('TemplateGenerator.ImgAlt'),
      templateGenerator,
      t('TemplateGenerator.Description'),
      '/plantillas/generador',
      t('TemplateGenerator.LinkName'),
    )
  ]

  return (
    <Container>
      {
        cardsList.map((e, index) => (
          <Card key={index}>
            <Card.Title>{ e.title }</Card.Title>
            <Card.CardImage img={e.img} imgAlt={e.imgAlt}  />
            <Card.Description>{ e.description }</Card.Description>
            <Card.Button linkRef={e.linkHref}>{t('GoTo')} { e.linkName }</Card.Button>
          </Card>
        ))
      }
    </Container>
  )
}

const Container = styled.section`

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
  }
`;