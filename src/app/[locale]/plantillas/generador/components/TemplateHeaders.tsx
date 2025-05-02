"use client"
import styled from "styled-components"
import { useTemplateContext } from "./TemplateContext"

export default function TemplateHeaders() {
  const { titles } = useTemplateContext()

  return (
    <Headers>
      {
        titles.map((title, index) => (
          <Title key={index} $marginRight={title.marginRight}>{ title.name }</Title>
        ))
      }
    </Headers>
  )
}

const Headers = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`

// const SubHeaders = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 30mm;
//   margin-right: 10mm;
//   margin-left: auto;
// `

const Title = styled.h2<{ $marginRight?: number}>`
  margin: 0;
  padding: 0;

  margin-right: ${props => `${props.$marginRight}mm` || `${0}mm`};
`