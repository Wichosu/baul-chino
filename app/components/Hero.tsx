"use client"
import styled from "styled-components"

export default function Hero() {
  return (
    <Container>
      <Title>
        Baúl Chino
      </Title>
      <WelcomeMessage>
        Baúl Chino tiene como propósito ser una página con material didáctico para apoyar el aprendizaje del idioma Chino Mandarín. 好好学习, 天天向上.
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