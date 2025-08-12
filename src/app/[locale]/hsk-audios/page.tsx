import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';

export default function Page() {
  const t = useTranslations('HskAudios');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
    </>
  );
}
