'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/src/app/components/Button/Button';
import { routing } from '@/src/i18n/routing';

export default function NotFound() {
  const t = useTranslations('Common');
  const locale = useLocale();

  //localePrefix is as-needed, so the default locale lives at the root
  const homeHref = locale === routing.defaultLocale ? '/' : `/${locale}`;

  return (
    <section className='flex flex-col items-center justify-center gap-4 my-16 text-center'>
      <h2 className='text-2xl font-medium'>{t('NotFoundTitle')}</h2>
      <p className='text-lg'>{t('NotFoundMessage')}</p>
      <Button as='link' href={homeHref} type='yellow'>
        {t('NotFoundHome')}
      </Button>
    </section>
  );
}
