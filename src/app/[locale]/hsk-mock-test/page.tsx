import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '../../components/Hero';
import Card from '../../components/Card';
import { Button } from '../../components/Button';

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
        <h2 className='text-3xl font-medium'>Online Simulator</h2>
        <div className='flex flex-wrap justify-center'>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
          <Card as='article' padding='3'>
            <h3 className='text-2xl font-medium text-center'>HSK 1</h3>
            <div className='flex flex-col'>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
              <Button type='yellow'>Mock Test H21329</Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
