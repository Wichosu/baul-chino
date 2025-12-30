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
        <article className='my-4'>
          <h2 className='text-3xl text-center font-medium mb-2'>
            Baulchino Roadmap
          </h2>
          <p className='text-lg text-center mb-2'>
            Here you can find what I'm currently working on and some future
            plans:
          </p>
          <ul className='flex flex-wrap gap-4 w-fit mx-auto'>
            <RoadmapItem title='HSK Mock Test Simulator' status='in-progress'>
              <p>
                A mock test simulator for the HSK (HSK 1-6) exams. It allows you
                to practice the HSK exams and get a feel for the format and
                difficulty of the exams.
              </p>
              <br />
              <p>
                I already made some progress with this feature, but I do find it
                challenging to implement, you can check out my progress in the
                HSK Mock Test page of this site.
              </p>
            </RoadmapItem>
            <RoadmapItem
              title='HSK Workbook and Textbook answers'
              status='pending'
            >
              <p>
                I got a request to submit an answer sheet like with all answers
                from HSK books. I think it's a good idea and so far only release
                the PDF file with answers to HSK 1 workbook.
              </p>
              <br />
              <p>
                Although I'm interested in eventually making a PDF with answers
                for every book in the HSK series.
              </p>
            </RoadmapItem>
            <RoadmapItem title='Phonetic Table' status='pending'>
              <p>
                One of the most requested features and one of my most excited to
                work on.
              </p>
              <br />
              <p>
                The phonetic table will be split in two, first maybe buttons
                with only vowels and their tones, and then the table with all
                consonants and their tones.{' '}
              </p>
            </RoadmapItem>
          </ul>
        </article>
        <article>
          <h2 className='text-3xl text-center font-medium mb-2'>
            Support the project
          </h2>
          <div className='max-w-xl mx-auto text-lg'>
            <p className='mb-4'>
              If you’d like to support the project, you can do so by donating on
              Ko-fi. There’s absolutely no obligation — Baulchino will remain
              available regardless — but any support is truly appreciated and
              helps keep the project growing.
            </p>
            <p>
              The emails and comments I receive have been a great source of
              motivation, and I’m sincerely grateful for all of you. Knowing
              that Baulchino is helping you work toward your goals means more to
              me than anything else. Thank you for visiting and using Baulchino.
            </p>
            <div className='w-fit mx-auto'>
              <KoFiButton />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
