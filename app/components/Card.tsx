"use client"
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string,
  img: string,
  imgAlt: string,
  description: string,
  linkHref: string,
  linkName: string
}

export default function Card({ title, img, imgAlt, description, linkHref, linkName}: Props) {
  return (
    <Container>
      <Title>{`${title}`}</Title>
      <ImageContainer>
        <StyledImage alt={imgAlt} src={img} width={500} height={500} objectFit="contain" />
      </ImageContainer>
      <Description>{`${description}`}</Description>
      <Button><Link href={linkHref}>Ir a {`${linkName}`}</Link></Button>
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0;
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
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  background-color: hsl(213, 93%, 67%);
  color: hsl(0, 0%, 98%);
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;