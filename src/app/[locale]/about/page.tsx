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
        <article className='text-lg my-4'>
          <h2 className='text-3xl text-center font-medium mb-2'>Who am I?</h2>
          <div className='max-w-xl mx-auto'>
            <p>
              Hi! If you've ever wondered who's behind this website let me
              introduce myself. I'm Luis (aka Wichosu), a software developer and
              between 2023 and 2024 I studied Mandarin Chinese in a local
              language school in my hometown.
            </p>
            <br />
            <p>
              That experience motivated me to build software to help people
              learn Mandarin. Inspired by other creators and websites, I came up
              with the idea for Baulchino in January 2025. Over time, I’ve added
              more features, and it has become a project in constant evolution.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
