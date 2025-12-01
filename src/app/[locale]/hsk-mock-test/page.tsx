import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-static';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
import { MockTestBundles } from '@/src/app/constants/hskmocktest/hskmocktestbundles';
import { MockTestCardFetch } from '@/src/app/components/MockTestCardFetch';
import { CardSkeleton } from '@/src/app/components/Card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'HskMockTest.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/hsk-mock-test',
      languages: {
        es: '/es/hsk-mock-test',
      },
    },
  };
}

export default function Page() {
  const t = useTranslations('HskMockTest');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <section>
        <h2 className='text-3xl font-medium'>{t('OnlineSimulator')}</h2>
        <div className='flex flex-wrap justify-center'>
          <React.Suspense fallback={<CardSkeleton height='xs' />}>
            <MockTestCardFetch />
          </React.Suspense>
        </div>
        <h2 className='text-3xl font-medium'>{t('DownloadBundles')}</h2>
        <div className='flex flex-wrap justify-center'>
          {MockTestBundles.map((bundle, index) => (
            <Card key={`bundle-${index}`} as='article' padding='3'>
              <h3 className='text-2xl font-medium text-center'>
                HSK {index + 1}
              </h3>
              <div className='flex flex-col'>
                {bundle.map((item) => (
                  <Button
                    key={item.filename}
                    type='yellow'
                    as='link'
                    href={item.url}
                    target='_self'
                  >
                    {item.title}
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
