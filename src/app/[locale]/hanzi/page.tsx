export const dynamic = 'force-static';
import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Writer from './components/Writer';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hanzi.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/hanzi',
      languages: {
        es: '/es/hanzi',
      },
    },
  };
}

export default function Page() {
  const t = useTranslations('Hanzi');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span style={{ display: 'block' }}>{t('HeroMessage1')}</span>
        <br />
        <span style={{ display: 'block' }}>{t('HeroMessage2')}</span>
      </Hero>
      <Writer />
    </>
  );
}
