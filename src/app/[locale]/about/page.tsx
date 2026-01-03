import React from 'react';
import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { RoadmapItem } from '@/src/app/components/Roadmap';
import { KoFiButton } from '@/src/app/components/KoFiButton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/about',
      languages: {
        es: '/es/about',
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

  const t = await getTranslations('About');

  return (
    <>
      <section>
        <h1 className='text-center text-4xl font-medium my-8'>{t('Title')}</h1>
        <figure className='w-fit mx-auto'>
          <picture className='block rounded overflow-hidden'>
            <Image
              src={'/about/wichosu.jpeg'}
              alt={t('Altfigcaption')}
              width={'250'}
              height={'250'}
            />
          </picture>
          <figcaption className='text-center font-medium pt-1 bg-yellow-100 rounded'>
            {t('Figcaption')}
          </figcaption>
        </figure>
        <article className='text-lg my-4'>
          <h2 className='text-3xl text-center font-medium mb-2'>
            {t('Subtitle')}
          </h2>
          <div className='max-w-xl mx-auto'>
            <p>{t('Paragraph1')}</p>
            <br />
            <p>{t('Paragraph2')}</p>
          </div>
        </article>
      </section>
    </>
  );
}
