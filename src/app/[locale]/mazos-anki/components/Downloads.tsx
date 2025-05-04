"use client"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Downloads() {
  const t = useTranslations('AnkiDecks.Downloads')

  return (
    <Container>
      <Title>{t('Title')}</Title>
      <Text>
        {t('Text')}
      </Text>
      <Note>
        {t('Note')}
      </Note>
      <ButtonLink 
        href={'https://play.google.com/store/apps/details?id=com.ichi2.anki'} 
        target="_blank" 
        $backgroundColor="#65a30d"
      >
        <StyledImage alt="" src={'/android.svg'} width={20} height={20} />
        {t('Android')}
      </ButtonLink>
      <ButtonLink 
        href={'https://itunes.apple.com/us/app/ankimobile-flashcards/id373493387'} 
        target="_blank" 
        $backgroundColor="#52525b"
      >
        <StyledImage alt="" src={'/iphone.svg'} width={20} height={20} />
        {t('Iphone')}
      </ButtonLink>
      <ButtonLink 
        href={'https://github.com/ankitects/anki/releases/download/24.11/anki-24.11-windows-qt6.exe'} 
        target="_blank"
      >
        <StyledImage alt="" src={'/windows.svg'} width={20} height={20} />
        {t('Windows')}
      </ButtonLink>
      <ButtonLink 
        href={'https://github.com/ankitects/anki/releases/download/24.11/anki-24.11-mac-apple-qt6.dmg'} 
        target="_blank" 
        $backgroundColor="#525252"
      >
        <StyledImage alt="" src={'/apple.svg'} width={20} height={20} />
        {t('Mac')}
      </ButtonLink>
      <ButtonLink 
        href={'https://github.com/ankitects/anki/releases/download/24.11/anki-24.11-mac-intel-qt6.dmg'} 
        target="_blank" 
        $backgroundColor="#525252"
      >
        <StyledImage alt="" src={'/apple.svg'} width={20} height={20} />
        {t('MacIntel')}
      </ButtonLink>
      <ButtonLink 
        href={'https://github.com/ankitects/anki/releases/download/24.11/anki-24.11-linux-qt6.tar.zst'} 
        target="_blank" 
        $backgroundColor="hsl(0, 0%, 10%)"
      >
        <StyledImage alt="" src={'/linux.svg'} width={20} height={20} />
        {t('Linux')}
      </ButtonLink>
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
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 10px;
`

const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};
`

const Note = styled.small`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
  margin: 0;
  padding: 0;
  display: block;
`

const StyledImage = styled(Image)`
  margin-right: 10px;

  @media (min-width: 768px) {
    display: inline-block;
    float: left;
  }
`
const ButtonLink = styled(Link)<{ $backgroundColor?: string; }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.$backgroundColor || props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  padding-left: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  text-decoration: none;

  @media (min-width: 768px) {
    display: inline-block;
    width: fit-content;
    margin-right: 20px;
  }
`
