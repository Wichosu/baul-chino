import React from 'react';
import { Hero } from '@/src/app/components/Hero';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { HskAudioDownloadBundles } from '@/src/app/constants/hskaudiodownload/hskaudiodownloadbundles';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'HskAudiosDownload.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    alternates: {
      canonical: '/hsk-audios-download',
      languages: {
        es: '/es/hsk-audios-download',
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

  const t = await getTranslations('HskAudiosDownload');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block mb-4'>{t('HeroMessage')}</span>
        <Button
          as='link'
          href='/hsk-audios'
          type='yellow'
          margin='none'
          className='block whitespace-normal w-fit'
        >
          {t('GoToHskAudios')}
        </Button>
      </Hero>
      <section className='my-8'>
        <h2 className='text-3xl font-medium text-neutral-800 mb-6'>
          {t('SectionTitle')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {HskAudioDownloadBundles.map((bundle) => (
            <Card
              as='article'
              key={bundle.level}
              elevation='2'
              padding='3'
              margin='none'
              rounded='2'
            >
              <h3 className='text-2xl font-medium text-center mb-4'>
                {bundle.level}
              </h3>
              <div className='flex flex-col gap-4 items-center text-center'>
                {bundle.files.map((file) => (
                  <Button
                    key={file.title}
                    as='link'
                    href={file.url}
                    type='yellow'
                    margin='none'
                    padding='2'
                    rounded='1'
                  >
                    {file.title}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
