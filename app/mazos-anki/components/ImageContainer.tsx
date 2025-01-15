"use client"
import styled from "styled-components"
import Image from "next/image"

export default function ImageContainer() {
  return (
    <Container>
      <Title>Imagenes Ilustrativas</Title>
      <ImageWrapper>
        <StyledImage alt="" src={'/anki-hsk.png'} width={500} height={500} />
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
  max-width: 400px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`