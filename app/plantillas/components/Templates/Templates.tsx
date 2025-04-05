"use client"
import styled from "styled-components"
import template12mm from "../../assets/template12mm.png";
import TemplateCard from "./TemplateCard";
import { StaticImageData } from "next/image";

type TemplateObject = {
  textAlt: string,
  img: string | StaticImageData,
  pdfUrl: string
}

function createTemplateObject(textAlt: string, img: string | StaticImageData, pdfUrl: string): TemplateObject {
  return {
    textAlt,
    img,
    pdfUrl
  }
}

const TemplatesData = [
  createTemplateObject("Descarga plantilla 12mm", template12mm, ""),
  createTemplateObject("Descarga plantilla 16mm", template12mm, ""),
  createTemplateObject("Descarga plantilla 20mm", template12mm, ""),
]

const TemplatesTypeAData = [
  createTemplateObject("Descarga plantilla 12mm", template12mm, ""),
  createTemplateObject("Descarga plantilla 16mm", template12mm, ""),
  createTemplateObject("Descarga plantilla 20mm", template12mm, ""),
]

export default function Templates() {
  return (
    <Container>
      <TemplateWrapper>
        {
          TemplatesData.map((templateCard, index) => (
            <TemplateCard
              key={index}
              textAlt={templateCard.textAlt}
              img={templateCard.img}
              pdfUrl={templateCard.pdfUrl}
            />
          ))
        }
      </TemplateWrapper>
      <TemplateWrapper>
        {
          TemplatesTypeAData.map((templateCard, index) => (
            <TemplateCard
              key={index}
              textAlt={templateCard.textAlt}
              img={templateCard.img}
              pdfUrl={templateCard.pdfUrl}
            />
          ))
        }
      </TemplateWrapper>
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

const TemplateWrapper = styled.article`
  width: fit-content;
  margin: 0 auto;
`