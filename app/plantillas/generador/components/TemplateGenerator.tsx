"use client"
import styled from "styled-components";
import { useRef, createContext } from "react";
import generatePDF from "react-to-pdf";
import TemplatePreview from "./TemplatePreview";
import TemplateDownload from "./TemplateDownload";

export const TemplateContext = createContext({})

export default function TemplateGenerator() {
  const targetRef = useRef<HTMLDivElement>(null!)

  const toPDF = async () => {
    generatePDF(targetRef, { filename: "template.pdf" })
  }

  return (
    <TemplateContext.Provider value={{}}>
      <Container>
        <TemplateDownload toPDF={toPDF} />
        <TemplatePreview targetRef={targetRef} />
      </Container>
    </TemplateContext.Provider>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

