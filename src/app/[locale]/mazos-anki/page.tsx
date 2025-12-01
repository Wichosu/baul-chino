import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Downloads from './components/Downloads';
import ListContainer from './components/ListContainer';
import Instructions from './components/Instructions';
import ImageContainer from './components/ImageContainer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AnkiDecks.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/mazos-anki',
      languages: {
        es: '/es/mazos-anki',
      },
    },
  };
}

export default function Page() {
  const t = useTranslations('AnkiDecks');

  return (
    <>
      <Hero title={t('HeroTitle')}>{t('HeroMessage')}</Hero>
      <Downloads />
      <ListContainer />
      <Instructions />
      <ImageContainer />
    </>
  );
}
