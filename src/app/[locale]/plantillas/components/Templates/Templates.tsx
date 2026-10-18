import { createClient } from '@/src/app/utils/supabase/client';
import TemplateSection from './TemplateSection';
import { useTranslations } from 'next-intl';

export type TemplateObject = {
  textAlt: string;
  img: string;
  imgFallback: string;
  pdfUrl: string;
};

// Single shared client: getPublicUrl is pure URL construction, no network
const supabase = createClient();

const TEMPLATE_SIZES = ['12mm', '16mm', '20mm'] as const;

export default function Templates() {
  const t = useTranslations('Templates.Templates');

  const buildTemplates = (variant: string): TemplateObject[] =>
    TEMPLATE_SIZES.map((size) => {
      const name = `template${variant}${size}`;

      const { data } = supabase.storage
        .from('templates')
        .getPublicUrl(`${name}.pdf`);

      return {
        textAlt: `${t('Download')} ${size}`,
        img: `/templates/${name}.avif`,
        imgFallback: `/templates/${name}.jpg`,
        pdfUrl: data.publicUrl,
      };
    });

  const TemplatesData = buildTemplates('');
  const TemplatesTypeAData = buildTemplates('A');

  return (
    <section>
      <TemplateSection data={TemplatesData}>{t('Section1')}</TemplateSection>
      <TemplateSection data={TemplatesTypeAData}>
        {t('Section2')}
      </TemplateSection>
    </section>
  );
}
