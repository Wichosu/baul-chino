import template12mm from "../../assets/template12mm.png";
import template16mm from "../../assets/template16mm.png";
import template20mm from "../../assets/template20mm.png";
import templateA12mm from "../../assets/templateA12mm.png";
import templateA16mm from "../../assets/templateA16mm.png";
import templateA20mm from "../../assets/templateA20mm.png";
import { StaticImageData } from "next/image";
import { createClient } from "@/src/app/utils/supabase/client";
import TemplateSection from "./TemplateSection";
import { useTranslations } from "next-intl";

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

export default function Templates() {
  const t = useTranslations('Templates.Templates')

  const TemplatesData = [
    createTemplateObject(`${t('Download')} 12mm`, template12mm, "template12mm.pdf"),
    createTemplateObject(`${t('Download')} 16mm`, template16mm, "template16mm.pdf"),
    createTemplateObject(`${t('Download')} 20mm`, template20mm, "template20mm.pdf"),
  ]

  const TemplatesTypeAData = [
    createTemplateObject(`${t('Download')} 12mm`, templateA12mm, "templateA12mm.pdf"),
    createTemplateObject(`${t('Download')} 16mm`, templateA16mm, "templateA16mm.pdf"),
    createTemplateObject(`${t('Download')} 20mm`, templateA20mm, "templateA20mm.pdf"),
  ]

  return (
    <section>
      <TemplateSection data={TemplatesData}>{t('Section1')}</TemplateSection>
      <TemplateSection data={TemplatesTypeAData}>{t('Section2')}</TemplateSection>
    </section>
  )
}