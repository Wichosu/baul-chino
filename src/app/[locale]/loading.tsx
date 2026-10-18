import { getTranslations } from 'next-intl/server';

export default async function Loading() {
  const t = await getTranslations('Common');

  return (
    <div role='status' className='flex justify-center items-center min-h-[60vh]'>
      <p className='animate-pulse text-2xl font-medium'>{t('Loading')}</p>
    </div>
  );
}
