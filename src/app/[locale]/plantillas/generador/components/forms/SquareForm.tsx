"use client"
import styled from "styled-components"
import { useTemplateContext } from "../TemplateContext"
import { useTranslations } from "next-intl"

export default function SquareForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.SquareForm')
  const { squareSize, setSquareSize } = useTemplateContext()

  const handleSquareSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const maxValue = 275
    const minValue = 10

    if(value <= minValue) {
      e.target.value = value.toString()
      setSquareSize(minValue)
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      setSquareSize(maxValue)
      return
    }

    e.target.value = value.toString()
    setSquareSize(value)
  }

  return (
    <Container>
      <Title>{t('Title')}</Title>
      <ModifierContainer>
        <Label htmlFor="squareSize">{t('Label1')}</Label>
        <Span>{t('Span1')}</Span>
        <InputContainer>
          <InputUnit
            type="number" 
            id="squareSize" 
            onChange={handleSquareSizeChange}
            defaultValue={squareSize}
          />
          <InputUnitSpan>mm</InputUnitSpan>
        </InputContainer>
      </ModifierContainer>
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

const ModifierContainer = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 20px;
  }
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const Span = styled.span`
  font-size: 0.75rem;
  display: block;
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