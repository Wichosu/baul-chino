'use client';

import { useTranslations } from 'next-intl';

export default function Loading() {
  const t = useTranslations('Common');

  return (
    <div role='status' className='flex justify-center items-center min-h-[60vh]'>
      <p className='animate-pulse text-2xl font-medium'>{t('Loading')}</p>
    </div>
  );
}
