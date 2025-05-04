"use client"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import downloadIcon from "../../assets/download.svg";
import { StaticImageData } from "next/image";

type Props = {
  textAlt: string,
  img: string | StaticImageData,
  pdfUrl: string
}

export default function TemplateCard({ textAlt, img, pdfUrl }: Props) {
  return (
    <LinkWrapper href={pdfUrl} download target="_blank">
      <Figure>
        <StyledImage alt={textAlt} src={img} />
      </Figure>
      <TextWrapper>
        <Span>{textAlt}</Span>
        <IconFigure>
          <StyledImage alt="Download icon" src={downloadIcon} />
        </IconFigure>
      </TextWrapper>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const Figure = styled.figure`
  width: 300px;
  height: 400px;
  margin: 0 auto;
`

const IconFigure = styled.figure`
  width: 40px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: 'contain';
  aspect-ratio: 16 / 9;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${props => props.theme.colors.blue};
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  border: none;
  transition: 200ms ease;

  ${LinkWrapper}:hover & {
    background-color: ${props => props.theme.colors.blueHover};
  }
`

const Span = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.bold};
`