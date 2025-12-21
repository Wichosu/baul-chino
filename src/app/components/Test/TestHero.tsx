import React from 'react';
import { Hero } from '@/src/app/components/Hero';
import { getTranslations } from 'next-intl/server';

export async function TestHero() {
  const t = await getTranslations('Test.Hero');

  return (
    <>
      <Hero title={t('title')}>
        <span className='block'>{t('message')}</span>
        <span className='block my-4'>{t('message2')}</span>
        <span className='block'>{t('message3')}</span>
      </Hero>
    </>
  );
}
