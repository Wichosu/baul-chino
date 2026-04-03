import React from 'react';
import { Hero } from '@/src/app/components/Hero';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/app/components/Accordion';
import { Books } from '@/src/app/constants/hskaudio/hskaudiocollection';
import Audio from '@/src/app/components/Audio/Audio';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { Button } from '../../components/Button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HskAudios.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/hsk-audios',
      languages: {
        es: '/es/hsk-audios',
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

  const t = await getTranslations('HskAudios');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block my-4'>{t('HeroMessage2')}</span>
        <Button
          as='link'
          href='/hsk-audios-download'
          type='yellow'
          margin='none'
          className='block whitespace-normal w-fit'
        >
          {t('DownloadButton')}
        </Button>
      </Hero>
      <AccordionRoot type='multiple' width='full'>
        {Books.map((book, index) => (
          <AccordionItem
            value={`book-${index}`}
            marginY='2'
            key={`book-${index}`}
          >
            <AccordionTrigger>{book.title}</AccordionTrigger>
            <AccordionContent marginX='1'>
              <AccordionRoot type='multiple' width='full'>
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
                        >
                          <source src={audioTrack.url} type='audio/mp3' />
                        </Audio>
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
