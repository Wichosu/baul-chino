"use client"
import styled from "styled-components"
import Link from "next/link"

type IChannel = {
  name: string,
  description: string,
  url: string,
  categories: string[]
}

interface Props {
  channel: IChannel
}

export default function Channel ({ channel }: Props) {
  return (
    <Container>
      <Title href={channel.url} target="_blank">{ channel.name }</Title>
      <span> - { channel.categories.map((category) => `${category} | `)}</span>
      <p>{ channel.description }</p>
    </Container>
  )
}

const Container = styled.article`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
