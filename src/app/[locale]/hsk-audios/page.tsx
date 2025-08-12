import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';
import { Accordion } from 'radix-ui';

export default function Page() {
  const t = useTranslations('HskAudios');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <Accordion.Root type='single' defaultValue='' collapsible>
        <Accordion.Item value='item-1'></Accordion.Item>
      </Accordion.Root>
    </>
  );
}
