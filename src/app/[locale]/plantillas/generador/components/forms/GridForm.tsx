"use client"
import styled from "styled-components"
import { useTemplateContext } from "../TemplateContext"
import { useTranslations } from "next-intl"

export default function GridForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.GridForm')
  const { gridGap, squareCount, setGridGap, setSquareCount } = useTemplateContext()

  const handleGridGapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const maxValue = 50
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()
      setGridGap(minValue)
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      setGridGap(maxValue)
      return
    }

    e.target.value = value.toString()
    setGridGap(value)
  }

  const handleSquareCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const maxValue = 999
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()
      setSquareCount(minValue)
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      setSquareCount(maxValue)
      return
    }

    e.target.value = value.toString()
    setSquareCount(value)
  }

  return (
    <Container>
      <Title>{t('Title')}</Title>
      <ModifierContainer>
        <Label htmlFor="gridGap">{t('Label1')}</Label>
        <Span>{t('Span1')}</Span>
        <InputContainer>
          <InputUnit
            type="number" 
            id="gridGap" 
            onChange={handleGridGapChange} 
            defaultValue={gridGap}
          />
          <InputUnitSpan>mm</InputUnitSpan>
        </InputContainer>
      </ModifierContainer>
      <ModifierContainer>
        <Label htmlFor="squareCount">{t('Label2')}</Label>
        <Span>{t('Span2')}</Span>
        <Input
          type="number" 
          id="squareCount" 
          onChange={handleSquareCountChange} 
          defaultValue={squareCount}
        />
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