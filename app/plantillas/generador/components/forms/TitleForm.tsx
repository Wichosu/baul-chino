"use client"
import styled from "styled-components"
import { useTemplateContext } from "../TemplateContext"
import Image from "next/image"
import DeleteIcon from "../../assets/delete.svg"
import { Title as TitleType } from "../TemplateContext"

export default function TitleForm() {
  const { titles, setTitles } = useTemplateContext()

  const handleMarginRightChange = (e: React.ChangeEvent<HTMLInputElement>, title: TitleType) => {
    const value = Number(e.target.value)
    const maxValue = 30
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()
      title.marginRight = minValue
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      title.marginRight = maxValue
      return
    }

    e.target.value = value.toString()
    title.marginRight = value
  }

  return (
    <Container>
      <Title>Estilos del Encabezado</Title>
      {
        titles.map((title, index) => (
          <ScrollContainer key={index}>
            <Icon alt="Eliminar Titulo" src={DeleteIcon} onClick={() => setTitles(titles.filter((_, i) => i !== index))} />
            <ModifierContainer>
              <Label>Nombre:</Label>
              <Input
                type="text"
                defaultValue={title.name}
                onChange={(e) => title.name = e.target.value.trim()}
              />
            </ModifierContainer>
            <ModifierContainer>
              <Label>Margen Derecho:</Label>
              <InputContainer>
                <InputUnit
                  type="number"
                  defaultValue={title.marginRight}
                  onChange={(e) => handleMarginRightChange(e, title)}
                />
                <InputUnitSpan>mm</InputUnitSpan>
              </InputContainer>
            </ModifierContainer>
          </ScrollContainer>
        ))
      }
      <Button onClick={() => setTitles([...titles, { name: "", marginRight: 0 }])}>Agregar Titulo</Button>
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

const Button = styled.button`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background-color: hsl(213, 93%, 67%);
  color: white;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: hsl(213, 93%, 57%);
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const ScrollContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
`

const ModifierContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  scroll-snap-align: start;
`

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  scroll-snap-align: start;
  align-self: center;
  margin-right: 20px;
  object-fit: contain;
  aspect-ratio: 1 / 1;
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const Input = styled.input`
  display: block;
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
`

const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const InputUnit = styled(Input)`
  display: inline-block;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const InputUnitSpan = styled.span`
  font-size: 1rem;
  background-color: hsl(0, 0%, 85%);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`