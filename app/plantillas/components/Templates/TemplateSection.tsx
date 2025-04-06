"use client"
import styled from "styled-components"
import TemplateCard from "./TemplateCard"
import { TemplateObject } from "./Templates"
import HorizontalSlide from "@/app/components/animations/HorizontalSlide"
import useShowAnimation from "@/app/hooks/useShowAnimation"

type Props = {
  children: React.ReactNode | string
  data: TemplateObject[]
}

export default function TemplateSection({ children, data }: Props) {
  const { showAnimation, hideAnimation } = useShowAnimation()

  return (
    <>
      <TemplateHeader>{children}</TemplateHeader>
      <TemplateWrapper onTouchStart={hideAnimation}>
        { showAnimation && <HorizontalSlide width={40} height={40} /> }
        {
          data.map((templateCard, index) => (
            <TemplateCard
              key={index}
              textAlt={templateCard.textAlt}
              img={templateCard.img}
              pdfUrl={templateCard.pdfUrl}
            />
          ))
        }
      </TemplateWrapper>
    </>
  )
}

const TemplateWrapper = styled.article`
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  @media (min-width: 768px) {
    overflow: visible;
    flex-wrap: wrap;
  }
`

const TemplateHeader = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`