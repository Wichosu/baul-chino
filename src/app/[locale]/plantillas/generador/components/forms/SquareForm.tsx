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
            min={10}
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
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 20px;
`

const ModifierContainer = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 20px;
  }
`

const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const Span = styled.span`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
  display: block;
`

const InputContainer = styled.div`
`

const Input = styled.input`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.normal};
  width: 120px;
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
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
  background-color: ${props => props.theme.colors.grayBackground};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`