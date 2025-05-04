"use client"
import styled from "styled-components"
import { useTemplateContext } from "../TemplateContext"
import Image from "next/image"
import DeleteIcon from "../../assets/delete.svg"
import { Title as TitleType } from "../TemplateContext"
import { useTranslations } from "next-intl"

export default function TitleForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.TitleForm')
  const { titles, setTitles } = useTemplateContext()

  const generateUUID = () => {
    if (typeof window !== "undefined" && window.crypto) {
      return window.crypto.randomUUID()
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const handleMarginRightChange = (e: React.ChangeEvent<HTMLInputElement>, title: TitleType) => {
    const value = Number(e.target.value)
    const maxValue = 50
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()

      setTitles(titles.map((oldTitle) => {
        if (oldTitle.uuid === title.uuid) {
          return { ...oldTitle, marginRight: minValue }
        }

        return oldTitle
      }))

      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()

      setTitles(titles.map((oldTitle) => {
        if (oldTitle.uuid === title.uuid) {
          return { ...oldTitle, marginRight: maxValue }
        }

        return oldTitle
      }))

      return
    }

    e.target.value = value.toString()

    setTitles(titles.map((oldTitle) => {
      if (oldTitle.uuid === title.uuid) {
        return { ...oldTitle, marginRight: value }
      }

      return oldTitle
    }))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, title: TitleType) => {
    const value = e.target.value

    setTitles(titles.map((oldTitle) => {
      if (oldTitle.uuid === title.uuid) {
        return { ...oldTitle, name: value }
      }

      return oldTitle
    }))
  }

  return (
    <Container>
      <Title>{t('Title')}</Title>
      {
        titles.map((title, index) => (
          <ScrollContainer key={index}>
            <Icon alt="Eliminar Titulo" src={DeleteIcon} onClick={() => setTitles(titles.filter((_, i) => i !== index))} />
            <ModifierContainer>
              <Label>{t('Label1')}</Label>
              <Input
                type="text"
                defaultValue={title.name}
                onChange={(e) => handleNameChange(e, title)}
                placeholder={t('Placeholder1')}
              />
            </ModifierContainer>
            <ModifierContainer>
              <Label>{t('Label2')}</Label>
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
      <Button
        onClick={() => setTitles([...titles, { uuid: generateUUID(), name: "", marginRight: 0 }])}
        $display={titles.length >= 3 ? "none" : "block"}
      >
        {t('AddButton')}
      </Button>
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

const Button = styled.button<{ $display?: "none" | "block" }>`
  display: ${props => props.$display || "block"};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  background-color: ${props => props.theme.colors.blue};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: ${props => props.theme.colors.blueHover};
  }

  @media (min-width: 768px) {
    display: ${props => props.$display || "block"};
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
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const Input = styled.input`
  display: block;
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
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
  background-color: ${props => props.theme.colors.grayBackground};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`