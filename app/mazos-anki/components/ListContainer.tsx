"use client"
import styled from "styled-components";
import ListItem from "./ListItem";

const ankiDecks = [
  {
    name: 'HSK1',
    link: '/hsk-1.apkg'
  }
];

export default function ListContainer() {
  return (
    <Container>
      {
        ankiDecks.map((e, index) => (
          <ListItem 
            key={index} 
            linkRef={e.link}
            linkName={e.name}
          />
        ))
      }
    </Container>
  )
};

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`