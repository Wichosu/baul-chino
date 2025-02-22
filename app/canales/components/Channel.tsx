"use client"
import styled from "styled-components"
import Link from "next/link"
import { IChannel } from "../interfaces/IChannel"

interface Props {
  channel: IChannel
}

export default function Channel ({ channel }: Props) {
  return (
    <Container>
      <Title href={channel.url} target="_blank">{ channel.name }</Title>
      <Description>{ channel.description }</Description>
      <Categories>{ channel.channel_category.map(({ category }) => `${category.name} | `)}</Categories>
      <Categories>{ channel.channel_language.map(({ language }) => `${language.name} | `)}</Categories>
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