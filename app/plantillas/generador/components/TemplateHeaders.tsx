"use client"
import styled from "styled-components"

export default function TemplateHeaders() {
  return (
    <Headers>
      <Title>Nombre:</Title>
      <SubHeaders>
        <Title>Fecha:</Title>
        <Title>Calificación:</Title>
      </SubHeaders>
    </Headers>
  )
}

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
`

const SubHeaders = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30mm;
  margin-right: 10mm;
  margin-left: auto;
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
`