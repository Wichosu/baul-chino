"use client"
import styled from "styled-components"
import { useTemplateContext } from "./TemplateContext"
import { useTranslations } from "next-intl"

type Props = {
  toPDF: (filename: string) => void
}

export default function TemplateDownload({ toPDF }: Props) {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.TemplateDownload')
  const { filename } = useTemplateContext()
  
  return (
    <Container>
      <Label>{t('Title')}</Label>
      <Input type="text" placeholder={t('Placeholder')} onChange={(e) => filename.current = e.target.value.trim()} />
      <DownloadButton onClick={() => toPDF(filename.current)}>{t('DownloadButton')}</DownloadButton>
    </Container>
  )
}

const Container = styled.section`
`

const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 10px;
  }
`

const Input = styled.input`
  display: block;
  font-size: 1.25rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  border-bottom: 1px solid #333333;
  margin-top: 20px;
  margin-bottom: 20px;

  &:focus {
    border: none;
  }

  @media (min-width: 768px) {
    display: inline-block;
    width: 350px;
    margin-right: 20px;
  }
`

const DownloadButton = styled.button`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
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