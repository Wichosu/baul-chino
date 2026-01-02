import React from 'react';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { RoadmapItem } from '@/src/app/components/Roadmap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Roadmap.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/roadmap',
      languages: {
        es: '/es/roadmap',
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

  const t = await getTranslations('Roadmap');

  return (
    <section className='my-6'>
      <h2 className='text-3xl text-center font-medium mb-2'>{t('Title')}</h2>
      <p className='text-lg text-center mb-2'>{t('Paragraph')}</p>
      <ul className='flex flex-wrap gap-4 w-fit mx-auto'>
        <RoadmapItem title={t('Card1.Title')} status='in-progress'>
          <p>{t('Card1.Paragraph1')}</p>
          <br />
          <p>{t('Card1.Paragraph2')}</p>
        </RoadmapItem>
        <RoadmapItem title={t('Card2.Title')} status='pending'>
          <p>{t('Card2.Paragraph1')}</p>
          <br />
          <p>{t('Card2.Paragraph2')}</p>
        </RoadmapItem>
        <RoadmapItem title={t('Card3.Title')} status='pending'>
          <p>{t('Card3.Paragraph1')}</p>
          <br />
          <p>{t('Card3.Paragraph2')}</p>
        </RoadmapItem>
      </ul>
    </section>
  );
}
