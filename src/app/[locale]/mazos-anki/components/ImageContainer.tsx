"use client"
import styled from "styled-components"
import Image from "next/image"
import ankiMenu from "@/src/app/images/anki-menu.png"
import ankiCard from "@/src/app/images/anki-card.png"
import ankiBrowser from "@/src/app/images/anki-browser.png"
import ankiCardFront from "@/src/app/images/anki-card-front.png"

export default function ImageContainer() {
  return (
    <Container>
      <Title>Imagenes Ilustrativas</Title>
      <ImageWrapper>
        <StyledImage alt="Menú de Anki mostrando una lista de mazos" src={ankiMenu} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Flashcard mostrando los carácteres 不客气, su forma en pinyin, su audio, traducción al español y una animación con la sucesión de trazos" src={ankiCard} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Explorador de archivos de Anki, en el se muestran todas las Flashcards presentes en un mazo" src={ankiBrowser} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Flashcard mostrando únicamente el carácter 爱" src={ankiCardFront} />
      </ImageWrapper>
    </Container>
  )
};

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const ImageWrapper = styled.figure`
  display: inline-block;
  max-width: 500px;
  margin: 20px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`