"use client"
import styled from "styled-components";
import ListItem from "./ListItem";
import { useTranslations } from "next-intl";

const enAnkiDecks = [
  //EN decks
  {
    name: 'EN-HSK-1',
    link: '/EN-HSK-1.apkg'
  },
  {
    name: 'EN-HSK-2',
    link: '/EN-HSK-2.apkg'
  },
  {
    name: 'EN-HSK-3',
    link: '/EN-HSK-3.apkg'
  },
  {
    name: 'EN-HSK-4A',
    link: '/EN-HSK-4A.apkg'
  },
];

const esAnkiDecks = [
  //ES decks
  {
    name: 'ES-HSK-1',
    link: '/ES-HSK-1.apkg'
  },
  {
    name: 'ES-HSK-2',
    link: '/ES-HSK-2.apkg'
  },
  {
    name: 'ES-HSK-3',
    link: '/ES-HSK-3.apkg'
  },
  {
    name: 'ES-HSK-4A',
    link: '/ES-HSK-4A.apkg'
  }
]

export default function ListContainer() {
  const t = useTranslations('AnkiDecks.ListContainer')

  return (
    <Container>
      <BlockWrapper>
        <Title>🇬🇧 {t('TitleEn')}</Title>
        <Description>{t('DescriptionEn')}</Description>
        {
          enAnkiDecks.map((e, index) => (
            <ListItem 
            key={index} 
            linkRef={e.link}
            linkName={e.name}
            />
          ))
        }
      </BlockWrapper>
      <BlockWrapper>
        <Title>🇪🇸 {t('TitleEs')}</Title>
        <Description>{t('DescriptionEs')}</Description>
        {
          esAnkiDecks.map((e, index) => (
            <ListItem 
            key={index}
            linkRef={e.link}
            linkName={e.name}
            />
          ))
        }
      </BlockWrapper>
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
  margin-top: 20px;
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

const BlockWrapper = styled.article`
  display: inline-block;
  margin-right: 80px;
`