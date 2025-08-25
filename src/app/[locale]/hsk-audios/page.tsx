import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/app/components/Accordion';
import { Books } from '@/src/app/constants/hskaudiocollection';
import Audio from '@/src/app/components/Audio/Audio';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

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

export default function Page() {
  const t = useTranslations('HskAudios');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <AccordionRoot type='multiple' width='full'>
        {Books.map((book, index) => (
          <AccordionItem
            value={`book-${index}`}
            marginY='1'
            key={`book-${index}`}
          >
            <AccordionTrigger>{book.title}</AccordionTrigger>
            <AccordionContent marginX='1'>
              <AccordionRoot type='multiple' width='full'>
                {book.units.map((unit, index) => (
                  <AccordionItem
                    value={`unit-${index}`}
                    marginY='1'
                    key={`unit-${index}`}
                  >
                    <AccordionTrigger>{unit.title}</AccordionTrigger>
                    <AccordionContent padding='2'>
                      {unit.audioTracks.map((audioTrack, index) => (
                        <Audio caption={audioTrack.title} key={index}>
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
