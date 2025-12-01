import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Downloads from './components/Downloads';
import ListContainer from './components/ListContainer';
import Instructions from './components/Instructions';
import ImageContainer from './components/ImageContainer';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations('AnkiDecks');

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
