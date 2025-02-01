"use client"
import styled from "styled-components"
import Image from "next/image"
import ankiMenu from "../../images/anki-menu.png"
import ankiCard from "../../images/anki-card.png"
import ankiBrowser from "../../images/anki-browser.png"
import ankiCardFront from "../../images/anki-card-front.png"

export default function ImageContainer() {
  return (
    <Container>
      <Title>Imagenes Ilustrativas</Title>
      <ImageWrapper>
        <StyledImage alt="" src={ankiMenu} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="" src={ankiCard} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="" src={ankiBrowser} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="" src={ankiCardFront} />
      </ImageWrapper>
    </Container>
  )
};

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Title = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const ImageWrapper = styled.div`
  display: inline-block;
  max-width: 500px;
  margin: 20px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`