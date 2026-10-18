'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/src/app/components/Button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Common');

  return (
    <section className='flex flex-col items-center justify-center gap-4 my-16 text-center'>
      <h2 className='text-2xl font-medium'>{t('ErrorTitle')}</h2>
      <p className='text-lg'>{t('ErrorMessage')}</p>
      <Button type='yellow' onClick={reset}>
        {t('Retry')}
      </Button>
    </section>
  );
}
