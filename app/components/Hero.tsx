"use client"
import styled from "styled-components"

interface Props {
  children: string
}

export default function Hero({ children }: Props) {
  return (
    <Container>
      <Title>
        Baúl Chino
      </Title>
      <WelcomeMessage>
        { children }
      </WelcomeMessage>
    </Container>
  )
}

const Container = styled.div`
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