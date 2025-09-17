import { createClient } from '@/src/app/utils/supabase/client';
import TemplateSection from './TemplateSection';
import { useTranslations } from 'next-intl';

export type TemplateObject = {
  textAlt: string;
  img: string;
  imgFallback: string;
  pdfUrl: string;
};

function createTemplateObject(
  textAlt: string,
  img: string,
  imgFallback: string,
  pdfUrl: string
): TemplateObject {
  const supabase = createClient();

  const { data } = supabase.storage.from('templates').getPublicUrl(pdfUrl);

  return {
    textAlt,
    img,
    imgFallback,
    pdfUrl: data.publicUrl,
  };
}

export default function Templates() {
  const t = useTranslations('Templates.Templates');

  const TemplatesData = [
    createTemplateObject(
      `${t('Download')} 12mm`,
      '/templates/template12mm.avif',
      '/templates/template12mm.jpg',
      'template12mm.pdf'
    ),
    createTemplateObject(
      `${t('Download')} 16mm`,
      '/templates/template16mm.avif',
      '/templates/template16mm.jpg',
      'template16mm.pdf'
    ),
    createTemplateObject(
      `${t('Download')} 20mm`,
      '/templates/template20mm.avif',
      '/templates/template20mm.jpg',
      'template20mm.pdf'
    ),
  ];

  const TemplatesTypeAData = [
    createTemplateObject(
      `${t('Download')} 12mm`,
      '/templates/templateA12mm.avif',
      '/templates/templateA12mm.jpg',
      'templateA12mm.pdf'
    ),
    createTemplateObject(
      `${t('Download')} 16mm`,
      '/templates/templateA16mm.avif',
      '/templates/templateA16mm.jpg',
      'templateA16mm.pdf'
    ),
    createTemplateObject(
      `${t('Download')} 20mm`,
      '/templates/templateA20mm.avif',
      '/templates/templateA20mm.jpg',
      'templateA20mm.pdf'
    ),
  ];

  return (
    <section>
      <TemplateSection data={TemplatesData}>{t('Section1')}</TemplateSection>
      <TemplateSection data={TemplatesTypeAData}>
        {t('Section2')}
      </TemplateSection>
    </section>
  );
}
