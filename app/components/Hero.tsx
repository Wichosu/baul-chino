"use client"
import styled from "styled-components"
import { ReactNode } from "react"

interface Props {
  title: string
  children: string | ReactNode
}

export default function Hero({ title, children }: Props) {
  return (
    <Container>
      <Title>
        { title }
      </Title>
      <WelcomeMessage>
        { children }
      </WelcomeMessage>
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const WelcomeMessage = styled.p`
  font-size: 1rem;
`;