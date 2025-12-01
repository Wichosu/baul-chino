export const dynamic = 'force-static';
import { Hero } from '@/src/app/components/Hero';
import TemplateGenerator from './components/TemplateGenerator';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'TemplateGenerator.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/plantillas/generador',
      languages: {
        es: '/es/plantillas/generador',
      },
    },
  };
}

export default function Page() {
  const t = useTranslations('TemplateGenerator');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span style={{ display: 'block' }}>{t('HeroMessage1')}</span>
        <span style={{ display: 'block' }}>{t('HeroMessage2')}</span>
      </Hero>
      <TemplateGenerator />
    </>
  );
}
