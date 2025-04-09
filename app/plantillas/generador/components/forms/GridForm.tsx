"use client"
import styled from "styled-components"

export default function GridForm() {
  return (
    <Container>
      <Title>Estilos de la Red</Title>
      <Label htmlFor="gridGap">Distancia entre cuadrados:</Label>
      <InputContainer>
        <InputUnit type="number" id="gridGap" />
        <InputUnitSpan>mm</InputUnitSpan>
      </InputContainer>
      <Label htmlFor="squareCount">Cantidad de cuadrados:</Label>
      <Input type="number" id="squareCount" />
    </Container>
  )
}

const Container = styled.section`

`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 20px;
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const InputContainer = styled.div`
`

const Input = styled.input`
  width: 120px;
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid black;
  border-radius: 4px;

  &:focus {
    border-color: transparent;
  }

  @media (min-width: 768px) {
    margin-right: 40px;
  }
`

const InputUnit = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const InputUnitSpan = styled.span`
  font-size: 1rem;
  background-color: hsl(0, 0%, 85%);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`