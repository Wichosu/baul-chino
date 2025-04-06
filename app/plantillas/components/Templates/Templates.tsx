"use client"
import styled from "styled-components"
import template12mm from "../../assets/template12mm.png";
import template16mm from "../../assets/template16mm.png";
import template20mm from "../../assets/template20mm.png";
import templateA12mm from "../../assets/templateA12mm.png";
import templateA16mm from "../../assets/templateA16mm.png";
import templateA20mm from "../../assets/templateA20mm.png";
import { StaticImageData } from "next/image";
import { createClient } from "@/app/utils/supabase/client";
import TemplateSection from "./TemplateSection";

export type TemplateObject = {
  textAlt: string,
  img: string | StaticImageData,
  pdfUrl: string
}

function createTemplateObject(textAlt: string, img: string | StaticImageData, pdfUrl: string): TemplateObject {
  const supabase = createClient()

  const { data } = supabase.storage.from('templates').getPublicUrl(pdfUrl)

  return {
    textAlt,
    img,
    pdfUrl: data.publicUrl
  }
}

const TemplatesData = [
  createTemplateObject("Descargar plantilla 12mm", template12mm, "template12mm.pdf"),
  createTemplateObject("Descargar plantilla 16mm", template16mm, "template16mm.pdf"),
  createTemplateObject("Descargar plantilla 20mm", template20mm, "template20mm.pdf"),
]

const TemplatesTypeAData = [
  createTemplateObject("Descargar plantilla 12mm", templateA12mm, "templateA12mm.pdf"),
  createTemplateObject("Descargar plantilla 16mm", templateA16mm, "templateA16mm.pdf"),
  createTemplateObject("Descargar plantilla 20mm", templateA20mm, "templateA20mm.pdf"),
]

export default function Templates() {
  return (
    <Container>
      <TemplateSection data={TemplatesData}>Plantillas sin Encabezado</TemplateSection>
      <TemplateSection data={TemplatesTypeAData}>Plantillas con Encabezado</TemplateSection>
    </Container>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`