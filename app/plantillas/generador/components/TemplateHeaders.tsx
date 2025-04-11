"use client"
import styled from "styled-components"

export default function TemplateHeaders() {
  return (
    <Headers>
      {
        Array.from({ length: 3 }).map((_, index) => (
          <Title key={index}></Title>
        ))
      }
      <Title style={{ marginRight: "10mm" }}>Nombre:</Title>
      <Title style={{ marginRight: "40mm" }}>Fecha:</Title>
      <Title style={{ marginRight: "20mm" }}>Calificación:</Title>
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

const Title = styled.h2`
  margin: 0;
  padding: 0;
`