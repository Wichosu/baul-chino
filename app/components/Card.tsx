"use client"
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <Container>
      { children }
    </Container>
  );
}

const Container = styled.article`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Title({ children }: { children: string }) {
  return (
    <StyledTitle>{ children }</StyledTitle>
  )
}

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

function CardImage({ imgAlt, img }: { imgAlt: string, img: string | StaticImageData }) {
  return (
    <ImageContainer>
      <StyledImage alt={imgAlt} src={img} width={500} height={500} objectFit="contain" />
    </ImageContainer>
  )
}

const ImageContainer = styled.figure`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: 'contain';
  aspect-ratio: 1 / 1;
`;

function Description({ children }: { children: string }) {
  return (
    <StyledDescription>{ children }</StyledDescription>
  )
}

const StyledDescription = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Button({ linkRef, children }: { linkRef: string, children: ReactNode }) {
  return (
    <StyledButton href={linkRef}>{ children }</StyledButton>
  )
}

const StyledButton = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  background-color: hsl(213, 93%, 67%);
  color: hsl(0, 0%, 98%);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

Card.Title = Title
Card.CardImage = CardImage
Card.Description = Description
Card.Button = Button