"use client"
import styled from "styled-components"
import Card from "./Card"

const cardsList = [
  {
    title: 'Mazos Anki HSK 1-3',
    description: 'Colección de mazos Anki con vocabulario del HSK 1 al HSK 3',
    link: 'Mazos Anki'
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
            img="/anki-hsk.png"
            imgAlt=""
            description={e.description} 
            link={e.link} 
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