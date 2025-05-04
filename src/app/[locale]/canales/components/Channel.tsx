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
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.blueHover};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 10px;
  margin-bottom: 10px;
`

const Categories = styled.small`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
  display: block;
  margin-bottom: 5px;

  &::last-letter {
    color: transparent;
  }
`