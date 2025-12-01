import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import Templates from './components/Templates/Templates';
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
  const t = await getTranslations({ locale, namespace: 'Templates.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/plantillas',
      languages: {
        es: '/es/plantillas',
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

  const t = await getTranslations('Templates');

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
