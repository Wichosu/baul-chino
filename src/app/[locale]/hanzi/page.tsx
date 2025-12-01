import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Writer from './components/Writer';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

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

  const t = await getTranslations('Hanzi');

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
