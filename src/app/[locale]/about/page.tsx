import React from 'react';
import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
        <h1 className='text-center text-4xl font-medium my-8'>
          About me and this website
        </h1>
        <figure className='w-fit mx-auto'>
          <picture className='block rounded overflow-hidden'>
            <Image
              src={'/about/wichosu.jpeg'}
              alt='A photo of Wichosu (baulchino maintainer)'
              width={'250'}
              height={'250'}
            />
          </picture>
          <figcaption className='text-center font-medium pt-1 bg-yellow-100 rounded'>
            Wichosu (2025-12-11)
          </figcaption>
        </figure>
        <h2 className='text-3xl font-medium'>Who am I?</h2>
        <p>
          Well, in case you ever wonder who is behind this website let me
          introduce myself. I'm Luis (aka Wichosu), I'm a software developer and
          from 2023 to 2024 I studied a bit of Chinese Mandarin in a local
          language school from my town, I had an amazing experience and got
          motivated to build some sort of software to help other people learn
          Mandarin, getting inspiration from other creators and websites I came
          with the idea of baulchino in January 2025, with time I added more
          features and well it's a project in constant evolution.
        </p>
        <h2 className='text-3xl font-medium'>Baulchino Roadmap</h2>
      </section>
    </>
  );
}
