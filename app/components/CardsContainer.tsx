"use client"
import styled from "styled-components"
import Card from "./Card"
import ankiHsk from "../images/anki-menu.png"

const cardsList = [
  {
    title: 'Mazos Anki HSK 1-4',
    img: ankiHsk,
    imgAlt: '',
    description: 'Colección de mazos Anki con vocabulario del HSK 1 al HSK 3',
    linkHref: 'mazos-anki',
    linkName: 'Mazos Anki'
  },
]

export default function CardsContainer() {
  return (
    <Container>
      {
        cardsList.map((e, index) => (
          <Card 
            key={index} 
            title={e.title} 
            img={e.img}
            imgAlt={e.imgAlt}
            description={e.description} 
            linkHref={e.linkHref}
            linkName={e.linkName} 
          />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;