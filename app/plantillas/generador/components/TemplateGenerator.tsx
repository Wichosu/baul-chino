"use client"
import styled from "styled-components";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import TemplateContextProvider from "./TemplateContext";
import TemplateDownload from "./TemplateDownload";
import GridForm from "./forms/GridForm";
import SquareForm from "./forms/SquareForm";
import TemplatePreview from "./TemplatePreview";

export default function TemplateGenerator() {
  const targetRef = useRef<HTMLDivElement>(null!)

  const toPDF = async (filename: string) => {
    generatePDF(targetRef, { filename: filename })
  }

  return (
    <Container>
      <TemplateContextProvider>
        <TemplateDownload toPDF={toPDF} />
        <GridForm />
        <SquareForm />
        <TemplatePreview targetRef={targetRef} />
      </TemplateContextProvider>
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

