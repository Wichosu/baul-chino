"use client"
import styled from "styled-components"
import { useTranslations } from "next-intl"

export default function Instructions() {
  const t = useTranslations('AnkiDecks.Instructions')

  return (
    <Container>
      <Title>{t('Title')}</Title>
      <Video 
        src="https://www.youtube.com/embed/rXxrHDEeYIw?si=snY_Cb7Kvg85j3xD" 
        title="¿CÓMO usar ANKI para aprender IDIOMAS? (TUTORIAL para PRINCIPIANTES)" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        loading="lazy"
      />
    </Container>
  )
}

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

const Video = styled.iframe`
  width: 100%;
  max-width: 750px;
  border: none;
  aspect-ratio: 16 / 9;
`