"use client"
import styled from "styled-components"

type Props = {
  toPDF: () => void
}

export default function TemplateDownload({ toPDF }: Props) {
  return (
    <>
      <Label>Nombre de tu plantilla: </Label>
      <Input type="text" placeholder="Escribe el nombre de tu plantilla" />
      <DownloadButton onClick={toPDF}>Descargar Plantilla</DownloadButton>
    </>
  )
}

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`

const Input = styled.input`
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
    margin-right: 40px;
  }
`

const DownloadButton = styled.button`
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
`