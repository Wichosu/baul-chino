import React from 'react';
import { Hero } from '@/src/app/components/Hero';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/app/components/Accordion';
import { Books } from '@/src/app/constants/newhskaudio2026/newhskaudiocollection';
import Audio from '@/src/app/components/Audio/Audio';
import { Button } from '@/src/app/components/Button';
import { Metadata } from 'next';
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
  const t = await getTranslations({
    locale,
    namespace: 'NewHskAudios.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    alternates: {
      canonical: '/new-hsk-audios-2026',
      languages: {
        es: '/es/new-hsk-audios-2026',
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

  const t = await getTranslations('NewHskAudios');

  // "HSK 4A TEXTBOOK (HSK 3.0 2026 Edition)" -> hsk-4a
  // workbooks get a suffix so both books of a level stay linkable
  const anchorFor = (title: string) => {
    const level = title.split(' ').slice(0, 2).join('-').toLowerCase();
    return title.includes('WORKBOOK') ? `${level}-workbook` : level;
  };

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block my-4'>{t('HeroMessage2')}</span>
      </Hero>
      <AccordionRoot type='multiple' width='full'>
        {Books.map((book, index) => (
          <AccordionItem
            value={`book-${index}`}
            id={anchorFor(book.title)}
            marginY='2'
            key={`book-${index}`}
          >
            <AccordionTrigger>{book.title}</AccordionTrigger>
            <AccordionContent marginX='1'>
              {book.zipUrl && (
                <Button
                  as='link'
                  href={book.zipUrl}
                  target='_blank'
                  type='yellow'
                  margin='none'
                  className='block w-fit whitespace-normal mb-3'
                >
                  {t('DownloadAllZip')}
                </Button>
              )}
              <AccordionRoot type='multiple' width='full' theme='quiet'>
                {book.lessons.map((lesson, index) => (
                  <AccordionItem
                    value={`unit-${index}`}
                    marginY='1'
                    key={`unit-${index}`}
                  >
                    <AccordionTrigger>{lesson.title}</AccordionTrigger>
                    <AccordionContent padding='2'>
                      {lesson.audioTracks.map((audioTrack, index) => (
                        <Audio
                          caption={`${book.title} - ${audioTrack.title}`}
                          audioUrl={audioTrack.url}
                          key={index}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
}
