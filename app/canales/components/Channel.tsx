"use client"
import styled from "styled-components"
import Link from "next/link"

type IChannel = {
  name: string,
  description: string,
  url: string,
  categories: string[],
  languages: string[]
}

interface Props {
  channel: IChannel
}

export default function Channel ({ channel }: Props) {
  return (
    <Container>
      <Title href={channel.url} target="_blank">{ channel.name }</Title>
      <Description>{ channel.description }</Description>
      <Categories>{ channel.categories.map((category) => `${category} | `)}</Categories>
      <Categories>{ channel.languages.map((language) => `${language} | `)}</Categories>
    </Container>
  )
}

const Container = styled.article`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: hsl(213, 98%, 45%);
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Categories = styled.small`
  display: block;
  margin-bottom: 5px;

  &::last-letter {
    color: transparent;
  }
`