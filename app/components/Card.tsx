"use client"
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  title: string,
  imgAlt: string,
  img: string | StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
}

export default function Card({ title, imgAlt, img, description, linkHref, linkName}: Props) {
  return (
    <Container>
      <Title>{`${title}`}</Title>
      <ImageContainer>
        <StyledImage alt={imgAlt} src={img} width={500} height={500} objectFit="contain" />
      </ImageContainer>
      <Description>{`${description}`}</Description>
      <Button href={linkHref}>Ir a {`${linkName}`}</Button>
    </Container>
  );
}

const Container = styled.article`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0;
    flex: 1 1 400px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

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

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  background-color: hsl(213, 93%, 67%);
  color: hsl(0, 0%, 98%);
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;