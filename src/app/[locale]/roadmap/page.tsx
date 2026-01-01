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

  const t = await getTranslations({ locale, namespace: 'Roadmap.Metadata' });

  return (
    <section className='my-6'>
      <h2 className='text-3xl text-center font-medium mb-2'>
        Baulchino Roadmap
      </h2>
      <p className='text-lg text-center mb-2'>
        Here you can find what I'm currently working on and some future plans:
      </p>
      <ul className='flex flex-wrap gap-4 w-fit mx-auto'>
        <RoadmapItem title='HSK Mock Test Simulator' status='in-progress'>
          <p>
            A mock test simulator for the HSK (HSK 1-6) exams. It allows you to
            practice the HSK exams and get a feel for the format and difficulty
            of the exams.
          </p>
          <br />
          <p>
            I already made some progress with this feature, but I do find it
            challenging to implement, you can check out my progress in the HSK
            Mock Test page of this site.
          </p>
        </RoadmapItem>
        <RoadmapItem title='HSK Workbook and Textbook answers' status='pending'>
          <p>
            I got a request to submit an answer sheet like with all answers from
            HSK books. I think it's a good idea and so far only release the PDF
            file with answers to HSK 1 workbook.
          </p>
          <br />
          <p>
            Although I'm interested in eventually making a PDF with answers for
            every book in the HSK series.
          </p>
        </RoadmapItem>
        <RoadmapItem title='Phonetic Table' status='pending'>
          <p>
            One of the most requested features and one of my most excited to
            work on.
          </p>
          <br />
          <p>
            The phonetic table will be split in two, first maybe buttons with
            only vowels and their tones, and then the table with all consonants
            and their tones.{' '}
          </p>
        </RoadmapItem>
      </ul>
    </section>
  );
}
