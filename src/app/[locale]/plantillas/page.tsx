import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Templates from './components/Templates/Templates';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { languageList } from '@/src/app/utils/languages/languageList';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Templates.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/en',
      languages: {
        es: '/es',
      },
    },
  };
}

export async function generateStaticParams() {
  return languageList.map((lang) => ({
    locale: lang,
  }));
}

export default function Page() {
  const t = useTranslations('Templates');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span>{t('HeroMessage1')}</span>
        <br />
        <span>{t('HeroMessage2')}</span>
      </Hero>
      <Templates />
    </>
  );
}
