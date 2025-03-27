"use client"
import styled from "styled-components";
import ListItem from "./ListItem";
import Card from "@/app/components/Card";
import demoImage from "../../images/hsk-books.png"

const hskBooks = [
  {
    name: 'HSK-1-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1mFknn3Br7Agm8grJqe2GljOUzTaEmMG7/view?usp=sharing'
  },
  {
    name: 'HSK-1-WORKBOOK',
    link: 'https://drive.google.com/file/d/1XNHgGXIqKAUq6W2-bnaF5GB-QKgk34Im/view?usp=sharing'
  },
  {
    name: 'HSK-2-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1lBEXmHlaOdY65u_f8EfR4Bpj3vbbxG0l/view?usp=sharing'
  },
  {
    name: 'HSK-2-WORKBOOK',
    link: 'https://drive.google.com/file/d/1kcWivHKplSZ6xpyQzv5oTBCMO4jj3zn-/view?usp=sharing'
  },
  {
    name: 'HSK-3-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1xbmulSI8NcEk6VByYajS-P0WMg8T1brn/view?usp=sharing'
  },
  {
    name: 'HSK-3-WORKBOOK',
    link: 'https://drive.google.com/file/d/1U4DSrND68LQt_khgPSwyex7TiJPfZPgl/view?usp=sharing'
  },
  {
    name: 'HSK-4A-TEXTBOOK',
    link: 'https://drive.google.com/file/d/17y8Nfq0LWRn7ddF3JgYEQTp0dr-Tulxf/view?usp=sharing'
  },
  {
    name: 'HSK-4A-WORKBOOK',
    link: 'https://drive.google.com/file/d/19C0GVcYbulG8W2lUp7d3JbVkLQ5SEyV6/view?usp=sharing'
  },
  {
    name: 'HSK-4B-TEXTBOOK',
    link: 'https://drive.google.com/file/d/13pig_-Tw3P0S7lPpmc30LQK8NxUvDT2_/view?usp=sharing'
  },
  {
    name: 'HSK-4B-WORKBOOK',
    link: 'https://drive.google.com/file/d/1QvQra8cWsqUguI8Y4XUzV4vdpvLG4_WZ/view?usp=sharing'
  },
  {
    name: 'HSK-5A-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1rJ6OvvWSpvuJmmvTArOOJhLyHjNnYGWJ/view?usp=sharing'
  },
  {
    name: 'HSK-5A-WORKBOOK',
    link: 'https://drive.google.com/file/d/14QbkzaCUtRttf_QAtOoQKYrDfMiT3fjL/view?usp=sharing'
  },
  {
    name: 'HSK-5B-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1DgC7WQRwqU7u6mYlj7v5XbCd8107u92d/view?usp=sharing'
  },
  {
    name: 'HSK-5B-WORKBOOK',
    link: 'https://drive.google.com/file/d/1RF9imDi1_FarkaCJ0R44prJzyu25wIgz/view?usp=sharing'
  },
  {
    name: 'HSK-6A-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1JrHI-AEyuTe2x9Lp_PHMnApe1dhkvjvQ/view?usp=sharing'
  },
  {
    name: 'HSK-6A-WORKBOOK',
    link: 'https://drive.google.com/file/d/1urdLjV1Qnsmc2NLvViV_l9bdt6TBNc6O/view?usp=sharing'
  },
  {
    name: 'HSK-6B-TEXTBOOK',
    link: 'https://drive.google.com/file/d/1w7KLfxIvNB9H00Zka5Oc2B6tvxW_WTW4/view?usp=sharing'
  },
  {
    name: 'HSK-6B-WORKBOOK',
    link: 'https://drive.google.com/file/d/1bsADrkgkBDR9vkxmHxDM94VYj2YAIZ49/view?usp=sharing'
  },
];

export default function ListContainer() {
  return (
    <Container>
      <Title>Haz click para descargar el libro HSK deseado</Title>
      <BooksContainer>
        {
          hskBooks.map((e, index) => (
            <Card key={index}>
              <Card.Title>{ e.name }</Card.Title>
              <Card.CardImage img={demoImage} imgAlt={e.name} />
              <Card.Button linkRef={e.link}>Descargar { e.name }</Card.Button>
            </Card>
          ))
        }
      </BooksContainer>
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
  margin-bottom: 20px;
`

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`